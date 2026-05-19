<template>
  <article class="chart-card">
    <div class="chart-card__header">
      <div>
        <p class="chart-card__title">{{ title }}</p>
        <p class="chart-card__subtitle">{{ subtitle }}</p>
      </div>
      <span class="chart-card__indicator">{{ indicator }}</span>
    </div>

    <div class="chart-card__summary">
      <div>
        <h2>
          {{ value }}<small>{{ unit }}</small>
        </h2>
        <p>{{ summaryText }}</p>
      </div>
      <div class="chart-card__trend">{{ trend }}</div>
    </div>

    <svg viewBox="0 0 320 140" class="chart-card__chart" aria-hidden="true">
      <path :d="areaPath" class="chart-card__area" />
      <path :d="linePath" class="chart-card__line" />
      <g v-for="(point, index) in points" :key="index">
        <circle :cx="point.x" :cy="point.y" r="4.5" class="chart-card__dot" />
      </g>
    </svg>

    <div class="chart-card__labels">
      <span v-for="(label, idx) in chartLabels" :key="'lbl-' + idx">{{ label }}</span>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Kelembapan Harian' },
  subtitle: { type: String, default: 'Tren sensor selama 7 hari terakhir' },
  indicator: { type: String, default: 'Aktif' },
  value: { type: [String, Number], default: 72 },
  unit: { type: String, default: '%' },
  summaryText: { type: String, default: 'Rata-rata hari ini' },
  trend: { type: String, default: '+6.2% vs kemarin' },
  series: { type: Array, default: () => [0, 0, 0, 0, 0, 0, 0] },
  chartLabels: { type: Array, default: () => ['1', '2', '3', '4', '5', '6', '7'] },
})

const points = computed(() => {
  const max = Math.max(...props.series, 1)
  const min = Math.min(...props.series)
  const range = max - min || 1

  const gap = 260 / Math.max(props.series.length - 1, 1)
  return props.series.map((value, index) => {
    const x = 40 + index * gap
    const y = 120 - ((value - min) / range) * 80
    return { x, y }
  })
})

const linePath = computed(() => {
  return points.value.reduce((path, point, index) => {
    return index === 0 ? `M ${point.x} ${point.y}` : `${path} L ${point.x} ${point.y}`
  }, '')
})

const areaPath = computed(() => `${linePath.value} L 300 120 L 40 120 Z`)
</script>

<style scoped>
.chart-card {
  padding: 1.2rem;
  border-radius: 22px;
  background: #ffffff;
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.06);
  display: grid;
  gap: 1rem;
}

.chart-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
}

.chart-card__title {
  font-weight: 700;
  color: #1f432a;
  font-size: 1rem;
}

.chart-card__subtitle {
  margin-top: 0.3rem;
  color: #576d59;
  font-size: 0.88rem;
}

.chart-card__indicator {
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: #effaf0;
  color: #25643f;
  font-weight: 700;
  font-size: 0.9rem;
}

.chart-card__summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
}

.chart-card__summary h2 {
  font-size: 2rem;
  margin: 0;
  color: #1f432a;
}

.chart-card__summary small {
  font-size: 1.1rem;
  color: #5f7e64;
}

.chart-card__summary p {
  margin: 0.3rem 0 0;
  color: #5a705a;
}

.chart-card__trend {
  color: #2a7b3d;
  font-weight: 700;
}

.chart-card__chart {
  width: 100%;
  height: 140px;
}

.chart-card__line {
  fill: none;
  stroke: #2f8c44;
  stroke-width: 4;
  stroke-linecap: round;
}

.chart-card__area {
  fill: rgba(47, 140, 68, 0.16);
}

.chart-card__dot {
  fill: #ffffff;
  stroke: #2f8c44;
  stroke-width: 3;
}

.chart-card__labels {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  color: #7c8a79;
  font-size: 0.82rem;
}
</style>
