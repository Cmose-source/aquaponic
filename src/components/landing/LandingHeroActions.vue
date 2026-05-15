<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="mt-2 flex w-full flex-col gap-4 sm:flex-row">
    <RouterLink
      :to="{ name: 'dashboard' }"
      class="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-container py-4 font-label-lg text-label-lg text-on-primary shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-lg active:scale-[0.98] sm:w-auto sm:px-8"
    >
      Mulai Sekarang
      <span class="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
    </RouterLink>
    <a
      href="#fitur"
      class="flex w-full items-center justify-center gap-2 rounded-xl border-[1.5px] border-primary-container bg-transparent py-4 font-label-lg text-label-lg text-primary-container transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-low hover:shadow-md active:scale-[0.98] sm:w-auto sm:px-8"
    >
      Pelajari Fitur
    </a>
  </div>
</template>
