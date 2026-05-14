<script setup>
import { computed, ref } from 'vue'

const pumpOn = ref(true)
const aeratorOn = ref(false)

const pumpSubtitle = computed(() => (pumpOn.value ? 'Aktif • Otomatis' : 'Mati • Otomatis'))
const aeratorSubtitle = computed(() => (aeratorOn.value ? 'Aktif • Manual' : 'Mati • Manual'))
</script>

<template>
  <section class="flex flex-col rounded-xl border border-border-muted bg-surface-cream p-6 shadow-sage">
    <h3 class="mb-6 font-headline-md text-headline-md text-primary">Kontrol Sistem</h3>
    <div class="flex flex-1 flex-col gap-4">
      <div
        class="flex items-center justify-between rounded-lg border border-border-muted bg-surface-container-lowest p-5 transition-opacity"
        :class="pumpOn ? 'opacity-100' : 'opacity-70'"
      >
        <div class="flex min-w-0 items-center gap-4">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors"
            :class="pumpOn ? 'bg-secondary-container text-primary' : 'bg-surface-dim'"
          >
            <span
              class="material-symbols-outlined"
              :style="pumpOn ? { fontVariationSettings: '\'FILL\' 1' } : undefined"
              aria-hidden="true"
            >
              water_pump
            </span>
          </div>
          <div>
            <p class="font-label-lg text-label-lg text-primary">Pompa Air</p>
            <p class="font-label-md text-label-md text-on-surface-variant">
              {{ pumpSubtitle }}
            </p>
          </div>
        </div>
        <label class="relative inline-flex cursor-pointer items-center">
          <span class="sr-only">Pompa air</span>
          <input v-model="pumpOn" class="peer sr-only" type="checkbox" />
          <div
            class="peer relative h-6 w-11 rounded-full bg-surface-dim after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:bg-primary-container peer-checked:after:translate-x-full peer-checked:after:border-white"
          />
        </label>
      </div>
      <div
        class="flex items-center justify-between rounded-lg border border-border-muted bg-surface-container-lowest p-5 transition-opacity"
        :class="aeratorOn ? 'opacity-100' : 'opacity-70'"
      >
        <div class="flex min-w-0 items-center gap-4">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors"
            :class="aeratorOn ? 'bg-secondary-container text-primary' : 'bg-surface-dim'"
          >
            <span
              class="material-symbols-outlined"
              :style="aeratorOn ? { fontVariationSettings: '\'FILL\' 1' } : undefined"
              aria-hidden="true"
            >
              air
            </span>
          </div>
          <div>
            <p class="font-label-lg text-label-lg text-primary">Aerator</p>
            <p class="font-label-md text-label-md text-on-surface-variant">{{ aeratorSubtitle }}</p>
          </div>
        </div>
        <label class="relative inline-flex cursor-pointer items-center">
          <span class="sr-only">Aerator</span>
          <input v-model="aeratorOn" class="peer sr-only" type="checkbox" />
          <div
            class="peer relative h-6 w-11 rounded-full bg-surface-dim after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:bg-primary-container peer-checked:after:translate-x-full peer-checked:after:border-white"
          />
        </label>
      </div>
    </div>
  </section>
</template>
