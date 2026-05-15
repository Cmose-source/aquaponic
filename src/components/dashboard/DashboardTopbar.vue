<script setup>
import { useRoute } from 'vue-router'
import { useLiveClockDots } from '@/composables/useLiveClockDots.js'

const route = useRoute()

const props = defineProps({
  mobileNavOpen: { type: Boolean, default: false },
})

const emit = defineEmits(['update:mobileNavOpen'])

const { timeDots, datetimeIso } = useLiveClockDots()

function toggleMenu() {
  emit('update:mobileNavOpen', !props.mobileNavOpen)
}
</script>

<template>
  <header
    class="fixed left-0 right-0 top-0 z-40 flex h-16 shrink-0 items-stretch border-b border-border-muted bg-surface px-gutter shadow-sm md:left-[280px]"
  >
    <div class="flex w-full items-center justify-between">
      <div class="flex items-center gap-4">
        <button
          type="button"
          class="rounded-full p-2 text-primary transition-colors hover:bg-surface-container-high/50 focus:outline-none focus:ring-2 focus:ring-primary/20 md:hidden"
          :aria-expanded="mobileNavOpen"
          aria-controls="dashboard-sidebar-nav"
          aria-label="Buka menu samping"
          @click="toggleMenu"
        >
          <span class="material-symbols-outlined" aria-hidden="true">menu</span>
        </button>
        <h2 v-if="route.name === 'settings'" class="font-headline-md text-headline-md text-primary">
          Settings
        </h2>
        <h2 v-else class="font-headline-md text-headline-md text-primary">System Control</h2>
      </div>
      <span
        class="inline-flex items-center gap-2.5 rounded-full border border-border-muted bg-secondary-container/90 px-3 py-1.5 shadow-sm shadow-primary/10"
        role="status"
        :title="`Terhubung · ${timeDots}`"
        aria-label="Status terhubung, waktu lokal"
      >
        <span class="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-container opacity-50"
          />
          <span
            class="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-container ring-2 ring-primary-container/40"
          />
        </span>
        <time
          class="font-label-md text-label-md tabular-nums tracking-wide text-on-secondary-container"
          :datetime="datetimeIso"
          aria-live="off"
        >
          {{ timeDots }}
        </time>
      </span>
    </div>
  </header>
</template>
