const functions = require("firebase-functions");
var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = functions.config().spotify.client_id; // Your client id
var client_secret = functions.config().spotify.client_secret; // Your secret
var redirect_uri = functions.config().spotify.redirect_uri; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function (length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

var stateKey = 'spotify_auth_state';

var app = express();


app.use(express.static(__dirname + '/public'))
    .use(cors())
    .use(cookieParser());

app.use(function (req, res, next) {

    let emulator = Boolean(process.env.FUNCTIONS_EMULATOR),
        region = 'us-central1',
        project = process.env.GCLOUD_PROJECT,
        name = process.env.FUNCTION_TARGET

    req.self = function () {
        if(emulator){
            return `http://${req.get('host')}/${project}/${region}/${name}`
        }else{
            return `https://${region}-${project}.cloudfunctions.net/${name}`
        }
    }

    req.appUrl = function () {
        if (emulator) {
            return 'http://localhost:5173/'
        } else {
            return 'https://tutti-7760e.web.app/'
        }
    }    
    return next();
});

app.get('/', function(req, res) {
    res.send([req.self(), process.env])
})

app.get('/login', function (req, res) {


    var state = generateRandomString(16);
    console.log(stateKey, state)
    res.cookie(stateKey, state);

    // your application requests authorization
    var scope = 'user-library-modify';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            'scope': scope,
            redirect_uri: `${req.self()}/callback`,
            state: state
        }));
});

app.get('/callback', function (req, res) {

    // your application requests refresh and access tokens
    // after checking the state parameter

    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        res.redirect('/#' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        res.clearCookie(stateKey);
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: `${req.self()}/callback`,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
        };



        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {

                var access_token = body.access_token,
                    refresh_token = body.refresh_token;

                var options = {
                    url: 'https://api.spotify.com/v1/me',
                    headers: { 'Authorization': 'Bearer ' + access_token },
                    json: true
                };

                // use the access token to access the Spotify Web API
                request.get(options, function (error, response, body) {
                    console.log(body);
                });

                // we can also pass the token to the browser to make requests from there
                res.redirect(`${req.appUrl()}handleLogin?` +
                    querystring.stringify({
                        access_token: access_token,
                        refresh_token: refresh_token
                    }));
            } else {
                res.send({
                    error,
                    body
                })
                // res.redirect('/#' +
                //     querystring.stringify({
                //         error: 'invalid_token',
                //         error
                //     }));
            }
        });
    }
});

app.get('/refresh_token', function (req, res) {

    // requesting access token from refresh token
    var refresh_token = req.query.refresh_token;
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: { 'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')) },
        form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        },
        json: true
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var access_token = body.access_token;
            res.send({
                'access_token': access_token
            });
        }else{
            res.send({
                error,
                'code': response.statusCode
            })
        }
    });
});

// Expose Express API as a single Cloud Function:
exports.spotify = functions.https.onRequest(app);