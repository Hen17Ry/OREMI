<template>
  <div class="devis-bg">
    <div class="devis-container">
      <div class="devis-card">
        <div class="devis-card-header">Bénéficiaire</div>
        <div class="devis-card-body">
          <div class="form-group">
            <label class="form-label" style="margin-bottom:24px;">A qui profite l'assurance ?</label>
            <div>
              <label :class="['benef-radio', selected === 'me' ? '' : '']">
                <input
                  v-model="selected"
                  type="radio"
                  value="me"
                  class="benef-radio-input"
                >
                <span>Moi même</span>
              </label>
              <label :class="['benef-radio', selected === 'other' ? 'selected' : '']">
                <input
                  v-model="selected"
                  type="radio"
                  value="other"
                  class="benef-radio-input"
                >
                <span>Autre personne</span>
              </label>
            </div>
          </div>
        </div>
        <div class="devis-actions">
          <NuxtLink to="/Step5DevisAuto" class="devis-btn devis-btn-outline">
            <span class="material-icons">arrow_back</span> Retour
          </NuxtLink>
          <NuxtLink to="/Step8DevisAuto" class="devis-btn devis-btn-primary">
            Continuer
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const selected = ref('other')
</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.devis-bg {
  background: #e9eef3;
  min-height: 100vh;
  padding: 0;
}
.devis-container {
  max-width: 900px;
  margin: 40px auto 0 auto;
  padding-bottom: 32px;
}
.devis-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px #0001;
  padding: 0 0 32px 0;
  margin-bottom: 32px;
}
.devis-card-header {
  background: #3e2e8f;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 22px 32px 18px 32px;
}
.devis-card-body {
  padding: 32px 32px 0 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
}
.form-label {
  font-size: 1rem;
  color: #222;
  margin-bottom: 6px;
  font-weight: 500;
}
.benef-radio {
  display: flex;
  align-items: center;
  border: 1.5px solid #b6e7c9;
  border-radius: 8px;
  background: #fff;
  padding: 18px 24px;
  font-size: 1.08rem;
  color: #222;
  cursor: pointer;
  gap: 12px;
  margin-bottom: 16px;
  transition: border 0.2s, background 0.2s;
}
.benef-radio.selected {
  border: 2px solid #22c55e;
  background: #e7fbe7;
}
.benef-radio-input {
  accent-color: #22c55e;
  margin-right: 12px;
}
.devis-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
  padding: 0 32px;
}
.devis-btn {
  font-size: 1.1rem;
  font-family: 'Montserrat', Arial, sans-serif;
  border-radius: 8px;
  padding: 10px 38px;
  cursor: pointer;
  border: none;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}
.devis-btn-outline {
  background: #fff;
  color: #0a2342;
  border: 1.5px solid #0a2342;
}
.devis-btn-primary {
  background: #0a2342;
  color: #fff;
  font-weight: 600;
}
.devis-btn-primary:hover {
  background: #3e2e8f;
}
@media (max-width: 900px) {
  .devis-container { max-width: 99vw; }
  .devis-card-body { padding: 18px 6px 0 6px; }
  .devis-card-header { padding: 18px 10px; }
  .devis-actions { padding: 0 8px; }
}
</style>