<template>
  <aside
    class="sidebar"
    :class="{
      'sidebar--drawer-open': drawerOpen,
      'sidebar--layout-drawer': layoutMode === 'drawer',
      'sidebar--layout-inline': layoutMode === 'inline',
    }"
  >
    <div class="sidebar__top">
      <RouterLink :to="{ name: 'landing' }" class="sidebar__brand" @click="$emit('close-drawer')">
        <div class="sidebar__logo">
          <img :src="logoUrl" alt="" class="sidebar__logo-img" width="40" height="40" />
        </div>
        <div class="sidebar__brand-meta">
          <span class="sidebar__brand-name">AquaSurge</span>
          <span class="sidebar__brand-subtitle">Smart Garden Control</span>
        </div>
      </RouterLink>
      <p class="sidebar__hint">{{ pageHint }}</p>
    </div>
    <nav class="sidebar__nav" aria-label="Navigasi utama">
      <RouterLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="sidebar__link"
        :class="{ 'sidebar__link--active': isActive(item) }"
        @click="$emit('close-drawer')"
      >
        <span class="material-symbols-outlined sidebar__link-icon" aria-hidden="true">{{ item.icon }}</span>
        <span class="sidebar__link-label">{{ item.label }}</span>
      </RouterLink>
    </nav>
    <div class="sidebar__footer">
      <p class="sidebar__footer-title">Jaga tampilan tetap premium</p>
      <p class="sidebar__footer-text">
        Ikon dan tipografi konsisten membuat navigasi Dashboard, Analytics, dan Settings lebih profesional.
      </p>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import logoUrl from '@/assets/logo.png'

defineProps({
  drawerOpen: { type: Boolean, default: false },
  layoutMode: {
    type: String,
    default: 'inline',
    validator: (v) => ['inline', 'drawer'].includes(v),
  },
})

defineEmits(['close-drawer'])

const route = useRoute()

const navItems = [
  { label: 'Dashboard', path: '/dashboard', matchNames: ['dashboard'], icon: 'dashboard' },
  { label: 'Analytics', path: '/analytics', matchNames: ['analytics', 'monitoring'], icon: 'analytics' },
  { label: 'Settings', path: '/settings', matchNames: ['settings'], icon: 'settings' },
]

function isActive(item) {
  return item.matchNames.includes(route.name)
}

const pageHint = computed(() => {
  if (route.name === 'dashboard') {
    return 'Ringkasan sensor, grafik monitoring, dan kontrol pompa sistem aquaponic Anda.'
  }
  if (route.name === 'analytics' || route.name === 'monitoring') {
    return 'Grafik dan metrik membantu membaca pola kelembaban, suhu, dan parameter air secara berkelanjutan.'
  }
  if (route.name === 'settings') {
    return 'Sesuaikan preferensi notifikasi, volume tangki, dan parameter sistem sesuai kebutuhan operasional.'
  }
  return 'Navigasi utama AquaSurge untuk monitoring dan pengaturan greenhouse.'
})
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 220px;
  padding: 1.25rem;
  border-radius: 22px;
  background: linear-gradient(180deg, #f6fcf3 0%, #ecf8ed 100%);
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.08);
  align-self: start;
}

.sidebar__top {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.sidebar__brand {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  text-decoration: none;
  color: inherit;
}

.sidebar__logo {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: #e7f7e8;
  color: #2d5a32;
}

.sidebar__logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
}

.sidebar__brand-meta {
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.sidebar__brand-name {
  font-weight: 700;
  color: #1f432a;
  font-size: 0.98rem;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.sidebar__brand-subtitle {
  font-size: 0.8rem;
  line-height: 1.35;
  color: #4f7054;
}

.sidebar__hint {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.55;
  color: #4b5c4a;
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin: 1rem 0;
}

.sidebar__link {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.72rem 0.9rem;
  border-radius: 14px;
  color: #325230;
  background: rgba(58, 107, 70, 0.08);
  font-weight: 600;
  font-size: 0.88rem;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
}

.sidebar__link-icon {
  font-size: 1.22rem;
  flex-shrink: 0;
  color: #3d6b45;
  font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24;
  transition: color 0.2s ease;
}

.sidebar__link-label {
  line-height: 1.2;
}

.sidebar__link:hover {
  background: rgba(37, 92, 52, 0.14);
  color: #1a3d24;
}

.sidebar__link:hover .sidebar__link-icon {
  color: #255c34;
}

.sidebar__link--active {
  background: #255c34;
  color: #ffffff;
  box-shadow: 0 6px 18px rgba(37, 92, 52, 0.28);
}

.sidebar__link--active .sidebar__link-icon {
  color: #ffffff;
}

.sidebar__footer {
  padding-top: 1rem;
  border-top: 1px solid rgba(112, 139, 111, 0.18);
}

.sidebar__footer-title {
  margin: 0 0 0.35rem;
  font-weight: 700;
  font-size: 0.82rem;
  color: #213428;
  line-height: 1.3;
}

.sidebar__footer-text {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.5;
  color: #5a6c58;
}

.sidebar--drawer-open {
  transform: translateX(0);
}

@media (max-width: 980px) {
  .sidebar--layout-drawer {
    position: fixed;
    left: 0;
    top: 68px;
    z-index: 50;
    width: min(280px, 88vw);
    height: calc(100vh - 68px);
    min-width: auto;
    border-radius: 0;
    padding: 1.25rem;
    background: linear-gradient(180deg, #f6fcf3 0%, #ecf8ed 100%);
    box-shadow: 0 20px 45px rgba(15, 23, 42, 0.15);
    transform: translateX(-105%);
    transition: transform 0.25s ease;
  }

  .sidebar--layout-drawer.sidebar--drawer-open {
    transform: translateX(0);
  }
}

@media (min-width: 981px) {
  .sidebar {
    position: sticky;
    top: 1rem;
    height: calc(100vh - 2rem);
  }
}

@media (max-width: 980px) {
  .sidebar--layout-inline {
    width: 100%;
    min-width: auto;
    border-radius: 22px;
    padding: 1rem;
    background: #ffffff;
    box-shadow: 0 18px 36px rgba(15, 23, 42, 0.06);
  }

  .sidebar--layout-inline .sidebar__top {
    gap: 0.75rem;
  }

  .sidebar--layout-inline .sidebar__nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin: 0.85rem 0;
  }

  .sidebar--layout-inline .sidebar__link {
    flex: 1 1 calc(50% - 0.45rem);
    justify-content: center;
    gap: 0.45rem;
    padding: 0.75rem 0.5rem;
  }

  .sidebar--layout-inline .sidebar__link-icon {
    font-size: 1.05rem;
  }

  .sidebar--layout-inline .sidebar__footer {
    display: none;
  }
}
</style>
