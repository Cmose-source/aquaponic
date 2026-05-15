<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import logoUrl from '@/assets/logo.png'

const year = computed(() => new Date().getFullYear())

const footerLinks = {
  produk: [
    { label: 'Fitur', href: '#fitur' },
    { label: 'Dashboard', to: { name: 'dashboard' } },
    { label: 'Dasbor', to: { name: 'dashboard' } },
  ],
  sumber: [
    { label: 'Tentang', href: '#tentang' },
    { label: 'FAQ', href: '#faq' },
  ],
  legal: [
    { label: 'Kebijakan Privasi', href: '#' },
    { label: 'Syarat Layanan', href: '#' },
    { label: 'Keamanan Data', href: '#' },
  ],
}
</script>

<template>
  <footer class="mt-auto border-t border-border-muted bg-surface-container">
    <div
      class="mx-auto max-w-container-max px-margin py-12 md:px-gutter md:py-14"
    >
      <div class="grid grid-cols-1 gap-10 border-b border-border-muted pb-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:pb-12">
        <div class="flex flex-col gap-4 lg:col-span-4">
          <div class="flex items-center gap-2">
            <img
              :src="logoUrl"
              alt=""
              class="h-9 w-9 shrink-0 rounded-xl bg-surface-cream object-contain shadow-sm ring-1 ring-border-muted/50"
              width="36"
              height="36"
            />
            <span class="font-headline-md text-headline-md text-primary">AquaSurge</span>
          </div>
          <p class="max-w-sm font-body-md text-body-md text-on-surface-variant">
            Automasi dan wawasan untuk sistem akuaponik modern — dari prototipe hingga skala
            edukasi.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
          <div class="flex flex-col gap-3">
            <h3 class="font-label-lg text-label-lg text-primary">Produk</h3>
            <nav class="flex flex-col gap-2" aria-label="Produk">
              <template v-for="(link, i) in footerLinks.produk" :key="'p-' + i">
                <RouterLink
                  v-if="link.to"
                  class="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                  :to="link.to"
                >
                  {{ link.label }}
                </RouterLink>
                <a
                  v-else
                  class="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                  :href="link.href"
                >
                  {{ link.label }}
                </a>
              </template>
            </nav>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="font-label-lg text-label-lg text-primary">Sumber daya</h3>
            <nav class="flex flex-col gap-2" aria-label="Sumber daya">
              <a
                v-for="(link, i) in footerLinks.sumber"
                :key="'s-' + i"
                class="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                :href="link.href"
              >
                {{ link.label }}
              </a>
            </nav>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="font-label-lg text-label-lg text-primary">Legal</h3>
            <nav class="flex flex-col gap-2" aria-label="Legal">
              <a
                v-for="(link, i) in footerLinks.legal"
                :key="'l-' + i"
                class="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                :href="link.href"
              >
                {{ link.label }}
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row md:pt-10"
      >
        <p class="text-center font-label-md text-label-md text-on-surface-variant md:text-left">
          © {{ year }} AquaSurge. Hak cipta dilindungi undang-undang.
        </p>
        <RouterLink
          class="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
          :to="{ name: 'about' }"
        >
          Tentang Kami
        </RouterLink>
      </div>
    </div>
  </footer>
</template>
