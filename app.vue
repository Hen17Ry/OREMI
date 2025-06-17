<template>
  <div>
    <Header @toggle-bot="showBot = !showBot" />
    <NuxtPage />
    <OremiBot v-if="showBot" @close="showBot = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '~/components/header.vue'
import OremiBot from '~/components/OremiBot.vue'

const showBot = ref(false)
</script>
