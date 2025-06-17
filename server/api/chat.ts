export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const messages = body.messages

    const config = useRuntimeConfig()
    if (!config.OPENROUTER_API_KEY) {
      throw new Error("Clé API OpenRouter manquante")
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'Oremi Assistant'
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o',
        messages,
        temperature: 0.5,
        max_tokens: 1000,
      }),
    })

    const data = await response.json()

    if (!data.choices || !data.choices[0]?.message?.content) {
      console.error('Réponse API invalide :', data)
      throw new Error(data?.error?.message || 'Réponse API invalide')
    }

    return {
      message: data.choices[0].message.content,
    }

  } catch (error) {
    console.error('Erreur OpenRouter :', error)
    return {
      message: `❌ Erreur : ${error instanceof Error ? error.message : String(error)}`,
    }
  }
})
