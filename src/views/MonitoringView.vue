<template>
  <div class="monitoring-view">
    <main class="monitoring-view__main">
      <section class="time-range-panel" aria-label="Filter data analytics">
        <p class="time-range-panel__title">Rentang waktu</p>
        <div class="time-selector" role="group" aria-label="Pilih rentang waktu tampilan data">
          <button
            v-for="range in timeRanges"
            :key="range.id"
            type="button"
            class="period-btn"
            :class="{ 'period-btn--active': selectedPeriod === range.id }"
            :aria-pressed="selectedPeriod === range.id"
            @click="selectedPeriod = range.id"
          >
            <span class="period-btn__primary">{{ range.labelShort }}</span>
            <span class="period-btn__hint">{{ range.labelHint }}</span>
          </button>
        </div>
      </section>
      <div class="monitoring-grid">
        <!-- Main Charts -->
        <SensorChart
          title="Humidity Monitoring"
          subtitle="Data kelembapan udara"
          indicator="Aktif"
          :value="kelembapanStatus"
          unit="%"
          summaryText="Kelembapan saat ini"
          trend="Live Update"
          :series="kelembapanHistory"
          :chartLabels="timeLabels"
          class="chart-large"
        />
        <SensorChart
          title="Temperature Tracking"
          subtitle="Data suhu lingkungan"
          indicator="Stabil"
          :value="suhuStatus"
          unit="°C"
          summaryText="Suhu saat ini"
          trend="Live Update"
          :series="suhuHistory"
          :chartLabels="timeLabels"
          class="chart-large"
        />
        <!-- Sensor Cards Row -->
        <div class="cards-row">
          <SensorCard
            title="Air Humidity"
            subtitle="Kelembapan udara"
            :value="kelembapanStatus"
            unit="%"
            :min="40"
            :max="80"
            status="Good"
          />
          <SensorCard
            title="Air Temperature"
            subtitle="Suhu lingkungan"
            :value="suhuStatus"
            unit="°C"
            :min="15"
            :max="35"
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
import SensorChart from '@/components/dashboard/SensorChart.vue'
import SensorCard from '@/components/dashboard/SensorCard.vue'
import { useMqtt } from '@/composables/useMqtt'

const { suhuStatus, kelembapanStatus, suhuHistory, kelembapanHistory, timeLabels } = useMqtt()

const timeRanges = [
  { id: '24h', labelShort: '24 jam', labelHint: 'Harian' },
  { id: '7d', labelShort: '7 hari', labelHint: 'Mingguan' },
  { id: '30d', labelShort: '30 hari', labelHint: 'Bulanan' },
  { id: '90d', labelShort: '90 hari', labelHint: 'Kuartal' },
]
const selectedPeriod = ref('24h')
</script>
<style scoped>
.monitoring-view {
  width: 100%;
}

.monitoring-view__main {
  display: grid;
  gap: 1.15rem;
}
.time-range-panel {
  padding: 1.1rem 1.25rem 1.15rem;
  border-radius: 16px;
  background: linear-gradient(165deg, #f0faf1 0%, #e3f4e6 55%, #d8eedc 100%);
  border: 1px solid rgba(37, 92, 52, 0.14);
  box-shadow: 0 10px 28px rgba(27, 48, 34, 0.06);
  animation: fadeInUp 0.8s ease-out;
}
.time-range-panel__title {
  margin: 0 0 0.65rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #3d6b45;
}
.time-selector {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.5rem;
}
.period-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.12rem;
  min-height: 3.1rem;
  padding: 0.45rem 0.4rem 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  font-family: inherit;
  border: 1px solid rgba(37, 92, 52, 0.18);
  background: rgba(255, 255, 255, 0.72);
  color: #1f432a;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.85) inset;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.15s ease;
}
.period-btn__primary {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.15;
  color: #1b3022;
}
.period-btn__hint {
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #5a7a52;
  line-height: 1.1;
}
.period-btn:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(34, 197, 94, 0.45);
  box-shadow: 0 4px 14px rgba(37, 92, 52, 0.1);
}
.period-btn:active {
  transform: scale(0.98);
}
.period-btn:focus-visible {
  outline: 2px solid #22c55e;
  outline-offset: 2px;
}
.period-btn--active {
  background: linear-gradient(180deg, #2f6b3d 0%, #255c34 100%);
  border-color: #1d4a28;
  box-shadow:
    0 6px 18px rgba(37, 92, 52, 0.28),
    0 1px 0 rgba(255, 255, 255, 0.12) inset;
}
.period-btn--active .period-btn__primary,
.period-btn--active .period-btn__hint {
  color: #f4fcf5;
}
.period-btn--active .period-btn__hint {
  color: rgba(244, 252, 245, 0.82);
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
  .time-selector {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 640px) {
  .time-range-panel {
    padding: 1rem 1rem 1.05rem;
  }
}
</style>
