<template>
  <div class="alert-badge">
    <div class="alert-badge__icon">✔</div>
    <div>
      <p class="alert-badge__title">{{ title }}</p>
      <p class="alert-badge__detail">{{ detail }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Kondisi Baik' },
  detail: { type: String, default: 'Sensor semua dalam rentang normal dan siap untuk kontrol otomatis.' },
})
</script>

<style scoped>
.alert-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.95rem 1rem;
  border-radius: 18px;
  background: #effaf0;
  border: 1px solid #dff2dc;
}

.alert-badge__icon {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #d7f4dd;
  color: #276233;
  font-size: 1rem;
}

.alert-badge__title {
  font-weight: 700;
  color: #1f432a;
  margin-bottom: 0.15rem;
}

.alert-badge__detail {
  color: #4e6a52;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>