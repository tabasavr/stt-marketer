<script setup lang="ts">
import { RouterView } from 'vue-router'
import PolestarsList from './components/PolestarsList.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <PolestarsList :items="[1, 2, 3]" />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
