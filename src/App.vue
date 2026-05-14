<script setup>
import AppNavbar from '@/components/common/AppNavbar.vue'
</script>

<template>
  <div class="app-root">
    <AppNavbar />
    <main class="app-frame">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-root {
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(238, 247, 236, 0.85), rgba(243, 248, 243, 0.95));
}

.app-frame {
  width: min(100%, 1600px);
  margin: 0 auto;
  padding: calc(68px + 1.5rem) 1rem 2.25rem;
}

@media (min-width: 1280px) {
  .app-frame {
    padding: calc(68px + 2.5rem) 2rem 3.5rem;
  }
}
</style>
