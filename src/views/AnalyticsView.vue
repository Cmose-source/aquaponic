<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AnalyticsSidebar from '@/components/analytics/AnalyticsSidebar.vue'
import AnalyticsTopBar from '@/components/analytics/AnalyticsTopBar.vue'
import AnalyticsPeriodFilter from '@/components/analytics/AnalyticsPeriodFilter.vue'
import AnalyticsHumidityCard from '@/components/analytics/AnalyticsHumidityCard.vue'
import AnalyticsTemperatureCard from '@/components/analytics/AnalyticsTemperatureCard.vue'
import AnalyticsSummarySection from '@/components/analytics/AnalyticsSummarySection.vue'
import AnalyticsActivitySection from '@/components/analytics/AnalyticsActivitySection.vue'
import logoUrl from '@/assets/logo.png'

const route = useRoute()
const mobileMenuOpen = ref(false)

const drawerInactive =
  'mx-2 flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant transition-colors duration-200 hover:bg-surface-variant/30 hover:text-primary active:scale-95'
const drawerActive =
  'mx-2 flex items-center gap-3 rounded-xl bg-secondary-container/50 px-4 py-3 font-bold text-primary transition-transform active:scale-95'
</script>

<template>
  <div
    class="flex h-screen overflow-hidden bg-background font-body-md text-on-background antialiased"
  >
    <AnalyticsSidebar />

    <div
      v-show="mobileMenuOpen"
      class="fixed inset-0 z-[60] bg-inverse-surface/40 backdrop-blur-sm lg:hidden"
      aria-hidden="true"
      @click="mobileMenuOpen = false"
    />

    <aside
      v-show="mobileMenuOpen"
      class="fixed left-0 top-0 z-[70] flex h-full w-[280px] flex-col border-r border-border-muted bg-surface-container-lowest shadow-lg lg:hidden"
      aria-label="Menu samping"
    >
      <div class="flex items-center justify-between gap-3 border-b border-border-muted px-6 py-4">
        <RouterLink
          :to="{ name: 'landing' }"
          class="flex min-w-0 items-center gap-2 transition-opacity hover:opacity-80"
          @click="mobileMenuOpen = false"
        >
          <img
            :src="logoUrl"
            alt=""
            class="h-9 w-9 shrink-0 rounded-xl bg-surface-cream object-contain shadow-sm ring-1 ring-border-muted/50"
            width="36"
            height="36"
          />
          <span class="truncate font-headline-md text-headline-md text-primary">AquaSurge</span>
        </RouterLink>
        <button
          type="button"
          class="rounded-full p-2 text-on-surface-variant hover:bg-surface-container-low"
          aria-label="Tutup"
          @click="mobileMenuOpen = false"
        >
          <span class="material-symbols-outlined" aria-hidden="true">close</span>
        </button>
      </div>
      <div class="flex-1 space-y-2 overflow-y-auto px-2 py-4">
        <RouterLink
          :to="{ name: 'dashboard' }"
          :class="route.name === 'dashboard' ? drawerActive : drawerInactive"
          @click="mobileMenuOpen = false"
        >
          <span
            class="material-symbols-outlined"
            :style="route.name === 'dashboard' ? { fontVariationSettings: '\'FILL\' 1' } : undefined"
            aria-hidden="true"
          >
            dashboard
          </span>
          <span class="font-label-lg text-label-lg">Dashboard</span>
        </RouterLink>
        <RouterLink
          :to="{ name: 'analytics' }"
          :class="route.name === 'analytics' ? drawerActive : drawerInactive"
          @click="mobileMenuOpen = false"
        >
          <span
            class="material-symbols-outlined"
            :style="route.name === 'analytics' ? { fontVariationSettings: '\'FILL\' 1' } : undefined"
            aria-hidden="true"
          >
            monitoring
          </span>
          <span class="font-label-lg text-label-lg">Analytics</span>
        </RouterLink>
        <RouterLink
          :to="{ name: 'settings' }"
          :class="route.name === 'settings' ? drawerActive : drawerInactive"
          @click="mobileMenuOpen = false"
        >
          <span
            class="material-symbols-outlined"
            :style="route.name === 'settings' ? { fontVariationSettings: '\'FILL\' 1' } : undefined"
            aria-hidden="true"
          >
            settings
          </span>
          <span class="font-label-lg text-label-lg">Settings</span>
        </RouterLink>
      </div>
    </aside>

    <div class="relative flex h-full w-full flex-1 flex-col lg:w-[calc(100%-280px)]">
      <AnalyticsTopBar @toggle-menu="mobileMenuOpen = !mobileMenuOpen" />

      <main
        class="flex-1 space-y-8 overflow-y-auto overflow-x-hidden p-margin md:space-y-10 md:p-md-margin lg:p-lg-margin"
      >
        <div class="mx-auto max-w-7xl space-y-8 md:space-y-10">
          <AnalyticsPeriodFilter />
          <div class="grid grid-cols-1 gap-6 xl:grid-cols-2 lg:gap-8">
            <AnalyticsHumidityCard />
            <AnalyticsTemperatureCard />
          </div>
          <AnalyticsSummarySection />
          <AnalyticsActivitySection />
        </div>
      </main>
    </div>
  </div>
</template>
