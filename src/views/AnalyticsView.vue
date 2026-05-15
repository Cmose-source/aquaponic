<script setup>
import AnalyticsPeriodFilter from '@/components/analytics/AnalyticsPeriodFilter.vue'
import AnalyticsHumidityCard from '@/components/analytics/AnalyticsHumidityCard.vue'
import AnalyticsTemperatureCard from '@/components/analytics/AnalyticsTemperatureCard.vue'
import AnalyticsSummarySection from '@/components/analytics/AnalyticsSummarySection.vue'
import AnalyticsActivitySection from '@/components/analytics/AnalyticsActivitySection.vue'
</script>

<template>
  <div class="analytics-view">
    <AnalyticsPeriodFilter />
    <div class="analytics-view__charts">
      <AnalyticsHumidityCard />
      <AnalyticsTemperatureCard />
    </div>
    <AnalyticsSummarySection />
    <AnalyticsActivitySection />
  </div>
</template>

<style scoped>
.analytics-view {
  display: grid;
  gap: 1.15rem;
  width: 100%;
}

.analytics-view__charts {
  display: grid;
  gap: 1.15rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 1100px) {
  .analytics-view__charts {
    grid-template-columns: 1fr;
  }
}
</style>
