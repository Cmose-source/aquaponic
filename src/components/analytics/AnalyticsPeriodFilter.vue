<template>
  <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
    <h2 class="hidden font-headline-lg text-headline-lg text-text-rich lg:block">Analytics Dashboard</h2>
    <div
      class="flex w-full overflow-hidden rounded-2xl border border-border-muted bg-surface-container-low p-1.5 shadow-sm md:w-auto"
      role="group"
      aria-label="Rentang waktu"
    >
      <button
        type="button"
        class="flex-1 rounded-xl py-2.5 text-center font-label-lg text-label-lg text-on-surface-variant transition-colors hover:bg-surface-variant md:px-6"
      >
        24H
      </button>
      <button
        type="button"
        class="flex-1 rounded-xl border border-border-muted bg-surface py-2.5 text-center font-label-lg font-bold text-primary shadow-sm md:px-6"
      >
        7D
      </button>
      <button
        type="button"
        class="flex-1 rounded-xl py-2.5 text-center font-label-lg text-label-lg text-on-surface-variant transition-colors hover:bg-surface-variant md:px-6"
      >
        30D
      </button>
      <button
        type="button"
        class="flex-1 rounded-xl py-2.5 text-center font-label-lg text-label-lg text-on-surface-variant transition-colors hover:bg-surface-variant md:px-6"
      >
        90D
      </button>
    </div>
  </div>
</template>
