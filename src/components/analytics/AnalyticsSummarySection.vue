<template>
  <div>
    <h3 class="mb-8 mt-10 px-1 font-headline-md text-headline-md text-text-rich">System Summaries</h3>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      <div
        class="flex min-h-[180px] flex-col justify-between rounded-2xl border border-border-muted bg-surface-container-lowest p-6 shadow-[0_2px_12px_rgba(58,90,64,0.04)]"
      >
        <div class="mb-6 flex items-center justify-between">
          <h4 class="flex items-center gap-3 font-label-lg font-bold text-on-surface">
            <span
              class="material-symbols-outlined text-2xl text-primary-container"
              style="font-variation-settings: 'FILL' 1"
              aria-hidden="true"
            >
              water_drop
            </span>
            Soil Humidity
          </h4>
          <span
            class="rounded-lg bg-secondary-fixed px-3 py-1 font-label-md font-semibold text-on-secondary-fixed-variant"
          >
            Good
          </span>
        </div>
        <div class="mb-4 flex items-end justify-between">
          <span class="font-headline-lg text-headline-lg text-text-rich">66%</span>
          <span class="mb-1.5 font-label-md text-label-md text-outline">Ideal: 60-70%</span>
        </div>
        <div class="h-2.5 w-full rounded-full bg-surface-variant">
          <div class="h-2.5 rounded-full bg-primary-container" style="width: 66%" />
        </div>
      </div>
      <div
        class="flex min-h-[180px] flex-col justify-between rounded-2xl border border-border-muted bg-surface-container-lowest p-6 shadow-[0_2px_12px_rgba(58,90,64,0.04)]"
      >
        <div class="mb-6 flex items-center justify-between">
          <h4 class="flex items-center gap-3 font-label-lg font-bold text-on-surface">
            <span
              class="material-symbols-outlined text-2xl text-status-water"
              style="font-variation-settings: 'FILL' 1"
              aria-hidden="true"
            >
              science
            </span>
            pH Level
          </h4>
          <span
            class="rounded-lg bg-secondary-fixed px-3 py-1 font-label-md font-semibold text-on-secondary-fixed-variant"
          >
            Good
          </span>
        </div>
        <div class="mb-4 flex items-end justify-between">
          <span class="font-headline-lg text-headline-lg text-text-rich">6.8</span>
          <span class="mb-1.5 font-label-md text-label-md text-outline">Ideal: 6.5-7.5</span>
        </div>
        <div class="h-2.5 w-full rounded-full bg-surface-variant">
          <div class="h-2.5 rounded-full bg-status-water" style="width: 50%" />
        </div>
      </div>
      <div
        class="flex min-h-[180px] flex-col justify-between rounded-2xl border border-border-muted bg-surface-container-lowest p-6 shadow-[0_2px_12px_rgba(58,90,64,0.04)] md:col-span-2 lg:col-span-1"
      >
        <div class="mb-6 flex items-center justify-between">
          <h4 class="flex items-center gap-3 font-label-lg font-bold text-on-surface">
            <span
              class="material-symbols-outlined text-2xl text-outline"
              style="font-variation-settings: 'FILL' 1"
              aria-hidden="true"
            >
              air
            </span>
            Dissolved O2
          </h4>
          <span
            class="rounded-lg bg-secondary-fixed px-3 py-1 font-label-md font-semibold text-on-secondary-fixed-variant"
          >
            Good
          </span>
        </div>
        <div class="mb-4 flex items-end justify-between">
          <span class="font-headline-lg text-headline-lg text-text-rich">
            7.4
            <span class="ml-1 font-body-md text-body-md text-outline">mg/L</span>
          </span>
          <span class="mb-1.5 font-label-md text-label-md text-outline">Ideal: 6-8 mg/L</span>
        </div>
        <div class="h-2.5 w-full rounded-full bg-surface-variant">
          <div class="h-2.5 rounded-full bg-outline" style="width: 75%" />
        </div>
      </div>
    </div>
  </div>
</template>
