<script setup>
import { computed, ref } from 'vue'
import { laboratoryProjects } from '../../data/laboratory'

const activeIndex = ref(0)

const activeProject = computed(() => laboratoryProjects[activeIndex.value])

const selectProject = (index) => {
  activeIndex.value = index
}
</script>

<template>
  <section id="laboratorio" class="section laboratory">
    <div class="section-header laboratory__header">
      <p class="section-label">Laboratorio Creativo</p>
      <h2>Aquí las ideas toman forma</h2>
      <p>
        No todos los proyectos nacen para resolver un problema. Algunos existen
        simplemente porque son demasiado entretenidos como para no construirlos.
      </p>
    </div>

    <div class="laboratory__tabs" aria-label="Seleccionar proyecto del laboratorio">
      <button
        v-for="(project, index) in laboratoryProjects"
        :key="project.id"
        type="button"
        class="laboratory-tab"
        :class="{ 'laboratory-tab--active': activeIndex === index }"
        @click="selectProject(index)"
      >
        <span>{{ project.emoji }}</span>
        {{ project.title }}
      </button>
    </div>

    <Transition name="lab-slide" mode="out-in">
      <article :key="activeProject.id" class="laboratory-card">
        <div class="laboratory-card__image">
          <img
            :src="activeProject.image"
            :alt="`Captura del proyecto ${activeProject.title}`"
          />

          <span class="laboratory-card__emoji">
            {{ activeProject.emoji }}
          </span>
        </div>

        <div class="laboratory-card__content">
          <h3>{{ activeProject.title }}</h3>

          <p>{{ activeProject.description }}</p>

          <div class="laboratory-card__techs">
            <span
              v-for="tech in activeProject.technologies"
              :key="tech"
            >
              {{ tech }}
            </span>
          </div>

          <div class="laboratory-card__links">
            <a
              :href="activeProject.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--primary"
            >
              🚀 Ver proyecto
            </a>

            <a
              :href="activeProject.github"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--secondary"
            >
              &lt;/&gt; GitHub
            </a>
          </div>
        </div>
      </article>
    </Transition>
  </section>
</template>