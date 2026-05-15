<script setup>
import { ref } from 'vue'

const maxCritical = ref('28.5')
const minWarning = ref('18.0')
</script>

<template>
  <div
    class="flex h-full flex-col rounded-xl border border-border-muted bg-surface-cream p-8 shadow-[0_4px_12px_rgba(58,90,64,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
  >
    <div class="mb-6 flex items-center gap-3">
      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container">
        <span class="material-symbols-outlined text-primary" aria-hidden="true">thermostat</span>
      </div>
      <h3 class="font-headline-md text-headline-md text-primary">Water Temperature</h3>
    </div>
    <div class="flex flex-1 flex-col space-y-4">
      <div>
        <label class="mb-2 block font-label-lg text-label-lg text-on-surface" for="settings-temp-max">
          Maximum Critical Limit (°C)
        </label>
        <input
          id="settings-temp-max"
          v-model="maxCritical"
          type="number"
          step="0.1"
          class="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <label class="mb-2 block font-label-lg text-label-lg text-on-surface" for="settings-temp-min">
          Minimum Warning Limit (°C)
        </label>
        <input
          id="settings-temp-min"
          v-model="minWarning"
          type="number"
          step="0.1"
          class="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
    </div>
  </div>
</template>
