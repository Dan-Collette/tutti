<template>
  <div>
  <MainHeader/>
    <div class="login">
      <div class="container d-flex justify-content-center">
        <div class="row justify-content-center">
          <div class="col-12">
            <h1 class="pb-3 text-center">Please log in before proceeding.</h1>
            <SpotifyButton></SpotifyButton>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>
<script>
import MainHeader from '../components/MainHeader.vue'
import SpotifyButton from '../components/SpotifyButton.vue';
import { api, user } from "../spotify.js"

  export default {
    components: {
      MainHeader,
      SpotifyButton
    },
    data() {
      return {
        posts: [],
      }
    },
    methods: {
    },
    mounted(){

    }
  }
</script>

<style>
.login {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

