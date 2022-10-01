<template>
<div class="container d-flex justify-content-center">
  <div class="row flex-colunm justify-content-center">
    <div class="col-lg-8"><div class="card mt-5" >
      <div class="card-body">
        <div class="container d-flex flex-column">
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
                  <p class="text-center">Web playback buttons</p>
                </div>
                <div class="col-12">
                  <h5>Song Title Goes Here</h5>
                  <!-- Dynamic -->
                  <h6>Artist Name</h6>
                  <!-- Dynamic -->
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-3">
            <!-- Username and Caption -->
            <div class="col-12">
              <div class="row flex-row pb-3">
                <div class="pfp-img align-self-center"></div>
                <h6 class="card-titled m-0 align-self-center pl-2">Username</h6>
                <!-- Dynamic -->
                <!-- Dynamic -->
                <p class="card-text pt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="col-8 p-0">
              <!-- Like --><!-- Will need to change state based on firestore data -->
              <button class="bi bi-heart post-icon pr-2"></button>
              <!-- Comment -->
              <!-- <button type="button" class="bi bi-chat-left-heart-fill post-icon pl-2 pr-2" data-toggle="modal" data-target="#commentModal"></button> -->
            </div>
            <div class="col-4 p-0 d-flex justify-content-end"><!-- Share --><button type="button" class="bi bi-share-fill post-icon pl-2 pr-2" data-toggle="modal" data-target="#exampleModalCenter"></button>
            </div>
          </div>
        </div>
      </div>
    </div><!-- Comments Modal -->
    </div>
  </div>
</div>
</template>

<script>

</script>

<style>
.card {
  background-color: grey;
}
.pfp-img {
  background-color: rgb(236, 47, 236);
  height: 25px;
  width: 25px;
  border-radius: 50px;
}
</style>