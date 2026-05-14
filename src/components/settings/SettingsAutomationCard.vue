<script setup>
import { ref } from 'vue'

const autoFill = ref(true)
const oxygenRecovery = ref(true)
</script>

<template>
  <div
    class="flex h-full flex-col rounded-xl border border-border-muted bg-surface-cream p-8 shadow-[0_4px_12px_rgba(58,90,64,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
  >
    <div class="mb-6 flex items-center gap-3">
      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container">
        <span class="material-symbols-outlined text-primary" aria-hidden="true">smart_toy</span>
      </div>
      <h3 class="font-headline-md text-headline-md text-primary">Automation Modes</h3>
    </div>
    <div class="flex flex-1 flex-col space-y-6">
      <div class="flex items-center justify-between gap-4">
        <div class="min-w-0">
          <h4 class="font-label-lg text-label-lg text-on-surface">Auto-Fill Pump</h4>
          <p class="mt-1 text-sm font-body-md text-body-md text-on-surface-variant">
            Activate main pump when level falls below minimum.
          </p>
        </div>
        <label class="relative inline-flex shrink-0 cursor-pointer items-center active:scale-95">
          <span class="sr-only">Auto-Fill Pump</span>
          <input v-model="autoFill" class="peer sr-only" type="checkbox" />
          <div
            class="relative h-[26px] w-12 rounded-full bg-surface-dim transition-colors duration-300 after:absolute after:left-[3px] after:top-[3px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:duration-300 after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-[22px] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20"
          />
        </label>
      </div>
      <div class="h-px w-full bg-border-muted" />
      <div class="flex items-center justify-between gap-4">
        <div class="min-w-0">
          <h4 class="font-label-lg text-label-lg text-on-surface">Dissolved Oxygen Recovery</h4>
          <p class="mt-1 text-sm font-body-md text-body-md text-on-surface-variant">
            Enable secondary aerator during high-temp events.
          </p>
        </div>
        <label class="relative inline-flex shrink-0 cursor-pointer items-center active:scale-95">
          <span class="sr-only">Dissolved Oxygen Recovery</span>
          <input v-model="oxygenRecovery" class="peer sr-only" type="checkbox" />
          <div
            class="relative h-[26px] w-12 rounded-full bg-surface-dim transition-colors duration-300 after:absolute after:left-[3px] after:top-[3px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:duration-300 after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-[22px] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20"
          />
        </label>
      </div>
    </div>
  </div>
</template>
