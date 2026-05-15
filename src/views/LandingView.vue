<template>
  <main class="landing-view">
    <HeroSection @learn="scrollTo('features')" />

    <section id="features" class="features-section">
      <div class="container">
        <h2 class="section-title">Fitur Unggulan</h2>
        <p class="section-subtitle">
          Ringkas kondisi kolam lele di dashboard, dukung keputusan operasi lewat analytics, dan rapikan preferensi
          di pengaturan — semuanya tetap dalam satu alur kerja.
        </p>

        <div class="features-grid">
          <article
            v-for="feature in features"
            :key="feature.id"
            class="feature-card"
          >
            <div class="feature-icon-wrap" aria-hidden="true">
              <span class="material-symbols-outlined feature-material-icon">{{ feature.icon }}</span>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <footer class="landing-footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <span class="footer-logo-dot" aria-hidden="true"></span>
          <span>@ Azza, @ Farrel, @ Hito, @ Isa</span>
        </div>
        <nav class="footer-links" aria-label="Footer">
          <router-link to="/about" class="footer-link">Tentang Kami</router-link>
          <a href="#" class="footer-link" @click.prevent>Kebijakan Privasi</a>
          <a href="#" class="footer-link" @click.prevent>Kontak</a>
        </nav>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '@/components/landing/HeroSection.vue'

const features = ref([
  {
    id: 1,
    icon: 'dashboard',
    title: 'Dashboard',
    description:
      'Pusat ringkasan kualitas air, suhu, dan kelembaban growbed secara realtime. Sensor tersusun rapi agar Anda cepat memahami kondisi kolam lalu bertindak tepat.',
  },
  {
    id: 2,
    icon: 'analytics',
    title: 'Analytics',
    description:
      'Gali pola dari data sensor untuk mengarahkan pompa, aerator, dan jadwal sirkulasi secara terukur — kurangi pekerjaan manual sambil menjaga stabilitas kolam serta tanaman.',
  },
  {
    id: 3,
    icon: 'settings',
    title: 'Settings',
    description:
      'Atur preferensi sistem, ambang peringatan, dan akses wawasan mendalam tentang tren tanaman serta perkiraan kondisi air — mendukung keputusan jangka panjang dan panen yang lebih konsisten.',
  },
])

const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.landing-view {
  width: 100%;
  overflow-x: hidden;
  background: #f9fbf7;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
}

.features-section {
  padding: 4.5rem 0 5rem;
  background: #f9fbf7;
}

.section-title {
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 800;
  text-align: center;
  margin: 0 0 0.75rem;
  letter-spacing: -0.03em;
  color: #1b3022;
}

.section-subtitle {
  font-size: 1rem;
  text-align: center;
  color: #3d5242;
  margin: 0 auto 2.75rem;
  max-width: 36rem;
  line-height: 1.65;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.feature-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 1.75rem 1.5rem;
  text-align: left;
  border: 1px solid rgba(27, 48, 34, 0.06);
  box-shadow: 0 8px 32px rgba(27, 48, 34, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(27, 48, 34, 0.1);
}

.feature-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.1rem;
  background: rgba(136, 192, 87, 0.18);
  color: #4a7a38;
}

.feature-material-icon {
  font-size: 1.75rem;
  line-height: 1;
  font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24;
}

.feature-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: #1b3022;
}

.feature-description {
  font-size: 0.9rem;
  line-height: 1.65;
  color: #4a5c50;
  margin: 0;
}

.landing-footer {
  border-top: 1px solid rgba(27, 48, 34, 0.08);
  background: #f4f7f2;
  padding: 1.35rem 0;
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: #1b3022;
}

.footer-logo-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #88c057;
  flex-shrink: 0;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.footer-link {
  font-size: 0.88rem;
  font-weight: 500;
  color: #3d5242;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #1b3022;
}

@media (max-width: 900px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
