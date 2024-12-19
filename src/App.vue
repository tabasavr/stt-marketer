<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import PolestarsList from './components/PolestarsList.vue'

const polestars = ref([])
fetchPolestars()

async function fetchPolestars() {
  const polestarsResponse = await fetch('https://stt.rsbat.dev/items')
  polestars.value = await polestarsResponse.json()
}
</script>

<template>
  <header>
    <div class="wrapper">
      <PolestarsList :items="polestars" />
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
