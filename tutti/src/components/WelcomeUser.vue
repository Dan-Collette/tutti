<template>
  <div class="welcome-landing mt-5">
    <div class="col mb-5">
      <div class="pb-3">
        <div class="pfp-img m-auto m-0-sm" v-if="user">
          <img class="spotify-img" :src="user?.images[0].url" alt="User Profile Image">
        </div>
      </div>
      <div class="text-center">
        <h1 v-if="user">Welcome, {{user?.display_name}}</h1>
        <h2>Thanks For Joining Tutti!</h2>
      </div>
    </div>

   <!--  <form class="justify-content-center">
      <div>
        <h3>Profile Information</h3>
      </div>
      <div class="form-row">
        <div class="form-group col-sm-12 col-lg-8">
          <label for="user-bio">Bio</label>
          <textarea class="form-control" id="user-bio"  maxlength="75" rows="2" placeholder="Write description here" aria-describedby="helpId" v-model="new_user.bio"></textarea>
        </div>
      </div>
    </form>
    <div class="col-sm-6 p-0 pr-sm-3 pl-0">
      <button @submit="new_user()" class="btn btn-block btn-secondary skip-btn text-center">Update Profile<i class="bi bi-cloud-arrow-up-fill p-1"></i></button>
    </div>
    <br> -->
    <hr>
    <div class="row flex-row pt-2 justify-content-center">
      <div class="col-sm-6 align-items-lef pt-3">
        <RouterLink to="/info" class="btn btn-block btn-primary cta-btn  text-center">Tutorial<i class="bi bi-info-circle p-1"></i></RouterLink>
      </div>
      <div class="col-sm-6 align-items-lef pt-3 pb-5">
        <router-link to="/feed" class="btn btn-block btn-secondary skip-btn text-center">View Feed<i class="bi bi-arrow-right p-1"></i></router-link>
      </div>
      <!-- <div class="col-sm-5 pt-2 pb-2">
        <button @click="newUser()" class="btn btn-block btn-primary cta-btn text-center">Update Profile<i class="bi bi-cloud-arrow-up-fill p-1"></i></button>
      </div> -->
    </div>
  </div>
  
</template>

<script>
import { api, user } from "../spotify.js"
export default {
    name: 'WelcomeUser',
    
    data() {
      return {
        user: false,
        new_user: {
          bio: "",
        }
      }
    },
    async mounted(){
      await api.init()
      
      // http://michaelthelin.se/spotify-web-api-node/#getMe
        api.getMe().then(response =>{
        this.user = response.body;
        console.log(response.body);
        
      })
    },
     /* methods: {
      newUser: function() {
        db.collection("users").doc(this.user?.id)
        .add({
          profilePic: this.user?.images[0].url,
          username: this.user?.id,
          fullName: this.user?.display_name,
          bio: this.new_user.bio,
        })
      }
    },  */
  }
</script>

<style scoped>
hr {
  border-color: #f2f2f2;
  opacity: 25%;
}
h1 {
  font-size: 32px;
}
h2 {
  font-size: 22px;
  font-family: proxima-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
}
h3 {
  font-size: 22px;
}
p {
  font-size: 18px;
  color: #fff;
}
.welcome-landing {
  margin-bottom: 3rem;
}
.pfp-img {
  height: 125px;
  width: 125px;
  border-radius: 50%;
}
.spotify-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.cta-btn {
  background-color: #CA0CF9;
  border: 1px solid #CA0CF9;
  font-family: proxima-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
}
.skip-btn {
  background-color: #c90cf900;
  border: 1px solid #fff;
  font-family: proxima-nova, sans-serif;
  font-weight: 400;
  font-style: normal
}
.modal-content {
  background-color: #1D1D1D;
}
.modal-footer {
  border-top: 1px solid #f2f2f239;
}


@media (min-width: 768px) {
}
</style>
