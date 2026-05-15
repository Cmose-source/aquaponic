<template>
  <aside class="sidebar">
    <div class="sidebar__top">
      <div class="sidebar__brand">
        <div class="sidebar__logo">🌿</div>
        <div class="sidebar__brand-meta">
          <span class="sidebar__brand-name">Dashboard</span>
          <span class="sidebar__brand-subtitle">Smart Garden Control</span>
        </div>
      </div>
      <p class="sidebar__hint">Ringkas, bersih, dan mudah dipahami untuk tampilan dashboard profesional.</p>
    </div>
    <nav class="sidebar__nav">
      <RouterLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="sidebar__link"
        :class="{ 'sidebar__link--active': item.path === currentRoute.path }"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
    <div class="sidebar__footer">
      <p class="sidebar__footer-title">Jaga tampilan tetap premium</p>
      <p class="sidebar__footer-text">Pilih ilustrasi natural dan ikon yang bersih agar antarmuka lebih elegan.</p>
    </div>
  </aside>
</template>
<script setup>
import { RouterLink, useRoute } from 'vue-router'
const navItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Analytics', path: '/analytics' },
  { label: 'Settings', path: '/settings' },
]
const currentRoute = useRoute()
</script>
<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 220px;
  padding: 1.25rem;
  border-radius: 22px;
  background: linear-gradient(180deg, #f6fcf3 0%, #ecf8ed 100%);
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.08);
}
.sidebar__top {
  display: grid;
  gap: 0.85rem;
}
.sidebar__brand {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}
.sidebar__logo {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  font-size: 1.15rem;
  border-radius: 14px;
  background: #e7f7e8;
}
.sidebar__brand-name {
  display: block;
  font-weight: 700;
  color: #1f432a;
  font-size: 0.95rem;
}
.sidebar__brand-subtitle {
  display: block;
  font-size: 0.82rem;
  color: #4f7054;
}
.sidebar__hint,
.sidebar__footer-text {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #4b5c4a;
}
.sidebar__nav {
  display: grid;
  gap: 0.45rem;
  margin: 0.85rem 0;
}
.sidebar__link {
  display: block;
  padding: 0.8rem 0.95rem;
  border-radius: 14px;
  color: #325230;
  background: rgba(58, 107, 70, 0.08);
  font-weight: 600;
  transition: background-color 0.2s ease, color 0.2s ease;
}
.sidebar__link:hover,
.sidebar__link--active {
  background: #255c34;
  color: #ffffff;
}
.sidebar__footer {
  padding-top: 1rem;
  border-top: 1px solid rgba(112, 139, 111, 0.18);
}
.sidebar__footer-title {
  margin-bottom: 0.4rem;
  font-weight: 700;
  color: #213428;
}
@media (max-width: 980px) {
  .sidebar {
    width: 100%;
    min-width: auto;
    border-radius: 22px;
    padding: 1rem;
    background: #ffffff;
    box-shadow: 0 18px 36px rgba(15, 23, 42, 0.06);
  }
  .sidebar__top {
    gap: 0.75rem;
  }
  .sidebar__nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin: 0.85rem 0;
  }
  .sidebar__link {
    flex: 1 1 calc(50% - 0.45rem);
    padding: 0.8rem 0.85rem;
    text-align: center;
  }
  .sidebar__footer {
    display: none;
  }
}
</style>
