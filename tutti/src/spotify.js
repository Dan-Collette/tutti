import localforage from 'localforage'
import SpotifyWebApi from 'spotify-web-api-node'

let user = {
    access_token: await localforage.getItem('access_token') || null,
    token_type: await localforage.getItem('token_type') || null,
    expires_in: await localforage.getItem('expires_in') || null,
    state: await localforage.getItem('state') || null,
    isAuthenticated: function(){
        return this.access_token !== null
    },
    setToken: async function(token){
        this.access_token = token
        return await localforage.setItem('access_token', token )
    },
    setExpires: async function (expires) {
        this.expires_in = expires
        return await localforage.setItem('expires_in', expires)
    },
}

const api = new SpotifyWebApi()

if(user.isAuthenticated()){
    api.setAccessToken(user.access_token)
}

export {api, user}

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