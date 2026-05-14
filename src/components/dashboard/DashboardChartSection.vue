<template>
  <section
    class="rounded-xl border border-border-muted bg-surface-cream p-6 shadow-sage lg:col-span-2"
  >
    <div class="mb-6 flex items-center justify-between">
      <h3 class="font-headline-md text-headline-md text-primary">Riwayat Sensor (24 Jam)</h3>
      <button
        type="button"
        class="flex items-center gap-2 rounded-lg border border-border-muted px-3 py-1.5 text-on-surface-variant transition-colors hover:bg-surface-container-low"
      >
        <span class="font-label-md text-label-md">Filter</span>
        <span class="material-symbols-outlined text-[16px]" aria-hidden="true">filter_list</span>
      </button>
    </div>
    <div
      class="relative flex h-64 w-full flex-col justify-end overflow-hidden rounded-lg border border-border-muted bg-surface-container-lowest p-4"
    >
      <div
        class="absolute bottom-8 left-4 top-4 flex flex-col justify-between font-label-md text-label-md text-on-surface-variant"
      >
        <span>100</span>
        <span>75</span>
        <span>50</span>
        <span>25</span>
        <span>0</span>
      </div>
      <div
        class="absolute inset-x-12 bottom-8 top-6 z-0 flex flex-col justify-between"
        aria-hidden="true"
      >
        <div class="h-0 w-full border-b border-border-muted/50" />
        <div class="h-0 w-full border-b border-border-muted/50" />
        <div class="h-0 w-full border-b border-border-muted/50" />
        <div class="h-0 w-full border-b border-border-muted/50" />
      </div>
      <svg
        class="absolute inset-x-12 bottom-8 z-10 h-full overflow-visible"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <path
          class="opacity-80"
          d="M 0 60 Q 15 40, 30 50 T 60 30 T 100 20"
          fill="none"
          stroke="#3a5a40"
          stroke-width="2"
        />
        <path
          class="opacity-20"
          d="M 0 60 Q 15 40, 30 50 T 60 30 T 100 20 L 100 100 L 0 100 Z"
          fill="url(#dashboard-chart-gradient)"
        />
        <defs>
          <linearGradient id="dashboard-chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#c7ecca" />
            <stop offset="100%" stop-color="transparent" />
          </linearGradient>
        </defs>
      </svg>
      <div
        class="z-20 mt-2 flex justify-between pl-8 font-label-md text-label-md text-on-surface-variant"
      >
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>24:00</span>
      </div>
    </div>
  </section>
</template>
