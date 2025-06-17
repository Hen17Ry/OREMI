<template>
  <header class="navbar">
    <div class="navbar-left">
      <img src="../public/afg.png" alt="Oremi" class="logo-oremi" />
    </div>
    <div class="navbar-right">
        <button class="bot-btn" @click="$emit('toggle-bot')">Oremi Bot</button>
        <button @click="toggleMenu" class="navbar-user-btn">
            <span class="material-icons">person</span>
            <span>Mon espace</span>
            <span class="material-icons">expand_more</span>
        </button>
        <div v-if="menuOpen" class="navbar-menu">
            <NuxtLink to="/" class="navbar-menu-item">Mon espace</NuxtLink>
            <NuxtLink to="/profil" class="navbar-menu-item">Mon profil</NuxtLink>
            <NuxtLink to="#" class="navbar-menu-item logout">Déconnexion</NuxtLink>
        </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  background: #fff;
  box-shadow: 0 2px 8px #0001;
  position: relative;
  z-index: 10;
}
.navbar-left {
  display: flex;
  align-items: center;
  gap: 16px;
}
.logo-oremi { height: 40px; }
.logo-afg { height: 32px; }
.navbar-by { color: #aaa; }
.navbar-right { position: relative; display: flex; }
.navbar-user-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
}
.navbar-user-btn:hover { background: #f3f4f6; }

.bot-btn {
  background: #065e94;
  color: #fff;
  font-size: 20px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 400;
  border: none;
  border-radius: 7px;
  padding: 10px 32px;
  margin-right: 24px;
  text-decoration: none;
  transition: background 0.2s;
  box-shadow: 0 2px 8px #0001;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.bot-btn:hover {
  background: #054872;
}

.navbar-menu {
  position: absolute;
  right: 0;
  margin-top: 8px;
  width: 180px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 24px #0002;
  overflow: hidden;
  transform: translateY(32%);
}
.navbar-menu-item {
  display: block;
  padding: 12px 20px;
  color: #222;
  text-decoration: none;
  transition: background 0.2s;
}
.navbar-menu-item:hover { background: #f3f4f6; }
.logout { color: #e11d48; }
</style>

