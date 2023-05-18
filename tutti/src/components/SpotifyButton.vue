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
        uuid: self.crypto.randomUUID()
      }
    },
    methods: {
      startAuth(){

        // // Using Implicit Grant
        // // @url https://developer.spotify.com/documentation/general/guides/authorization/implicit-grant/
        // let authURL = new URL('https://accounts.spotify.com/authorize')

        // authURL.searchParams.set('client_id', process.env.VITE_SPOTIFY_CLIENT_ID);
        // authURL.searchParams.set('response_type', 'token'); 
        // authURL.searchParams.set('redirect_uri', `${window.location.origin}/callback`);
        
        // // https://developer.spotify.com/documentation/general/guides/authorization/scopes/
        // authURL.searchParams.set('scope', "user-library-modify");

        // // This should be stored locally and checked upon redirect for CSRF
        // authURL.searchParams.set('state', this.uuid);

        // // Gooooooo.....
        // console.log(authURL)
        const authURL = (import.meta.env.DEV) ?
          'http://127.0.0.1:5001/tutti-7760e/us-central1/spotify/login' :
          'https://us-central1-tutti-7760e.cloudfunctions.net/spotify/login'
        
        window.location.assign(authURL)
      }
    },
    mounted(){
      console.log(import.meta.env.DEV)
      localStorage.setItem('uuid', this.uuid)
    }
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
  text-align: center;
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
  margin: 0 auto;
}

button:hover {
  background-color: #1fdf64
}
</style>