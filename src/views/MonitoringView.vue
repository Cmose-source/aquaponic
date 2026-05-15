<template>
  <div class="monitoring-view">
    <AppSidebar />
    <main class="monitoring-view__main">
      <section class="monitoring-header glass-effect-dark">
        <div class="time-selector">
          <button
            v-for="period in timePeriods"
            :key="period"
            :class="{ active: selectedPeriod === period }"
            @click="selectedPeriod = period"
            class="period-btn"
          >
            {{ period }}
          </button>
        </div>
      </section>
      <div class="monitoring-grid">
        <!-- Main Charts -->
        <SensorChart
          title="Humidity Monitoring"
          subtitle="Kelembapan air harian"
          indicator="Aktif"
          :value="66"
          unit="%"
          summaryText="Rata-rata intensitas"
          trend="+3.1% hari ini"
          class="chart-large"
        />
        <SensorChart
          title="Temperature Tracking"
          subtitle="Suhu lingkungan harian"
          indicator="Stabil"
          :value="28"
          unit="°C"
          summaryText="Rata-rata suhu"
          trend="+0.8° dari kemarin"
          class="chart-large"
        />
        <!-- Sensor Cards Row -->
        <div class="cards-row">
          <SensorCard
            title="Soil Humidity"
            subtitle="Kelembapan tanah"
            :value="66"
            unit="%"
            :min="40"
            :max="80"
            status="Good"
          />
          <SensorCard
            title="pH Level"
            subtitle="Kualitas air"
            :value="6.8"
            unit=""
            :min="6.5"
            :max="7.5"
            status="Good"
          />
          <SensorCard
            title="Dissolved O₂"
            subtitle="Kandungan oksigen"
            :value="7.5"
            unit="mg/L"
            :min="6"
            :max="9"
            status="Good"
          />
        </div>

      </div>
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import AppSidebar from '@/components/common/AppSidebar.vue'
import SensorChart from '@/components/dashboard/SensorChart.vue'
import SensorCard from '@/components/dashboard/SensorCard.vue'
const timePeriods = ['24h', '7d', '30d', '90d']
const selectedPeriod = ref('24h')
</script>
<style scoped>
.monitoring-view {
  display: grid;
  grid-template-columns: minmax(220px, 260px) 1fr;
  gap: 1.15rem;
}
.monitoring-view__main {
  display: grid;
  gap: 1.15rem;
}
.monitoring-header {
  padding: 2rem;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  animation: fade-in-up 0.8s ease-out;
}
.monitoring-eyebrow {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #0f766e;
  margin: 0;
}
.monitoring-title {
  font-size: 2rem;
  font-weight: 800;
  margin: 0.5rem 0 0;
  letter-spacing: -1px;
}
.monitoring-description {
  font-size: 0.95rem;
  color: #0f766e;
  opacity: 0.8;
  margin: 0.5rem 0 0;
}
.time-selector {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.period-btn {
  padding: 0.5rem 1rem;
  border: 1px solid rgba(34, 197, 94, 0.3);
  background: rgba(34, 197, 94, 0.06);
  color: #166534;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}
.period-btn:hover {
  background: rgba(34, 197, 94, 0.14);
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.2);
}
.period-btn.active {
  background: rgba(34, 197, 94, 0.22);
  border-color: #22c55e;
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.3);
}
.monitoring-grid {
  display: grid;
  gap: 1.15rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.chart-large {
  grid-column: span 2;
}
.cards-row {
  grid-column: span 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
@media (max-width: 1200px) {
  .cards-row {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 980px) {
  .monitoring-view {
    grid-template-columns: 1fr;
  }
  .monitoring-grid {
    grid-template-columns: 1fr;
  }
  .chart-large,
  .cards-row {
    grid-column: span 1;
  }
  .cards-row {
    grid-template-columns: 1fr;
  }
  .monitoring-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .time-selector {
    width: 100%;
  }
}
@media (max-width: 640px) {
  .monitoring-header {
    padding: 1.5rem;
  }
  .monitoring-title {
    font-size: 1.5rem;
  }
}
</style>
