<template>
  <div class="devis-bg">
    <div class="devis-container">
      <div class="devis-card">
        <div class="devis-card-header">Informations supplémentaires</div>
        <div class="devis-card-body">
          <!-- Adresse -->
          <div class="form-group">
            <label for="adresse1" class="form-label">Adresse *</label>
            <input id="adresse1" type="text" class="form-input" placeholder="CEG GBEYGAMEY" />
          </div>
          <!-- Ville/Commune de résidence + CV -->
          <div class="form-group">
            <label for="ville" class="form-label">Ville/Commune de résidence *</label>
            <div class="input-cv-wrapper">
              <input id="ville" type="text" class="form-input form-input-cv" placeholder="COTONOU" />
              <span class="cv-unit">CV</span>
            </div>
          </div>
          <!-- Adresse bis -->
          <div class="form-group">
            <label for="adresse2" class="form-label">Adresse *</label>
            <input id="adresse2" type="text" class="form-input" placeholder="CEG GBEYGAMEY" />
          </div>
          <!-- Durée d'assurance -->
          <div class="form-group" style="margin-top:18px;">
            <label class="form-label" style="margin-bottom:24px;">Durée d'assurance *</label>
            <div class="radio-grid">
              <label v-for="option in options" :key="option.value"
                :class="['radio-box', selected === option.value ? 'selected' : '']">
                <input
                  type="radio"
                  :value="option.value"
                  v-model="selected"
                  class="radio-input"
                />
                <span>{{ option.label }}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="devis-actions">
          <NuxtLink to="/Step3DevisAuto" class="devis-btn devis-btn-outline">
            <span class="material-icons">arrow_back</span> Retour
          </NuxtLink>
          <NuxtLink to="/Step5DevisAuto" class="devis-btn devis-btn-primary">
            Continuer
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const selected = ref('')
const options = [
  { value: '1m', label: '1 mois' },
  { value: '3m', label: '3 mois' },
  { value: '6m', label: '6 mois' },
  { value: '12m', label: '12 mois' },
]
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
  position: relative;
}
.form-label {
  font-size: 1rem;
  color: #222;
  margin-bottom: 6px;
  font-weight: 500;
}
.form-input {
  background: #fafbfe;
  border: 1.5px solid #e3e3f3;
  border-radius: 8px;
  padding: 18px 12px;
  font-size: 1.08rem;
  outline: none;
  width: 100%;
  box-sizing: border-box;
}
.input-cv-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.form-input-cv {
  padding-right: 48px;
}
.cv-unit {
  position: absolute;
  right: 18px;
  color: #888;
  font-size: 1.08rem;
  pointer-events: none;
}
.radio-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.radio-box {
  display: flex;
  align-items: center;
  border: 1.5px solid #3e2e8f;
  border-radius: 10px;
  background: #fff;
  padding: 18px 24px;
  font-size: 1.08rem;
  color: #222;
  cursor: pointer;
  gap: 12px;
  transition: border 0.2s, background 0.2s;
}
.radio-box.selected {
  border: 2px solid #3e2e8f;
  background: #f3f0ff;
}
.radio-input {
  accent-color: #3e2e8f;
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
  .radio-grid { grid-template-columns: 1fr; }
}
</style>