<template>
  <div class="devis-bg">
    <div class="devis-container">
      <div class="devis-card devis-card-center">
        <!-- Prime TTC -->
        <div class="prime-ttc-box">
          <div>
            <div class="prime-ttc-label">Prime TTC</div>
            <div class="prime-ttc-value">16 000 FCFA</div>
          </div>
          <button class="prime-ttc-edit">
            <span class="material-icons" style="font-size:18px;vertical-align:middle;">edit</span>
            Modifier
          </button>
        </div>
        <!-- Détails d’estimation -->
        <div class="details-estimation">
          <div class="details-title">
            Détails d’estimation
            <span class="material-icons details-arrow">expand_less</span>
          </div>
          <div class="details-list">
            <div class="details-row">
              <span>Valeur prime nette RC</span>
              <span class="bold">13545</span>
            </div>
            <div class="details-row details-row-reduction">
              <span>Réduction</span>
              <span>-0</span>
            </div>
            <div class="details-row">
              <span>Acessoires</span>
              <span class="bold">1000</span>
            </div>
            <div class="details-row">
              <span>Taxe</span>
              <span class="bold">1455</span>
            </div>
            <div class="details-row details-row-net">
              <span class="bold">Nette à payer</span>
              <span class="bold net-value">16000</span>
            </div>
          </div>
        </div>
        <!-- Total à payer -->
        <div class="total-payer">
          <span>Total à payer</span>
          <span class="bold">16 000 FCFA</span>
        </div>
      </div>
      <!-- Actions -->
      <div class="devis-actions devis-actions-bottom">
        <button class="devis-btn devis-btn-outline">Enrégistrer le devis</button>
        <NuxtLink to="/Step6DevisAuto" class="devis-btn devis-btn-primary">
          Souscrire à l'assurance à (16 000 FCFA)
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.devis-bg {
  min-height: 100vh;
  padding: 0;
}
.devis-container {
  max-width: 900px;
  margin: 40px auto 0 auto;
  padding-bottom: 32px;
}
.devis-card-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px #0001;
  padding: 0 0 32px 0;
  margin-bottom: 32px;
}
.prime-ttc-box {
  background: #3e2e8f;
  color: #fff;
  border-radius: 18px;
  padding: 24px 32px 18px 32px;
  margin-top: 32px;
  margin-bottom: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
}
.prime-ttc-label {
  font-size: 1.05rem;
  color: #e3e3f3;
  margin-bottom: 6px;
}
.prime-ttc-value {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
}
.prime-ttc-edit {
  background: #6d6d8f;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 7px 18px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
}
.details-estimation {
  border-radius: 12px;
  width: 100%;
  margin: 0 auto 18px auto;
  padding: 25px 32px;
  box-sizing: border-box;
}
.details-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0 12px 0;
  border-bottom: 1.5px solid #e3e3f3;
}
.details-arrow {
  font-size: 26px;
  color: #222;
}
.details-list {
  padding: 18px 0 0 0;
}
.details-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 1.08rem;
}
.details-row-reduction {
  color: #e11d22;
  font-size: 0.98rem;
}
.details-row-reduction span {
  color: #e11d22;
}
.details-row-net .net-value {
  color: #22c55e;
}
.bold {
  font-weight: 700;
}
.total-payer {
  background: #fdfde7;
  border: 1.5px solid #e6e6b8;
  border-radius: 10px;
  padding: 22px 32px;
  margin: 18px 0 0 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.devis-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
  margin-top: 18px;
}
.devis-actions-bottom {
  justify-content: center;
  margin-top: 0;
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
  .prime-ttc-box, .total-payer { padding: 16px 8px; }
  .details-title { padding: 12px 0 8px 0; }
  .devis-actions { flex-direction: column; gap: 10px; }
}
</style>