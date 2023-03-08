<template>
  <div class="info">
    <div class="container mt-5 mb-5 pb-5">
      <div class="row justify-content-center mb-5">
        <div class="col">
          <h1 class="info-title">Credits</h1>
          <p class="cretit-text">Submitted in partial fulfillment of the requirements for the degree of Bachelor of Fine Arts in Digital Media and Design at the University of Connecticut, Storrs, Connecticut.</p>
          <p class="cretit-text">Special thanks to my family and friends for all of their support throughout this process. </p>
          <div class="row flex-column-reverse flex-md-row">
            <div class="col-sm-6">
              <h5 class="cretit-text">Project Artist</h5>
              <p class="cretit-text">Dan Collette</p>
            </div>
            <div class="col-sm-6">
              <h5 class="cretit-text">Senior Project Advisor</h5>
              <p class="cretit-text">Brian Daley</p>
            </div>        
          </div>
          <p class="cretit-text">Copyright 2023</p>
        </div>
      </div>
      <!--   <div class="row flex-row pt-2 justify-content-center">
        <div class="col-sm-5 align-items-lef pt-3">
          <a href="#tutorial" class="btn btn-block btn-primary cta-btn  text-center"> View Tutorial</a>
        </div>
      </div> -->
      <section class="pb-5 mb-5" id="tutorial">
        <h2 class="info-title">Tutorial</h2>
        <div class="row flex-column flex-md-row mb-5 pt-2">
          <div class="col pb-3">
            <h3>Search For Songs</h3>
          </div>
          <div class="col">
            <div class="row justify-content-center">
              <video autoplay loop>
                <source src="../assets/images/create-post.mp4" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
        <hr>
        <div class="row flex-column flex-md-row mt-5">
          <div class="col pb-3">
            <h3>Listen And Add Tracks To Your Library</h3>
          </div>
          <div class="col">
            <div class="row justify-content-center">
              <video autoplay loop>
                <source src="../assets/images/addToLib.mp4" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  
</template>

<script>
import { api, user } from "../spotify.js"
export default {
  data() {
    return {

    }
  },
}
</script>

<style scoped>
hr {
  border-color: #f2f2f2;
  opacity: 25%;
}
h1 {
  font-size: 42px;
}
.info-title {
  color: #CA0CF9;
}
video {
  width: 300px;
  height: auto;
}
@media (min-width: 576px) {
  video {
    width: 100%;
    height: auto;
  }
}
@media (min-width: 992px) {
video {
  width: auto;
  height: 50%;
}
}
</style>