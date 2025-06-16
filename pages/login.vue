<template>
  <div class="login-wrapper">
    <div class="login-card">
      <h2 class="title">Connectez-vous</h2>

      <div class="logo-container">
        <img src="/afg.png" alt="AFG Assurances" class="logo">
      </div>

      <h1 class="subtitle">Identifiez-vous pour continuer</h1>

      <div class="form">
        <div class="input-group">
          <span class="flag">🇧🇯</span>
          <span class="dial-code">229</span>
          <span class="country">(Bénin)</span>
          <span class="arrow">▾</span>
        </div>

        <div class="input-icon">
          <span class="phone-icon">📞</span>
          <input type="tel" placeholder="Numéro de téléphone">
        </div>

        <button class="btn">Continuer</button>

        <p class="terms">
          En continuant, vous acceptez les
          <a href="#">conditions d'utilisation</a> et
          <a href="#">politiques de confidentialités</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Aucun JS nécessaire pour l'instant
</script>

<style scoped>
/* ==== FOND ==== */
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #888e96;
  padding: 2rem;
}

/* ==== CARTE ==== */
.login-card {
  background: #fff;
  border-radius: 24px;
  padding: 3rem 2.5rem;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
  text-align: center;
}

/* ==== TITRES ==== */
.title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #111;
}

.subtitle {
  font-size: 2.1rem;
  font-weight: 800;
  margin: 2rem 0 2.5rem;
  color: #000;
}

/* ==== LOGOS ==== */
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.logo {
  height: 48px;
  object-fit: contain;
}

.by {
  font-size: 1.2rem;
  color: #444;
}

/* ==== FORMULAIRE ==== */
.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* CHAMP 1 — SELECTEUR PAYS */
.input-group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #f9fbfc;
  border: 1px solid #e1e5ea;
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  font-size: 1.4rem;
  color: #222;
}

.flag {
  font-size: 1.7rem;
}

.arrow {
  margin-left: auto;
  font-size: 1.3rem;
  color: #666;
}

/* CHAMP 2 — TELEPHONE */
.input-icon {
  display: flex;
  align-items: center;
  border: 1px solid #e1e5ea;
  border-radius: 12px;
  background: #f9fbfc;
  padding: 1.2rem 1.5rem;
  font-size: 1.4rem;
}

.phone-icon {
  font-size: 1.5rem;
  margin-right: 0.8rem;
  color: #888;
}

input[type="tel"] {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 1.4rem;
  color: #111;
  outline: none;
}

/* BOUTON */
.btn {
  background-color: #1b004d;
  color: white;
  padding: 1.2rem;
  font-size: 1.4rem;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.btn:hover {
  background-color: #300072;
}

/* TERMS */
.terms {
  font-size: 1rem;
  color: #444;
  margin-top: 2rem;
}

.terms a {
  color: #4a0075;
  text-decoration: underline;
  margin: 0 4px;
}
</style>
