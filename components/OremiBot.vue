<template>
  <div class="oremi-bot-popup">
    <div class="oremi-bot-header">
      <img src="/bot_logo.png" alt="Oremi Bot" class="oremi-bot-logo" >
      <div>
        <div class="oremi-bot-title">Oremi Bot</div>
        <div class="oremi-bot-status"><span class="oremi-bot-dot" /> en ligne</div>
      </div>
      <button class="oremi-bot-close" @click="$emit('close')">
        <span class="material-icons">close</span>
      </button>
    </div>

    <div class="oremi-bot-body">
      <div ref="chatContainer" class="oremi-bot-messages">
        <div
          v-for="(msg, index) in messages.filter(m => m.role !== 'system')"
          :key="index"
          :class="['message', msg.role]"
        >
          <div class="bubble">
            <strong>{{ msg.role === 'user' ? 'Vous' : 'Bot' }} :</strong>
            <p>{{ msg.content }}</p>
          </div>
        </div>

        <div v-if="isLoading" class="message assistant">
          <div class="bubble typing">
            <strong>Bot :</strong>
            <span class="dots"><span>.</span><span>.</span><span>.</span></span>
          </div>
        </div>
      </div>
    </div>

    <div class="oremi-bot-footer">
      <input
        v-model="newMessage"
        class="oremi-bot-input"
        placeholder="Posez votre question..."
        @keyup.enter="sendMessage"
      >
      <button class="oremi-bot-send" @click="sendMessage">
        <span class="material-icons">send</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

defineEmits(['close'])

const newMessage = ref('')
const isLoading = ref(false)
const chatContainer = ref(null)

const messages = ref([
  {
    role: 'system',
    content:
      "Tu es un expert en assurance chez AFG. Réponds uniquement aux questions liées aux assurances (auto, santé, habitation). Si la question sort de ce sujet, réponds poliment que tu n’es pas habilité à y répondre.",
  },
])

const sendMessage = async () => {
  const content = newMessage.value.trim()
  if (!content) return

  messages.value.push({ role: 'user', content })
  newMessage.value = ''
  isLoading.value = true

  await nextTick()
  chatContainer.value.scrollTop = chatContainer.value.scrollHeight

  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ messages: messages.value }),
  })

  const data = await response.json()

  messages.value.push({
    role: 'assistant',
    content: data.message,
  })

  isLoading.value = false

  await nextTick()
  chatContainer.value.scrollTop = chatContainer.value.scrollHeight
}
</script>

<style scoped>
.oremi-bot-popup {
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 360px;
  height: 500px;
  background: #fafbfc;
  border-radius: 28px;
  box-shadow: 0 8px 32px #0002;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 9999;
}
.oremi-bot-header {
  background: #0a4262;
  color: white;
  display: flex;
  align-items: center;
  padding: 18px;
  gap: 12px;
}
.oremi-bot-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  object-fit: contain;
}
.oremi-bot-title {
  font-size: 1.2rem;
  font-weight: bold;
}
.oremi-bot-status {
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}
.oremi-bot-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  display: inline-block;
  margin-right: 6px;
}
.oremi-bot-close {
  position: absolute;
  right: 12px;
  top: 12px;
  border: none;
  background: none;
  font-size: 20px;
  color: white;
  cursor: pointer;
}
.oremi-bot-body {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}
.oremi-bot-messages {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.message {
  display: flex;
}
.message.user {
  justify-content: flex-end;
}
.message.assistant {
  justify-content: flex-start;
}
.bubble {
  max-width: 80%;
  padding: 0.8rem;
  border-radius: 10px;
  font-size: 0.9rem;
  line-height: 1.4;
  background: #f3f4f6;
  color: #222;
}
.message.user .bubble {
  background: #0a4262;
  color: white;
}
.typing .dots {
  display: inline-flex;
  gap: 4px;
  animation: blink 1.5s infinite;
}
@keyframes blink {
  0%, 100% { opacity: 0.3 }
  50% { opacity: 1 }
}
.oremi-bot-footer {
  display: flex;
  border-top: 1px solid #eee;
  background: #fff;
  padding: 0.5rem;
}
.oremi-bot-input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
}
.oremi-bot-send {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #0a4262;
  cursor: pointer;
}
</style>
