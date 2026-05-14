import { ref, computed, onMounted, onUnmounted } from 'vue'

function pad2(n) {
  return String(n).padStart(2, '0')
}

/** Waktu lokal 24 jam, format 19.34.53 */
export function useLiveClockDots() {
  const now = ref(new Date())
  let timerId

  onMounted(() => {
    timerId = window.setInterval(() => {
      now.value = new Date()
    }, 1000)
  })

  onUnmounted(() => {
    if (timerId != null) window.clearInterval(timerId)
  })

  const timeDots = computed(() => {
    const d = now.value
    return `${pad2(d.getHours())}.${pad2(d.getMinutes())}.${pad2(d.getSeconds())}`
  })

  const datetimeIso = computed(() => now.value.toISOString())

  return { timeDots, datetimeIso }
}
