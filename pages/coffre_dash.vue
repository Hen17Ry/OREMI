<template>
  <div class="coffre-bg">
    <main class="coffre-main">
      <div class="coffre-header-row">
        <div class="coffre-header-left">
          <NuxtLink to="/coffre" class="back-arrow">
            <span class="material-icons">arrow_back</span>
          </NuxtLink>
          <span class="coffre-header-title">Mon coffre-fort</span>
        </div>
        <button class="coffre-new-btn">Faire un nouveau dépôt</button>
      </div>

      <div class="coffre-solde-block">
        Solde disponible : <strong>{{ solde }} FCFA</strong>
      </div>

      <div class="coffre-histo-title">Historique des transactions</div>
      <div v-if="transactions.length === 0" class="coffre-empty-block">
        <img src="../public/sinistre_empty.png" alt="Aucun dépôt" class="coffre-empty-img" >
        <div class="coffre-empty-text">Aucun dépôt effectué pour le moment.</div>
      </div>
      <ul v-else class="coffre-list">
        <li v-for="(tx, index) in transactions" :key="index" class="coffre-item">
          <span class="coffre-amount">+ {{ tx.montant }} FCFA</span>
          <span class="coffre-date">{{ formatDate(tx.date) }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const solde = ref(0)
const transactions = ref([])

onMounted(async () => {
  const res = await fetch('/api/coffre')
  const data = await res.json()
  solde.value = data.solde
  transactions.value = data.transactions || []
})

function formatDate(dateString) {
  const d = new Date(dateString)
  return d.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
.coffre-bg { background: #f5f7fa; min-height: 100vh; }
.coffre-main {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 20px 0 20px;
  display: flex;
  flex-direction: column;
}
.coffre-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.coffre-header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}
.back-arrow {
  font-size: 28px;
  color: #222;
  cursor: pointer;
}
.coffre-header-title {
  font-size: 1.4rem;
  font-weight: bold;
}
.coffre-new-btn {
  background: #065e94;
  color: #fff;
  padding: 12px 32px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}
.coffre-new-btn:hover {
  background: #054872;
}
.coffre-solde-block {
  font-size: 1.2rem;
  margin-bottom: 24px;
  font-weight: 600;
  color: #0a4262;
}
.coffre-histo-title {
  font-size: 1.2rem;
  margin-bottom: 12px;
  font-weight: 600;
}
.coffre-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.coffre-item {
  background: #fff;
  border-radius: 10px;
  padding: 14px 18px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 6px #0001;
}
.coffre-amount {
  color: #15803d;
  font-weight: bold;
}
.coffre-date {
  color: #666;
  font-size: 0.95rem;
}
.coffre-empty-block {
  background: #fff;
  border-radius: 12px;
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.coffre-empty-img {
  width: 100px;
  opacity: 0.8;
  margin-bottom: 16px;
}
.coffre-empty-text {
  font-size: 1.1rem;
  color: #222;
}
</style>
