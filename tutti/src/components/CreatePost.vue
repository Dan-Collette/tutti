<template>
<div><!-- Search For Song -->
      <form class="pt-4 pb-4">
        <div class="form-group row justify-content-center align-items-center">
          <label for="colFormLabelSm" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Search Library</label>
          <div class="col-sm-9 col-md-9 col-lg-9">
            <div class="input-group"><!-- Dynamic --><!-- Search through songs from spotify, filter through songs as user is typing -->
              <input type="text" class="form-control" placeholder="Search Songs" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">Add Song</button><!-- Button will be used to submit choosen song -->
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="container d-flex flex-column"><!-- Selected Song Preview -->
        <div class="row">
          <!-- Album Cover -->
          <div class="col-sm-4 col-md-3 p-0 m-0">
            <!-- WILL NEED TO BE DYNAMICALLY CHANGED WITH CODE -->
            <!-- &lt;img :src=&quot;image&quot; class=&quot;cover&quot; alt=&quot;Album Cover&quot;&gt; -->
            <!-- <img src="/img/JimmyTest.9c3cfbc1.jpeg" class="cover img-responsive center-block d-block" alt="Album Cover" data-v-040ef000=""> -->
          </div>
          <!-- Song Info -->
          <div class="col-sm-8 col-md-8 p-0 pt-3 pt-sm-0">
            <div class="row flex-column">
              <div class="col-12">
                <h5>Song Title Goes Here</h5>
                <!-- Dynamic -->
                <h6>Album Name</h6>
                <!-- Dynamic -->
                <p>Artist Name</p>
                <!-- Dynamic -->
              </div>
            </div>
          </div>
        </div>
        </div>
        <!-- Write A Caption -->
        <form>
          <div class="form-group row align-items-center">
            <label for="postCaption">Create Caption</label><!-- Dynamic -->
            <!-- Content from preview and textarea will be sent to firestore -->
            <textarea class="form-control" id="postCaption" rows="3" placeholder="Write Caption Here..."></textarea>
          </div>
        </form>
        <div class="row flex-row pt-2 justify-content-between">
          <div class="col-sm-5 align-items-lef p-0 pt-2 pb-2">
            <a href="#/" class="btn btn-block btn-secondary">Cancel</a>
          </div>
          <div class="col-sm-5 p-0 pt-2 pb-2">
            <button class="btn btn-block btn-primary">Post Now</button>
            <!-- Submit post to firestore -->
          </div>
        </div>
      </div>
</template>

<style>
  .cover {
    width: 150px;
    height: 150px;
    border-radius: 7.5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  @media (min-width: 768px) {
  .cover {
    width: 175px;
    height: 175px;
  }
  }
</style>