<script setup>
import { ref } from 'vue'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar.vue'
import DashboardTopbar from '@/components/dashboard/DashboardTopbar.vue'
import DashboardAlertBanner from '@/components/dashboard/DashboardAlertBanner.vue'
import DashboardSensorGrid from '@/components/dashboard/DashboardSensorGrid.vue'
import DashboardChartSection from '@/components/dashboard/DashboardChartSection.vue'
import DashboardControlPanel from '@/components/dashboard/DashboardControlPanel.vue'

const mobileNavOpen = ref(false)
const alertVisible = ref(true)
</script>

<template>
  <div
    class="flex h-screen overflow-hidden w-full bg-background font-body-md text-on-background antialiased"
  >
    <DashboardSidebar :mobile-open="mobileNavOpen" @close-mobile="mobileNavOpen = false" />

    <main class="flex w-full flex-1 flex-col md:ml-[280px]">
      <DashboardTopbar v-model:mobile-nav-open="mobileNavOpen" />

      <div class="mt-16 flex-1 space-y-gutter overflow-y-auto p-gutter md:p-pageMargin">
        <DashboardAlertBanner v-if="alertVisible" @dismiss="alertVisible = false" />
        <DashboardSensorGrid />
        <div class="grid grid-cols-1 gap-gutter lg:grid-cols-3">
          <DashboardChartSection />
          <DashboardControlPanel />
        </div>
      </div>
    </main>
  </div>
</template>
