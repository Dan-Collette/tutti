<template>
  <MainHeader/>
  <div class="post">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-8">
          <CreatePost/>
    </div>
  </div>
</div>
</div>
</template>

<script setup>
import CreatePost from '../components/CreatePost.vue';
import MainHeader from '../components/MainHeader.vue';

</script>

<style>
  .post {
    width: 100%;
    margin-bottom: 8rem;
  }
</style>