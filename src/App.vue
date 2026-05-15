<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppNavbar from '@/components/common/AppNavbar.vue'

const route = useRoute()
const isLanding = computed(() => route.name === 'landing')
</script>

<template>
  <div class="app-root" :class="{ 'app-root--landing': isLanding }">
    <AppNavbar />
    <main class="app-frame" :class="{ 'app-frame--landing': isLanding }">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-root {
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(238, 247, 236, 0.85), rgba(243, 248, 243, 0.95));
}

.app-root--landing {
  background: #f9fbf7;
}

.app-frame {
  width: min(100%, 1600px);
  margin: 0 auto;
  padding: calc(68px + 1.5rem) 1rem 2.25rem;
}

.app-frame--landing {
  padding: 68px 0 0;
  max-width: none;
  width: 100%;
}

@media (min-width: 1280px) {
  .app-frame:not(.app-frame--landing) {
    padding: calc(68px + 2.5rem) 2rem 3.5rem;
  }
}
</style>
