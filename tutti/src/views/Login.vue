<template>
  <div>
  <MainHeader/>
    <div class="login">
      <div class="container pb-5">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8">
            <h1>Please log in before proceeding.</h1>
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
</style>

