<script setup>
defineProps({
  icon: { type: String, required: true },
  iconBgClass: { type: String, default: 'bg-secondary-container' },
  iconTextClass: { type: String, default: 'text-primary' },
  iconFilled: { type: Boolean, default: false },
  status: { type: String, required: true },
  statusClass: { type: String, required: true },
  label: { type: String, required: true },
  value: { type: String, required: true },
  unit: { type: String, required: true },
  progress: { type: [Number, String], default: null },
  progressColorClass: { type: String, default: 'bg-primary-container' },
})
</script>

<template>
  <article
    class="group relative h-full overflow-hidden rounded-xl border border-border-muted bg-surface-cream p-6 shadow-sage transition-all duration-300 hover:-translate-y-1 hover:shadow-sage-lg"
  >
    <div class="mb-4 flex items-start justify-between">
      <div
        class="rounded-lg p-3"
        :class="iconBgClass"
      >
        <span
          class="material-symbols-outlined text-lg"
          :class="iconTextClass"
          :style="iconFilled ? { fontVariationSettings: '\'FILL\' 1' } : undefined"
          aria-hidden="true"
        >
          {{ icon }}
        </span>
      </div>
      <span
        class="rounded-md border px-2.5 py-1 font-label-md text-label-md whitespace-nowrap"
        :class="statusClass"
      >
        {{ status }}
      </span>
    </div>
    <div class="flex flex-col flex-1">
      <p class="mb-3 font-label-lg text-label-lg text-on-surface-variant">{{ label }}</p>
      <div class="flex items-baseline gap-1 mt-auto">
        <h3 class="font-data-display text-data-display text-primary font-bold">{{ value }}</h3>
        <span class="font-body-sm text-body-sm text-on-surface-variant">{{ unit }}</span>
      </div>
      <div v-if="progress !== null" class="mt-4">
        <div class="h-2.5 w-full rounded-full bg-surface-variant">
          <div
            class="h-2.5 rounded-full"
            :class="progressColorClass"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
      </div>
    </div>
  </article>
</template>
