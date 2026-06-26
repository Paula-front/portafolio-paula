<script setup>
import { ref } from 'vue'

defineProps({
  project: {
    type: Object,
    required: true
  }
})

const showDetails = ref(false)

const toggleDetails = () => {
  showDetails.value = !showDetails.value
}
</script>

<template>
  <article class="project-card">
    <div class="project-card__image">
      <img
        :src="project.image"
        :alt="`Captura del proyecto ${project.title}`"
        :style="{ objectPosition: project.imagePosition || 'top center' }"
      />

      <div class="project-card__overlay">
        <span v-if="project.featured" class="project-card__badge">
          Destacado
        </span>

        <span class="project-card__category">
          {{ project.category }}
        </span>
      </div>
    </div>

    <div class="project-card__body">
      <p class="project-card__type">{{ project.type }}</p>

      <h3>{{ project.title }}</h3>

      <p>{{ project.description }}</p>

      <div class="project-card__techs">
        <span v-for="tech in project.technologies" :key="tech">
          {{ tech }}
        </span>
      </div>

      <Transition name="fade">
        <p v-if="showDetails" class="project-card__details">
          {{ project.details }}
        </p>
      </Transition>

      <div class="project-card__actions">
        <button
          type="button"
          class="btn btn--small btn--ghost"
          @click="toggleDetails"
        >
          {{ showDetails ? 'Ocultar' : 'Detalles +' }}
        </button>

        <a
          v-if="project.demo !== '#'"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--small btn--primary"
        >
          Demo ↗
        </a>

        <a
          v-if="project.repo !== '#'"
          :href="project.repo"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--small btn--secondary"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  </article>
</template>