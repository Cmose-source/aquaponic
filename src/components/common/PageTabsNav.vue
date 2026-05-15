<template>
  <nav class="page-tabs-nav" aria-label="Halaman utama">
    <RouterLink
      v-for="tab in tabs"
      :key="tab.name"
      :to="{ name: tab.name }"
      class="page-tab"
      :class="{ 'page-tab--active': route.name === tab.name }"
      :aria-current="route.name === tab.name ? 'page' : undefined"
    >
      {{ tab.label }}
    </RouterLink>
  </nav>
</template>

<script setup>
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

const tabs = [
  { name: 'dashboard', label: 'Dashboard' },
  { name: 'analytics', label: 'Analytics' },
  { name: 'settings', label: 'Settings' },
]
</script>

<style scoped>
.page-tabs-nav {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding: 0.75rem 0;
  margin-bottom: 1rem;
  scroll-behavior: smooth;
}

.page-tabs-nav::-webkit-scrollbar {
  height: 8px;
}

.page-tabs-nav::-webkit-scrollbar-thumb {
  background: rgba(34, 197, 94, 0.35);
  border-radius: 999px;
}

.page-tab {
  flex: 0 0 auto;
  min-width: max-content;
  padding: 0.85rem 1rem;
  border-radius: 999px;
  background: rgba(248, 250, 242, 0.92);
  color: #2f4d35;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.page-tab:hover {
  background: rgba(136, 192, 87, 0.18);
  transform: translateY(-1px);
}

.page-tab--active {
  background: #d8f3d1;
  color: #166534;
}
</style>
