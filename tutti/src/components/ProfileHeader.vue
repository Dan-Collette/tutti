<template>
<div class="pf-header">
  <div class="container d-flex flex-column">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8 col-xl-8">
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
                <p class="m-0 p-0 secondary-text-color">Posts</p>
              </div>
              <div class="col-4 col-md-3">
                <p class="m-0 p-0 font-weight-bold">123</p>
                <!-- Dynamic -->
                <p class="m-0 p-0 secondary-text-color">Followers</p>
              </div>
              <div class="col-4 col-md-3">
                <p class="m-0 p-0 font-weight-bold">1234</p>
                <!-- Dynamic -->
                <p class="m-0 p-0 secondary-text-color">Following</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-2">
          <div class="col-12">
            <h6> Firstname Lastname <!-- Dynamic --></h6>
            <p class="secondary-text-color"> Short Bio Lorem ipsum dolor sit amet consectetur, adipisicing elit. <!-- Dynamic --></p>
          </div>
          <div class="col-sm-6">
            <button class="btn btn-block btn-primary mb-4 cta-btn">Edit Profile <i class="bi bi-pencil-square p-1"></i></button>
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
  .secondary-text-color {
    color: #E1E1E1;
  }
  .pf-header {
    background-color: #1D1D1D;
    color: white;
  }
  .pfp-img {
    background-color: green;
    height: 50px;
    width: 50px;
    border-radius: 50px;
  }
  .btn-style {
    background: none;
    color: white;
    font-size: 25px;
  }
  .cta-btn {
    background-color: #CA0CF9;
    border: 1px solid #CA0CF9;
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
