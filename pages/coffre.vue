<template>
  <div class="coffre-bg">
    <main class="coffre-main">
      <h1 class="coffre-title">Ouverture du coffre-fort</h1>
      <h2 class="coffre-subtitle">Une assurance qui se construit pas à pas.</h2>
      <p class="coffre-desc">
        L’Assurance Automobile de AFG Assurances Bénin (AFG) se permet de vous proposer une caisse d’épargne pour vous aider à prévoir les futures dépenses liées à nos offres. Tout ceci pour faciliter l’accès à nos offres et vous avoir toujours plus près de nous.
      </p>
      <section class="coffre-advantages">
        <h3>Avantages</h3>
        <div class="coffre-adv-list">
          <div class="coffre-adv-title">Cotiser en prévision de la prochaine souscriptions</div>
          <div class="coffre-adv-item">
            <span class="coffre-check">✔️</span>
            <span>Cela vous permet d'être moins soucieux si vous aviez déjà une souscription chez nous.</span>
          </div>
        </div>
      </section>
      <div class="coffre-form-block">
        <label class="coffre-form-label">Commencez dès maintenant !</label>
        <div class="coffre-input-row">
          <span class="material-icons coffre-input-icon">account_balance_wallet</span>
          <input
            ref="montantRef"
            type="number"
            min="500"
            class="coffre-input"
            placeholder="Entrez un montant de début (minimum 500 fr)"
          >
        </div>
      </div>
      <div style="display: flex;">
        <button class="coffre-btn" @click.prevent="checkCoffreStatus">Ouvrir ma caisse</button>
        <button class="coffre-btn" @click.prevent="lancerPaiement">Activer Ma Caisse</button>
      </div>
       <div v-if="showModal" class="modal-backdrop">
            <div class="modal-content">
                <h3>⚠️ Caisse non activée</h3>
                <p>Veuillez d’abord activer votre caisse avant de pouvoir l’ouvrir.</p>
                <button class="modal-btn" @click="closeModal" >Fermer</button>
            </div>
        </div>

    </main>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

const showModal = ref(false)
const montantRef = ref(null)

let openKkiapayWidget, addKkiapayListener

onMounted(async () => {
  const kkiapay = await import('kkiapay')
  openKkiapayWidget = kkiapay.openKkiapayWidget
  addKkiapayListener = kkiapay.addKkiapayListener
})

const checkCoffreStatus = async () => {
  const res = await fetch('/api/check-coffre')
  const data = await res.json()

  if (data.montant > 0) {
    navigateTo('/coffre_dash')
  } else {
    showModal.value = true
  }
}

const closeModal = () => {
  showModal.value = false
}

const lancerPaiement = () => {
  const montant = parseInt(montantRef.value?.value || '0')
  if (isNaN(montant) || montant < 500) {
    alert("Veuillez entrer un montant valide (minimum 500 F)")
    return
  }

  openKkiapayWidget({
    amount: montant,
    api_key: '1ff73100282511f096167dd95d93ba59',
    sandbox: true,
    phone: '', // facultatif
  })

  addKkiapayListener('success', async (payload) => {
    console.log('Paiement réussi :', payload)

    await fetch('/api/activer-coffre', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        montant,
        transaction: payload,
      })
    })

    navigateTo('/coffre_dash')
  })
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.coffre-bg { background: #f5f7fa; min-height: 100vh; }
.coffre-main {
  max-width: 900px;
  margin: 0 auto;
  padding: 48px 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.coffre-title {
  font-size: 2.3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 18px;
  margin-top: 24px;
}
.coffre-subtitle {
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 12px;
}
.coffre-desc {
  color: #444;
  text-align: center;
  font-size: 1.05rem;
  max-width: 700px;
  margin-bottom: 36px;
}
.coffre-advantages {
  background: #eaf3fb;
  border-radius: 14px;
  padding: 32px 28px 24px 28px;
  margin-bottom: 38px;
  width: 100%;
  max-width: 820px;
}
.coffre-advantages h3 {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 12px;
}
.coffre-adv-list {
  margin-left: 0;
}
.coffre-adv-title {
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 10px;
}
.coffre-adv-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #15803d;
  font-size: 1rem;
}
.coffre-check {
  font-size: 1.3rem;
  background: #d1fae5;
  border-radius: 50%;
  padding: 2px 6px;
  margin-right: 4px;
}
.coffre-form-block {
  width: 100%;
  max-width: 820px;
  margin-bottom: 32px;
}
.coffre-form-label {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 10px;
  display: block;
}
.coffre-input-row {
  position: relative;
  width: 100%;
}
.coffre-input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  font-size: 22px;
}
.coffre-input {
  width: 100%;
  padding: 12px 12px 12px 44px;
  border: 1px solid #e5e7eb;
  border-radius: 7px;
  font-size: 1rem;
  outline: none;
  margin-top: 6px;
  background: #fff;
  transition: border 0.2s;
}
.coffre-input:focus {
  border: 1.5px solid #2563eb;
}
.coffre-btn {
  margin-top: 38px;
  background: #3973c6;
  color: #fff;
  font-weight: 600;
  padding: 18px 0;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  width: 280px;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px #0001;
  text-decoration: none;
  text-align: center;
  transform: translateY(-50%);
  margin-inline-start: 50px;
}
.coffre-btn:hover {
  background: #2456a6;
}
.modal-backdrop {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.modal-content {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  text-align: center;
  max-width: 300px;
}
.modal-content h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}
.modal-btn {
  margin-top: 12px;
  padding: 10px 20px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.modal-btn:hover {
  background: #1e40af;
}

@media (max-width: 700px) {
  .coffre-main { padding: 24px 4px 0 4px; }
  .coffre-advantages, .coffre-form-block { padding: 18px 8px; }
  .coffre-btn { width: 100%; }
}
</style>