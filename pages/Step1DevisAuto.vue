<template>
  <div class="devis-bg">
    <div class="devis-container">
      <div class="devis-card">
        <div class="devis-card-header">Devis auto</div>
        <div class="devis-card-body">
          <!-- Upload carte grise -->
          <div class="devis-upload-block">
            <span class="material-icons devis-upload-icon">image</span>
            <div class="devis-upload-text">Ajouter une photo de votre carte grise</div>
            <label class="devis-upload-link">
              Ajouter <span class="devis-upload-plus">+</span>
              <input type="file" accept="image/*" style="display:none" />
            </label>
          </div>
          <!-- Immatriculation -->
          <div class="immat-row">
            <input type="text" class="immat-input" maxlength="2" placeholder="AA" />
            <input type="text" class="immat-input" maxlength="4" placeholder="89XX" />
            <input type="text" class="immat-input" maxlength="2" placeholder="AA" />
          </div>
          <!-- Modèle du véhicule -->
          <div class="form-group">
            <label for="modele" class="form-label">Modèle du véhicule *</label>
            <input id="modele" type="text" class="form-input" placeholder="CFB 600 S" />
          </div>
          <!-- Puissance fiscale + Marque -->
          <div class="row-flex">
            <div class="form-group" style="flex:2;">
              <label for="puissance" class="form-label">Puissance fiscale *</label>
              <div class="input-inline">
                <input id="puissance" type="number" class="form-input" placeholder="0" />
                <span class="cv-label">CV</span>
              </div>
            </div>
            <div class="form-group" style="flex:1;">
              <label for="marque" class="form-label" style="opacity:0;">Marque</label>
              <input id="marque" type="text" class="form-input" placeholder="Marque de voiture" />
            </div>
          </div>
          <!-- Numéro de châssis -->
          <div class="form-group">
            <label for="chassis" class="form-label">Numéros de châssis *</label>
            <input id="chassis" type="text" class="form-input" placeholder="38EUU7FYE" />
          </div>
        </div>
        <div class="devis-actions">
          <NuxtLink to="/" class="devis-btn devis-btn-outline">
            <span class="material-icons">arrow_back</span> Retour
          </NuxtLink>
          <NuxtLink to="/Step2DevisAuto" class="devis-btn devis-btn-primary">
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
.devis-upload-block {
  border: 1.5px solid #e3e3f3;
  border-radius: 12px;
  background: #fafbfe;
  padding: 32px 0 24px 0;
  text-align: center;
  margin-bottom: 8px;
}
.devis-upload-icon {
  font-size: 38px;
  color: #3e2e8f;
  margin-bottom: 8px;
  display: block;
}
.devis-upload-text {
  color: #888;
  margin-bottom: 8px;
}
.devis-upload-link {
  color: #3e2e8f;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.05rem;
}
.devis-upload-plus {
  font-size: 1.2rem;
  margin-left: 4px;
}
.immat-row {
  display: flex;
  gap: 12px;
  margin-bottom: 6px;
}
.immat-input {
  background: #fafbfe;
  border: 1.5px solid #e3e3f3;
  border-radius: 8px;
  padding: 18px 0;
  width: 80px;
  font-size: 1.1rem;
  text-align: center;
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
.form-input {
  background: #fafbfe;
  border: 1.5px solid #e3e3f3;
  border-radius: 8px;
  padding: 18px 12px;
  font-size: 1.08rem;
  outline: none;
}
.row-flex {
  display: flex;
  gap: 18px;
}
.input-inline {
  display: flex;
  align-items: center;
}
.cv-label {
  margin-left: 8px;
  color: #888;
  font-size: 1rem;
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