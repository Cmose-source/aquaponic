<template>
  <main class="landing-view">
    <!-- Hero Section -->
    <HeroSection @start="scrollTo('features')" @learn="scrollTo('features')" />

    <!-- Features Section -->
    <section id="features" class="features-section">
      <div class="container">
        <h2 class="section-title gradient-text">Powerful Features</h2>
        <p class="section-subtitle">Everything you need for modern aquaponic farming</p>

        <div class="features-grid">
          <div
            v-for="feature in features"
            :key="feature.id"
            class="feature-card glass-effect-dark"
          >
            <div class="feature-icon" :class="`icon-${feature.icon}`">
              <div class="icon-inner"></div>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
            <div class="feature-badge">{{ feature.badge }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.id" class="stat-card glass-effect-dark">
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-text">{{ stat.text }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title gradient-text">Ready to Transform Your Farm?</h2>
          <p class="cta-subtitle">Join thousands of farmers already using AquaPonic AI</p>
          <button class="btn btn-large" @click="navigateTo('/register')">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HeroSection from '@/components/landing/HeroSection.vue'

const router = useRouter()

const features = ref([
  {
    id: 1,
    icon: 'monitoring',
    title: 'Real-time Monitoring',
    description: 'Track all sensor data with clean dashboards and instant alerts',
    badge: 'Live Updates'
  },
  {
    id: 2,
    icon: 'ai',
    title: 'AI-Powered Analytics',
    description: 'Get intelligent insights and predictions for optimal growth',
    badge: 'ML Powered'
  },
  {
    id: 3,
    icon: 'control',
    title: 'Automated Control',
    description: 'Auto-adjust pumps, lights, and nutrients based on conditions',
    badge: 'Smart Control'
  },
  {
    id: 4,
    icon: 'data',
    title: 'Clean Data Visualization',
    description: 'Visualize complex data with clear charts and simple insights',
    badge: 'Advanced'
  },
  {
    id: 5,
    icon: 'mobile',
    title: 'Mobile App',
    description: 'Full control and monitoring on the go, anywhere, anytime',
    badge: 'iOS & Android'
  },
  {
    id: 6,
    icon: 'support',
    title: '24/7 Support',
    description: 'Expert support team ready to help with any questions',
    badge: 'Premium'
  }
])

const stats = ref([
  { id: 1, number: '99.8%', text: 'System Uptime' },
  { id: 2, number: '50K+', text: 'Active Users' },
  { id: 3, number: '1M+', text: 'Data Points Daily' },
  { id: 4, number: '24/7', text: 'Monitoring' }
])

const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const navigateTo = (path) => {
  router.push(path)
}
</script>

<style scoped>
.landing-view {
  width: 100%;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Features Section */
.features-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(16, 185, 129, 0.05));
  position: relative;
}

.features-section::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.1), transparent);
  border-radius: 50%;
  filter: blur(80px);
}

.features-section::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.1), transparent);
  border-radius: 50%;
  filter: blur(80px);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin: 0 0 1rem;
  letter-spacing: -1px;
}

.section-subtitle {
  font-size: 1.1rem;
  text-align: center;
  color: #0ea5e9;
  margin: 0 0 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.feature-card {
  padding: 2rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.08);
}

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.icon-monitoring {
  background: rgba(0, 212, 255, 0.1);
  border-color: #00d4ff;
}

.icon-ai {
  background: rgba(139, 92, 246, 0.1);
  border-color: #8b5cf6;
}

.icon-control {
  background: rgba(16, 185, 129, 0.1);
  border-color: #10b981;
}

.icon-data {
  background: rgba(59, 130, 246, 0.1);
  border-color: #3b82f6;
}

.icon-mobile {
  background: rgba(236, 72, 153, 0.1);
  border-color: #ec4899;
}

.icon-support {
  background: rgba(251, 146, 60, 0.1);
  border-color: #fb923c;
}

.icon-inner {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.icon-monitoring .icon-inner { background: #00d4ff; }
.icon-ai .icon-inner { background: #8b5cf6; }
.icon-control .icon-inner { background: #10b981; }
.icon-data .icon-inner { background: #3b82f6; }
.icon-mobile .icon-inner { background: #ec4899; }
.icon-support .icon-inner { background: #fb923c; }

.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: #ffffff;
}

.feature-description {
  font-size: 0.95rem;
  color: #0ea5e9;
  margin: 0;
  line-height: 1.6;
  opacity: 0.9;
}

.feature-badge {
  padding: 0.4rem 0.8rem;
  background: rgba(0, 212, 255, 0.15);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 6px;
  font-size: 0.75rem;
  color: #00d4ff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Stats Section */
.stats-section {
  padding: 4rem 0;
  background: rgba(0, 0, 0, 0.3);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-text {
  font-size: 1rem;
  color: #0ea5e9;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(16, 185, 129, 0.1));
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(0, 212, 255, 0.05), transparent);
  pointer-events: none;
}

.cta-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1rem;
  letter-spacing: -1px;
}

.cta-subtitle {
  font-size: 1.1rem;
  color: #0ea5e9;
  margin: 0 0 2rem;
  opacity: 0.9;
}

.btn-large {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  background: linear-gradient(135deg, #00d4ff, #0ea5e9);
  color: #0f172a;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-large:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0, 212, 255, 0.5);
}

@media (max-width: 768px) {
  .features-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-title {
    font-size: 1.75rem;
  }
}
</style>
