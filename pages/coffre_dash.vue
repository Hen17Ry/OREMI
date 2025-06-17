<template>
  <div class="coffre-bg">
    <main class="coffre-main">
      <div class="coffre-header-row">
        <div class="coffre-header-left">
          <NuxtLink to="/coffre" class="back-arrow"><span class="material-icons">arrow_back</span></NuxtLink>
          <span class="coffre-header-title">Mon coffre-fort</span>
        </div>
        <button class="coffre-new-btn">Faire un nouveau dépôt</button>
      </div>
      <div class="coffre-filter-row">
        <select class="coffre-select">
          <option>Semaine 1</option>
          <option>Semaine 2</option>
          <option>Semaine 3</option>
          <option>Semaine 4</option>
        </select>
        <select class="coffre-select">
          <option>Février</option>
          <option>Janvier</option>
          <option>Mars</option>
          <option>Avril</option>
        </select>
        <select class="coffre-select">
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
        </select>
      </div>
      <div class="coffre-empty-block">
        <img src="../public/sinistre_empty.png" alt="Aucun dépôt" class="coffre-empty-img" />
        <div class="coffre-empty-text">Aucun dépôt effectué pour le moment.</div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Header from '~/components/header.vue'
</script>

<style scoped>
.coffre-bg {
  background: #f5f7fa;
  min-height: 100vh;
}
.coffre-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.coffre-header-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 12px;
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
  margin-left: 8px;
}
.coffre-header-title {
  font-size: 1.35rem;
  font-weight: bold;
  font-family: 'Montserrat', Arial, sans-serif;
}
.coffre-new-btn {
  background: #065e94;
  color: #fff;
  font-size: 1.1rem;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  padding: 12px 38px;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px #0001;
}
.coffre-new-btn:hover {
  background: #054872;
}
.coffre-filter-row {
  width: 100%;
  display: flex;
  gap: 32px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 24px;
  padding-left: 24px;
}
.coffre-select {
  font-size: 1.1rem;
  padding: 12px 24px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #fff;
  color: #222;
  font-family: 'Montserrat', Arial, sans-serif;
  min-width: 160px;
  outline: none;
  transition: border 0.2s;
}
.coffre-select:focus {
  border: 1.5px solid #065e94;
}
.coffre-empty-block {
  width: 100%;
  min-height: 320px;
  background: #fff;
  border-radius: 12px;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px #0001;
  padding: 48px 0;
}
.coffre-empty-img {
  width: 110px;
  margin-bottom: 18px;
  opacity: 0.8;
}
.coffre-empty-text {
  font-size: 1.15rem;
  color: #222;
  font-family: 'Montserrat', Arial, sans-serif;
  text-align: center;
}
@media (max-width: 900px) {
  .coffre-main { padding: 18px 0 0 0; }
  .coffre-header-row, .coffre-filter-row { flex-direction: column; gap: 16px; align-items: flex-start; }
  .coffre-filter-row { padding-left: 0; }
  .coffre-empty-block { padding: 32px 0; }
}
</style>