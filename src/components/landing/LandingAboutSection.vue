<script setup>
const highlights = [
  {
    icon: 'water_drop',
    title: 'Kualitas air',
    body: 'Sensor dan log otomatis membantu menjaga sirkulasi dan nutrisi tetap stabil.',
  },
  {
    icon: 'energy_savings_leaf',
    title: 'Efisiensi',
    body: 'Automasi pompa dan jadwal irigasi mengurangi pemborosan energi dan air.',
  },
  {
    icon: 'groups',
    title: 'Tim & skala',
    body: 'Cocok untuk hobi rumahan hingga prototipe edukasi dan riset kecil.',
  },
]
</script>

<template>
  <section id="tentang" class="scroll-mt-24">
    <div
      class="overflow-hidden rounded-2xl border border-border-muted bg-surface-container-lowest shadow-sm"
    >
      <div class="grid grid-cols-1 gap-10 p-8 md:grid-cols-2 md:gap-12 md:p-12 lg:gap-16">
        <div class="flex flex-col gap-6">
          <span
            class="w-fit rounded-full bg-primary-fixed px-3 py-1 font-label-md text-label-md text-on-primary-fixed shadow-sm"
          >
            Tentang kami
          </span>
          <h2 class="font-headline-lg text-headline-lg text-primary md:text-[36px] md:leading-[44px]">
            AquaSurge untuk budidaya yang terukur dan tenang
          </h2>
          <div class="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant">
            <p>
              AquaSurge lahir dari kebutuhan praktisi akuaponik yang ingin data jelas, alarm yang
              masuk akal, dan kontrol perangkat yang tidak membingungkan.
            </p>
            <p>
              Kami menyatukan antarmuka ringan, alur otomasi yang dapat disesuaikan, dan ringkasan
              harian agar Anda fokus pada tanaman dan ikan — bukan pada spreadsheet.
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <article
            v-for="item in highlights"
            :key="item.title"
            class="flex gap-4 rounded-xl border border-border-muted bg-surface p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-container/10 text-primary-container"
            >
              <span class="material-symbols-outlined text-2xl" aria-hidden="true">{{ item.icon }}</span>
            </div>
            <div class="flex min-w-0 flex-col gap-1">
              <h3 class="font-headline-md text-headline-md text-on-surface">{{ item.title }}</h3>
              <p class="font-body-md text-body-md text-on-surface-variant">{{ item.body }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
