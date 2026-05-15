<template>
  <div class="control-view">
    <main class="control-view__main">
      <section class="control-header">
        <div>
          <p class="control-eyebrow">⚙️ System Control</p>
          <h1 class="control-title">Advanced Actuator Control</h1>
          <p class="control-description">
            Manage pumps, valves, and other actuators with real-time feedback and automation rules
          </p>
        </div>
      </section>

      <div class="control-grid">
        <!-- Main Pump Control -->
        <PumpControl
          title="Primary Water Pump"
          description="Kontrol pompa utama untuk sirkulasi air"
          targetTopic="Isa/Smartlamp"
          class="control-section"
        />

        <!-- Secondary Pump Control -->
        <PumpControl
          title="Automatic Feeding"
          description="Kontrol pemberian pakan ikan otomatis"
          targetTopic="Isa/Feeder"
          class="control-section"
        />

        <!-- Automation Rules / Schedule -->
        <div style="grid-column: span 2">
          <WateringSchedule />
        </div>

        <!-- Schedule Visualization -->
        <section class="schedule-section">
          <h3 class="section-title">📅 24-Hour Schedule</h3>
          <div class="schedule-chart">
            <div class="time-axis">
              <div v-for="hour in 24" :key="hour" class="time-marker">
                {{ String(hour - 1).padStart(2, '0') }}:00
              </div>
            </div>
            <div class="schedule-bars">
              <div class="schedule-bar" style="left: 25%; width: 20%"></div>
              <div class="schedule-bar" style="left: 50%; width: 15%"></div>
            </div>
          </div>
          <div class="schedule-legend">
            <div class="legend-item">
              <span class="legend-color" style="background: #10b981"></span>
              <span>Primary Pump</span>
            </div>
            <div class="legend-item">
              <span class="legend-color" style="background: #3b82f6"></span>
              <span>Automatic Feeding</span>
            </div>
          </div>
        </section>

        <!-- Control History -->
        <section class="history-section">
          <h3 class="section-title">📋 Control History</h3>
          <div class="history-list">
            <template v-if="historyLogs.length > 0">
              <div v-for="(log, idx) in historyLogs" :key="idx" class="history-item">
                <span class="history-time">{{ log.time }}</span>
                <span class="history-action">{{ log.action }}</span>
                <span class="history-value">{{ log.value }}</span>
              </div>
            </template>
            <div v-else class="history-item" style="justify-content: center; color: #64748b">
              Belum ada riwayat aktivitas terbaru.
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import PumpControl from '@/components/dashboard/PumpControl.vue'
import WateringSchedule from '@/components/dashboard/WateringSchedule.vue'
import { useMqtt } from '@/composables/useMqtt'

const { historyLogs } = useMqtt()
</script>

<style scoped>
.control-view {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.15rem;
}

.control-view__main {
  display: grid;
  gap: 1.15rem;
}

.control-header {
  padding: 2rem;
  border-radius: 16px;
  background: #f7faf7;
  border: 1px solid rgba(31, 72, 41, 0.12);
}

.control-eyebrow {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #0ea5e9;
  margin: 0;
}

.control-title {
  font-size: 2rem;
  font-weight: 800;
  margin: 0.5rem 0 0;
  letter-spacing: -0.02em;
  color: #111827;
}

.control-description {
  font-size: 0.95rem;
  color: #4b5563;
  opacity: 1;
  margin: 0.5rem 0 0;
}

.control-grid {
  display: grid;
  gap: 1.15rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.control-section {
  grid-column: span 1;
}

.section-title {
  margin: 0 0 1.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.automation-section,
.schedule-section,
.history-section {
  padding: 1.5rem;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid rgba(148, 163, 184, 0.2);
}

.automation-section {
  grid-column: span 2;
}

.rules-list {
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.rule-card {
  padding: 1rem;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.rule-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.rule-status {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  min-width: 80px;
}

.rule-status.active {
  color: #10b981;
}

.rule-status.inactive {
  color: #9ca3af;
}

.rule-name {
  margin: 0;
  color: #111827;
  font-weight: 700;
}

.rule-condition,
.rule-action {
  margin: 0;
  font-size: 0.9rem;
  color: #4b5563;
  opacity: 1;
}

.rule-controls {
  display: flex;
  gap: 0.5rem;
}

.btn-small {
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.btn-edit {
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
}

.btn-edit:hover {
  background: rgba(59, 130, 246, 0.3);
}

.btn-toggle {
  background: rgba(0, 212, 255, 0.2);
  color: #00d4ff;
}

.btn-toggle:hover {
  background: rgba(0, 212, 255, 0.3);
}

.btn-primary {
  background: #10b981;
  color: #ffffff;
  border: none;
}

.btn-large {
  width: 100%;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
}

.btn-primary:hover {
  transform: none;
  box-shadow: none;
  opacity: 0.95;
}

.schedule-section {
  padding: 1.5rem;
  border-radius: 12px;
  grid-column: span 1;
}

.schedule-chart {
  margin-bottom: 1.5rem;
  position: relative;
  height: 100px;
  background: #f8fafc;
  border-radius: 8px;
  overflow: hidden;
}

.time-axis {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 0.7rem;
  color: #0ea5e9;
}

.time-marker {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0.25rem 0;
  border-right: 1px solid rgba(0, 212, 255, 0.1);
}

.schedule-bars {
  position: absolute;
  width: 100%;
  height: 100%;
}

.schedule-bar {
  position: absolute;
  top: 50%;
  height: 40%;
  background: #10b981;
  border-radius: 4px;
  opacity: 1;
  transform: translateY(-50%);
}

.schedule-legend {
  display: flex;
  gap: 1.5rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #0ea5e9;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 3px;
}

.history-section {
  padding: 1.5rem;
  border-radius: 12px;
  grid-column: span 1;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.history-item {
  display: grid;
  grid-template-columns: 60px 1fr 80px;
  gap: 1rem;
  align-items: center;
  padding: 0.75rem;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 6px;
  font-size: 0.9rem;
}

.history-time {
  color: #0ea5e9;
  font-weight: 700;
  text-align: center;
}

.history-action {
  color: #00d4ff;
}

.history-value {
  color: #10b981;
  text-align: right;
  font-weight: 600;
}

@media (max-width: 1200px) {
  .automation-section,
  .schedule-section,
  .history-section {
    grid-column: span 2;
  }

  .schedule-section,
  .history-section {
    grid-column: span 1;
  }
}

@media (max-width: 980px) {
  .control-view {
    grid-template-columns: 1fr;
  }

  .control-grid {
    grid-template-columns: 1fr;
  }

  .automation-section,
  .control-section {
    grid-column: span 1;
  }
}

@media (max-width: 640px) {
  .control-header {
    padding: 1.5rem;
  }

  .control-title {
    font-size: 1.5rem;
  }

  .history-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
}
</style>
