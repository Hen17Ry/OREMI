<template>
  <div class="devis-bg">

    <div class="devis-container">
      <!-- Progressbar -->
      <div class="devis-progressbar">
        <span :class="['devis-progress-step', step === 1 ? 'active' : '', step > 1 ? 'done' : '']">Devis</span>
        <span :class="['devis-progress-step', step === 2 ? 'active' : '', step > 2 ? 'done' : '']">Identification</span>
        <span :class="['devis-progress-step', step === 3 ? 'active' : '', step > 3 ? 'done' : '']">Bénéficiaire</span>
        <span :class="['devis-progress-step', step === 4 ? 'active' : '', step > 4 ? 'done' : '']">Passeport</span>
        <span :class="['devis-progress-step', step === 5 ? 'active' : '']">Infos</span>
      </div>

      <!-- ÉTAPE 1 -->
      <div v-if="step === 1" class="devis-card">
        <div class="devis-card-header">Devis de voyage</div>
        <div class="devis-card-body">
          <div class="devis-upload-block">
            <span class="material-icons devis-upload-icon">image</span>
            <div class="devis-upload-text">Ajouter une photo de votre billet d'avion</div>
            <label class="devis-upload-link">
              Ajouter <span class="devis-upload-plus">+</span>
              <input type="file" accept="image/*" style="display:none" />
            </label>
          </div>
          <div class="devis-form-row">
            <span class="material-icons devis-form-icon">map</span>
            <input type="text" class="devis-input" placeholder="Où allez vous ?" />
          </div>
          <div class="devis-form-row devis-form-row-double">
            <div class="devis-form-row">
              <span class="material-icons devis-form-icon">event</span>
              <input type="date" class="devis-input" placeholder="Date de départ" />
            </div>
            <div class="devis-form-row">
              <span class="material-icons devis-form-icon">event</span>
              <input type="date" class="devis-input" placeholder="Date de retour" />
            </div>
          </div>
        </div>
      </div>

      <!-- ÉTAPE 2 -->
      <div v-if="step === 2" class="devis-card">
        <div class="devis-card-header">Prime TTC</div>
        <div class="devis-card-body">
          <div class="prime-ttc-box">
            <div>
              <div class="prime-ttc-label">Prime TTC</div>
              <div class="prime-ttc-value">16 000 FCFA</div>
            </div>
            <button class="prime-ttc-edit">
              <span class="material-icons" style="font-size:18px;vertical-align:middle;">edit</span> Modifier
            </button>
          </div>
          <div class="prime-details">
            <div class="prime-details-title">
              Détails d’estimation
              <span class="material-icons" style="font-size:18px;vertical-align:middle;">expand_less</span>
            </div>
            <div class="prime-details-list">
              <div class="prime-details-row">
                <span>Valeur prime nette RC</span>
                <span class="bold">13545</span>
              </div>
              <div class="prime-details-row">
                <span style="color:#e11d22;">Réduction</span>
                <span style="color:#e11d22;">-0</span>
              </div>
              <div class="prime-details-row">
                <span>Acessoires</span>
                <span class="bold">1000</span>
              </div>
              <div class="prime-details-row">
                <span>Taxe</span>
                <span class="bold">1455</span>
              </div>
              <div class="prime-details-row">
                <span class="bold">Nette à payer</span>
                <span class="bold" style="color:#22c55e;">16000</span>
              </div>
            </div>
          </div>
          <div class="prime-total">
            <span>Total à payer</span>
            <span class="bold">16 000 FCFA</span>
          </div>
        </div>
        <div class="prime-actions">
          <button class="prime-btn-outline">Enregistrer le devis</button>
          <button class="prime-btn-primary" @click="nextStep">Souscrire à l'assurance à (16 000 FCFA)</button>
        </div>
      </div>

      <!-- ÉTAPE 3 -->
      <div v-if="step === 3" class="devis-card">
        <div class="devis-card-header">Bénéficiaire</div>
        <div class="devis-card-body">
          <div class="devis-label">A qui profite l'assurance ?</div>
          <div
            class="devis-radio-row"
            :class="{ selected: beneficiary === 'me' }"
            @click="beneficiary = 'me'"
          >
            <input
              type="radio"
              id="beneficiary-me"
              value="me"
              v-model="beneficiary"
            />
            <label for="beneficiary-me">Moi même</label>
          </div>
          <div
            class="devis-radio-row"
            :class="{ selected: beneficiary === 'other' }"
            @click="beneficiary = 'other'"
          >
            <input
              type="radio"
              id="beneficiary-other"
              value="other"
              v-model="beneficiary"
            />
            <label for="beneficiary-other">Autre personne</label>
          </div>
        </div>
      </div>

      <!-- ÉTAPE 4 -->
      <div v-if="step === 4" class="devis-card">
        <div class="devis-card-header">Bénéficiaire</div>
        <div class="devis-card-body">
          <div class="devis-upload-block">
            <span class="material-icons devis-upload-icon">image</span>
            <div class="devis-upload-text">Ajouter une photo de votre passeport</div>
            <label class="devis-upload-link">
              Ajouter <span class="devis-upload-plus">+</span>
              <input type="file" accept="image/*" style="display:none" />
            </label>
          </div>
          <div class="devis-form-row devis-form-row-double">
            <div class="devis-form-row">
              <span class="material-icons devis-form-icon">map</span>
              <input type="text" class="devis-input" placeholder="Nom" />
            </div>
            <div class="devis-form-row">
              <span class="material-icons devis-form-icon">map</span>
              <input type="text" class="devis-input" placeholder="Prénom" />
            </div>
          </div>
          <div class="devis-form-row devis-form-row-double">
            <div class="devis-form-row" style="max-width:90px;">
              <span class="material-icons devis-form-icon">map</span>
              <input type="text" class="devis-input" value="229" readonly />
            </div>
            <div class="devis-form-row" style="flex:1;">
              <span class="material-icons devis-form-icon">map</span>
              <input type="text" class="devis-input" placeholder="Numéros" />
            </div>
          </div>
          <div class="devis-form-row">
            <span class="material-icons devis-form-icon">event</span>
            <input type="date" class="devis-input" placeholder="Date de retour" />
          </div>
          <div class="devis-form-row">
            <span class="material-icons devis-form-icon">event</span>
            <input type="date" class="devis-input" placeholder="Date de naissance" />
          </div>
        </div>
      </div>

      <!-- ÉTAPE 5 -->
      <div v-if="step === 5" class="devis-card">
        <div class="devis-card-header">Bénéficiaire</div>
        <div class="devis-card-body">
          <div class="devis-form-row devis-form-row-double">
            <div class="devis-form-row">
              <span class="material-icons devis-form-icon">map</span>
              <input type="text" class="devis-input" placeholder="Profession" />
            </div>
            <div class="devis-form-row">
              <span class="material-icons devis-form-icon">map</span>
              <input type="text" class="devis-input" placeholder="Sexe" />
            </div>
          </div>
          <div class="devis-form-row">
            <span class="material-icons devis-form-icon">badge</span>
            <input type="text" class="devis-input" placeholder="Numéro du passport" />
          </div>
          <div class="devis-form-row">
            <span class="material-icons devis-form-icon">event</span>
            <input type="date" class="devis-input" placeholder="Date d'expiration du passport" />
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="devis-actions">
        <button class="devis-btn devis-btn-outline" :disabled="step === 1" @click="prevStep">
          <span class="material-icons">arrow_back</span> Retour
        </button>
        <button class="devis-btn devis-btn-primary" @click="nextStep" v-if="step < 5">
          Continuer
        </button>
        <button class="devis-btn devis-btn-primary" v-else>
          Terminer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '~/components/header.vue'
const step = ref(1)
const beneficiary = ref('other')
const nextStep = () => { if (step.value < 5) step.value++ }
const prevStep = () => { if (step.value > 1) step.value-- }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.devis-bg {
  
  min-height: 100vh;
}
.devis-container {
  max-width: 900px;
  margin: 40px auto 0 auto;
  padding-bottom: 32px;
}
.devis-progressbar {
  display: flex;
  gap: 32px;
  margin-bottom: 28px;
  margin-left: 16px;
}
.devis-progress-step {
  color: #b6b6c7;
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
}
.devis-progress-step.active {
  color: #3e2e8f;
}
.devis-progress-step.done {
  color: #22c55e;
}
.devis-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px #0001;
  padding: 0 0 32px 0;
  margin-bottom: 24px;
}
.devis-card-header {
  background: #3e2e8f;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 24px 32px;
}
.devis-card-body {
  padding: 32px 32px 0 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.devis-upload-block {
  border: 1.5px solid #e3e3f3;
  border-radius: 10px;
  background: #fafbfe;
  padding: 32px 0 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18px;
}
.devis-upload-icon {
  font-size: 48px;
  color: #3e2e8f;
  margin-bottom: 12px;
}
.devis-upload-text {
  color: #8b93a7;
  font-size: 1.1rem;
  margin-bottom: 8px;
}
.devis-upload-link {
  color: #3e2e8f;
  font-weight: 500;
  font-size: 1.05rem;
  cursor: pointer;
  margin-top: 2px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.devis-upload-plus {
  font-size: 1.2rem;
  margin-left: 2px;
}
.devis-form-row {
  display: flex;
  align-items: center;
  background: #fafbfe;
  border: 1.5px solid #e3e3f3;
  border-radius: 8px;
  padding: 0 16px;
  margin-bottom: 12px;
}
.devis-form-row-double {
  gap: 18px;
  margin-bottom: 0;
}
.devis-form-row input[type="date"]::-webkit-input-placeholder,
.devis-form-row input[type="text"]::-webkit-input-placeholder {
  color: #b6b6c7;
}
.devis-form-icon {
  color: #b6b6c7;
  margin-right: 10px;
}
.devis-input {
  border: none;
  background: transparent;
  font-size: 1.08rem;
  padding: 18px 0;
  width: 100%;
  outline: none;
  color: #222;
}
.devis-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  padding: 0 8px;
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
}
.devis-btn-outline {
  background: #fff;
  color: #0a2342;
  border: 1.5px solid #0a2342;
}
.devis-btn-outline:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.devis-btn-primary {
  background: #0a2342;
  color: #fff;
  font-weight: 600;
}
.devis-btn-primary:hover {
  background: #3e2e8f;
}
.devis-label {
  font-size: 1.08rem;
  font-weight: 500;
  margin-bottom: 18px;
  color: #222;
}
.devis-radio-row {
  display: flex;
  align-items: center;
  border: 1.5px solid #e3e3f3;
  border-radius: 8px;
  background: #fff;
  padding: 16px 18px;
  margin-bottom: 14px;
  cursor: pointer;
  transition: border 0.2s, background 0.2s;
}
.devis-radio-row.selected {
  border: 1.5px solid #22c55e;
  background: #d1fae5;
}
.devis-radio-row input[type="radio"] {
  accent-color: #22c55e;
  margin-right: 12px;
}
.devis-radio-row label {
  font-size: 1.08rem;
  color: #222;
  cursor: pointer;
}

/* Styles pour l'étape 2 (Prime TTC) */
.prime-ttc-box {
  background: #3e2e8f;
  color: #fff;
  border-radius: 18px;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.prime-ttc-label {
  font-size: 1rem;
  opacity: 0.8;
}
.prime-ttc-value {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 4px;
}
.prime-ttc-edit {
  background: #6d6d8f;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 6px 18px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}
.prime-details {
  background: #fff;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  margin-bottom: 18px;
  padding: 18px 18px 0 18px;
}
.prime-details-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.prime-details-list {
  margin-bottom: 8px;
}
.prime-details-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 1.08rem;
}
.bold { font-weight: bold; }
.prime-total {
  background: #fefce8;
  border: 1.5px solid #fde68a;
  border-radius: 12px;
  padding: 18px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 12px;
}
.prime-actions {
  display: flex;
  justify-content: flex-end;
  gap: 18px;
  margin-top: 18px;
  padding: 0 32px;
}
.prime-btn-outline {
  background: #fff;
  color: #0a2342;
  border: 1.5px solid #0a2342;
  border-radius: 8px;
  padding: 10px 28px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.prime-btn-primary {
  background: #0a2342;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 28px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}
.prime-btn-primary:hover { background: #3e2e8f; }

@media (max-width: 900px) {
  .devis-container { max-width: 99vw; }
  .devis-card-body { padding: 18px 6px 0 6px; }
  .devis-card-header { padding: 18px 10px; }
  .prime-actions { padding: 0 8px; }
}
</style>