<template>
  <nav class="navbar" :class="{ 'navbar--landing': isLanding }">
    <div class="navbar-inner">
      <router-link to="/" class="nav-logo">
        <div class="logo-icon">
          <img :src="logoImage" alt="AquaSurge logo" />
        </div>
        <span class="logo-text">AquaSurge</span>
      </router-link>

      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.name">
          <router-link
            :to="link.path"
            class="nav-link"
            :class="{ active: $route.name === link.routeName }"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>

      <div class="nav-right">
        <div class="live-badge">
          <span class="live-dot"></span>
          <span class="live-text">{{ currentTime }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import logoImage from '@/assets/logo.png'

const route = useRoute()

const navLinksFull = [
  { name: 'Dashboard', path: '/dashboard', routeName: 'dashboard' },
  { name: 'Analytics', path: '/analytics', routeName: 'analytics' },
  { name: 'Settings', path: '/settings', routeName: 'settings' },
]

const navLinksLanding = [
  { name: 'Dashboard', path: '/dashboard', routeName: 'dashboard' },
  { name: 'Analytics', path: '/analytics', routeName: 'analytics' },
  { name: 'Settings', path: '/settings', routeName: 'settings' },
]

const navLinks = computed(() =>
  route.name === 'landing' ? navLinksLanding : navLinksFull,
)

const isLanding = computed(() => route.name === 'landing')

const currentTime = ref('')
let timer = null

function updateTime() {
  const now = new Date()
  const h = String(now.getHours()).padStart(2, '0')
  const m = String(now.getMinutes()).padStart(2, '0')
  const s = String(now.getSeconds()).padStart(2, '0')
  currentTime.value = `${h}:${m}:${s}`
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(240, 236, 228, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.navbar--landing {
  background: rgba(249, 251, 247, 0.94);
  border-bottom: 1px solid rgba(27, 48, 34, 0.07);
}

.navbar-inner {
  max-width: 1600px;
  width: min(100%, 1600px);
  margin: 0 auto;
  padding: 0 2rem;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}

.logo-icon {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}

.logo-icon img,
.logo-icon svg {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
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
  margin: 0;
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
  gap: 1rem;
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
  0%, 100% { box-shadow: 0 0 0 2px rgba(136, 192, 87, 0.35); }
  50%       { box-shadow: 0 0 0 5px rgba(136, 192, 87, 0.12); }
}

.live-text {
  font-family: ui-monospace, 'Cascadia Code', 'Segoe UI Mono', monospace;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #244030;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>
