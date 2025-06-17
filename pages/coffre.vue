<template>
  <div class="coffre-bg">
    <main class="coffre-main">
      <h1 class="coffre-title">Ouverture du coffre-fort</h1>
      <h2 class="coffre-subtitle">Une assurance qui se construit pas à pas.</h2>
      <p class="coffre-desc">
        L’Assurance Automobile de AFG Assurances Bénin (AFG) se permet de vous proposer une caisse d’épargne pour vous aider à prévoir les futures dépenses liées à nos offres. Tout ceci pour faciliter l’accès à nos offres et vous avoir toujours plus près de nous.
      </p>
      <section class="coffre-advantages">
        <h3>Avantages</h3>
        <div class="coffre-adv-list">
          <div class="coffre-adv-title">Cotiser en prévision de la prochaine souscriptions</div>
          <div class="coffre-adv-item">
            <span class="coffre-check">✔️</span>
            <span>Cela vous permet d'être moins soucieux si vous aviez déjà une souscription chez nous.</span>
          </div>
        </div>
      </section>
      <div class="coffre-form-block">
        <label class="coffre-form-label">Commencez dès maintenant !</label>
        <div class="coffre-input-row">
          <span class="material-icons coffre-input-icon">account_balance_wallet</span>
          <input
            type="number"
            min="500"
            class="coffre-input"
            placeholder="Entrez un montant de début (minimum 500 fr)"
          />
        </div>
      </div>
      <NuxtLink to="/coffre_dash" class="coffre-btn">Ouvrir ma caisse</NuxtLink>
    </main>
  </div>
</template>

<script setup>
import Header from '~/components/header.vue'
import { ref } from 'vue'
const showBot = ref(false)
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.coffre-bg { background: #f5f7fa; min-height: 100vh; }
.coffre-main {
  max-width: 900px;
  margin: 0 auto;
  padding: 48px 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.coffre-title {
  font-size: 2.3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 18px;
  margin-top: 24px;
}
.coffre-subtitle {
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 12px;
}
.coffre-desc {
  color: #444;
  text-align: center;
  font-size: 1.05rem;
  max-width: 700px;
  margin-bottom: 36px;
}
.coffre-advantages {
  background: #eaf3fb;
  border-radius: 14px;
  padding: 32px 28px 24px 28px;
  margin-bottom: 38px;
  width: 100%;
  max-width: 820px;
}
.coffre-advantages h3 {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 12px;
}
.coffre-adv-list {
  margin-left: 0;
}
.coffre-adv-title {
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 10px;
}
.coffre-adv-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #15803d;
  font-size: 1rem;
}
.coffre-check {
  font-size: 1.3rem;
  background: #d1fae5;
  border-radius: 50%;
  padding: 2px 6px;
  margin-right: 4px;
}
.coffre-form-block {
  width: 100%;
  max-width: 820px;
  margin-bottom: 32px;
}
.coffre-form-label {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 10px;
  display: block;
}
.coffre-input-row {
  position: relative;
  width: 100%;
}
.coffre-input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  font-size: 22px;
}
.coffre-input {
  width: 100%;
  padding: 12px 12px 12px 44px;
  border: 1px solid #e5e7eb;
  border-radius: 7px;
  font-size: 1rem;
  outline: none;
  margin-top: 6px;
  background: #fff;
  transition: border 0.2s;
}
.coffre-input:focus {
  border: 1.5px solid #2563eb;
}
.coffre-btn {
  margin-top: 38px;
  background: #3973c6;
  color: #fff;
  font-weight: 600;
  padding: 18px 0;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  width: 280px;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px #0001;
  text-decoration: none;
  text-align: center;
  transform: translateY(-50%);
}
.coffre-btn:hover {
  background: #2456a6;
}
@media (max-width: 700px) {
  .coffre-main { padding: 24px 4px 0 4px; }
  .coffre-advantages, .coffre-form-block { padding: 18px 8px; }
  .coffre-btn { width: 100%; }
}
</style>