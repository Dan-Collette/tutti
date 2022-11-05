<template>
  <div class="welcome-landing">
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
    <form>
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
    <div class="row flex-row pt-2 justify-content-between">
      <div class="col-sm-5 align-items-lef pt-2 pb-2">
        <router-link to="/feed" class="btn btn-block btn-secondary skip-btn text-center">Skip To Feed<i class="bi bi-arrow-right p-1"></i></router-link>
      </div>
      <div class="col-sm-5 pt-2 pb-2">
        <button @click="newUser()" class="btn btn-block btn-primary cta-btn text-center">Update Profile<i class="bi bi-cloud-arrow-up-fill p-1"></i></button>
        <!-- Submit post to firestore -->
      </div>
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
        this.user = response.body
        console.log(response.body)
        
      })
    },
    methods: {
      newUser: function() {
        db.collection("users").doc(this.user?.id)
        .set({
          profilePic: this.user?.images[0].url,
          username: this.user?.id,
          fullName: this.user?.display_name,
          bio: this.new_user.bio,
        })
        .then(() => {
          this.$router.push('/feed');
        })
      }
    },
  }
</script>

<style scoped>
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
.welcome-landing {
  margin-bottom: 3rem;
}
.pfp-img {
  background-color: aqua;
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
</style>
