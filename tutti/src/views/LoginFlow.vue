<script setup>
import WelcomeUser from "../components/WelcomeUser.vue";
</script>

<template>
  <div class="flow">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-9">
          <WelcomeUser />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .flow {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>