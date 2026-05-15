<script setup>
import { RouterLink, useRoute } from 'vue-router'
import logoUrl from '@/assets/logo.png'

const route = useRoute()

/** Nav aktif / nonaktif (dipakai konsisten dashboard & analytics) */
const activeNav =
  'mx-2 flex items-center gap-3 rounded-xl bg-secondary-container/50 px-4 py-3 font-bold text-primary transition-transform active:scale-95'
const inactiveNav =
  'mx-2 flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant transition-colors duration-200 hover:bg-surface-variant/30 hover:text-primary active:scale-95'
</script>

<template>
  <aside
    class="z-50 hidden h-full w-[280px] shrink-0 flex-col border-r border-border-muted bg-surface-container-lowest lg:flex"
  >
    <div class="flex items-center gap-3 border-b border-border-muted px-6 py-6">
      <RouterLink
        :to="{ name: 'landing' }"
        class="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-80"
      >
        <img
          :src="logoUrl"
          alt=""
          class="h-10 w-10 shrink-0 rounded-xl bg-surface-cream object-contain shadow-sm ring-1 ring-border-muted/50"
          width="40"
          height="40"
        />
        <span class="truncate font-headline-md text-headline-md text-primary">AquaSurge</span>
      </RouterLink>
    </div>
    <nav class="flex flex-1 flex-col gap-2 overflow-y-auto px-2 py-4" aria-label="Dasbor">
      <RouterLink :to="{ name: 'dashboard' }" :class="route.name === 'dashboard' ? activeNav : inactiveNav">
        <span
          class="material-symbols-outlined"
          :style="route.name === 'dashboard' ? { fontVariationSettings: '\'FILL\' 1' } : undefined"
          aria-hidden="true"
        >
          dashboard
        </span>
        <span class="font-label-lg text-label-lg">Dashboard</span>
      </RouterLink>
      <RouterLink :to="{ name: 'analytics' }" :class="route.name === 'analytics' ? activeNav : inactiveNav">
        <span
          class="material-symbols-outlined"
          :style="route.name === 'analytics' ? { fontVariationSettings: '\'FILL\' 1' } : undefined"
          aria-hidden="true"
        >
          monitoring
        </span>
        <span class="font-label-lg text-label-lg">Analytics</span>
      </RouterLink>
      <RouterLink :to="{ name: 'settings' }" :class="route.name === 'settings' ? activeNav : inactiveNav">
        <span
          class="material-symbols-outlined"
          :style="route.name === 'settings' ? { fontVariationSettings: '\'FILL\' 1' } : undefined"
          aria-hidden="true"
        >
          settings
        </span>
        <span class="font-label-lg text-label-lg">Settings</span>
      </RouterLink>
    </nav>
  </aside>
</template>
