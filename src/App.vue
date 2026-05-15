<script setup>
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import AppNavbar from '@/components/common/AppNavbar.vue'
import AppSidebar from '@/components/common/AppSidebar.vue'

const route = useRoute()
const drawerOpen = ref(false)
const isMobileShell = ref(false)

const isLanding = computed(() => route.name === 'landing')
const useAppShell = computed(() =>
  ['dashboard', 'analytics', 'settings', 'monitoring'].includes(route.name),
)

const sidebarLayoutMode = computed(() => (isMobileShell.value ? 'drawer' : 'inline'))

let mediaQuery

function syncShellBreakpoint() {
  isMobileShell.value = window.matchMedia('(max-width: 980px)').matches
  if (!isMobileShell.value) {
    drawerOpen.value = false
  }
}

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 980px)')
  syncShellBreakpoint()
  mediaQuery.addEventListener('change', syncShellBreakpoint)
})

onUnmounted(() => {
  mediaQuery?.removeEventListener('change', syncShellBreakpoint)
})

watch(
  () => route.fullPath,
  () => {
    drawerOpen.value = false
  },
)
</script>

<template>
  <div class="app-root" :class="{ 'app-root--landing': isLanding }">
    <AppNavbar :shell-layout="useAppShell" />

    <main v-if="isLanding" class="app-frame app-frame--landing">
      <RouterView />
    </main>

    <div v-else-if="useAppShell" class="app-frame app-frame--shell">
      <button
        v-if="isMobileShell"
        type="button"
        class="app-shell__menu-btn"
        aria-label="Buka navigasi"
        :aria-expanded="drawerOpen"
        @click="drawerOpen = !drawerOpen"
      >
        <span class="material-symbols-outlined" aria-hidden="true">menu</span>
      </button>

      <div
        v-if="isMobileShell"
        v-show="drawerOpen"
        class="app-shell__backdrop"
        aria-hidden="true"
        @click="drawerOpen = false"
      ></div>

      <div class="app-shell__layout">
        <AppSidebar
          :layout-mode="sidebarLayoutMode"
          :drawer-open="drawerOpen"
          @close-drawer="drawerOpen = false"
        />
        <div class="app-shell__content">
          <RouterView />
        </div>
      </div>
    </div>

    <main v-else class="app-frame">
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

.app-frame--shell {
  width: 100%;
  max-width: none;
  position: relative;
}

.app-shell__layout {
  display: grid;
  grid-template-columns: minmax(220px, 260px) minmax(0, 1fr);
  gap: 1.15rem;
  align-items: start;
}

.app-shell__content {
  min-width: 0;
}

.app-shell__menu-btn {
  display: none;
}

.app-shell__backdrop {
  display: none;
}

@media (max-width: 980px) {
  .app-frame--shell {
    padding-top: calc(68px + 3.25rem);
  }

  .app-shell__layout {
    grid-template-columns: 1fr;
  }

  .app-shell__menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 1rem;
    top: calc(68px + 0.75rem);
    z-index: 45;
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 12px;
    background: #255c34;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(37, 92, 52, 0.35);
  }

  .app-shell__menu-btn .material-symbols-outlined {
    font-size: 1.35rem;
  }

  .app-shell__backdrop {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 40;
    background: rgba(15, 23, 42, 0.35);
    backdrop-filter: blur(2px);
  }
}

@media (min-width: 1280px) {
  .app-frame:not(.app-frame--landing):not(.app-frame--shell) {
    padding: calc(68px + 2.5rem) 2rem 3.5rem;
  }

  .app-frame--shell {
    padding: calc(68px + 2rem) 2rem 3rem;
  }
}
</style>
