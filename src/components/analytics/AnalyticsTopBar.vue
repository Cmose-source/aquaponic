<script setup>
import { useLiveClockDots } from '@/composables/useLiveClockDots.js'

const emit = defineEmits(['toggle-menu'])

const { timeDots, datetimeIso } = useLiveClockDots()
</script>

<template>
  <header
    class="docked top-0 z-40 w-full shrink-0 border-b border-border-muted bg-surface shadow-sm dark:border-outline-variant dark:bg-on-background"
  >
    <div
      class="flex w-full items-center justify-between px-margin py-4 md:px-md-margin lg:px-lg-margin"
    >
      <button
        type="button"
        class="-ml-2 flex items-center rounded-full p-2 text-primary transition-colors transition-transform hover:bg-surface-container-low active:scale-95 dark:text-primary-fixed dark:hover:bg-surface-container-highest lg:hidden"
        aria-label="Buka menu"
        @click="emit('toggle-menu')"
      >
        <span class="material-symbols-outlined" aria-hidden="true">menu</span>
      </button>
      <h1
        class="hidden font-headline-md text-headline-md text-on-surface dark:text-surface-bright lg:block"
      >
        System Control
      </h1>
      <h1 class="font-headline-md text-headline-md text-on-surface dark:text-surface-bright lg:hidden">
        Analytics
      </h1>
      <span
        class="inline-flex items-center gap-2.5 rounded-full border border-border-muted bg-secondary-container/90 px-3 py-1.5 shadow-sm shadow-primary/10 dark:border-border-muted/80 dark:bg-secondary-container/70"
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
