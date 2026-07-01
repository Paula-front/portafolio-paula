<template>
  <span class="text-rotator">
    {{ currentText }}
  </span>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const texts = [
  'Desarrolladora Front-End',
  'Vue.js',
  'JavaScript',
  'Diseño Web Responsivo',
  'Creando aplicaciones web modernas'
]

const currentIndex = ref(0)
const currentText = ref(texts[currentIndex.value])

let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % texts.length
    currentText.value = texts[currentIndex.value]
  }, 2500)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.text-rotator {
  display: inline-block;
  color: #c084fc;
  font-weight: 700;
  transition: opacity 0.3s ease;
}
</style>