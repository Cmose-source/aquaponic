<script setup>
import LandingHeroActions from './LandingHeroActions.vue'
import LandingHeroPreview from './LandingHeroPreview.vue'
</script>

<template>
  <section class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
    <div class="order-2 flex flex-col items-start gap-6 md:order-1">
      <span
        class="font-label-md text-label-md rounded-full bg-tertiary-fixed px-3 py-1 uppercase tracking-wider text-on-tertiary-fixed shadow-sm shadow-primary/5"
      >
        Smart Tech
      </span>
      <h1
        class="font-headline-xl text-headline-xl leading-tight text-primary md:text-[56px] md:leading-[64px]"
      >
        AquaSurge:<br />
        Masa Depan<br />
        Budidaya Cerdas
      </h1>
      <p class="max-w-md font-body-md text-body-md text-on-surface-variant md:text-body-lg">
        Automasi penuh untuk sistem akuaponik Anda. Pantau kualitas air, sirkulasi nutrisi, dan
        pertumbuhan tanaman secara real-time langsung dari genggaman Anda.
      </p>
      <LandingHeroActions />
    </div>
    <LandingHeroPreview />
  </section>
</template>
