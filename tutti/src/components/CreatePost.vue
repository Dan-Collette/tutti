<template>
  <div> <!-- Search For Song -->
      <form class="pt-4 pb-4" @submit.prevent="searchTracks()">
        <div class="form-group row justify-content-center align-items-center">
          <label for="colFormLabelSm" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Search Songs</label>
          <div class="col-sm-9 col-md-9 col-lg-9">
            <div class="input-group"><!-- Dynamic --><!-- Search through songs from spotify, filter through songs as user is typing -->
              <input type="text" v-model="search" ref="searchInput" class="form-control input-style" placeholder="Search Songs" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button  class="btn btn-primary cta-btn" type="submit"><span class="search-btn-txt">Search</span><i class="bi bi-search p-1"></i></button><!-- Button will be used to submit choosen song -->
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="container d-flex flex-column"><!-- Selected Song Preview -->
        <!-- Search Results -->
        <!-- Dynamic Results  -->
        <div class="row flex-colunm pb-3"> 
          <div class="col p-0">
            <ol class="list-group" id="result-list">
              <li class="list-group-item" v-for="(item, index) in results" :key="index" @click="pickedTrack(item.id)">
                <div class="row">
                  <div class="col-3 col-sm-2">
                    <img style="width: 50px; height: 50px;" class="result-imgs img-responsive center-block d-block m-auto" :src="item.album.images[0].url" alt="Placeholder Album Cover"/>
                  </div>
                  <div class="col-7 col-sm-8 p-0">
                    <div>
                      <h5 style="font-size: 16px;">{{item.name}}</h5>
                    </div>
                    <div>
                      <h6 class="secondary-text-color m-0">{{item.album.name}}</h6>
                    </div>
                  </div>
                  <div class="col-2 col-sm-1 p-0 justify-content-center align-self-center">
                    <span class="bi bi-plus"></span>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div  class="row">
          <!-- Album Cover -->
          <div class="col-sm-4 col-md-4 p-0 m-0">
            <!-- WILL NEED TO BE DYNAMICALLY CHANGED WITH CODE -->
            <img :src="albumImg" class="cover img-responsive center-block d-block" alt="Placeholder Album Cover"/> <!-- {{postAlbumCover}} -->
          </div>
          <!-- Song Info -->
          <div class="col-sm-8 col-md-8 p-0 pt-3 pt-sm-0">
            <div class="row flex-column">
              <div class="col-12">
                <h5>{{trackPreview.name}}</h5> <!-- {{postSong}} -->
                <!-- Dynamic -->
                <h6 class="secondary-text-color"> {{albumPreview.name}} </h6> <!-- {{postAlbumTitle}} -->
                <!-- Dynamic -->
                 <p class="secondary-text-color"> {{artistPreview}}</p>
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
        results: [],
        trackPreview: [],
        albumPreview: [],
        albumImg: "",
        artistPreview: "",
        search: "",
        user: false,
        new_post: {
          cover: [],
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
          var that = this;
          console.log(this.search)
          api.searchTracks( this.search , {limit: 10}).then(function(data) {
          // Print some information about the results
          console.log('I got ' + data.body.tracks.total + ' results!');
          // Go through the first page of results
          that.results = data.body.tracks.items;
          console.log("Results", that.results)
          })
        },

        artistArrayToString(arr){
          let str = ''

          arr.forEach((item, index, arr) => {
            //  if last item don't use comma
            str += `${item.name}`
          })

          return str

        },


        pickedTrack: function(id) {
          api.getTrack(id).then(response => {
            this.trackPreview = response.body,
            this.albumPreview = this.trackPreview.album,
            this.artistPreview = this.artistArrayToString(this.trackPreview.artists),
            this.albumImg = this.albumPreview.images[0].url,
            this.music = this.trackPreview.preview_url,
            console.log(response.body)
          })
          .then(() => {
            
            var list = document.getElementById("result-list");
            list.classList.add("hidden");
          })
        },

        newPost: function() {
          db.collection("posts")
          .add({
            cover: this.albumImg,
            music: this.music,
            song: this.trackPreview.name,
            album: this.albumPreview.name,
            artist: this.artistPreview,
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
  .list-group-item:first-child {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  .list-group-item:last-child {
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  .result-imgs {
    border-radius: .25rem;
  }
  .hidden {
    display: none;
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