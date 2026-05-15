<template>
  <div class="dashboard-view">
    <div class="dashboard-wrapper">
      <AppSidebar />

      <main class="dashboard-main">
        <!-- ══ Quick Status Panel ══ -->
        <section class="panel">
          <h2 class="panel-title">Quick Status Panel</h2>
          <div class="status-grid">
            <!-- Soil Moisture -->
            <div class="sensor-card">
              <div class="card-header">
                <div class="card-label">
                  <span class="card-icon">🌱</span>
                  <span>Soil Moisture</span>
                </div>
                <span class="badge badge-normal">NORMAL</span>
              </div>
              <div class="card-value">{{ soilMoisture }}%</div>
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: soilMoisture + '%' }"></div>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ Control Preview Panel ══ -->
        <section class="panel">
          <h2 class="panel-title">Control Preview Panel</h2>
          <div class="control-grid">
            <PumpControl />
          </div>
        </section>

        <!-- ══ Live System Status ══ -->
        <section class="panel">
          <h2 class="panel-title">Live System Status</h2>
          <div class="status-grid status-grid-4">
            <div class="live-card" v-for="item in systemStatus" :key="item.title">
              <div class="live-dot-wrap">
                <span class="live-dot"></span>
              </div>
              <div>
                <div class="live-title">{{ item.title }}</div>
                <div class="live-desc">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ Mini Analytics ══ -->
        <section class="panel">
          <h2 class="panel-title">Mini Analytics</h2>
          <div class="analytics-wrap">
            <div class="chart-labels">
              <span v-for="d in chartData" :key="d.label" class="chart-label">{{ d.label }}</span>
            </div>
            <div class="chart-bars">
              <div v-for="d in chartData" :key="d.label" class="bar-wrap">
                <div
                  class="bar"
                  :style="{ height: d.value + '%', background: d.color }"
                  :title="d.label + ': ' + d.value + '%'"
                ></div>
              </div>
            </div>
            <div class="chart-legend">
              <span class="legend-item">
                <span class="legend-dot" style="background: #5a7a40"></span> Soil Moisture
              </span>
              <span class="legend-item">
                <span class="legend-dot" style="background: #c06a3a"></span> Nilai Rendah
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppSidebar from '@/components/common/AppSidebar.vue'
import PumpControl from '@/components/dashboard/PumpControl.vue'

// Sensor data (nanti ganti dengan Firebase realtime)
const soilMoisture = ref(55)

// Live system status
const systemStatus = [
  { title: 'ESP32 Connected', desc: 'Online & stable' },
  { title: 'WiFi Connection', desc: 'Connected to greenhouse network' },
  { title: 'Realtime Database', desc: 'Sync active' },
  { title: 'Active Sensors', desc: '6 sensors detected' },
]

// Mini analytics chart data
const chartData = [
  { label: 'Sen', value: 55, color: '#c06a3a' },
  { label: 'Sel', value: 70, color: '#5a7a40' },
  { label: 'Rab', value: 48, color: '#c06a3a' },
  { label: 'Kam', value: 80, color: '#5a7a40' },
  { label: 'Jum', value: 62, color: '#c06a3a' },
  { label: 'Sab', value: 88, color: '#5a7a40' },
  { label: 'Min', value: 55, color: '#c06a3a' },
  { label: 'Sen', value: 74, color: '#5a7a40' },
  { label: 'Sel', value: 50, color: '#c06a3a' },
  { label: 'Rab', value: 90, color: '#5a7a40' },
  { label: 'Kam', value: 65, color: '#c06a3a' },
  { label: 'Jum', value: 78, color: '#5a7a40' },
]
</script>

<style scoped>
/* ── Base ── */
.dashboard-page {
  min-height: 100vh;
  background: #f0ece4;
}

.dashboard-main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* ── Section Panel ── */
.panel {
}

.panel-title {
  font-family: 'Georgia', serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #1e2a1e;
  margin: 0 0 1rem;
  letter-spacing: -0.01em;
}

/* ── Sensor Cards Grid ── */
.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.status-grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

.sensor-card {
  background: #ede8df;
  border-radius: 14px;
  padding: 1.1rem 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  max-width: 340px;
}

.sensor-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: #5a6a50;
  font-weight: 500;
}

.card-icon {
  font-size: 1rem;
}

.badge {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
}

.badge-normal {
  background: rgba(90, 170, 90, 0.15);
  color: #2e6b2e;
}
.badge-stable {
  background: rgba(90, 140, 200, 0.15);
  color: #1a4a80;
}
.badge-optimal {
  background: rgba(200, 100, 50, 0.15);
  color: #8b3a10;
}

.card-value {
  font-family: 'Georgia', serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #1e2a1e;
  line-height: 1;
  letter-spacing: -0.02em;
}

.progress-bar {
  height: 6px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4a8a3a, #6ab85a);
  border-radius: 999px;
  transition: width 0.6s ease;
}

/* ── Control Cards ── */
.control-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.control-card {
  background: #ede8df;
  border-radius: 14px;
  padding: 1.1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  max-width: 340px;
}

.control-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #3a4a30;
  font-weight: 500;
}

/* Toggle switch */
.toggle {
  width: 52px;
  height: 28px;
  border-radius: 999px;
  background: #c8c0b4;
  position: relative;
  cursor: pointer;
  transition: background 0.25s;
  flex-shrink: 0;
}

.toggle.active {
  background: #4a8a3a;
}

.toggle-knob {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s;
}

.toggle.active .toggle-knob {
  transform: translateX(24px);
}

/* ── Live System Status ── */
.live-card {
  background: #ede8df;
  border-radius: 14px;
  padding: 1.1rem 1.25rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.live-dot-wrap {
  padding-top: 4px;
}

.live-dot {
  display: block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #4caf50;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(76, 175, 80, 0.07);
  }
}

.live-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: #1e2a1e;
  margin-bottom: 0.2rem;
}

.live-desc {
  font-size: 0.8rem;
  color: #7a8a70;
}

/* ── Mini Analytics ── */
.analytics-wrap {
  background: #ede8df;
  border-radius: 14px;
  padding: 1.5rem 1.5rem 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  height: 120px;
  margin-bottom: 0.5rem;
}

.bar-wrap {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-end;
}

.bar {
  width: 100%;
  border-radius: 6px 6px 0 0;
  min-height: 6px;
  transition: height 0.5s ease;
  cursor: pointer;
}

.bar:hover {
  filter: brightness(1.1);
}

.chart-labels {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.4rem;
}

.chart-label {
  flex: 1;
  text-align: center;
  font-size: 0.65rem;
  color: #9aaa90;
  letter-spacing: 0.02em;
}

.chart-legend {
  display: flex;
  gap: 1.5rem;
  margin-top: 0.75rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: #7a8a70;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 3px;
}

/* Responsive */
@media (max-width: 900px) {
  .status-grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .status-grid-4 {
    grid-template-columns: 1fr;
  }
}
</style>
