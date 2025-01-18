<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps<{
  items: { ItemId: number; Name: string }[]
}>()
</script>

<template>
  <div class="wrapper">
    <h3>Polestars:</h3>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink
        v-for="item in props.items"
        :key="item.ItemId"
        :to="{ name: 'details', params: { id: item.ItemId } }"
      >
        {{ item.Name }}</RouterLink
      >
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
