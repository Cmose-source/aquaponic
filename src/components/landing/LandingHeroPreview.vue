<script setup>
const previewSrc =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAgwG-Y7JiuOjfdC30DLN3kxGVv6nF4ZezWk0Z8GoIhnJFzPd65pMs1BYgYsPvqrKHSoMb9AJuPzv70mIPdwUBDnFfQw----OFVPteEnAn1dAKKlUG-yl3b5uhMMz3_IW626mnNSfgEgLSsho3MNDuDp5NBZc02ZTAMSqtGLV-e0d3Y1fJgweekvrs8ts0jXpYxo9SjRYpL1zYEpIEH55F_w5cD0yJ9oZAqMZmGvSKeA0nLJhPTji0hA1_Epask80ygoiYUO6AiknI'
</script>

<template>
  <div class="order-1 w-full md:order-2">
    <div
      class="group relative w-full overflow-hidden rounded-2xl border border-border-muted/50 bg-surface-cream p-2 shadow-xl shadow-primary/10 transition-transform duration-500 hover:shadow-2xl aspect-[4/5] md:aspect-square"
    >
      <img
        :src="previewSrc"
        alt="Pratinjau sistem akuaponik"
        class="h-full w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
</template>
