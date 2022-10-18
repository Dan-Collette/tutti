<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<main>
<RouterView />
</main>
  <nav>
<!--     <a href="#/" class="text-center bi bi-house-fill nav-icon"></a><a href="#/post" class="text-center bi bi-cloud-plus-fill nav-icon"><p class="router-text m-0 p-0">Post</p></a> -->
    <!-- <RouterLink to="/">Home</RouterLink> -->
    <RouterLink to="/feed" class="bi bi-house-fill text-center icon-size"><p class="router-text m-0 p-0">Feed</p></RouterLink>
    <RouterLink to="/post" class="icon-size post-link bi bi-plus-square-fill text-center"><p class="router-text  m-0 p-0">Post</p></RouterLink>
    <RouterLink to="/about" class=" icon-size bi bi-person-fill text-center"><p class="router-text m-0 p-0">Profile</p></RouterLink>
  </nav>
</template>

<style scoped>
nav {
padding-left: 2rem;
padding-right: 2rem;
background-color: #1D1D1D;
color: white;
display: flex;
position: fixed;
justify-content: space-around;
align-items: center;
bottom: 0;
width: 100%;
z-index: 100;
box-shadow: rgb(0, 0, 0) 0px 5px 15px;
}
a {
  color: #f2f2f2;
}
.icon-size {
  font-size: 24px;
}

.router-text {
  font-size: 16px;
  font-family: futura-pt,sans-serif;
  font-weight: 500;
  font-style: normal;
  display: none;
}
.router-link-active {
  color: #CA0CF9;
  text-decoration: none;
}
.post-link {
  background-color: #2D2D2D;
  padding: 25px;
}
@media (min-width: 576px) {
  nav {
    justify-content: space-evenly;
    }
    .router-text {
      display: flex;
  }
}
@media (min-width: 768px) {
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}
</style>
