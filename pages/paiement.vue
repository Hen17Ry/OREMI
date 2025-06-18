<template>
  <div class="payment-modal-bg">
    <div class="payment-modal">
      <div class="payment-title">Choisissez le moyen de paiement</div>
      <form @submit="handleSubmit">
        <div
          v-for="option in options"
          :key="option.value"
          :class="['payment-option', selected === option.value ? 'selected' : '']"
          @click="selected = option.value"
        >
          <label class="payment-radio-label">
            <input
              v-model="selected"
              type="radio"
              :value="option.value"
              class="payment-radio"
            >
            <span>{{ option.label }}</span>
          </label>
          <img v-if="option.img" :src="option.img" :alt="option.label" class="payment-logo" >
        </div>
        <button type="submit" class="payment-btn-primary">Continuer</button>
        <div class="payment-cancel">Annuler</div>
      </form>
    </div>
    <div v-if="showSuccessModal" class="payment-success-modal">
      <div class="payment-success-box">
        ✅ Paiement de 700 000 FCFA effectué avec succès.
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const selected = ref('kkiapay')
const showSuccessModal = ref(false)

const options = [
  { value: 'kkiapay', label: 'Kkiapay', img: '/kkiapay.png' },
  { value: 'fedapay', label: 'FedaPay', img: '/fedapay.png' },
  { value: 'epargne', label: 'Utiliser votre épargne', img: '/epargne.png' },
]

async function handleSubmit(e) {
  e.preventDefault()
  if (selected.value === 'epargne') {
    const res = await $fetch('/api/pay-epargne')
    if (res.success) {
      showSuccessModal.value = true
      setTimeout(() => {
        router.push('/')
      }, 2000)
    } else {
      alert('Erreur : ' + res.error)
    }
  } else {
    // autres moyens de paiement à gérer ici
    alert('Autre méthode non encore implémentée.')
  }
}

</script>

<style scoped>
.payment-success-modal {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background: #0005;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
.payment-success-box {
  background: #e6ffee;
  color: #065f46;
  padding: 22px 38px;
  border-radius: 16px;
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: 0 4px 16px #0002;
}

.payment-modal-bg {
  min-height: 100vh;
  background: #0002;
  display: flex;
  align-items: center;
  justify-content: center;
}
.payment-modal {
  background: #f8f8f8;
  border-radius: 16px;
  box-shadow: 0 8px 32px #0002;
  padding: 32px 32px 24px 32px;
  max-width: 420px;
  width: 100%;
}
.payment-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 28px;
  color: #222;
}
.payment-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 18px 18px;
  margin-bottom: 12px;
  background: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.2s, border 0.2s;
}
.payment-option.selected {
  background: #eaf8ef;
  border: 2px solid #22c55e;
}
.payment-radio-label {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.08rem;
  color: #222;
  cursor: pointer;
}
.payment-radio {
  accent-color: #22c55e;
  margin-right: 8px;
}
.payment-logo {
  width: 80px;
  height: 40px;
  object-fit: contain;
  border-radius: 8px;
  padding: 4px 8px;
}
.payment-btn-primary {
  width: 100%;
  margin-top: 18px;
  background: #0a2342;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  padding: 14px 0;
  cursor: pointer;
  transition: background 0.2s;
}
.payment-btn-primary:hover {
  background: #3e2e8f;
}
.payment-cancel {
  text-align: center;
  margin-top: 18px;
  color: #222;
  font-size: 1.08rem;
  cursor: pointer;
  font-weight: 500;
}
</style>