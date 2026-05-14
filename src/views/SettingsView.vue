<script setup>
import { ref } from 'vue'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar.vue'
import DashboardTopbar from '@/components/dashboard/DashboardTopbar.vue'
import SettingsHeader from '@/components/settings/SettingsHeader.vue'
import SettingsLimitsGrid from '@/components/settings/SettingsLimitsGrid.vue'
import SettingsSaveBar from '@/components/settings/SettingsSaveBar.vue'

const mobileNavOpen = ref(false)
</script>

<template>
  <div
    class="flex h-screen w-full overflow-hidden bg-background font-body-md text-on-background antialiased"
  >
    <DashboardSidebar :mobile-open="mobileNavOpen" @close-mobile="mobileNavOpen = false" />

    <main class="flex w-full flex-1 flex-col md:ml-[280px]">
      <DashboardTopbar v-model:mobile-nav-open="mobileNavOpen" />

      <div class="mt-16 flex-1 overflow-y-auto overflow-x-hidden p-gutter pb-24 md:p-pageMargin md:pb-0">
        <div class="mx-auto max-w-[1024px]">
          <SettingsHeader />
          <SettingsLimitsGrid />
          <SettingsSaveBar />
        </div>
      </div>
    </main>
  </div>
</template>
