<script setup>
const emit = defineEmits(['dismiss'])
</script>

<template>
  <div
    class="mb-gutter flex items-start gap-3 rounded-xl border border-error/20 bg-error-container p-4 shadow-sm"
    role="alert"
  >
    <span class="material-symbols-outlined mt-0.5 text-error" aria-hidden="true">warning</span>
    <div class="min-w-0 flex-1">
      <h4 class="font-label-lg text-label-lg text-error">Peringatan: Level Air Rendah</h4>
      <p class="font-body-md text-sm text-error/80">
        Level air di tangki utama berada di bawah batas minimum (500L). Segera isi ulang.
      </p>
    </div>
    <button
      type="button"
      class="rounded-lg p-1 text-error transition-colors hover:bg-error/10"
      aria-label="Tutup peringatan"
      @click="emit('dismiss')"
    >
      <span class="material-symbols-outlined text-[20px]" aria-hidden="true">close</span>
    </button>
  </div>
</template>
