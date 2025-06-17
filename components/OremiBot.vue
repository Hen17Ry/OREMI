<template>
  <div class="oremi-bot-popup">
    <div class="oremi-bot-header">
      <img src="../public/bot_logo.png" alt="Oremi Bot" class="oremi-bot-logo" />
      <div>
        <div class="oremi-bot-title">Oremi Bot</div>
        <div class="oremi-bot-status"><span class="oremi-bot-dot"></span> en ligne</div>
      </div>
      <button class="oremi-bot-close" @click="$emit('close')">
        <span class="material-icons">close</span>
      </button>
    </div>
    <div class="oremi-bot-body">
      <img src="../public/bot_logo.png" alt="Oremi" class="oremi-bot-center-logo" />
      <p class="oremi-bot-desc">
        Apprenez-en plus sur les assurances avec OREMI BOT, votre ami virtuel capable de répondre à vos questions pour vous informer et vous rassurer.
      </p>
    </div>
    <div class="oremi-bot-footer">
      <input class="oremi-bot-input" placeholder="Posez votre question..." />
      <button class="oremi-bot-send">
        <span class="material-icons">send</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.oremi-bot-popup {
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 340px;
  height: 380px;
  background: #fafbfc;
  border-radius: 28px;
  box-shadow: 0 8px 32px #0002;
  z-index: 2000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.oremi-bot-header {
  background: #0a4262;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 18px 12px 18px;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  position: relative;
}
.oremi-bot-logo {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #fff;
  object-fit: contain;
}
.oremi-bot-title {
  font-weight: bold;
  font-size: 1.1rem;
}
.oremi-bot-status {
  font-size: 0.95rem;
  color: #d1fae5;
  display: flex;
  align-items: center;
  gap: 4px;
}
.oremi-bot-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  margin-right: 4px;
}
.oremi-bot-close {
  background: none;
  border: none;
  color: #fff;
  font-size: 22px;
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.oremi-bot-close:hover { opacity: 1; }
.oremi-bot-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 18px 18px 18px;
  text-align: center;
}
.oremi-bot-center-logo {
  width: 90px;
  height: 90px;
  margin-bottom: 18px;
}
.oremi-bot-desc {
  font-size: .8rem;
  color: #222;
  margin-bottom: 0;
}
.oremi-bot-footer {
  border-top: 1px solid #e5e7eb;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 48px;
}
.oremi-bot-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  background: transparent;
  padding: 0 8px;
}
.oremi-bot-send {
  background: none;
  border: none;
  color: #0a4262;
  font-size: 22px;
  cursor: pointer;
  padding: 4px 8px;
}
</style>