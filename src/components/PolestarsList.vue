<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps(['items'])
</script>

<template>
  <div>
    <h3>Polestars:</h3>
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/h">Details</RouterLink>
    <RouterLink v-for="item in items" :key="item" :to="`/${item}`"> {{ item }}</RouterLink>
  </nav>
</template>

<style>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block;
  padding: 0 1rem;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
