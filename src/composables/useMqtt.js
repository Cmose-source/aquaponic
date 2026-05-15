import mqtt from 'mqtt'
import { ref } from 'vue'

// Deklarasi variabel di LUAR fungsi agar menjadi Single Source of Truth (Singleton)
// Dengan begini, 10 komponen pun tidak akan membuat 10 koneksi baru.
const client = ref(null)
const isConnected = ref(false)

// State masing-masing perangkat
const lampStatus = ref('OFF')
const feederStatus = ref('OFF')

export function useMqtt() {
  const connectMqtt = () => {
    // Hindari koneksi ganda jika sebelumnya sudah klik connect
    if (client.value) return

    // Menggunakan broker lokal via WebSockets
    const brokerUrl = 'ws://10.80.80.233:9001/mqtt'
    const options = {
      clientId: `web_client_${Math.random().toString(16).slice(3)}`,
    }

    client.value = mqtt.connect(brokerUrl, options)

    client.value.on('connect', () => {
      isConnected.value = true
      console.log('Berhasil terhubung ke Broker Lokal!')

      // Subscribe ke banyak topik sekaligus
      client.value.subscribe('Isa/Smartlamp')
      client.value.subscribe('Isa/Feeder')
    })

    client.value.on('message', (topic, message) => {
      const msgStr = message.toString()
      console.log(`Pesan diterima dari topik [${topic}]: ${msgStr}`)

      // Pisahkan ke wadahnya masing-masing tergantung topik mana yang membalas
      if (topic === 'Isa/Smartlamp') {
        lampStatus.value = msgStr
      } else if (topic === 'Isa/Feeder') {
        feederStatus.value = msgStr
      }
    })

    client.value.on('error', (err) => {
      console.error('Koneksi MQTT Error: ', err)
      client.value.end()
    })
  }

  // Fungsi untuk mengirim perintah ke topik tertentu
  const controlDevice = (topic, status) => {
    if (client.value && isConnected.value) {
      client.value.publish(topic, status)
      console.log(`Perintah dikirim ke ${topic}: ${status}`)
    } else {
      alert('Belum terhubung ke server MQTT!')
    }
  }

  return {
    client,
    isConnected,
    lampStatus,
    feederStatus,
    connectMqtt,
    controlDevice,
  }
}
