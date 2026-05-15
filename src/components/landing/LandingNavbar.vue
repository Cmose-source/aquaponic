<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import logoUrl from '@/assets/logo.png'
import { useLiveClockDots } from '@/composables/useLiveClockDots.js'

const { timeDots, datetimeIso } = useLiveClockDots()
const mobileOpen = ref(false)

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-border-muted bg-surface shadow-sm"
  >
    <div
      class="mx-auto flex max-w-container-max items-center justify-between px-margin py-4 md:px-gutter"
    >
      <RouterLink
        :to="{ name: 'landing' }"
        class="flex items-center gap-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        @click="closeMobile"
      >
        <img
          :src="logoUrl"
          alt=""
          class="h-10 w-10 shrink-0 rounded-xl bg-surface-cream object-contain shadow-sm ring-1 ring-border-muted/50"
          width="40"
          height="40"
        />
        <span class="font-headline-md text-headline-md text-primary">AquaSurge</span>
      </RouterLink>

      <div class="flex items-center gap-3 md:gap-4">
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

        <nav class="hidden items-center gap-6 md:flex" aria-label="Utama">
          <RouterLink
            class="font-label-lg text-label-lg text-on-surface-variant transition-colors hover:text-primary"
            :to="{ name: 'dashboard' }"
          >
            Monitoring
          </RouterLink>
          <a
            class="font-label-lg text-label-lg text-on-surface-variant transition-colors hover:text-primary"
            href="#fitur"
          >
            Automation
          </a>
          <a
            class="font-label-lg text-label-lg text-on-surface-variant transition-colors hover:text-primary"
            href="#fitur"
          >
            Analytics
          </a>
        </nav>

        <button
          type="button"
          class="ml-1 flex items-center justify-center rounded-full p-1 text-on-surface-variant transition-colors hover:bg-surface-container-low active:scale-95 md:hidden"
          :aria-expanded="mobileOpen"
          aria-controls="landing-mobile-nav"
          aria-label="Buka menu"
          @click="mobileOpen = !mobileOpen"
        >
          <span class="material-symbols-outlined text-primary" aria-hidden="true">menu</span>
        </button>
      </div>
    </div>

    <div
      v-show="mobileOpen"
      id="landing-mobile-nav"
      class="border-t border-border-muted bg-surface px-margin py-4 md:hidden"
    >
      <nav class="flex flex-col gap-3" aria-label="Mobile">
        <RouterLink
          class="font-label-lg text-label-lg text-on-surface-variant transition-colors hover:text-primary"
          :to="{ name: 'dashboard' }"
          @click="closeMobile"
        >
          Monitoring
        </RouterLink>
        <a
          class="font-label-lg text-label-lg text-on-surface-variant transition-colors hover:text-primary"
          href="#fitur"
          @click="closeMobile"
        >
          Automation
        </a>
        <a
          class="font-label-lg text-label-lg text-on-surface-variant transition-colors hover:text-primary"
          href="#fitur"
          @click="closeMobile"
        >
          Analytics
        </a>
      </nav>
    </div>
  </header>
</template>
