<template>
<div class="pf-header">
  <div class="container d-flex flex-column pb-3">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8 col-xl-8">
        <div class="row pt-3 pb-2">
          <div class="col-10 align-middle my-auto ">
            <div class="row flex-row pl-3">
              <div class="pfp-img" v-if="user">
                <img class="spotify-img" :src="user?.images[0].url" alt="User Profile Image">
              </div>
              <div class="col my-auto">
                <h5 class="pl-3" v-if="user"> {{ user?.display_name}}</h5>
              <p class="secondary-text-color pl-3 m-0" > {{bio}} </p>
              </div>
            </div>
          </div>
          <div class="col-2 d-flex justify-content-end my-auto">
            <RouterLink to="/callback" class="logout bi bi-door-open-fill p-0"></RouterLink>
          </div>
        </div>
        <!-- <div class="row flex-column flex-sm-row align-items-center pt-2">
          <div class="col-md-2">
            <div class="row pt-2 pb-2">
              <div class="col-12 pb-2 pb-sm-0">
                <div class="pfp-img m-auto m-0-sm" v-if="user">
                  <img class="spotify-img" :src="user?.images[0].url" alt="User Profile Image">
                </div>
                
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8 pt-1 pb-1">
            <div class="row text-center pt-0 justify-content-center justify-content-md-start align-items-center">
              <div class="col-4 col-md-3">
                <p class="m-0 p-0 font-weight-bold">1</p>
                
                <p class="m-0 p-0 secondary-text-color">Posts</p>
              </div>
              <div class="col-4 col-md-3">
                <p class="m-0 p-0 font-weight-bold" v-if="user"> {{ user?.followers.total }}</p>
               
                <p class="m-0 p-0 secondary-text-color">Followers</p>
              </div> -->
              <!-- <div class="col-4 col-md-3">
                <p class="m-0 p-0 font-weight-bold">1234</p>
               
                <p class="m-0 p-0 secondary-text-color">Following</p>
              </div> -->
           <!--  </div>
          </div>
        </div>
        <div class="row pt-2">
          <div class="col-12 pb-2">
            <h5 v-if="user"> {{ user?.display_name}}</h5>
             <p class="secondary-text-color"> {{bio}} </p>
          </div> -->
          <!-- <div class="col-sm-6">
            <button class="btn btn-block btn-primary mb-4 cta-btn">Edit Profile <i class="bi bi-pencil-square p-1"></i></button>
          </div> 
        </div>-->
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { api, user } from "../spotify.js"
export default {
    name: 'ProfileHeader',
    data() {
      return {
        user: false,
        bio: "",
      }
    },
    async mounted(){
      
      await api.init()
      
      // http://michaelthelin.se/spotify-web-api-node/#getMe
      api.getMe().then(response =>{
        this.user = response.body
        console.log(response.body)
        this.getProfileInfo(user);
      })
/*       api.getFollowedArtists().then(response => {
        this.user = response.body
        console.log(response.body)
      }) */
    /* this.getProfileInfo(user); */
    },
    methods: {
      getProfileInfo: function() {
        var userRef = db.collection("users").doc(`${this.user?.id}`)
        userRef.get().then((doc) => {
          this.bio = doc.data().bio
        })
      },
      
    },
  }
</script>

<style scoped>
.logout {
  color: #E1E1E1;
  font-size: 24px;
}
.secondary-text-color {
    color: #E1E1E1;
  }
  .pf-header {
    background-color: #1D1D1D;
    color: white;
  }
  .pfp-img {
    
    height: 50px;
    width: 50px;
    border-radius: 50px;
  }
  .pfp-img > .spotify-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .btn-style {
    background: none;
    color: white;
    font-size: 25px;
  }
  .cta-btn {
    background-color: #CA0CF9;
    border: 1px solid #CA0CF9;
    font-family: proxima-nova, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  .pfp-img {
    height: 75px;
    width: 75px;
    border-radius: 50px;
  }
  .spotify-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }

  .pfp-img img {
  width: 75px;
  height: 75px;
  border-radius: 100%;
  }
</style>
