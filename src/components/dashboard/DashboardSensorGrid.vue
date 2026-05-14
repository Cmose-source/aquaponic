<script setup>
import DashboardSensorCard from './DashboardSensorCard.vue'

const sensors = [
  {
    icon: 'grass',
    iconBgClass: 'bg-secondary-container',
    iconTextClass: 'text-primary',
    iconFilled: true,
    status: 'Ideal',
    statusClass:
      'border-border-muted bg-surface-container-low text-on-surface-variant',
    label: 'Kelembapan Tanah',
    value: '68',
    unit: '%',
    progress: 68,
    progressColorClass: 'bg-primary-container',
  },
  {
    icon: 'water_drop',
    iconBgClass: 'bg-blue-100',
    iconTextClass: 'text-status-water',
    iconFilled: true,
    status: 'Normal',
    statusClass:
      'border-border-muted bg-surface-container-low text-on-surface-variant',
    label: 'Level Air',
    value: '450',
    unit: 'L',
    progress: 45,
    progressColorClass: 'bg-status-water',
  },
  {
    icon: 'thermostat',
    iconBgClass: 'bg-error-container',
    iconTextClass: 'text-error',
    iconFilled: true,
    status: 'Tinggi',
    statusClass: 'border-error/20 bg-error/10 text-error',
    label: 'Suhu Air',
    value: '28.5',
    unit: '°C',
    progress: 71,
    progressColorClass: 'bg-error',
  },
  {
    icon: 'science',
    iconBgClass: 'bg-tertiary-fixed',
    iconTextClass: 'text-tertiary',
    iconFilled: true,
    status: 'Seimbang',
    statusClass:
      'border-border-muted bg-surface-container-low text-on-surface-variant',
    label: 'Tingkat pH',
    value: '6.8',
    unit: 'pH',
    progress: 68,
    progressColorClass: 'bg-outline',
  },
]
</script>

<template>
  <section class="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
    <DashboardSensorCard v-for="(s, i) in sensors" :key="i" v-bind="s" />
  </section>
</template>
