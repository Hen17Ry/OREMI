<template>
  <div class="devis-bg">
    <div class="devis-container">
      <div class="devis-card">
        <div class="devis-card-header devis-card-header-progress">
          Bénéficiaire
          <div class="progress-bar"/>
        </div>
        <div class="devis-card-body">
          <div class="cip-title">Informations du CIP</div>
          <div class="cip-grid">
            <!-- Nom -->
            <div class="cip-input-row">
              <span class="material-icons cip-icon">badge</span>
              <input v-model="nom" type="text" class="cip-input" placeholder="Nom">
            </div>
            <!-- Prénom -->
            <div class="cip-input-row">
              <span class="material-icons cip-icon">badge</span>
              <input v-model="prenom" type="text" class="cip-input" placeholder="Prénom">
            </div>
            <!-- Téléphone -->
            <div class="cip-input-row cip-phone-row">
              <span class="cip-phone-prefix">
                229
                <span class="material-icons cip-icon">call</span>
              </span>
              <input v-model="telephone" type="text" class="cip-input" placeholder="Numéros">
            </div>
            <!-- Date de naissance -->
              <div class="cip-input-row">
                <span class="material-icons cip-icon">calendar_month</span>
                <input v-model="dateNaissance" type="date" class="cip-input" placeholder="Date de naissance">
              </div>
              <!-- Ville/Commune -->
              <div class="cip-input-row">
                <span class="material-icons cip-icon">location_city</span>
                <input v-model="ville" type="text" class="cip-input" placeholder="Ville/Commune">
              </div>
              <!-- Profession -->
              <div class="cip-input-row">
                <span class="material-icons cip-icon">work</span>
                <input v-model="profession" type="text" class="cip-input" placeholder="Profession">
              </div>
              <!-- Sexe -->
              <div class="cip-input-row">
                <span class="material-icons cip-icon">wc</span>
                <input v-model="sexe" type="text" class="cip-input" placeholder="Sexe">
              </div>
              <!-- Email -->
              <div class="cip-input-row cip-input-row-full">
                <span class="material-icons cip-icon">mail</span>
                <input type="email" class="cip-input" placeholder="Email" >
              </div>
          </div>
        </div>
        <div class="devis-actions">
          <NuxtLink to="/Step6DevisAuto" class="devis-btn devis-btn-outline">
            <span class="material-icons">arrow_back</span> Retour
          </NuxtLink>
          <NuxtLink to="/Step9DevisAuto" class="devis-btn devis-btn-primary">
            Continuer
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const nom = ref('')
const prenom = ref('')
const telephone = ref('')
const dateNaissance = ref('')
const ville = ref('')
const profession = ref('')
const sexe = ref('')


onMounted(async () => {
  try {
    const data = await $fetch('/api/userdata')
    if (data?.cip) {
      nom.value = data.cip.nom || ''
      prenom.value = data.permis.prenom || ''
      telephone.value = data.cip.telephone || ''
      dateNaissance.value = data.cip.dateNaissance || ''
      ville.value = data.cip.ville || ''
      profession.value = data.cip.statutProfessionnel || ''
      sexe.value = data.cip.sexe || ''
    }
  } catch (e) {
    console.error('Erreur chargement données CIP :', e)
  }
})
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
  position: relative;
}
.devis-card-header-progress {
  padding-bottom: 0;
}
.progress-bar {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5px;
  width: 35%;
  background: #22c55e;
  border-bottom-left-radius: 16px;
}
.devis-card-body {
  padding: 32px 32px 0 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.cip-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 18px;
  text-align: center;
}
.cip-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.cip-input-row {
  display: flex;
  align-items: center;
  background: #fafbfe;
  border: 1.5px solid #e3e3f3;
  border-radius: 8px;
  padding: 0 16px;
  height: 54px;
}
.cip-input-row-full {
  grid-column: 1 / 3;
}
.cip-icon {
  color: #b6b6c7;
  margin-right: 10px;
  font-size: 22px;
}
.cip-input {
  border: none;
  background: transparent;
  font-size: 1.08rem;
  padding: 16px 0;
  width: 100%;
  outline: none;
}
.cip-phone-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.cip-phone-prefix {
  display: flex;
  align-items: center;
  background: #f3f3fa;
  border-radius: 6px;
  padding: 4px 10px 4px 10px;
  font-size: 1.08rem;
  color: #222;
  margin-right: 8px;
  gap: 4px;
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
  .cip-grid { grid-template-columns: 1fr; }
  .cip-input-row-full { grid-column: 1 / 2; }
}
</style>