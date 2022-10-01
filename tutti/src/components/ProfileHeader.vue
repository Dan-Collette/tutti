<template>
<div class="pf-header">
  <div class="container d-flex flex-column">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8 col-xl-7">
        <div class="row">
          <div class="col-8 align-middle my-auto">
            <h6 class="mb-0">Username</h6>
            <!-- Dynamic -->
          </div>
          <div class="col-4 d-flex justify-content-end my-auto">
            <button class="btn btn-style bi bi-door-open-fill p-0"></button>
          </div>
        </div>
        <div class="row flex-column flex-sm-row align-items-center pt-2">
          <div class="col-md-2">
            <div class="row">
              <div class="col-12 pt-1 pb-2 pb-sm-4">
                <div class="pfp-img m-auto m-0-sm">
                </div>
                <!-- Dynamic -->
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8 pt-1 pb-1">
            <div class="row text-center pt-0 justify-content-center justify-content-md-start align-items-center">
              <div class="col-4 col-md-3">
                <p class="m-0 p-0 font-weight-bold">1</p>
                <!-- Dynamic -->
                <p class="m-0 p-0">Posts</p>
              </div>
              <div class="col-4 col-md-3">
                <p class="m-0 p-0 font-weight-bold">123</p>
                <!-- Dynamic -->
                <p class="m-0 p-0">Followers</p>
              </div>
              <div class="col-4 col-md-3">
                <p class="m-0 p-0 font-weight-bold">1234</p>
                <!-- Dynamic -->
                <p class="m-0 p-0">Following</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-2">
          <div class="col-12">
            <h6> Firstname Lastname <!-- Dynamic --></h6>
            <p> Short Bio Lorem ipsum dolor sit amet consectetur, adipisicing elit. <!-- Dynamic --></p>
          </div>
          <div class="col-sm-6">
            <button class="btn btn-block mb-4">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

</script>

<style scoped> 
  .pf-header {
    background-color: /* #063851 */ black;
  
    color: white;
  }
  .pfp-img {
    background-color: rgb(236, 47, 236);
    height: 50px;
    width: 50px;
    border-radius: 50px;
  }
  .btn-style {
    background: none;
    color: white;
    font-size: 25px;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  .pfp-img {
    height: 75px;
    width: 75px;
    border-radius: 50px;
  }
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  
</style>
