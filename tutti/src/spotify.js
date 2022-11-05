import localforage from "localforage";
import SpotifyWebApi from "spotify-web-api-node";

const api = new SpotifyWebApi();

let user = {
  getToken: async function () {
    return (await localforage.getItem("access_token")) || null;
  },
  getExpires: async function () {
    return (await localforage.getItem("expires_in")) || null;
  },
  isAuthenticated: async function () {
    return (await this.getToken()) !== null;
  },
  setToken: async function (token) {
    console.log("setting token", token);
    return await localforage.setItem("access_token", token);
  },
  setExpires: async function (expires) {
    return await localforage.setItem("expires_in", expires);
  },
};

api.init = async function () {
  api.setAccessToken(await user.getToken());
};

export { api, user };

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
