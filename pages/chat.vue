<template>
  <div class="chat-wrapper">
    <h1 class="chat-title">Assistant AFG – Posez vos questions sur l'assurance</h1>

    <div class="chat-box">
      <div ref="chatContainer" class="messages">
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
            <span class="dots">
              <span>.</span><span>.</span><span>.</span>
            </span>
          </div>
        </div>
      </div>

      <form class="chat-form" @submit.prevent="sendMessage">
        <input
          v-model="newMessage"
          type="text"
          placeholder="Posez votre question ici..."
        >
        <button type="submit" :disabled="!newMessage.trim()">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const newMessage = ref('')
const chatContainer = ref(null)
const isLoading = ref(false)

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
    'Content-Type': 'application/json', // ✅ OBLIGATOIRE
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
.chat-wrapper {
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #e0e0e0, #ffffff);
}

.chat-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #1b004d;
}

.chat-box {
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.messages {
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 1.5rem;
  padding-right: 0.5rem;
}

.message {
  margin-bottom: 1rem;
  display: flex;
}

.message.user {
  justify-content: flex-end;
}

.message.assistant {
  justify-content: flex-start;
}

.bubble {
  background: #f1f1f1;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  max-width: 70%;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}

.message.user .bubble {
  background: #1b004d;
  color: white;
  text-align: right;
}

/* BULLE DE TYPING */
.typing .dots {
  display: inline-flex;
  gap: 4px;
  font-size: 1.5rem;
  animation: blink 1.5s infinite;
}

.typing strong {
  display: block;
  margin-bottom: 0.25rem;
}

@keyframes blink {
  0%, 100% { opacity: 0.3 }
  50% { opacity: 1 }
}

.chat-form {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.chat-form input {
  flex: 1;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.chat-form button {
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background-color: #1b004d;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.chat-form button:disabled {
  background-color: #999;
  cursor: not-allowed;
}

.chat-form button:hover:enabled {
  background-color: #300072;
}
</style>
