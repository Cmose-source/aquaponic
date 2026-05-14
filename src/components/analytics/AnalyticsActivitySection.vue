<template>
  <section class="mt-10 border-t border-border-muted pt-10" aria-labelledby="analytics-activity-heading">
    <h3 id="analytics-activity-heading" class="mb-6 px-1 font-headline-md text-headline-md text-text-rich">
      Recent Activity
    </h3>
    <ul class="grid grid-cols-1 gap-content-gutter min-[480px]:gap-4 md:grid-cols-2 md:gap-4">
      <li
        class="flex items-start gap-3 rounded-2xl border border-border-muted bg-surface-container-lowest p-4 shadow-sm md:p-5"
      >
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary-container text-primary"
          aria-hidden="true"
        >
          <span class="material-symbols-outlined text-xl">sensors</span>
        </span>
        <div class="min-w-0 flex-1">
          <p class="font-label-md text-label-md text-outline">Today · 08:12</p>
          <p class="mt-1 font-body-md text-body-md text-on-surface">Soil humidity crossed 65% (ideal band).</p>
        </div>
      </li>
      <li
        class="flex items-start gap-3 rounded-2xl border border-border-muted bg-surface-container-lowest p-4 shadow-sm md:p-5"
      >
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tertiary-fixed/80 text-tertiary"
          aria-hidden="true"
        >
          <span class="material-symbols-outlined text-xl">thermostat</span>
        </span>
        <div class="min-w-0 flex-1">
          <p class="font-label-md text-label-md text-outline">Yesterday · 21:40</p>
          <p class="mt-1 font-body-md text-body-md text-on-surface">Water temperature held steady at 26–28°C.</p>
        </div>
      </li>
      <li
        class="flex items-start gap-3 rounded-2xl border border-border-muted bg-surface-container-lowest p-4 shadow-sm md:p-5"
      >
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-container-high text-status-water"
          aria-hidden="true"
        >
          <span class="material-symbols-outlined text-xl">science</span>
        </span>
        <div class="min-w-0 flex-1">
          <p class="font-label-md text-label-md text-outline">Yesterday · 14:05</p>
          <p class="mt-1 font-body-md text-body-md text-on-surface">pH reading logged at 6.8 (within target).</p>
        </div>
      </li>
      <li
        class="flex items-start gap-3 rounded-2xl border border-border-muted bg-surface-container-lowest p-4 shadow-sm md:p-5"
      >
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary-fixed text-on-secondary-fixed-variant"
          aria-hidden="true"
        >
          <span class="material-symbols-outlined text-xl">water_pump</span>
        </span>
        <div class="min-w-0 flex-1">
          <p class="font-label-md text-label-md text-outline">Mon · 09:30</p>
          <p class="mt-1 font-body-md text-body-md text-on-surface">Pump schedule ran on automatic mode (cycle OK).</p>
        </div>
      </li>
    </ul>
  </section>
</template>
