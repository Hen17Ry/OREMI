<template>
  <div class="welcome-wrapper">
    <h1 class="welcome-title">
      Welcome On <span class="brand">Oremi</span> your friend by <span class="brand-afg">AFG</span>
    </h1>
  </div>
</template>

<script setup>
// Aucun JS nécessaire
</script>

<style scoped>
.welcome-wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4b0082, #00bcd4);
  color: white;
  padding: 2rem;
  text-align: center;
}

.welcome-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.3;
  max-width: 90%;
}

.brand {
  color: #ffeb3b; /* Jaune pour Oremi */
}

.brand-afg {
  color: #00ffcc; /* Vert turquoise clair pour AFG */
}
</style>
