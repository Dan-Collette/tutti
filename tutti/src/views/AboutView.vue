<template>
  <MainHeader/>
  <div class="about">
    <ProfileHeader/>
    <div class="container justify-content-center">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8">
          <template  v-for="post in posts">
            <NewCard :post="post"/>
          </template>
        </div>
      </div>  
    </div>
  </div>
</template>
<script>
import { api, user } from "../spotify.js"
  export default {
    data() {
      return {
        posts: [],
      }
    },
    methods: {
      getUserPosts: function() {
        /* need to get posts by user?.id  */
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((querySnapshot) => {
            this.posts = []
            querySnapshot.forEach((doc) =>
            this.posts.push({
              id: doc.id,
              song: doc.data().song,
              album: doc.data().album,
              artist: doc.data().artist,
              username: doc.data().username,
              userPic: doc.data().userPic,
              caption: doc.data().caption,
              timestamp: doc.data().timestamp,
              createdDate: doc.data().timestamp.toDate().toLocaleDateString(),
              createdTime: doc.data().timestamp.toDate().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              likes: doc.data().likes,
            }))
        })
      },
    },
    mounted(){
      this.getUserPosts();
      /* this.getPosts(); */
        // firebase get posts
        // ....

        // this.posts = results
    }
  }
</script>
<script setup>
import ProfileHeader from '../components/ProfileHeader.vue';
import MainHeader from '../components/MainHeader.vue'
import NewCard from '../components/NewCard.vue'

</script>
