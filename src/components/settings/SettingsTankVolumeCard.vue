<script setup>
import { ref } from 'vue'

const minSafe = ref('45')
const fillTarget = ref('85')
</script>

<template>
  <div
    class="flex h-full flex-col rounded-xl border border-border-muted bg-surface-cream p-8 shadow-[0_4px_12px_rgba(58,90,64,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
  >
    <div class="mb-6 flex items-center gap-3">
      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
        <span
          class="material-symbols-outlined text-status-water"
          style="font-variation-settings: 'FILL' 1"
          aria-hidden="true"
        >
          water_drop
        </span>
      </div>
      <h3 class="font-headline-md text-headline-md text-primary">Tank Volume</h3>
    </div>
    <div class="flex flex-1 flex-col space-y-4">
      <div>
        <label class="mb-2 block font-label-lg text-label-lg text-on-surface" for="settings-tank-min">
          Minimum Safe Level (%)
        </label>
        <div class="relative">
          <input
            id="settings-tank-min"
            v-model="minSafe"
            type="number"
            class="w-full rounded-lg border border-outline-variant bg-surface py-3 pl-4 pr-10 font-body-md text-body-md text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <span
            class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant"
            aria-hidden="true"
          >
            %
          </span>
        </div>
      </div>
      <div>
        <label class="mb-2 block font-label-lg text-label-lg text-on-surface" for="settings-tank-fill">
          Fill Target Level (%)
        </label>
        <div class="relative">
          <input
            id="settings-tank-fill"
            v-model="fillTarget"
            type="number"
            class="w-full rounded-lg border border-outline-variant bg-surface py-3 pl-4 pr-10 font-body-md text-body-md text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <span
            class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant"
            aria-hidden="true"
          >
            %
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
