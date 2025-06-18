<template>
  <div class="devis-bg">
    <div class="devis-container">
      <div class="devis-card">
        <div class="devis-card-header devis-card-header-progress">
          Bénéficiaire
          <div class="progress-bar"></div>
        </div>
        <div class="devis-card-body">
          <div class="cip-title">Informations du permis de conduire</div>
          <div class="cip-grid">
            <div class="cip-input-row cip-input-row-full">
              <span class="material-icons cip-icon">badge</span>
              <input type="text" class="cip-input" placeholder="Numéro du permis de conduire" />
            </div>
          </div>
        </div>
        <div class="devis-actions">
          <NuxtLink to="/Step8DevisAuto" class="devis-btn devis-btn-outline">
            <span class="material-icons">arrow_back</span> Retour
          </NuxtLink>
          <NuxtLink to="/Step10DevisAuto" class="devis-btn devis-btn-primary">
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
  width: 45%;
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
  grid-template-columns: 1fr;
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
  grid-column: 1 / 2;
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