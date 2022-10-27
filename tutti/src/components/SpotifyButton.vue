<template>
  <button @click="startAuth">{{ text }}</button>
</template>


<script>

  export default {
    name: 'SpotifyButton',
    props: {
      text: {
        type: String,
        default: 'Login with Spotify'
      }
    },

    data() {
      return {
      }
    },
    methods: {
      startAuth(){

        // Using Implicit Grant
        // @url https://developer.spotify.com/documentation/general/guides/authorization/implicit-grant/
        let authURL = new URL('https://accounts.spotify.com/authorize')

        authURL.searchParams.set('client_id', import.meta.env.VITE_SPOTIFY_CLIENT_ID);
        authURL.searchParams.set('response_type', 'token'); 
        authURL.searchParams.set('redirect_uri', `${window.location.origin}/callback`);

        // Gooooooo.....
        window.location.assign(authURL)
      }
    },
  }
</script>

<style scoped>
/* Pulled from https://accounts.spotify.com/en/status */
button {
  border: none;
  background-color: #1ed760;
  color: black;
  min-width: 250px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 500px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  padding: 14px 32px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}

button:hover {
  background-color: #1fdf64
}
</style>