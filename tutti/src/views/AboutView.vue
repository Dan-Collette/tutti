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
  export default {
    data() {
      return {
        posts: [],
      }
    },
    methods: {
      getPosts: function () {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((quearySnapshot) => {
          this.posts = [];
          quearySnapshot.forEach((doc) => {
            this.posts.push({
              id: doc.id,
              song: doc.data().song,
              album: doc.data().album,
              artist: doc.data().artist,
              username: doc.data().username,
              caption: doc.data().caption,
              timestamp: doc.data().timestamp,
              createdDate: doc.data().timestamp.toDate().toLocaleDateString(),
              createdTime: doc.data().timestamp.toDate().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              likes: doc.data().likes,
            })
          })
        })
      }
    },
    mounted(){
      this.getPosts();
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
