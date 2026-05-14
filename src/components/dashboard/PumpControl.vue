<template>
  <section class="pump-control">
    <div class="pump-control__header">
      <div>
        <p class="pump-control__title">{{ title }}</p>
        <p class="pump-control__description">{{ description }}</p>
      </div>
      <button class="pump-control__switch" :class="{ 'pump-control__switch--on': isOn }" @click="togglePump" type="button">
        <span class="pump-control__switch-knob"></span>
      </button>
    </div>

    <div class="pump-control__status">
      <span class="pump-control__state">{{ isOn ? 'Aktif' : 'Tidak aktif' }}</span>
      <span class="pump-control__state-detail">
        {{ isOn ? `Pompa beroperasi pada ${flow}% flow` : 'Tekan untuk hidupkan pompa manual' }}
      </span>
    </div>

    <dl class="pump-control__metrics">
      <div>
        <dt>Flow</dt>
        <dd>{{ flow }}%</dd>
      </div>
      <div>
        <dt>Total durasi</dt>
        <dd>12m</dd>
      </div>
      <div>
        <dt>Terakhir aktif</dt>
        <dd>14:32</dd>
      </div>
    </dl>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Pompa Air' },
  description: { type: String, default: 'Kontrol manual dan ringkasan aktivitas.' },
  initialOn: { type: Boolean, default: false },
  initialFlow: { type: Number, default: 50 },
})

const isOn = ref(props.initialOn)
const flow = ref(props.initialFlow)

function togglePump() {
  isOn.value = !isOn.value
}
</script>

<style scoped>
.pump-control {
  padding: 1.1rem;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid rgba(148, 163, 184, 0.2);
  display: grid;
  gap: 0.95rem;
}

.pump-control__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
}

.pump-control__title {
  font-weight: 700;
  color: #1d3f28;
  font-size: 1rem;
}

.pump-control__description {
  margin-top: 0.3rem;
  color: #597260;
  font-size: 0.88rem;
}

.pump-control__switch {
  width: 3rem;
  height: 1.7rem;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  background: #eef2ff;
  position: relative;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.pump-control__switch--on {
  background: #10b981;
  border-color: #10b981;
}

.pump-control__switch-knob {
  position: absolute;
  left: 4px;
  top: 4px;
  width: 1.35rem;
  height: 1.35rem;
  border-radius: 50%;
  background: #ffffff;
  transition: transform 0.2s ease;
}

.pump-control__switch--on .pump-control__switch-knob {
  transform: translateX(1.45rem);
}

.pump-control__status {
  display: grid;
  gap: 0.25rem;
  color: #4f6a57;
}

.pump-control__state {
  font-weight: 700;
  color: #204529;
}

.pump-control__metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.pump-control__metrics dt {
  font-size: 0.82rem;
  color: #718775;
}

.pump-control__metrics dd {
  margin-top: 0.2rem;
  font-weight: 700;
  color: #1f402a;
  font-size: 1rem;
}
</style>
