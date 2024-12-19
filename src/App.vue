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
    <PolestarsList :items="polestars"/>
  </header>

  <RouterView />
</template>
