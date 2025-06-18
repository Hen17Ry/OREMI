<template>
  <div class="devis-bg">
    <div class="devis-container">
      <div class="devis-card">
        <div class="devis-card-header">Devis auto</div>
        <div class="devis-card-body">
          <!-- Date de mise en circulation -->
          <div class="form-group">
            <label for="circulation" class="form-label">Date de mise en circulation *</label>
            <input id="circulation" type="date" class="form-input" placeholder="19/05/25" />
          </div>
          <!-- Valeur d'achat du véhicule avec unité CV à droite dans le même champ -->
          <div class="form-group">
            <label for="achat" class="form-label">Valeur d'achat du véhicule *</label>
            <div class="input-cv-wrapper">
              <input id="achat" type="number" class="form-input form-input-cv" placeholder="0" />
              <span class="cv-unit">CV</span>
            </div>
          </div>
          <!-- Valeur vénale avec icône info à droite -->
          <div class="form-group" style="position:relative;">
            <label for="venale" class="form-label">Valeur vénale *</label>
            <input id="venale" type="text" class="form-input" placeholder="38EUU7FYE" />
            <span class="material-icons info-icon" title="Valeur vénale">info</span>
          </div>
          <!-- Date de permis de conduire -->
          <div class="form-group">
            <label for="permis" class="form-label">Date de permis de conduire *</label>
            <input id="permis" type="date" class="form-input" placeholder="19/05/25" />
          </div>
        </div>
        <div class="devis-actions">
          <NuxtLink to="/Step1DevisAuto" class="devis-btn devis-btn-outline">
            <span class="material-icons">arrow_back</span> Retour
          </NuxtLink>
          <NuxtLink to="/Step3DevisAuto" class="devis-btn devis-btn-primary">
            Continuer
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

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
.info-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #222;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.7;
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