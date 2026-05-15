<script setup>
function onSave() {
  /* static UI — wire API later */
}
</script>

<template>
  <div class="mt-8 flex justify-end">
    <button
      type="button"
      class="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-label-lg text-label-lg text-on-primary shadow-sm transition-all duration-200 hover:bg-tertiary-container hover:brightness-110 active:scale-95"
      @click="onSave"
    >
      <span class="material-symbols-outlined text-[20px]" aria-hidden="true">save</span>
      Apply Configuration
    </button>
  </div>
</template>
