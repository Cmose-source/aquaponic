<template>
  <div class="settings-view">
    <AppSidebar />
    <main class="settings-view__main">
      <section class="page-placeholder">
        <h1>Settings</h1>
        <p>Sesuaikan preferensi notifikasi, jadwal, dan integrasi perangkat Anda.</p>
      </section>
    </main>
  </div>
</template>

<script setup>
import AppSidebar from '@/components/common/AppSidebar.vue'
</script>

<style scoped>
.settings-view {
  display: grid;
  grid-template-columns: minmax(220px, 260px) 1fr;
  gap: 1.15rem;
  align-items: start;
}

.settings-view__main {
  width: 100%;
  min-width: 0;
}

.page-placeholder {
  padding: 2rem;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 22px 48px rgba(15, 23, 42, 0.08);
}

.page-placeholder h1 {
  margin-bottom: 0.75rem;
  color: #1f432a;
}

.page-placeholder p {
  color: #52675e;
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 980px) {
  .settings-view {
    grid-template-columns: 1fr;
  }
}
</style>
