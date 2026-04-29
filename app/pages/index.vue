<script setup lang="ts">
useHead({
  title: 'ThAi — Coming Soon',
  meta: [
    { name: 'description', content: 'ThAi sta arrivando. L\'app che ti spiega i referti medici con l\'AI.' },
    { property: 'og:title', content: 'ThAi — Coming Soon' },
    { property: 'og:description', content: 'ThAi sta arrivando. L\'app che ti spiega i referti medici con l\'AI.' },
    { name: 'twitter:title', content: 'ThAi — Coming Soon' },
    { name: 'twitter:description', content: 'ThAi sta arrivando. L\'app che ti spiega i referti medici con l\'AI.' },
  ],
})
</script>

<template>
  <main class="coming-soon">
    <div class="bg-orb bg-orb--top" aria-hidden="true" />
    <div class="bg-orb bg-orb--bottom" aria-hidden="true" />

    <div class="content">
      <NuxtImg
        src="/images/logo.webp"
        alt="ThAi"
        width="96"
        height="96"
        format="webp"
        loading="eager"
        class="logo pulse-glow"
      />

      <h1 class="brand">ThAi</h1>

      <p class="tagline">Stiamo preparando qualcosa di speciale</p>

      <p class="subtitle">
        L'app che ti spiega i referti medici con l'intelligenza artificiale.<br>
        Torna presto.
      </p>

      <div class="dots" aria-hidden="true">
        <span /><span /><span />
      </div>
    </div>

    <footer class="footer">© 2026 BerviFix</footer>
  </main>
</template>

<style scoped>
.coming-soon {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  background: #0f172a;
  overflow: hidden;
  font-family: 'Lexend', system-ui, sans-serif;
  color: #f8fafc;
  text-align: center;
}

.bg-orb {
  position: absolute;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.35;
  pointer-events: none;
}

.bg-orb--top {
  top: -160px;
  left: -120px;
  background: #536DFE;
}

.bg-orb--bottom {
  bottom: -180px;
  right: -140px;
  background: #8C9EFF;
}

.content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  max-width: 640px;
}

.logo {
  width: 96px;
  height: 96px;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(83, 109, 254, 0.4);
}

.brand {
  font-family: 'Montserrat Alternates', 'Lexend', sans-serif;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #8C9EFF 0%, #536DFE 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
}

.tagline {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 500;
  margin: 0;
  color: #f8fafc;
}

.subtitle {
  font-size: clamp(0.95rem, 2vw, 1.125rem);
  font-weight: 300;
  line-height: 1.6;
  margin: 0;
  color: #cbd5e1;
}

.dots {
  display: flex;
  gap: 0.6rem;
  margin-top: 1.5rem;
}

.dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #536DFE;
  animation: bounce 1.4s ease-in-out infinite;
}

.dots span:nth-child(2) {
  animation-delay: 0.2s;
  background: #7889FF;
}

.dots span:nth-child(3) {
  animation-delay: 0.4s;
  background: #8C9EFF;
}

@keyframes bounce {
  0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
  40% { transform: translateY(-10px); opacity: 1; }
}

.footer {
  position: relative;
  z-index: 1;
  margin-top: 3rem;
  font-size: 0.85rem;
  color: #64748b;
  letter-spacing: 0.02em;
}

@media (prefers-reduced-motion: reduce) {
  .logo,
  .dots span {
    animation: none;
  }
}
</style>
