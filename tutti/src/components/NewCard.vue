<template>
  <div class="card">
    <div class="card-body">
    <div class="container d-flex flex-column">
      <div class="row">
        <!-- Album Cover -->
        <div class="col-sm-5 col-md-4 p-0">
          <!-- WILL NEED TO BE DYNAMICALLY CHANGED WITH CODE -->
          <!-- &lt;img :src=&quot;image&quot; class=&quot;cover&quot; alt=&quot;Album Cover&quot;&gt; -->
          <!-- <img src="/img/JimmyTest.9c3cfbc1.jpeg" class="cover img-responsive center-block d-block" alt="Album Cover" data-v-040ef000=""> -->
          <img :src="post.cover" class="cover img-responsive center-block d-block" alt="Placeholder Album Cover">
        </div>
        <!-- Song Info -->
        <div class="col-sm-7 col-md-8 p-0 pt-3 pt-sm-0">
          <div class="row flex-column">
            <div class="col-12 p-0">
               <audio controls id="song">
                <source :src="post.music">
              </audio>
             <!--  <div class="audio-player mb-5">
                <div class="row">
                  <div class="col-6 text-left currentTime">
                    current time
                  </div>
                  <div class="col-6 text-right durationTime">
                    total time
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="timeline text-center">
                      <input
                        type="range"
                        id="progress-bar"
                        min="0"
                        max=""
                        value="0"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col text-center mt-4">
                    <button><span>p/p</span></button>
                  </div>
                </div>
              </div> -->

             <!--  <p class="text-center secondary-text-color">Web playback buttons</p> -->
            </div>
            <div class="col-12">
              <h5>{{ post.song }}</h5>
              <!-- Dynamic -->
              <h6 class="secondary-text-color">{{ post.album }} </h6>
              <!-- Dynamic -->
              <p class="secondary-text-color">{{ post.artist }} </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row pt-3">
        <!-- Username and Caption -->
        <div class="col-12">
          <div class="row flex-row">
           <!--  <div class="pfp-img align-self-center m-auto m-0-sm">
              <img class="spotify-img" :src="post.profilePic" alt="User Profile Image">
            </div> -->
            <div class="pfp-img align-self-center">
            <img class="spotify-img" alt="User Profile Image"
            :src="post.userPic"
            > 
            </div>
            <h6 class="card-title m-0 align-self-center pl-2">{{ post.username }}</h6>
          </div>
          <div class="row pt-2 pb-3">
            <p class="card-text pt-2">{{ post.caption }}<!-- Some quick example text to build on the card title and make up the bulk of the card's content --></p>
          </div>
        </div>
        <div class="col-6 p-0">
          <!-- Like --><!-- Will need to change state based on firestore data -->
           <!-- Only show if we have a valid spotifyID for this track  -->
          <button v-if="post.spotifyID" @click="addTrackToLibrary(post.spotifyID)" class="bi bi-plus-circle-fill post-icon pr-2"></button> 
           <!-- 
           <button class="bi bi-plus-circle-fill post-icon p-0 add-track"></button> -->
        </div>
        <div class="col-6 p-0 d-flex justify-content-end">
          <p class="mb-0 pr-2 dt">{{post.createdDate}}</p>
          <p class="mb-0 pl-2 dt">{{post.createdTime}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import { api, user } from "../spotify.js"
  export default {
    props: ['post'],
    data() {
      return {
        
      }
    },
    async mounted(){
      await api.init()
      // console.log(this.post)
    },
    
     methods: {
    addTrackToLibrary(musicId) {
      // // Don't use
      // var userID = this.user?.id;
      // var musicId = this.post.id.musicId;

      // const endpoint = 'https://api.spotify.com/v1/me/tracks';
      // const headers = { Authorization: `${userID}` };
      // const data = { ids: [musicId] };

      // fetch(endpoint, {
      //   method: 'PUT',
      //   headers: headers,
      //   body: JSON.stringify(data)
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log('Track added to library:', data);
      //   })
      //   .catch(error => {
      //     console.error('Error adding track to library:', error);
      //   });

      // Use the API lib instead: https://github.com/thelinmichael/spotify-web-api-node
      console.log(musicId)
      api.addToMySavedTracks([musicId]).then(data =>{
        console.log("Track Saved!")
      }).catch(error =>{
        console.log(error)
      })
    }
  },
/*     methods: {

      addToMySavedTracks: function(user, id) {
        var id = post.id;

        console.log("clicked")
      return WebApiRequest.builder(this.getAccessToken())
      .withPath('/v1/me/tracks')
      .withHeaders({ 'Content-Type': 'application/json' })
      .withBodyParameters({ ids: this.musicId })
      .build()
      .execute(HttpManager.put, user);
      },

        addToLibrary: function(user, id) {
        
        this.addToMySavedTracks( this.musicId );
        console.log( "Hello?" );
       } 
    }, */
    /* async mounted(){
      await api.init()

        this.user = response.body
        console.log(response.body)
      })
    
      
    },
    mounted: {
      
        // firebase get posts
        // ....

        // this.posts = results
    }, */
  }
</script>

<style scoped>
.card {
  border: none;
  border-bottom: 1px solid #2D2D2D;
  background-color: #FFFFFF00;
  border-radius: 0px;
}
.cover {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 7.5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.pfp-img {
  height: 25px;
  width: 25px;
}
.spotify-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.card-title {
  font-family: proxima-nova, sans-serif;
  font-weight: 500;
  font-style: normal;
}
p {
  color: #FFFFFF;
}
.secondary-text-color {
  color: #E1E1E1;
}
.post-icon {
  background-color: #FFFFFF00;
  border: none;
  font-size: 22px;
  color: #FFFFFF;
}
.dt {
  font-size: 12px!important;
  align-self: center;
}
.add-track {
  color: #E1E1E1;
  border: none;
}
.add-track:active {
  color: #CA0CF9;
  border: none;
}
.add-track:focus {
  color: #CA0CF9;
  border: none;
}
.add-track:after {
  color: #CA0CF9;
  border: none;
}
@media (min-width: 576px) {
  .cover {
    width: 150px;
    height: 150px;
    margin: 0.1px;
  }
}
@media (min-width: 768px) {
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}
</style>