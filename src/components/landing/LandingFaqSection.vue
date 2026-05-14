<script setup>
const items = [
  {
    q: 'Apakah AquaSurge cocok untuk pemula?',
    a: 'Ya. Anda bisa mulai dengan satu tangki dan beberapa sensor, lalu menambah otomasi seiring kebutuhan tanpa mengganti alur kerja.',
  },
  {
    q: 'Perangkat keras apa yang didukung?',
    a: 'Versi awal fokus pada integrasi modul umum (pompa, aerator, sensor suhu dan kekeruhan). Daftar perangkat akan terus diperluas berdasarkan umpan balik komunitas.',
  },
  {
    q: 'Apakah data saya aman?',
    a: 'Kami merancang arsitektur dengan prinsip least-privilege, enkripsi pada saluran, dan retensi log yang dapat dikonfigurasi untuk keperluan edukasi maupun riset.',
  },
  {
    q: 'Bisakah digunakan tanpa internet?',
    a: 'Mode lokal direncanakan untuk prototipe tertentu. Untuk pengalaman penuh (sinkron dan notifikasi), koneksi jaringan disarankan.',
  },
]
</script>

<template>
  <section id="faq" class="scroll-mt-24 flex flex-col gap-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="mb-3 font-headline-lg text-headline-lg text-primary">Pertanyaan yang sering diajukan</h2>
      <p class="font-body-md text-body-md text-on-surface-variant">
        Jawaban singkat untuk hal yang paling sering ditanyakan seputar AquaSurge.
      </p>
    </div>
    <div class="mx-auto flex w-full max-w-3xl flex-col gap-3">
      <details
        v-for="(row, index) in items"
        :key="index"
        class="group rounded-2xl border border-border-muted bg-surface-container-lowest shadow-sm open:shadow-md [&_summary::-webkit-details-marker]:hidden"
      >
        <summary
          class="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 font-label-lg text-label-lg text-on-surface transition-colors hover:bg-surface-container-low"
        >
          <span class="text-left">{{ row.q }}</span>
          <span
            class="material-symbols-outlined shrink-0 text-primary transition-transform group-open:rotate-180"
            aria-hidden="true"
          >
            expand_more
          </span>
        </summary>
        <div
          class="border-t border-border-muted px-5 pb-4 pt-0 font-body-md text-body-md text-on-surface-variant"
        >
          <p class="pt-3">{{ row.a }}</p>
        </div>
      </details>
    </div>
  </section>
</template>
