<template>
  <div class="main-bg">
    <main class="profil-main-content">
      <div class="profil-layout">
        <!-- Colonne principale -->
        <section class="profil-main-card">
          <div class="profil-top">
            <div class="profil-avatar-bg">
              <span class="material-icons profil-avatar-icon">account_circle</span>
            </div>
            <div>
              <button class="profil-photo-btn">
                <span class="material-icons" style="font-size:18px;vertical-align:middle;">photo_camera</span>
                Ajouter une photo
              </button>
              <p class="profil-photo-hint">* Image au format JPEG, PNG, 1M maximum</p>
            </div>
          </div>
          <div class="profil-info-card">
            <div class="profil-info-header">
              <h3>MES INFORMATIONS</h3>
              <button class="profil-edit-btn">
                <span class="material-icons" style="font-size:18px;vertical-align:middle;">edit</span>
                Modifier
              </button>
            </div>
            <div class="profil-info-grid">
              <div>
                <span class="profil-info-label">Nom et prénoms</span>
                <div class="profil-info-value">null null</div>
              </div>
              <div>
                <span class="profil-info-label">Téléphone</span>
                <div class="profil-info-value"><b>+229001218571</b></div>
              </div>
              <div>
                <span class="profil-info-label">Email</span>
                <div class="profil-info-value">--</div>
              </div>
              <div>
                <span class="profil-info-label">Sexe</span>
                <div class="profil-info-value">--</div>
              </div>
            </div>
          </div>
          <div class="profil-doc-card">
            <div class="profil-doc-header">
              <h3>MES DOCUMENTS</h3>
            </div>
            <div class="profil-doc-empty">
              <img src="../public/sinistre_empty.png" alt="Aucun document" class="profil-doc-img" />
              <div class="profil-doc-text">Aucun document disponible</div>
            </div>
          </div>
        </section>
        <!-- Colonne historique -->
        <section class="profil-history-card">
          <h3 class="profil-history-title">Historique des paiements</h3>
          <div class="profil-history-empty">
            <img src="../public/sinistre_empty.png" alt="Aucun paiement" class="profil-doc-img" />
            <div class="profil-doc-text">Aucun paiement effectué</div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.main-bg { background: #f7f9fb; min-height: 100vh; }
.profil-main-content {
  padding: 40px 0;
  display: flex;
  justify-content: center;
}
.profil-layout {
  display: flex;
  gap: 32px;
  width: 100%;
  max-width: 1400px;
  align-items: flex-start;
}
.profil-main-card {
  flex: 2;
  background: #fff;
  border-radius: 16px;
  padding: 36px 32px 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  min-width: 500px;
}
.profil-top {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 8px;
}
.profil-avatar-bg {
  background: #eaf6fb;
  border-radius: 50%;
  width: 90px; height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.profil-avatar-icon { color: #18344a; font-size: 70px; }
.profil-photo-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #f7f9fb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 7px 18px;
  font-size: 15px;
  color: #222;
  cursor: pointer;
  transition: background 0.2s;
}
.profil-photo-btn:hover { background: #f3f4f6; }
.profil-photo-hint { font-size: 12px; color: #888; margin-top: 4px; }
.profil-info-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 22px 18px 18px 18px;
  margin-bottom: 0;
}
.profil-info-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}
.profil-info-header h3 { font-size: 17px; font-weight: bold; margin: 0; }
.profil-edit-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 6px 14px;
  font-size: 14px;
  color: #444;
  cursor: pointer;
  transition: background 0.2s;
}
.profil-edit-btn:hover { background: #f3f4f6; }
.profil-info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px 32px;
}
.profil-info-label { color: #888; font-size: 14px; }
.profil-info-value { font-weight: 600; font-size: 16px; }
.profil-doc-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 22px 18px 18px 18px;
  margin-top: 0;
  min-height: 220px;
  display: flex;
  flex-direction: column;
}
.profil-doc-header h3 {
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 18px;
}
.profil-doc-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 120px;
}
.profil-doc-img {
  width: 90px;
  opacity: 0.7;
  margin-bottom: 8px;
}
.profil-doc-text {
  color: #888;
  font-size: 15px;
  text-align: center;
}
.profil-history-card {
  flex: 1;
  background: #fff;
  border-radius: 16px;
  padding: 36px 32px 24px 32px;
  min-width: 340px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profil-history-title {
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 18px;
  align-self: flex-start;
}
.profil-history-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 180px;
}
@media (max-width: 1100px) {
  .profil-layout { flex-direction: column; gap: 18px; align-items: stretch; }
  .profil-main-card, .profil-history-card { min-width: 0; max-width: 100%; }
}
@media (max-width: 700px) {
  .profil-main-content { padding: 12px 0; }
  .profil-main-card, .profil-history-card { padding: 18px 6px; }
}
</style>