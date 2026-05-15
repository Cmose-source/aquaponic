<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goDashboard = () => router.push('/dashboard')
const goAnalytics = () => router.push('/analytics')
</script>

<template>
  <main class="home-page">
    <section class="hero-home">
      <div class="hero-home__content">
        <span class="hero-label">Smart Aquaponic System</span>
        <h1 class="hero-title">
          Smart Aquaponic<br />
          Monitoring & Automation
        </h1>
        <p class="hero-text">
          Sistem monitoring dan kontrol tanaman serta sirkulasi air berbasis IoT
          realtime untuk greenhouse modern dan smart farming aquaponic.
        </p>

        <div class="hero-actions">
          <button class="btn btn-primary" @click="goDashboard">Tampilkan Dashboard</button>
          <button class="btn btn-secondary" @click="goAnalytics">View Analytics</button>
        </div>
      </div>

      <div class="hero-home__visual">
        <div class="hero-card">
          <img
            src="https://images.unsplash.com/photo-1530836369250-ef72a3649f6d?w=1200&q=80"
            alt="Aquaponic system"
            class="hero-image"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  min-height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  padding: 2rem 1.5rem 3rem;
  background: #f8f3e8;
}

.hero-home {
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 2.5rem;
  align-items: center;
}

.hero-home__content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.12);
  color: #165b3a;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.hero-title {
  margin: 0;
  font-size: clamp(2.5rem, 4vw, 4rem);
  line-height: 1.02;
  color: #1f3325;
  font-weight: 800;
}

.hero-text {
  margin: 0;
  max-width: 540px;
  color: #4c5c47;
  font-size: 1rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
}

.btn {
  border: none;
  border-radius: 12px;
  padding: 0.95rem 1.8rem;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 700;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: #3b6c3d;
  color: #ffffff;
}

.btn-secondary {
  background: rgba(31, 41, 55, 0.08);
  color: #1f2937;
}

.hero-home__visual {
  display: grid;
  place-items: center;
}

.hero-card {
  width: 100%;
  border-radius: 32px;
  overflow: hidden;
  background: #f1eadf;
  padding: 1rem;
  box-shadow: 0 22px 60px rgba(40, 70, 30, 0.08);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 24px;
  object-fit: cover;
}

@media (max-width: 980px) {
  .hero-home {
    grid-template-columns: 1fr;
  }

  .hero-card {
    padding: 0.75rem;
  }
}

@media (max-width: 640px) {
  .home-page {
    min-height: auto;
    padding: 1.5rem 1rem 2rem;
  }

  .hero-title {
    font-size: 2.4rem;
  }

  .btn {
    width: 100%;
  }
}
</style>
