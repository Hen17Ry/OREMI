<template>
  <div class="document-extractor">
    <div class="container">
      <h1 class="title">Extraction de Documents Multiples</h1>

      <!-- Upload de documents -->
      <div class="upload-section">
        <div v-for="docType in documentTypes" :key="docType.key" class="upload-zone">
          <p><strong>{{ docType.label }}</strong></p>
          <input 
            type="file" 
            accept="image/*" 
            class="file-input"
            @change="e => handleFileSelect(e, docType.key)"
          >
          <div v-if="imagePreviews[docType.key]">
            <img :src="imagePreviews[docType.key]" alt="preview" class="image-preview">
          </div>
        </div>

        <button class="analyze-btn" :disabled="isAnalyzing" @click="analyzeDocuments">
          {{ isAnalyzing ? 'Analyse en cours...' : 'Analyser les documents' }}
        </button>
      </div>

      <!-- Résultats -->
      <div v-if="hasResults" class="results-section">
        <div v-for="docType in filteredDocumentTypes" :key="docType.key">
          <h2>{{ docType.label }}</h2>
          <div class="form-grid">
            <div 
              v-for="(value, key) in extractedData[docType.key]" 
              :key="key" 
              class="form-group">
              <label>{{ key }}</label>
              <input v-model="extractedData[docType.key][key]" type="text" class="form-input">
            </div>
          </div>
        </div>
      </div>

      <div v-if="statusMessage" :class="['status-message', statusType]">
        {{ statusMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExtractDocument',
  data() {
    return {
      selectedFiles: {
        cip: null,
        carte_grise: null,
        permis: null
      },
      imagePreviews: {
        cip: null,
        carte_grise: null,
        permis: null
      },
      extractedData: {
        cip: null,
        carte_grise: null,
        permis: null
      },
      isAnalyzing: false,
      statusMessage: '',
      statusType: 'info',
      documentTypes: [
        { key: 'cip', label: 'Carte d\'Identité (CIP)' },
        { key: 'carte_grise', label: 'Carte Grise' },
        { key: 'permis', label: 'Permis de Conduire' }
      ]
    }
  },
  computed: {
    hasResults() {
      return Object.values(this.extractedData).some(d => d)
    },
    filteredDocumentTypes() {
      return this.documentTypes.filter(dt => this.extractedData[dt.key])
    }
  },
  methods: {
    handleFileSelect(event, docType) {
      const file = event.target.files[0]
      if (!file || !file.type.startsWith('image/')) {
        this.showMessage('Fichier invalide', 'error')
        return
      }
      this.selectedFiles[docType] = file
      const reader = new FileReader()
      reader.onload = e => {
        this.imagePreviews[docType] = e.target.result
      }
      reader.readAsDataURL(file)
    },
    async analyzeDocuments() {
      const formData = new FormData()
      for (const docType of Object.keys(this.selectedFiles)) {
        if (this.selectedFiles[docType]) {
          formData.append(docType, this.selectedFiles[docType])
        }
      }
      if (!formData.has('cip') && !formData.has('carte_grise') && !formData.has('permis')) {
        this.showMessage('Aucun fichier sélectionné', 'error')
        return
      }
      this.isAnalyzing = true
      this.showMessage('Analyse en cours...', 'info')
      try {
        const response = await $fetch('/api/analyse', {
          method: 'POST',
          body: formData
        })
        if (response.success) {
          this.extractedData = response.data
          this.showMessage('Analyse réussie', 'success')
        } else {
          this.showMessage(response.error, 'error')
        }
      } catch {
        this.showMessage('Erreur de connexion au serveur', 'error')
      } finally {
        this.isAnalyzing = false
      }
    },
    showMessage(message, type) {
      this.statusMessage = message
      this.statusType = type
      if (message) {
        setTimeout(() => {
          this.statusMessage = ''
        }, 5000)
      }
    }
  }
}
</script>

<style scoped>
.document-extractor {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px 0;
}
.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}
.title {
  text-align: center;
  color: white;
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}
.upload-section, .results-section {
  background: white;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
.upload-zone {
  border: 3px dashed #667eea;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  cursor: pointer;
}
.file-input {
  margin-top: 10px;
}
.image-preview {
  max-width: 100%;
  max-height: 300px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.analyze-btn {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.analyze-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}
.results-section h2 {
  color: #2d3748;
  margin-bottom: 20px;
}
.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}
.form-group label {
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 5px;
  display: block;
}
.form-input {
  width: 100%;
  padding: 10px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
}
.status-message {
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
}
.status-message.info {
  background: #bee3f8;
  color: #2c5282;
  border: 1px solid #90cdf4;
}
.status-message.success {
  background: #c6f6d5;
  color: #22543d;
  border: 1px solid #9ae6b4;
}
.status-message.error {
  background: #fed7d7;
  color: #742a2a;
  border: 1px solid #fc8181;
}
</style>