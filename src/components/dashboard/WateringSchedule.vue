<template>
  <section class="watering-schedule">
    <div class="watering-schedule__header">
      <div>
        <p class="watering-schedule__title">Jadwal Penyiraman</p>
        <p class="watering-schedule__subtitle">Atur frekuensi dan durasi otomatis.</p>
      </div>
      <button class="watering-schedule__button" type="button">+ Tambah</button>
    </div>

    <div class="watering-schedule__list">
      <article v-for="item in schedule" :key="item.time" class="schedule-item">
        <div>
          <p class="schedule-item__time">{{ item.time }}</p>
          <p class="schedule-item__days">{{ item.days }}</p>
          <p class="schedule-item__duration">Durasi: {{ item.duration }}</p>
        </div>
        <button class="schedule-item__toggle" :class="{ 'schedule-item__toggle--active': item.active }" @click="toggle(item)" type="button">
          <span></span>
        </button>
      </article>
    </div>

    <div class="watering-schedule__notice">
      <span class="watering-schedule__notice-dot"></span>
      <p>Jadwal berikutnya: <strong>17:00 hari ini</strong> — dalam ~2 jam</p>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const schedule = reactive([
  { time: '06:00', days: 'Sen · Sel · Rab · Kam · Jum · Sab · Min', duration: '5 menit', active: true },
  { time: '17:00', days: 'Sen · Rab · Jum', duration: '3 menit', active: true },
  { time: '12:00', days: 'Sabtu · Minggu', duration: '7 menit', active: false },
])

function toggle(item) {
  item.active = !item.active
}
</script>

<style scoped>
.watering-schedule {
  padding: 1.1rem;
  border-radius: 22px;
  background: #ffffff;
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.06);
  display: grid;
  gap: 0.9rem;
}

.watering-schedule__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
}

.watering-schedule__title {
  font-weight: 700;
  color: #1d4228;
  font-size: 1rem;
}

.watering-schedule__subtitle {
  margin-top: 0.25rem;
  color: #5b7562;
  font-size: 0.88rem;
}

.watering-schedule__button {
  padding: 0.6rem 0.95rem;
  border: none;
  border-radius: 12px;
  background: #245e30;
  color: white;
  font-weight: 700;
  cursor: pointer;
}

.watering-schedule__list {
  display: grid;
  gap: 0.75rem;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem;
  border-radius: 18px;
  background: #f7faf5;
}

.schedule-item__time {
  font-weight: 700;
  color: #214b2f;
  font-size: 1rem;
}

.schedule-item__days,
.schedule-item__duration {
  color: #5c705d;
  font-size: 0.9rem;
}

.schedule-item__toggle {
  width: 2.8rem;
  height: 1.6rem;
  border-radius: 999px;
  border: 1px solid #d6e3da;
  background: #e8f2e7;
  position: relative;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.schedule-item__toggle--active {
  background: linear-gradient(135deg, #3f9242 0%, #2d6d35 100%);
  border-color: #2c7436;
}

.schedule-item__toggle span {
  position: absolute;
  inset: 3px auto auto 3px;
  width: 1.15rem;
  height: 1.15rem;
  border-radius: 50%;
  background: white;
  transition: transform 0.2s ease;
}

.schedule-item__toggle--active span {
  transform: translateX(1.35rem);
}

.watering-schedule__notice {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  border-radius: 18px;
  background: #f1faf3;
  color: #3d6e42;
  font-size: 0.92rem;
}

.watering-schedule__notice-dot {
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 50%;
  background: #4c8c45;
}
</style>