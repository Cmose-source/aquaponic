<template>
  <section
    class="flex min-h-[400px] flex-col rounded-2xl border border-border-muted bg-surface-container-lowest p-6 shadow-[0_4px_24px_rgba(58,90,64,0.06)] md:p-8"
  >
    <div class="mb-8 flex items-start justify-between">
      <div>
        <h2 class="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant">
          Temperature Tracking
        </h2>
        <div class="mt-2 font-data-display text-data-display text-text-rich">28°C</div>
      </div>
      <div
        class="flex items-center space-x-2 rounded-full border border-tertiary-container bg-tertiary-fixed px-4 py-1.5 font-label-md text-label-md text-on-tertiary-fixed-variant shadow-sm"
      >
        <span class="h-2.5 w-2.5 rounded-full bg-tertiary-container" aria-hidden="true" />
        <span>Stable</span>
      </div>
    </div>
    <div class="relative min-h-[160px] w-full flex-1 min-[480px]:min-h-[180px] md:min-h-[200px]">
      <svg
        class="h-full min-h-[140px] w-full text-primary drop-shadow-lg md:min-h-[160px]"
        preserveAspectRatio="none"
        viewBox="0 0 100 40"
        aria-hidden="true"
      >
        <path
          d="M0,30 Q10,25 20,28 T40,20 T60,15 T80,22 T100,10"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          vector-effect="non-scaling-stroke"
        />
        <circle cx="100" cy="10" r="4" fill="currentColor" />
      </svg>
    </div>
    <div
      class="mt-6 flex justify-between px-2 font-label-md text-label-md text-outline"
      aria-hidden="true"
    >
      <span>Mon</span>
      <span>Tue</span>
      <span>Wed</span>
      <span>Thu</span>
      <span>Fri</span>
      <span>Sat</span>
      <span>Sun</span>
    </div>
  </section>
</template>
