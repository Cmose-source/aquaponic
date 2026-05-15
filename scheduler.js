import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'
import mqtt from 'mqtt'
import 'dotenv/config' // Import dotenv untuk membaca file .env

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VITE_FIREBASE_DATABASE_URL,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
}
const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

const MQTT_BROKER = 'mqtt://10.80.80.233:1883'
const client = mqtt.connect(MQTT_BROKER)

client.on('connect', () => {
  console.log('✅ Scheduler Bot berhasil terhubung ke MQTT Broker!')
})

let schedules = []
const schedulesRef = ref(db, 'schedules')
onValue(schedulesRef, (snapshot) => {
  const data = snapshot.val()
  if (data) {
    schedules = Object.keys(data).map((key) => ({ id: key, ...data[key] }))
    console.log(`📋 Jadwal diperbarui: Terdapat ${schedules.length} jadwal aktif/non-aktif.`)
  } else {
    schedules = []
    console.log('📋 Belum ada jadwal di database.')
  }
})

function normalizeTime(timeStr) {
  if (timeStr && timeStr.split(':').length === 2) {
    return timeStr + ':00'
  }
  return timeStr
}

console.log('⏳ Scheduler berjalan... Mendukung Jam:Menit:Detik ...')
setInterval(() => {
  const now = new Date()
  const currentHour = now.getHours().toString().padStart(2, '0')
  const currentMinute = now.getMinutes().toString().padStart(2, '0')
  const currentSecond = now.getSeconds().toString().padStart(2, '0')

  const currentTime = `${currentHour}:${currentMinute}:${currentSecond}`

  schedules.forEach((schedule) => {
    if (schedule.isActive) {
      const scheduleTimeOn = normalizeTime(schedule.timeOn)
      const scheduleTimeOff = normalizeTime(schedule.timeOff)

      // Tentukan MQTT topik berdasarkan tipe perangkat pilihan pengguna
      const currentTopic = schedule.device === 'feeder' ? 'Isa/Feeder' : 'Isa/Smartlamp'
      const deviceName = schedule.device === 'feeder' ? 'Automatic Feeding' : 'Pompa Air'

      if (currentTime === scheduleTimeOn) {
        console.log(`⏰ [${currentTime}] MENGHIDUPKAN ${deviceName}! (Topik: ${currentTopic} - ON)`)
        client.publish(currentTopic, 'ON')
      }

      if (currentTime === scheduleTimeOff) {
        console.log(`⏰ [${currentTime}] MEMATIKAN ${deviceName}! (Topik: ${currentTopic} - OFF)`)
        client.publish(currentTopic, 'OFF')
      }
    }
  })
}, 1000)
