<template>
  <div class="devis-bg">
    <div class="devis-container">
      <div class="devis-card">
        <div class="devis-card-header devis-card-header-progress">
          Bénéficiaire
          <div class="progress-bar"></div>
        </div>
        <div class="devis-card-body">
          <!-- Upload CIP -->
          <div class="devis-upload-block">
            <span class="material-icons devis-upload-icon">image</span>
            <div class="devis-upload-text">Ajouter une photo de votre CIP</div>
            <label class="devis-upload-link">
              Ajouter <span class="devis-upload-plus">+</span>
              <input type="file" accept="image/*" style="display:none" />
            </label>
          </div>
          <!-- Upload Permis -->
          <div class="devis-upload-block">
            <span class="material-icons devis-upload-icon">image</span>
            <div class="devis-upload-text">Ajouter une photo de votre permis de conduire</div>
            <label class="devis-upload-link">
              Ajouter <span class="devis-upload-plus">+</span>
              <input type="file" accept="image/*" style="display:none" />
            </label>
          </div>
        </div>
        <div class="devis-actions">
          <NuxtLink to="/Step6DevisAuto" class="devis-btn devis-btn-outline">
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
  width: 25%;
  background: #22c55e;
  border-bottom-left-radius: 16px;
}
.devis-card-body {
  padding: 32px 32px 0 32px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.devis-upload-block {
  border: 1.5px solid #e3e3f3;
  border-radius: 12px;
  background: #fafbfe;
  padding: 32px 0 24px 0;
  text-align: center;
  margin-bottom: 0;
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