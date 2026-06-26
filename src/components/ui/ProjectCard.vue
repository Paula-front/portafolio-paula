<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="project-card project-card--minimal">
    <a
      v-if="project.demo !== '#'"
      :href="project.demo"
      target="_blank"
      rel="noopener noreferrer"
      class="project-card__image"
    >
      <img
        :src="project.image"
        :alt="`Captura del proyecto ${project.title}`"
        :style="{ objectPosition: project.imagePosition || 'top center' }"
      />
    </a>

    <div v-else class="project-card__image">
      <img
        :src="project.image"
        :alt="`Captura del proyecto ${project.title}`"
        :style="{ objectPosition: project.imagePosition || 'top center' }"
      />
    </div>

    <div class="project-card__body">
      <div class="project-card__heading">
        <p class="project-card__type">{{ project.category }}</p>
        <h3>{{ project.title }}</h3>
      </div>

      <p class="project-card__short">
        {{ project.description }}
      </p>

      <div class="project-card__techs">
        <span v-for="tech in project.technologies.slice(0, 3)" :key="tech">
          {{ tech }}
        </span>
      </div>

      <div class="project-card__actions">
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