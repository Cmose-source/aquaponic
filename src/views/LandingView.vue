<script setup>
import LandingNavbar from '@/components/landing/LandingNavbar.vue'
import LandingHeroSection from '@/components/landing/LandingHeroSection.vue'
import LandingFeatureSection from '@/components/landing/LandingFeatureSection.vue'
import LandingAboutSection from '@/components/landing/LandingAboutSection.vue'
import LandingFaqSection from '@/components/landing/LandingFaqSection.vue'
import LandingFooter from '@/components/landing/LandingFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-background text-on-surface antialiased">
    <LandingNavbar />
    <main
      class="mx-auto flex w-full max-w-container-max flex-1 flex-col gap-12 px-margin py-8 md:gap-20 md:px-gutter md:py-12"
    >
      <LandingHeroSection />
      <LandingFeatureSection />
      <LandingAboutSection />
      <LandingFaqSection />
    </main>
    <LandingFooter />
  </div>
</template>
