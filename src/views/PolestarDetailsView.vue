<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const history = ref([])
fetchHistory()

async function fetchHistory() {
  const historyResponse = await fetch('https://stt.rsbat.dev/history?id=' + route.params.id)
  history.value = await historyResponse.json()
}

watch(
  () => route.params.id,
  () => {
    history.value = []
    fetchHistory()
  },
)
</script>

<template>
  <main>
    <h1>Polestar {{ $route.params.id }} details</h1>
    <template v-for="item in history">
      {{ item }}
    </template>
  </main>
</template>
