<script setup>
import NewCard from "../components/NewCard.vue";
import MainHeader from "../components/MainHeader.vue";
</script>

<template>
  <MainHeader/>
  <div class="feed">
    <div class="container pb-5">
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
              music: doc.data().music,
              song: doc.data().song,
              cover: doc.data().cover,
              album: doc.data().album,
              artist: doc.data().artist,
              userPic: doc.data().userPic,
              username: doc.data().username,
              caption: doc.data().caption,
              timestamp: doc.data().timestamp,
              createdDate: doc.data().timestamp.toDate().toLocaleDateString(),
              createdTime: doc.data().timestamp.toDate().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              likes: doc.data().likes,
            })
/*             if (doc.data().cover = null) {
              
            } */
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

<style>
  .feed {
    margin: 0;
    margin-bottom: 8rem;
    padding: 0;
    
    width: 100%;
  }
</style>

