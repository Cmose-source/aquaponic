<template>
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-badge">AquaSurge - Budidaya Ikan + Tanaman</div>

        <h1 class="hero-heading">
          AquaSurge: Masa Depan<br>
          Budidaya Cerdas
        </h1>

        <p class="hero-subtitle">
          Otomatisasi penuh untuk sistem aquaponik — pantau kualitas air kolam <strong>ikan lele</strong>,
          sirkulasi nutrisi, dan pertumbuhan <strong>tanaman hidroponik</strong> secara realtime dalam satu
          dashboard yang rapi dan mudah dipahami.
        </p>

        <div class="hero-actions">
          <button type="button" class="btn btn-primary" @click="$router.push('/dashboard')">
            Mulai Sekarang
            <svg class="btn-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </button>
          <button type="button" class="btn btn-outline" @click="emit('learn')">
            Pelajari Fitur
          </button>
        </div>
      </div>

      <div class="hero-image-wrap">
        <div class="image-card">
          <img
            :src="heroImage"
            alt="Budidaya ikan lele dan tanaman hidroponik terintegrasi (aquaponik)"
            class="hero-img"
            loading="eager"
            decoding="async"
          />

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImage from '@/assets/image/budidaya_ikan.png'

const emit = defineEmits(['learn'])
</script>

<style scoped>
.hero {
  min-height: calc(100vh - 68px);
  background: #f9fbf7;
  display: flex;
  align-items: center;
  padding: 2.5rem 0 3.5rem;
  position: relative;
}

.hero-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 0.35rem 0.85rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2d4a32;
  background: rgba(136, 192, 87, 0.22);
  border: 1px solid rgba(136, 192, 87, 0.45);
  border-radius: 999px;
}

.hero-heading {
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  line-height: 1.15;
  color: #1b3022;
  letter-spacing: -0.03em;
  margin: 0;
}

.hero-subtitle {
  font-size: 0.98rem;
  line-height: 1.75;
  color: #3d5242;
  max-width: 32rem;
  margin: 0;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding-top: 0.25rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.35rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  border: 2px solid transparent;
}

.btn-primary {
  background: #1b3022;
  color: #fafdf8;
  border-color: #1b3022;
}

.btn-primary:hover {
  background: #14261c;
  border-color: #14261c;
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(27, 48, 34, 0.25);
}

.btn-arrow {
  flex-shrink: 0;
}

.btn-outline {
  background: #ffffff;
  color: #1b3022;
  border-color: #1b3022;
}

.btn-outline:hover {
  background: rgba(136, 192, 87, 0.12);
  border-color: #244030;
  transform: translateY(-1px);
}

.hero-image-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-card {
  position: relative;
  width: 100%;
  max-width: 520px;
  border-radius: 18px;
  overflow: hidden;
  background: #fff;
  box-shadow:
    0 4px 6px rgba(27, 48, 34, 0.04),
    0 20px 50px rgba(27, 48, 34, 0.1);
  border: 1px solid rgba(27, 48, 34, 0.06);
}

.hero-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  aspect-ratio: 4 / 3;
  transition: transform 0.45s ease;
}

.image-card:hover .hero-img {
  transform: scale(1.02);
}

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 2.25rem;
    padding: 0 1.25rem;
  }

  .hero-image-wrap {
    order: -1;
  }

  .image-card {
    max-width: 440px;
    margin: 0 auto;
  }
}
</style>
