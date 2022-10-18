import auth from 'spotify-personal-auth'
import SpotifyWebApi from 'spotify-web-api-node'



// Configure auth module
auth.config({
    clientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
    clientSecret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET, 
    scope: [], // Replace with your array of needed Spotify scopes
    // path: '/path/to/a/tokens.json' // Optional path to file to save tokens
})

const api = new SpotifyWebApi()

export {api, auth}

// /* Get token promise, the token will refresh if this is called when it has expired,
//  * But you can get the refresh token if you would rather handle it
//  * It is resolve as an array containing the token and refresh as shown below
//  */
// auth.token().then(([token, refresh]) => {
//     // Sets api access and refresh token
//     api.setAccessToken(token)
//     api.setRefreshToken(refresh)

//     return api.getMyTopTracks()
// }).then(data =>
//     // Plays user's top tracks
//     api.play({
//         uris: data['body']['items'].map(item => item['uri'])
//     })
// ).catch(console.log)