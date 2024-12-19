<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps(['items'])
</script>

<template>
  <div class="wrapper">
    <h3>Polestars:</h3>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/h">Details</RouterLink>
      <RouterLink v-for="item in items" :key="item" :to="`/${item}`"> {{ item }}</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

nav {
  flex: 1;
  overflow: scroll;
}

nav a {
  display: block;
}
</style>
