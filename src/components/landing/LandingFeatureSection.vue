<script setup>
const features = [
  {
    icon: 'monitoring',
    title: 'Monitoring',
    body: 'Pantau data kualitas air, suhu, dan kelembapan secara real-time dari perangkat Anda kapan saja.',
  },
  {
    icon: 'smart_toy',
    title: 'Automation',
    body: 'Kontrol cerdas untuk pompa dan aerator yang menyesuaikan secara otomatis berdasarkan kondisi terkini.',
  },
  {
    icon: 'analytics',
    title: 'Analytics',
    body: 'Dapatkan wawasan mendalam tentang pertumbuhan tanaman dan prediksi kualitas air untuk masa depan.',
  },
]
</script>

<template>
  <section id="fitur" class="mt-4 flex w-full scroll-mt-24 flex-col gap-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="mb-4 font-headline-lg text-headline-lg text-primary">Fitur Unggulan</h2>
      <p class="font-body-md text-body-md text-on-surface-variant">
        Sistem terintegrasi untuk mengoptimalkan hasil panen Anda dengan teknologi cerdas terkini.
      </p>
    </div>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <article
        v-for="item in features"
        :key="item.title"
        class="group flex flex-col gap-4 rounded-2xl border border-border-muted bg-surface-container-lowest p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
      >
        <div
          class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container/10 text-primary-container transition-colors duration-300 group-hover:bg-primary-container group-hover:text-on-primary"
        >
          <span class="material-symbols-outlined text-2xl" aria-hidden="true">{{ item.icon }}</span>
        </div>
        <h3 class="font-headline-md text-headline-md text-on-surface">{{ item.title }}</h3>
        <p class="flex-1 font-body-md text-body-md text-on-surface-variant">{{ item.body }}</p>
      </article>
    </div>
  </section>
</template>
