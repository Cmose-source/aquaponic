<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <!-- Logo -->
      <div class="nav-logo">
        <div class="logo-icon">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#5a7a5a"/>
            <path d="M16 6C11 6 7 10 7 15c0 3 1.5 5.5 4 7l1-3c-1.5-1-2.5-2.5-2.5-4 0-3.5 2.9-6.5 6.5-6.5s6.5 3 6.5 6.5c0 1.5-1 3-2.5 4l1 3c2.5-1.5 4-4 4-7 0-5-4-9-9-9z" fill="#c8e6c8"/>
            <path d="M16 12c-1.7 0-3 1.3-3 3 0 1 .5 2 1.3 2.6L13 22h6l-1.3-4.4c.8-.6 1.3-1.6 1.3-2.6 0-1.7-1.3-3-3-3z" fill="#e8f5e8"/>
          </svg>
        </div>
        <span class="logo-text">AquaSurge</span>
      </div>

      <!-- Nav Links -->
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

      <!-- Right: Timer Badge -->
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
import { ref, onMounted, onUnmounted } from 'vue'

const navLinks = [
  { name: 'Beranda',    path: '/',            routeName: 'home' },
  { name: 'Dashboard',  path: '/dashboard',   routeName: 'dashboard' },
  { name: 'Monitoring', path: '/monitoring',  routeName: 'monitoring' },
  { name: 'Control',    path: '/control',     routeName: 'control' },
  { name: 'Analytics',  path: '/analytics',   routeName: 'analytics' },
  { name: 'About',      path: '/about',       routeName: 'about' },
]

const currentTime = ref('')
let timer = null

function updateTime() {
  const now = new Date()
  const h = String(now.getHours()).padStart(2, '0')
  const m = String(now.getMinutes()).padStart(2, '0')
  const s = String(now.getSeconds()).padStart(2, '0')
  currentTime.value = `${h}.${m}.${s}`
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

/* Logo */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  text-decoration: none;
  cursor: pointer;
}

.logo-icon {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}

.logo-icon svg {
  width: 100%;
  height: 100%;
}

.logo-text {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e2c;
  letter-spacing: -0.01em;
  white-space: nowrap;
}

/* Nav Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  display: inline-block;
  padding: 0.4rem 0.875rem;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 450;
  color: #4a5240;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.15s, color 0.15s;
  letter-spacing: 0.01em;
}

.nav-link:hover {
  background: rgba(90, 122, 90, 0.1);
  color: #2c3e2c;
}

.nav-link.active {
  background: rgba(90, 122, 90, 0.15);
  color: #2c3e2c;
  font-weight: 600;
}

/* Right section */
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
  background: rgba(90, 170, 90, 0.15);
  border: 1px solid rgba(90, 170, 90, 0.35);
  border-radius: 999px;
  padding: 0.3rem 0.85rem;
}

.live-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4caf50;
  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.3);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.3); }
  50%       { box-shadow: 0 0 0 5px rgba(76, 175, 80, 0.1); }
}

.live-text {
  font-family: 'Courier New', 'Lucida Console', monospace;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #2e6b2e;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links { display: none; }
  .nav-clock { display: none; }
}
</style>
