<template>
  <div class="main-bg">
    <div class="banner">
      Souscrivez à une assurance à partir de 500fr !
    </div>
    <main class="main-content">
      <div class="dashboard-row">
        <section class="welcome-card">
          <div class="welcome-header">
            <div class="avatar-bg">
              <span class="material-icons avatar-icon">account_circle</span>
            </div>
            <div>
              <h2 class="welcome-title">Bienvenue !</h2>
              <p class="welcome-name">Chris Cossou</p>
            </div>
            <div class="notif-bell">
              <span class="material-icons bell-icon">notifications</span>
            </div>
          </div>
          <div class="welcome-actions">
            <NuxtLink to="/coffre" class="coffre-btn">Ouvrir mon coffre-fort</NuxtLink>
            <button class="prime-btn" @click="showModal = true">Estimer une prime</button>
          </div>
        </section> 
        <section class="stat-card">
          <h3>Devis</h3>
          <p class="stat-desc">Devis effectués</p>
          <div class="stat-value-row">
            <span class="stat-value">0</span>
            <span class="material-icons stat-icon">receipt_long</span>
          </div>
        </section>
        <section class="stat-card">
          <h3>Mes souscriptions</h3>
          <p class="stat-desc">Total effectués</p>
          <div class="stat-value-row">
            <span class="stat-value">0</span>
            <span class="material-icons stat-icon">category</span>
          </div>
        </section>
      </div>
      <div class="dashboard-row">
        <section class="info-card">
          <h3>Support</h3>
          <p class="info-desc">Contactez-nous pour toute préoccupations</p>
          <button class="info-btn">Contacter</button>
        </section>
        <section class="info-card">
          <h3>Nos agences</h3>
          <p class="info-desc">Découvrez nos agences et visitez-les</p>
          <button class="info-btn">Voir les agences</button>
        </section>
        <section class="info-card sinistre-card">
          <div class="info-header">
            <h3><span class="material-icons flag-icon">flag</span> Mes sinistres</h3>
            <a href="#" class="see-all">Voir tout <span class="material-icons" style="font-size:16px;vertical-align:middle;">chevron_right</span></a>
          </div>
          <div class="sinistre-empty">
            <img src="../public/sinistre_empty.png" alt="Aucun sinistre" class="sinistre-img" />
            <div class="no-claim">Aucun sinistre disponible pour le moment</div>
          </div>
        </section>
      </div>
      
      <!-- MODAL POPUP -->
      <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
        <div class="modal-popup modal-popup-large">
          <div class="modal-popup-header">
            <h2 class="modal-popup-title">Quel produit souhaitez-vous&nbsp;?</h2>
            <button class="modal-popup-cancel" @click="showModal = false">annuler</button>
          </div>
          
          <div class="modal-popup-products">
            <NuxtLink to="/Step1DevisAuto" class="modal-popup-product">
              <img src="../public/auto.png" alt="Assurance Auto" class="modal-popup-img" />
              <div class="modal-popup-label">Assurance<br>Auto</div>
            </NuxtLink>
            <NuxtLink to="/moto" class="modal-popup-product">
              <img src="../public/moto.png" alt="Assurance Moto" class="modal-popup-img" />
              <div class="modal-popup-label">Assurance<br>Moto</div>
            </NuxtLink>
            <NuxtLink to="/habitation" class="modal-popup-product">
              <img src="../public/habitation.png" alt="Assurance Habitation" class="modal-popup-img" />
              <div class="modal-popup-label">Assurance<br>Habitation</div>
            </NuxtLink>
            <NuxtLink to="/voyage" class="modal-popup-product">
              <img src="../public/voyage.png" alt="Assurance Voyage" class="modal-popup-img" />
              <div class="modal-popup-label">Assurance<br>Voyage</div>
            </NuxtLink>
            <NuxtLink to="/sante" class="modal-popup-product">
              <img src="../public/sante.png" alt="Assurance Santé" class="modal-popup-img" />
              <div class="modal-popup-label">Assurance<br>Santé</div>
            </NuxtLink>
          </div>

        </div>
      </div>
      <!-- FIN MODAL -->

    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '~/components/Header.vue'
const showModal = ref(false)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.main-bg { background: #f7f9fb; min-height: 100vh; }
.banner {
  background: #e11d22;
  color: #fff;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  padding: 10px 0;
  margin: 0 0 32px 0;
}
.main-content { padding: 40px 48px; }
.dashboard-row {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
}
.welcome-card {
  flex: 2;
  background: #18344a;
  border-radius: 12px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  min-height: 200px;
}
.welcome-header {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 18px;
}
.avatar-bg {
  background: #eaf6fb;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-icon { color: #18344a; font-size: 48px; }
.welcome-title { color: #fff; font-size: 20px; font-weight: bold; margin: 0; }
.welcome-name { color: #fff; margin: 0; font-size: 15px; }
.notif-bell { margin-left: auto; }
.bell-icon { color: #fff; font-size: 32px; }
.welcome-actions {
  display: flex;
  gap: 16px;
  margin-top: 18px;
}
.coffre-btn {
  background: #22c55e;
  color: #fff;
  font-weight: 600;
  padding: 12px 24px;
  width: 50%;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s;
  text-decoration: none;
  transform: translateY(70%);
  text-align: center;
}
.coffre-btn:hover { background: #15803d; }
.prime-btn {
  background: #22c55e;
  width: 50%;
  color: #fff;
  font-weight: 600;
  padding: 12px 24px;
  height: 42px;
  transform: translateY(158%);
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s;
  text-decoration: none;
}
.prime-btn:hover { background: #16a34a; }
.stat-card {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
}
.stat-desc { color: #888; margin-bottom: 24px; }
.stat-value-row {
  display: flex;
  align-items: flex-end;
  gap: 12px;
}
.stat-value { font-size: 38px; font-weight: bold; color: #222; }
.stat-icon { color: #e5e7eb; font-size: 64px; margin-left: auto; }
.info-card {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 180px;
}
.info-desc { color: #888; margin-bottom: 24px; }
.info-btn {
  background: #e0e7ff;
  color: #18344a;
  font-weight: 600;
  padding: 10px 0;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}
.info-btn:hover { background: #c7d2fe; }
.info-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flag-icon { color: #bbb; font-size: 24px; vertical-align: middle; }
.see-all {
  color: #888;
  font-size: 14px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 2px;
  transition: color 0.2s;
}
.see-all:hover { color: #18344a; }
.sinistre-card { padding-bottom: 0; }
.sinistre-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
}
.sinistre-img {
  width: 90px;
  opacity: 0.7;
  margin-bottom: 8px;
}
.no-claim {
  color: #bbb;
  text-align: center;
  font-size: 15px;
  margin-bottom: 18px;
}

/* Modal */

.modal-popup-large {
  max-width: 1100px;
  width: 95vw;
  border-radius: 18px;
  padding: 38px 38px 32px 38px;
  background-color: white;
}

.modal-popup-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.modal-popup-title {
  font-size: 2.4rem;
  font-weight: bold;
  margin: 0;
  font-family: 'Montserrat', Arial, sans-serif;
}

.modal-popup-cancel {
  background: none;
  border: none;
  color: #222;
  font-size: 1.2rem;
  text-decoration: underline;
  cursor: pointer;
  font-family: 'Montserrat', Arial, sans-serif;
  margin-top: 8px;
  transition: color 0.2s;
}
.modal-popup-cancel:hover { color: #e11d22; }

.modal-popup-products {
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
}

.modal-popup-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  cursor: pointer;
  transition: transform 0.15s;
  border-radius: 14px;
  padding: 8px 0 0 0;
}
.modal-popup-product:hover {
  transform: translateY(-8px) scale(1.04);
}

.modal-popup-img {
  width: 180px;
  height: 180px;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 12px;
  background: #f5f7fa;
  box-shadow: 0 2px 8px #0001;
}

.modal-popup-label {
  font-size: 1.15rem;
  color: #222;
  font-weight: 600;
  text-align: center;
  font-family: 'Montserrat', Arial, sans-serif;
  margin-bottom: 8px;
}

@media (max-width: 900px) {
  .modal-popup-large { max-width: 98vw; padding: 18px 4px 18px 4px; }
  .modal-popup-products { gap: 12px; }
  .modal-popup-product, .modal-popup-img { width: 110px; height: 110px; }
  .modal-popup-label { font-size: 0.95rem; }
  .modal-popup-title { font-size: 1.3rem; }
}

.modal-popup-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  border-radius: 14px;
  padding: 8px 0 0 0;
  text-decoration: none;
  color: inherit;
}
.modal-popup-product:hover {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 4px 16px #0001;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(30, 41, 59, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 900px) {
  .dashboard-row { flex-direction: column; }
  .main-content { padding: 24px 8px; }
}
</style>