import { defineStore } from "pinia";
import { ref as vueRef } from "vue";
import { ref as dbRef, onValue, push, update, remove } from "firebase/database";
import db from "@/firebase/realtimeDb.js";

export const useScheduleStore = defineStore("schedule", () => {
  const schedules = vueRef([]);
  const isLoading = vueRef(true);

  // 1. Ambil data dari Firebase secara Real-Time
  const fetchSchedules = () => {
    const schedulesRef = dbRef(db, "schedules");
    onValue(schedulesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const parsedArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        schedules.value = parsedArray;
      } else {
        schedules.value = [];
      }
      isLoading.value = false;
    });
  };

  // 2. Tambah Jadwal Baru ke Firebase (Mendukung pemilihan divice)
  const addSchedule = async (timeOn, timeOff, device) => {
    if (!timeOn || !timeOff || !device) return;
    const nsRef = dbRef(db, "schedules");
    await push(nsRef, {
      timeOn,
      timeOff,
      device: device, // Akan berisi "pump" atau "feeder"
      isActive: true,
    });
  };

  // 3. Menghidupkan / Mematikan Jadwal
  const toggleSchedule = async (id, currentStatus) => {
    const sRef = dbRef(db, `schedules/${id}`);
    await update(sRef, {
      isActive: !currentStatus,
    });
  };

  // 4. Hapus Jadwal dari Firebase
  const deleteSchedule = async (id) => {
    const sRef = dbRef(db, `schedules/${id}`);
    await remove(sRef);
  };

  return {
    schedules,
    isLoading,
    fetchSchedules,
    addSchedule,
    toggleSchedule,
    deleteSchedule,
  };
});
