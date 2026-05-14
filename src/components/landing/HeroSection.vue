<template>
  <section class="hero">
    <div class="hero-inner">
      <!-- Left: Text Content -->
      <div class="hero-content">
        <div class="hero-eyebrow">
          <span class="eyebrow-dot"></span>
          IoT Realtime Monitoring
        </div>

        <h1 class="hero-heading">
          Smart Aquaponic<br>
          Monitoring &amp;<br>
          Automation
        </h1>

        <p class="hero-subtitle">
          Sistem monitoring dan kontrol tanaman serta sirkulasi air berbasis IoT
          realtime untuk greenhouse modern dan smart farming aquaponic.
        </p>

        <div class="hero-actions">
          <button class="btn btn-primary" @click="$router.push('/dashboard')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            Open Dashboard
          </button>
          <button class="btn btn-outline" @click="$router.push('/analytics')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            View Analytics
          </button>
        </div>

        <!-- Stats row -->
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-value">8</span>
            <span class="stat-label">Sensor Aktif</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">3</span>
            <span class="stat-label">Pompa Terhubung</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">99%</span>
            <span class="stat-label">Uptime</span>
          </div>
        </div>
      </div>

      <!-- Right: Image Card -->
      <div class="hero-image-wrap">
        <div class="image-card">
          <!-- Floating sensor badges -->
          <div class="sensor-badge badge-ph">
            <span class="badge-label">pH Level</span>
            <span class="badge-value">7.2</span>
          </div>
          <div class="sensor-badge badge-temp">
            <span class="badge-label">Suhu Air</span>
            <span class="badge-value">26°C</span>
          </div>

          <img
            src="https://images.unsplash.com/photo-1585155784229-aff921ccfa12?w=700&q=80"
            alt="Aquaponic System"
            class="hero-img"
          />
        </div>

        <!-- Decorative circle -->
        <div class="deco-ring"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No props needed — static hero section
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background: #f0ece4;
  display: flex;
  align-items: center;
  padding-top: 68px; /* navbar height */
  overflow: hidden;
  position: relative;
}

/* Subtle background texture */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 15% 85%, rgba(90, 122, 90, 0.07) 0%, transparent 50%),
    radial-gradient(circle at 85% 15%, rgba(140, 160, 100, 0.06) 0%, transparent 45%);
  pointer-events: none;
}

.hero-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 1;
}

/* ── Left Content ── */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #5a7a40;
  background: rgba(90, 122, 64, 0.1);
  border: 1px solid rgba(90, 122, 64, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  width: fit-content;
}

.eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #5a7a40;
  animation: blink 2s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

.hero-heading {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: clamp(2.4rem, 4vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  color: #1e2a1e;
  letter-spacing: -0.02em;
  margin: 0;
}

.hero-subtitle {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
  color: #5a6a50;
  max-width: 480px;
  margin: 0;
}

/* Buttons */
.hero-actions {
  display: flex;
  gap: 0.875rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.01em;
  border: 2px solid transparent;
}

.btn-primary {
  background: #3d5c2a;
  color: #fff;
  border-color: #3d5c2a;
}

.btn-primary:hover {
  background: #2e4520;
  border-color: #2e4520;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(61, 92, 42, 0.3);
}

.btn-outline {
  background: transparent;
  color: #3d5c2a;
  border-color: #3d5c2a;
}

.btn-outline:hover {
  background: rgba(61, 92, 42, 0.06);
  transform: translateY(-1px);
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-top: 0.5rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.stat-value {
  font-family: 'Georgia', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e2a1e;
  line-height: 1;
}

.stat-label {
  font-size: 0.72rem;
  color: #7a8a70;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.stat-divider {
  width: 1px;
  height: 36px;
  background: rgba(0,0,0,0.12);
}

/* ── Right Image ── */
.hero-image-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow:
    0 4px 6px rgba(0,0,0,0.04),
    0 20px 60px rgba(0,0,0,0.1),
    inset 0 0 0 1px rgba(255,255,255,0.6);
  background: #e8e0d4;
  width: 100%;
  max-width: 560px;
}

.hero-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  aspect-ratio: 4/3;
  transition: transform 0.5s ease;
}

.image-card:hover .hero-img {
  transform: scale(1.02);
}

/* Floating sensor badges */
.sensor-badge {
  position: absolute;
  z-index: 10;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.8);
  border-radius: 12px;
  padding: 0.45rem 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  animation: float 4s ease-in-out infinite;
}

.badge-ph {
  top: 1.2rem;
  left: 1.2rem;
  animation-delay: 0s;
}

.badge-temp {
  bottom: 1.5rem;
  right: 1.2rem;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-6px); }
}

.badge-label {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #7a8a70;
}

.badge-value {
  font-family: 'Georgia', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2e4520;
}

/* Decorative ring behind card */
.deco-ring {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  border: 2px dashed rgba(90, 122, 64, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  animation: rotate 30s linear infinite;
  z-index: 0;
}

@keyframes rotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to   { transform: translate(-50%, -50%) rotate(360deg); }
}

/* Responsive */
@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 3rem 1.5rem;
  }

  .hero-image-wrap {
    order: -1;
  }

  .image-card {
    max-width: 420px;
  }

  .deco-ring {
    display: none;
  }
}
</style>
