<script setup>
import NewCard from "../components/NewCard.vue";
import MainHeader from "../components/MainHeader.vue";
</script>

<template>
  <MainHeader/>
  <div class="feed">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <NewCard/>
        </div>
      </div>  
    </div>
  </div>
</template>

<style>
  .feed {
    margin-top: 150px;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    /* background-image: url('../assets/images/background.png');
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center; */
  }
</style>

