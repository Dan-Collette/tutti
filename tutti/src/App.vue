<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<main>
<RouterView />
</main>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/feed">Feed</RouterLink>
    <RouterLink to="/post">Post</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<style>

nav {
padding: 25px;
background-color: red;
display: flex;
position: fixed;
justify-content: space-evenly;
bottom: 0;
padding: 25px;
background-color: /* #063851 */ black;
width: 100%;
z-index: 100;
}
</style>
