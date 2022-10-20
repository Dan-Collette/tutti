import localforage from 'localforage'
import SpotifyWebApi from 'spotify-web-api-node'



let user = {
    token: await localforage.getItem('token') || null,
    isAuthenticated: function(){
        return this.token !== null
    }
}

const api = new SpotifyWebApi()

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