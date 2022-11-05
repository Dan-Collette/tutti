<template>
<div><!-- Search For Song -->
      <form class="pt-4 pb-4">
        <div class="form-group row justify-content-center align-items-center">
          <label for="colFormLabelSm" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Search Songs</label>
          <div class="col-sm-9 col-md-9 col-lg-9">
            <div class="input-group"><!-- Dynamic --><!-- Search through songs from spotify, filter through songs as user is typing -->
              <input type="text" v-model="search" ref="searchInput" class="form-control input-style" placeholder="Search Songs" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button @click="searchTracks()" class="btn btn-primary cta-btn" type="button"><span class="search-btn-txt">Search</span><i class="bi bi-search p-1"></i></button><!-- Button will be used to submit choosen song -->
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="container d-flex flex-column"><!-- Selected Song Preview -->
        <div class="row flex-colunm"> <!-- Search Results -->
          <div class="col p-0">
            <ul class="list-group">
              <li class="list-group-item" v-for="(track, index) in results" :key="index">
                <div class="row">
                  <div class="col-3 col-sm-2">
                    <img style="width: 50px; height: 50px;" class="img-responsive center-block d-block m-auto" src="../assets/images/boston.jpeg" alt="Placeholder Album Cover"/>
                  </div>
                  <div class="col-8 p-0">
                    <div>
                      <h5 style="font-size: 16px;">{{track.name}}</h5>
                    </div>
                    <div>
                      <h6 class="secondary-text-color m-0">{{track.album.name}}</h6>
                    </div>
                  </div>
                  <div class="col-1 p-0">
                    <span  class="bi bi-plus"></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div  class="row">
          <!-- Album Cover -->
          <div class="col-sm-4 col-md-4 p-0 m-0">
            <!-- WILL NEED TO BE DYNAMICALLY CHANGED WITH CODE -->
            <img class="cover img-responsive center-block d-block" src="../assets/images/boston.jpeg" alt="Placeholder Album Cover"/> <!-- {{postAlbumCover}} -->
          </div>
          <!-- Song Info -->
          <div class="col-sm-8 col-md-8 p-0 pt-3 pt-sm-0">
            <div class="row flex-column">
              <div class="col-12">
                <h5>Song Title Goes Here</h5> <!-- {{postSong}} -->
                <!-- Dynamic -->
                <h6 class="secondary-text-color">Album Name</h6> <!-- {{postAlbumTitle}} -->
                <!-- Dynamic -->
                <p class="secondary-text-color">Artist Name</p> <!-- {{postArtist}} -->
                <!-- Dynamic -->
              </div>
            </div>
          </div>
        </div>
        </div>
        <!-- Write A Caption -->
        <form>
          <div class="form-group row align-items-center pt-3">
            <label for="postCaption" class="col-sm-9 col-md-9 col-lg-9">Create Caption</label><!-- Dynamic -->
            <div class="col-sm-9 col-md-9 col-lg-8">
              <!-- Content from preview and textarea will be sent to firestore -->
              <textarea class="form-control input-style" id="postCaption" rows="3" placeholder="Write Caption Here..."  maxlength="200"  v-model="new_post.caption"></textarea>
            </div>
          </div>
        </form>
        <div class="row flex-row pt-2 justify-content-between">
          <div class="col-sm-5 align-items-lef pt-2 pb-2">
            <router-link to="/feed" class="btn btn-block btn-secondary cancel-btn">Cancel<i class="bi bi-x-lg p-1"></i></router-link>
          </div>
          <div class="col-sm-5 pt-2 pb-2">
            <button @click="newPost()" class="btn btn-block btn-primary cta-btn">Post Now <i class="bi bi-arrow-right p-1"></i></button>
            <!-- Submit post to firestore -->
          </div>
        </div>
      </div>
</template>


<script>

import { api, user } from "../spotify.js"
  export default {
    data() {
      return {
        results: "",
        search: "",
        user: false,
        new_post: {
          /* song: "Song Title",
          album: "Album Title",
          artist: "Artist Name",
          username: "Username", */
          caption: "",
          timestamp: new Date(),
        }
      }
    },
    async mounted(){
      await api.init()

      api.getMe().then(response =>{
        this.user = response.body
        console.log(response.body)
      })
    
      
    },
    methods: {
        searchTracks: function() {
          const inputValue = this.$refs.searchInput.value
          this.search = `${inputValue}`;
          console.log(this.search)

          api.searchTracks( this.search , {limit: 10}).then(function(data) {
      // Print some information about the results
      console.log('I got ' + data.body.tracks.total + ' results!');

       // Go through the first page of results
       var results = data.body.tracks.items;
      console.log('The tracks in the first page are (popularity in parentheses):');

      results.forEach(function(track, index) {
      
      console.log(index + ': ' + track.name + ': ' + track.album.name + ': ' + track.album.images[0].url + ': ' + track.id + ' (' + track.popularity + ')');
      });
      }).catch(function(err) {
      console.log('Something went wrong:', err.message);})
        },

        newPost: function() {
          db.collection("posts")
          .add({
            song: "Song Title",
            album: "Album Title",
            artist: "Artist Name",
            userPic: this.user?.images[0].url,
            username: this.user?.id,
            caption: this.new_post.caption,
            timestamp: this.new_post.timestamp,
            likes: [],
            likesNum: 0,
            postLiked: false,
          })
          .then(() => {
            this.$router.push('/feed');

          console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
        }
        
      },
      
      
  }
</script>

<style scoped>
  .cover {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 7.5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  label {
    font-family: futura-pt,sans-serif;
    font-weight: 500;
    font-style: normal;
    color: #FFFFFF;
  }
  p {
    color: #FFFFFF;
  }
  .cta-btn {
    background-color: #CA0CF9;
    border: 1px solid #CA0CF9;
  }
  .cancel-btn {
    border: 1px solid #E1E1E1;
    color: #E1E1E1;
    background-color: #FFFFFF00;
  }
  .secondary-text-color {
    color: #E1E1E1;
  }
  .btn {
    font-family: proxima-nova, sans-serif;
    font-weight: 500;
    font-style: normal;
  }
  .input-style {
    background-color: #1D1D1D;
    color: #FFFFFF;
  }
  .search-btn-txt {
    display: none;
  }
  .form-control:focus {
    border-color: #CA0CF9;
    box-shadow: 0 0 0 0.2rem #c90cf900;
} 
  ::placeholder {
    color: #E1E1E1;
  }
  .list-group-item {
    background-color: #1D1D1D;
    padding-top: 12px;
    padding-bottom: 12px;
    padding: 10px;
  }
  @media (min-width: 576px) {
    .search-btn-txt {
      display: contents;
    }
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