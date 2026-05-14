<script setup>
import SettingsTemperatureCard from '@/components/settings/SettingsTemperatureCard.vue'
import SettingsTankVolumeCard from '@/components/settings/SettingsTankVolumeCard.vue'
import SettingsPhCard from '@/components/settings/SettingsPhCard.vue'
import SettingsAutomationCard from '@/components/settings/SettingsAutomationCard.vue'
</script>

<template>
  <div class="mb-8 grid grid-cols-1 gap-gutter md:grid-cols-2">
    <SettingsTemperatureCard />
    <SettingsTankVolumeCard />
    <SettingsPhCard />
    <SettingsAutomationCard />
  </div>
</template>
