<script setup>
import { onMounted } from 'vue'
import PumpControl from '@/components/dashboard/PumpControl.vue'
import WateringSchedule from '@/components/dashboard/WateringSchedule.vue'
import { useMqtt } from '@/composables/useMqtt'

const { historyLogs, connectMqtt } = useMqtt()

onMounted(() => {
  connectMqtt()
})
</script>

<template>
  <div class="dashboard-view">
    <section class="dashboard-hero">
      <div>
        <p class="dashboard-hero__eyebrow">System Control</p>
        <h1 class="dashboard-hero__title">Advanced Actuator Control</h1>
        <p class="dashboard-hero__description">
          Manage pumps, valves, and other actuators with real-time feedback and automation rules.
        </p>
      </div>
    </section>

    <div class="dashboard-grid">
      <PumpControl
        title="Primary Water Pump"
        description="Kontrol pompa utama untuk sirkulasi air"
        targetTopic="Isa/Smartlamp"
      />
      <PumpControl
        title="Automatic Feeding"
        description="Kontrol pemberian pakan ikan otomatis"
        targetTopic="Isa/Feeder"
      />

      <div class="dashboard-grid__schedule-form">
        <WateringSchedule />
      </div>

      <section class="dashboard-panel dashboard-grid__timeline">
        <h3 class="dashboard-panel__title">24-Hour Schedule</h3>
        <div class="schedule-chart">
          <div class="time-axis">
            <div v-for="hour in 24" :key="hour" class="time-marker">
              {{ String(hour - 1).padStart(2, '0') }}:00
            </div>
          </div>
          <div class="schedule-bars">
            <div class="schedule-bar schedule-bar--pump" style="left: 25%; width: 20%"></div>
            <div class="schedule-bar schedule-bar--feeder" style="left: 50%; width: 15%"></div>
          </div>
        </div>
        <div class="schedule-legend">
          <div class="legend-item">
            <span class="legend-color legend-color--pump"></span>
            <span>Primary Pump</span>
          </div>
          <div class="legend-item">
            <span class="legend-color legend-color--feeder"></span>
            <span>Automatic Feeding</span>
          </div>
        </div>
      </section>

      <section class="dashboard-panel dashboard-grid__history">
        <h3 class="dashboard-panel__title">Control History</h3>
        <div class="history-list">
          <template v-if="historyLogs.length > 0">
            <div v-for="(log, idx) in historyLogs" :key="idx" class="history-item">
              <span class="history-time">{{ log.time }}</span>
              <span class="history-action">{{ log.action }}</span>
              <span class="history-value">{{ log.value }}</span>
            </div>
          </template>
          <p v-else class="history-empty">Belum ada riwayat aktivitas terbaru.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.dashboard-view {
  display: grid;
  gap: 1.15rem;
  width: 100%;
}

.dashboard-hero {
  padding: 1.75rem 2rem;
  border-radius: 16px;
  background: linear-gradient(165deg, #f0faf1 0%, #e3f4e6 55%, #d8eedc 100%);
  border: 1px solid rgba(37, 92, 52, 0.14);
  box-shadow: 0 10px 28px rgba(27, 48, 34, 0.06);
}

.dashboard-hero__eyebrow {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #3d6b45;
}

.dashboard-hero__title {
  margin: 0.4rem 0 0;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #1b3022;
}

.dashboard-hero__description {
  margin: 0.5rem 0 0;
  max-width: 40rem;
  font-size: 0.95rem;
  line-height: 1.55;
  color: #4b5c4a;
}

.dashboard-grid {
  display: grid;
  gap: 1.15rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.dashboard-grid__schedule-form {
  grid-column: span 2;
}

.dashboard-grid__timeline,
.dashboard-grid__history {
  grid-column: span 1;
}

.dashboard-panel {
  padding: 1.5rem;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid rgba(148, 163, 184, 0.2);
}

.dashboard-panel__title {
  margin: 0 0 1.25rem;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #1f432a;
}

.schedule-chart {
  position: relative;
  height: 100px;
  margin-bottom: 1.25rem;
  background: #f8fafc;
  border-radius: 8px;
  overflow: hidden;
}

.time-axis {
  display: flex;
  position: absolute;
  inset: 0;
  font-size: 0.68rem;
  color: #0f766e;
}

.time-marker {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 0.25rem;
  border-right: 1px solid rgba(34, 197, 94, 0.12);
}

.schedule-bars {
  position: absolute;
  inset: 0;
}

.schedule-bar {
  position: absolute;
  top: 50%;
  height: 40%;
  border-radius: 4px;
  transform: translateY(-50%);
}

.schedule-bar--pump {
  background: #10b981;
}

.schedule-bar--feeder {
  background: #15803d;
}

.schedule-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #0f766e;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 3px;
}

.legend-color--pump {
  background: #10b981;
}

.legend-color--feeder {
  background: #15803d;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.history-item {
  display: grid;
  grid-template-columns: 72px 1fr 64px;
  gap: 0.75rem;
  align-items: center;
  padding: 0.75rem;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 8px;
  font-size: 0.88rem;
}

.history-time {
  color: #15803d;
  font-weight: 700;
}

.history-action {
  color: #16a34a;
}

.history-value {
  color: #10b981;
  text-align: right;
  font-weight: 600;
}

.history-empty {
  margin: 0;
  padding: 1rem;
  text-align: center;
  color: #64748b;
  font-size: 0.9rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px dashed rgba(148, 163, 184, 0.35);
}

@media (max-width: 980px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-grid__schedule-form,
  .dashboard-grid__timeline,
  .dashboard-grid__history {
    grid-column: span 1;
  }
}

@media (max-width: 640px) {
  .dashboard-hero {
    padding: 1.25rem 1.5rem;
  }

  .history-item {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }

  .history-value {
    text-align: left;
  }
}
</style>
