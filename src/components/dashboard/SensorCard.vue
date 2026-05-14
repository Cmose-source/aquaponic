<template>
  <article class="sensor-card">
    <div class="sensor-card__header">
      <div>
        <p class="sensor-card__label">{{ title }}</p>
        <p class="sensor-card__subtitle">{{ subtitle }}</p>
      </div>
      <span class="sensor-card__status">{{ status }}</span>
    </div>

    <div class="sensor-card__metric">
      <span>{{ value }}</span>
      <small>{{ unit }}</small>
    </div>

    <div class="sensor-card__meter">
      <div class="sensor-card__meter-track">
        <div class="sensor-card__meter-fill" :style="{ width: progressValue + '%' }"></div>
      </div>
      <span class="sensor-card__range">{{ computedRangeText }}</span>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Kelembapan Tanah' },
  subtitle: { type: String, default: 'Ideal 40–80%' },
  value: { type: [String, Number], default: 66 },
  unit: { type: String, default: '%' },
  status: { type: String, default: 'Kondisi Baik' },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  progress: { type: Number, default: null },
  rangeText: { type: String, default: '' },
})

const numericValue = computed(() => Number(props.value) || 0)

const progressValue = computed(() => {
  if (props.progress !== null && props.progress !== undefined) {
    return Math.min(100, Math.max(0, props.progress))
  }
  if (props.max > props.min) {
    return Math.round(((numericValue.value - props.min) / (props.max - props.min)) * 100)
  }
  return 0
})

const computedRangeText = computed(() => {
  if (props.rangeText) {
    return props.rangeText
  }
  if (props.min !== undefined && props.max !== undefined) {
    return `Ideal ${props.min}${props.unit} — ${props.max}${props.unit}`
  }
  return ''
})
</script>

<style scoped>
.sensor-card {
  display: grid;
  gap: 1rem;
  padding: 1.1rem;
  border-radius: 22px;
  background: #ffffff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.sensor-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
}

.sensor-card__label {
  font-size: 0.95rem;
  font-weight: 700;
  color: #23502c;
}

.sensor-card__subtitle {
  margin-top: 0.35rem;
  font-size: 0.9rem;
  color: #5f7e64;
}

.sensor-card__status {
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: #effaf0;
  color: #266332;
  font-size: 0.8rem;
  font-weight: 700;
}

.sensor-card__metric {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  font-size: 2.4rem;
  font-weight: 800;
  color: #21422e;
}

.sensor-card__metric small {
  font-size: 1rem;
  color: #5f7e64;
}

.sensor-card__meter {
  display: grid;
  gap: 0.6rem;
}

.sensor-card__meter-track {
  width: 100%;
  height: 12px;
  border-radius: 999px;
  background: #e9f5ea;
  overflow: hidden;
}

.sensor-card__meter-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #4fbb6a 0%, #2d8d42 100%);
}

.sensor-card__range {
  font-size: 0.9rem;
  color: #6a7e68;
}
</style>
