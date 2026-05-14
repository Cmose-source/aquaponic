<template>
  <section
    class="flex min-h-[400px] flex-col rounded-2xl border border-border-muted bg-surface-container-lowest p-6 shadow-[0_4px_24px_rgba(58,90,64,0.06)] md:p-8"
  >
    <div class="mb-8 flex items-start justify-between">
      <div>
        <h2 class="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant">
          Humidity Monitoring
        </h2>
        <div class="mt-2 font-data-display text-data-display text-text-rich">72%</div>
      </div>
      <div
        class="flex items-center space-x-2 rounded-full border border-secondary-container bg-secondary-fixed px-4 py-1.5 font-label-md text-label-md text-on-secondary-fixed-variant shadow-sm"
      >
        <span class="h-2.5 w-2.5 rounded-full bg-primary-container" aria-hidden="true" />
        <span>Active</span>
      </div>
    </div>
    <div
      class="flex min-h-[180px] w-full flex-1 items-end justify-between space-x-3 opacity-70 min-[480px]:min-h-[200px] md:min-h-[220px] md:space-x-5"
    >
      <div
        class="h-1/4 flex-1 cursor-pointer rounded-t-lg bg-primary-fixed-dim transition-all hover:bg-primary-container"
      />
      <div
        class="h-2/4 flex-1 cursor-pointer rounded-t-lg bg-primary-fixed-dim transition-all hover:bg-primary-container"
      />
      <div
        class="h-1/3 flex-1 cursor-pointer rounded-t-lg bg-primary-fixed-dim transition-all hover:bg-primary-container"
      />
      <div
        class="h-3/4 flex-1 cursor-pointer rounded-t-lg bg-primary-fixed-dim transition-all hover:bg-primary-container"
      />
      <div
        class="h-2/3 flex-1 cursor-pointer rounded-t-lg bg-primary-fixed-dim transition-all hover:bg-primary-container"
      />
      <div class="h-full flex-1 rounded-t-lg bg-primary-container shadow-lg" />
      <div
        class="h-4/5 flex-1 cursor-pointer rounded-t-lg bg-primary-fixed-dim transition-all hover:bg-primary-container"
      />
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
