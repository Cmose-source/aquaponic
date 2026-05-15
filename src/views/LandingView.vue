<template>
  <main class="landing-view">
    <HeroSection @learn="scrollTo('features')" />

    <section id="features" class="features-section">
      <div class="container">
        <h2 class="section-title">Fitur Unggulan</h2>
        <p class="section-subtitle">
          Pantau kolam lele, kendalikan peralatan, dan pahami data pertumbuhan tanaman dalam satu alur kerja.
        </p>

        <div class="features-grid">
          <article
            v-for="feature in features"
            :key="feature.id"
            class="feature-card"
          >
            <div class="feature-icon-wrap" aria-hidden="true">
              <svg v-if="feature.icon === 'chart'" class="feature-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 3v18h18"/>
                <path d="M7 16l4-4 4 4 6-6"/>
              </svg>
              <svg v-else-if="feature.icon === 'robot'" class="feature-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="5" y="8" width="14" height="10" rx="2"/>
                <path d="M9 8V6a3 3 0 0 1 6 0v2"/>
                <circle cx="9.5" cy="13" r="1" fill="currentColor" stroke="none"/>
                <circle cx="14.5" cy="13" r="1" fill="currentColor" stroke="none"/>
                <path d="M12 16v1"/>
              </svg>
              <svg v-else class="feature-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 21V9"/>
              </svg>
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
    icon: 'chart',
    title: 'Monitoring',
    description:
      'Pantau kualitas air, suhu, dan kelembaban growbed secara realtime. Data sensor tersaji rapi agar Anda cepat mengambil keputusan.',
  },
  {
    id: 2,
    icon: 'robot',
    title: 'Automation',
    description:
      'Kontrol cerdas untuk pompa, aerator, dan jadwal sirkulasi — kurangi pekerjaan manual dan jaga stabilitas kolam serta tanaman.',
  },
  {
    id: 3,
    icon: 'table',
    title: 'Analytics',
    description:
      'Wawasan mendalam tentang tren pertumbuhan tanaman dan prediksi kondisi air, siap mendukung panen yang lebih konsisten.',
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

.feature-svg {
  width: 26px;
  height: 26px;
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
