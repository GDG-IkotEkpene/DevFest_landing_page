<template>
  <main>
    <component :is="layout">
      <RouterView />
    </component>
  </main>
</template>

<script setup>
import Default from './layouts/default.vue'
import Auth from './layouts/auth.vue'
import Dashboard from './layouts/dashboard.vue'
import Home from './layouts/home.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()

const layout = computed(() => {
  if (route.meta.layout == 'auth') {
    return Auth
  } else if (route.meta.layout == 'dashboard') {
    return Dashboard
  } else if (route.meta.layout == 'home') {
    return Home
  } else {
    return Default
  }
})
</script>

<style scoped></style>
