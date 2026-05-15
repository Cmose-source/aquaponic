import { defineStore } from 'pinia'
import { ref as vueRef } from 'vue'
import { ref as dbRef, onValue, push, update, remove } from 'firebase/database'
import { getDb } from '@/firebase/realtimeDb.js'

export const useScheduleStore = defineStore('schedule', () => {
  const schedules = vueRef([])
  const isLoading = vueRef(true)
  const firebaseReady = vueRef(Boolean(import.meta.env.VITE_FIREBASE_DATABASE_URL))

  const fetchSchedules = () => {
    const db = getDb()
    if (!db) {
      isLoading.value = false
      firebaseReady.value = false
      return
    }
    firebaseReady.value = true
    const schedulesRef = dbRef(db, 'schedules')
    onValue(schedulesRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        schedules.value = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }))
      } else {
        schedules.value = []
      }
      isLoading.value = false
    })
  }

  const addSchedule = async (timeOn, timeOff, device) => {
    if (!timeOn || !timeOff || !device) return
    const db = getDb()
    if (!db) return
    const nsRef = dbRef(db, 'schedules')
    await push(nsRef, {
      timeOn,
      timeOff,
      device,
      isActive: true,
    })
  }

  const toggleSchedule = async (id, currentStatus) => {
    const db = getDb()
    if (!db) return
    const sRef = dbRef(db, `schedules/${id}`)
    await update(sRef, {
      isActive: !currentStatus,
    })
  }

  const deleteSchedule = async (id) => {
    const db = getDb()
    if (!db) return
    const sRef = dbRef(db, `schedules/${id}`)
    await remove(sRef)
  }

  return {
    schedules,
    isLoading,
    firebaseReady,
    fetchSchedules,
    addSchedule,
    toggleSchedule,
    deleteSchedule,
  }
})
