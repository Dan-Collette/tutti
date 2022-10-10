<template>
<div><!-- Search For Song -->
      <form class="pt-4 pb-4">
        <div class="form-group row justify-content-center align-items-center">
          <label for="colFormLabelSm" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Search Library</label>
          <div class="col-sm-9 col-md-9 col-lg-9">
            <div class="input-group"><!-- Dynamic --><!-- Search through songs from spotify, filter through songs as user is typing -->
              <input type="text" class="form-control input-style" placeholder="Search Songs" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-primary cta-btn" type="button">Add Song <i class="bi bi-plus-lg p-1"></i></button><!-- Button will be used to submit choosen song -->
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="container d-flex flex-column"><!-- Selected Song Preview -->
        <div class="row">
          <!-- Album Cover -->
          <div class="col-sm-4 col-md-4 p-0 m-0">
            <!-- WILL NEED TO BE DYNAMICALLY CHANGED WITH CODE -->
            <!-- &lt;img :src=&quot;image&quot; class=&quot;cover&quot; alt=&quot;Album Cover&quot;&gt; -->
            <!-- <img src="/img/JimmyTest.9c3cfbc1.jpeg" class="cover img-responsive center-block d-block" alt="Album Cover" data-v-040ef000=""> -->
            <img class="cover img-responsive center-block d-block" src="../assets/images/boston.jpeg" alt="Placeholder Album Cover"/>
          </div>
          <!-- Song Info -->
          <div class="col-sm-8 col-md-8 p-0 pt-3 pt-sm-0">
            <div class="row flex-column">
              <div class="col-12">
                <h5>Song Title Goes Here</h5>
                <!-- Dynamic -->
                <h6 class="secondary-text-color">Album Name</h6>
                <!-- Dynamic -->
                <p class="secondary-text-color">Artist Name</p>
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
              <textarea class="form-control input-style" id="postCaption" rows="3" placeholder="Write Caption Here..." v-model="new_post.caption"></textarea>
            </div>
          </div>
        </form>
        <div class="row flex-row pt-2 justify-content-between">
          <div class="col-sm-5 align-items-lef pt-2 pb-2">
            <a href="/feed" class="btn btn-block btn-secondary cancel-btn">Cancel <i class="bi bi-x-lg p-1"></i></a>
          </div>
          <div class="col-sm-5 pt-2 pb-2">
            <button @click="newPost()" class="btn btn-block btn-primary cta-btn">Post Now <i class="bi bi-arrow-right p-1"></i></button>
            <!-- Submit post to firestore -->
          </div>
        </div>
      </div>
</template>


<script>
  export default {
    data() {
      return {
        new_post: {
          caption: "",
        }
      }
    },
    methods: {
        newPost: function() {
          db.collection("posts")
          .add({
            caption: this.new_post.caption,
          })
          .then(() => {
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
    border: 1px solid white;
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
  .form-control:focus {
    border-color: #CA0CF9;
    box-shadow: 0 0 0 0.2rem #c90cf900;
} 
  ::placeholder {
    color: #E1E1E1;
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