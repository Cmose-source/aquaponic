<template>
  <section class="watering-schedule">
    <div class="watering-schedule__header">
      <div>
        <p class="watering-schedule__title">Jadwal Penyiraman</p>
        <p class="watering-schedule__subtitle">Atur jam nyala dan mati otomatis pompa.</p>
      </div>
      <button class="watering-schedule__button" type="button" @click="showForm = !showForm">
        {{ showForm ? 'Batal' : '+ Tambah' }}
      </button>
    </div>

    <!-- Form Tambah Jadwal -->
    <div v-if="showForm" class="schedule-form" style="flex-wrap: wrap">
      <div class="input-group">
        <label>Perangkat</label>
        <select
          v-model="newDevice"
          required
          style="padding: 0.4rem; border-radius: 8px; border: 1px solid #d6e3da"
        >
          <option value="pump">💧 Pompa Air</option>
          <option value="feeder">🍲 Auto Feeding</option>
        </select>
      </div>
      <div class="input-group">
        <label>Jam Nyala (ON)</label>
        <input type="time" step="1" v-model="newTimeOn" required />
      </div>
      <div class="input-group">
        <label>Jam Mati (OFF)</label>
        <input type="time" step="1" v-model="newTimeOff" required />
      </div>
      <button class="btn-save" @click="handleSave">Simpan</button>
    </div>

    <!-- Daftar Jadwal -->
    <div class="watering-schedule__list">
      <p v-if="scheduleStore.isLoading" style="text-align: center; color: #5b7562">
        Memuat jadwal...
      </p>
      <p
        v-else-if="scheduleStore.schedules.length === 0"
        style="text-align: center; color: #5b7562"
      >
        Belum ada jadwal. Silakan tambah.
      </p>

      <article v-for="item in scheduleStore.schedules" :key="item.id" class="schedule-item">
        <div>
          <p class="schedule-item__time">{{ item.timeOn }} ➔ {{ item.timeOff }}</p>
          <p class="schedule-item__duration">
            <strong :style="{ color: item.device === 'feeder' ? '#c06a3a' : '#245e30' }">
              {{ item.device === 'feeder' ? '🍲 Auto Feeding' : '💧 Pompa Air' }}
            </strong>
          </p>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem">
          <button
            style="
              border: none;
              background: transparent;
              color: red;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
            "
            @click="scheduleStore.deleteSchedule(item.id)"
          >
            Hapus
          </button>

          <button
            class="schedule-item__toggle"
            :class="{ 'schedule-item__toggle--active': item.isActive }"
            @click="scheduleStore.toggleSchedule(item.id, item.isActive)"
            type="button"
          >
            <span></span>
          </button>
        </div>
      </article>
    </div>

    <div class="watering-schedule__notice">
      <span class="watering-schedule__notice-dot"></span>
      <p>Pastikan script node.js berjalan di server Anda agar jadwal ini bekerja.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScheduleStore } from '@/stores/scheduleStore'

const scheduleStore = useScheduleStore()

const showForm = ref(false)
const newTimeOn = ref('')
const newTimeOff = ref('')
const newDevice = ref('pump')

onMounted(() => {
  // Mulai memantau database begitu komponen dirender
  scheduleStore.fetchSchedules()
})

const handleSave = () => {
  if (newTimeOn.value && newTimeOff.value && newDevice.value) {
    scheduleStore.addSchedule(newTimeOn.value, newTimeOff.value, newDevice.value)
    showForm.value = false
    newTimeOn.value = ''
    newTimeOff.value = ''
    newDevice.value = 'pump'
  } else {
    alert('Harap isi Perangkat, Jam Nyala, dan Jam Mati')
  }
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

/* Gaya untuk form agar tampil bagus */
.schedule-form {
  display: flex;
  gap: 0.5rem;
  background: #f1faf3;
  padding: 1rem;
  border-radius: 12px;
  align-items: flex-end;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 0.8rem;
  color: #1d4228;
}

.input-group input {
  padding: 0.4rem;
  border-radius: 8px;
  border: 1px solid #d6e3da;
  outline: none;
}

.btn-save {
  padding: 0.4rem 1rem;
  background: #245e30;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  height: max-content;
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
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
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
