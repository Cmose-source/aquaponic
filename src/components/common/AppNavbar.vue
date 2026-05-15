<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <router-link to="/" class="nav-logo">
        <img :src="logoImage" alt="" class="nav-logo__img" width="40" height="40" />
        <span class="logo-text">AquaSurge</span>
      </router-link>

      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.name">
          <router-link
            :to="link.path"
            class="nav-link"
            :class="{ active: route.name === link.routeName }"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>

      <div class="nav-right">
        <div class="live-badge" role="status" :title="`Terhubung · ${timeDots}`">
          <span class="live-dot" aria-hidden="true"></span>
          <time class="live-text" :datetime="datetimeIso">{{ clockDisplay }}</time>
        </div>

        <button
          v-if="!shellLayout"
          type="button"
          class="nav-menu-btn"
          :aria-expanded="mobileOpen"
          aria-controls="app-mobile-nav"
          aria-label="Buka menu navigasi"
          @click="mobileOpen = !mobileOpen"
        >
          <span class="material-symbols-outlined" aria-hidden="true">menu</span>
        </button>
      </div>
    </div>

    <div
      v-if="!shellLayout"
      v-show="mobileOpen"
      id="app-mobile-nav"
      class="nav-mobile-panel"
    >
      <ul class="nav-mobile-links">
        <li v-for="link in navLinks" :key="link.name">
          <router-link
            :to="link.path"
            class="nav-mobile-link"
            :class="{ active: route.name === link.routeName }"
            @click="mobileOpen = false"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import logoImage from '@/assets/logo.png'
import { useLiveClockDots } from '@/composables/useLiveClockDots.js'

defineProps({
  shellLayout: { type: Boolean, default: false },
})

const route = useRoute()
const mobileOpen = ref(false)
const { timeDots, datetimeIso } = useLiveClockDots()

const clockDisplay = computed(() => timeDots.value.replace(/\./g, ':'))

const navLinks = [
  { name: 'Dashboard', path: '/dashboard', routeName: 'dashboard' },
  { name: 'Analytics', path: '/analytics', routeName: 'analytics' },
  { name: 'Settings', path: '/settings', routeName: 'settings' },
]
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(249, 251, 247, 0.94);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(27, 48, 34, 0.07);
}

.navbar-inner {
  max-width: 1600px;
  width: min(100%, 1600px);
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  text-decoration: none;
  color: inherit;
}

.nav-logo__img {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 12px;
  object-fit: contain;
  background: #f4fcf5;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.85) inset;
  border: 1px solid rgba(27, 48, 34, 0.08);
}

.logo-text {
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #1b3022;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.15rem;
  list-style: none;
  margin: 0 auto 0 0;
  padding: 0;
}

.nav-link {
  display: inline-block;
  padding: 0.45rem 0.95rem;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #3d5242;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.15s, color 0.15s;
}

.nav-link:hover {
  background: rgba(136, 192, 87, 0.14);
  color: #1b3022;
}

.nav-link.active {
  background: rgba(136, 192, 87, 0.22);
  color: #1b3022;
  font-weight: 600;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.live-badge {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  background: rgba(136, 192, 87, 0.2);
  border: 1px solid rgba(136, 192, 87, 0.4);
  border-radius: 999px;
  padding: 0.32rem 0.9rem;
}

.live-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #5a9a3a;
  box-shadow: 0 0 0 2px rgba(136, 192, 87, 0.35);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 2px rgba(136, 192, 87, 0.35);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(136, 192, 87, 0.12);
  }
}

.live-text {
  font-family: ui-monospace, 'Cascadia Code', 'Segoe UI Mono', monospace;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #244030;
  font-variant-numeric: tabular-nums;
}

.nav-menu-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 999px;
  background: rgba(136, 192, 87, 0.12);
  color: #1b3022;
  cursor: pointer;
}

.nav-menu-btn .material-symbols-outlined {
  font-size: 1.35rem;
}

.nav-mobile-panel {
  display: none;
  border-top: 1px solid rgba(27, 48, 34, 0.08);
  background: rgba(249, 251, 247, 0.98);
  padding: 0.75rem 1.5rem 1rem;
}

.nav-mobile-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.nav-mobile-link {
  display: block;
  padding: 0.65rem 0.85rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #3d5242;
  text-decoration: none;
}

.nav-mobile-link:hover,
.nav-mobile-link.active {
  background: rgba(136, 192, 87, 0.2);
  color: #1b3022;
  font-weight: 600;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .nav-menu-btn {
    display: flex;
  }

  .nav-mobile-panel {
    display: block;
  }
}
</style>
