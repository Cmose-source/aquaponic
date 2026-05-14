<script setup>
import { ref } from 'vue'

const minPh = ref('6.5')
const maxPh = ref('7.2')
</script>

<template>
  <div
    class="flex h-full flex-col rounded-xl border border-border-muted bg-surface-cream p-8 shadow-[0_4px_12px_rgba(58,90,64,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
  >
    <div class="mb-6 flex items-center gap-3">
      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container">
        <span class="material-symbols-outlined text-primary" aria-hidden="true">science</span>
      </div>
      <h3 class="font-headline-md text-headline-md text-primary">pH Balance</h3>
    </div>
    <div class="flex flex-1 flex-col space-y-4">
      <div class="flex gap-4">
        <div class="min-w-0 flex-1">
          <label class="mb-2 block font-label-lg text-label-lg text-on-surface" for="settings-ph-min">
            Min pH
          </label>
          <input
            id="settings-ph-min"
            v-model="minPh"
            type="number"
            step="0.1"
            class="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div class="min-w-0 flex-1">
          <label class="mb-2 block font-label-lg text-label-lg text-on-surface" for="settings-ph-max">
            Max pH
          </label>
          <input
            id="settings-ph-max"
            v-model="maxPh"
            type="number"
            step="0.1"
            class="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>
    </div>
  </div>
</template>
