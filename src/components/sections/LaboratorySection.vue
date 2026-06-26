<script setup>
import { computed, ref } from 'vue'
import { laboratoryProjects } from '../../data/laboratory'

const activeIndex = ref(0)

const activeProject = computed(() => laboratoryProjects[activeIndex.value])

const nextProject = () => {
  activeIndex.value =
    activeIndex.value === laboratoryProjects.length - 1
      ? 0
      : activeIndex.value + 1
}

const previousProject = () => {
  activeIndex.value =
    activeIndex.value === 0
      ? laboratoryProjects.length - 1
      : activeIndex.value - 1
}

const selectProject = (index) => {
  activeIndex.value = index
}
</script>

<template>
  <section id="laboratorio" class="section laboratory">
    <div class="section-header laboratory__header">
      <p class="section-label">Laboratorio Creativo</p>
      <h2>Ideas que nacen jugando con código</h2>
      <p>
        Proyectos personales creados para experimentar, aprender y transformar
        ideas entretenidas en experiencias web interactivas.
      </p>
    </div>

    <div class="laboratory__showcase">
      <div class="laboratory__controls">
        <button
          type="button"
          class="laboratory__arrow"
          aria-label="Proyecto anterior"
          @click="previousProject"
        >
          ←
        </button>

        <div class="laboratory__counter">
          {{ activeIndex + 1 }} / {{ laboratoryProjects.length }}
        </div>

        <button
          type="button"
          class="laboratory__arrow"
          aria-label="Proyecto siguiente"
          @click="nextProject"
        >
          →
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
            <p class="laboratory-card__label">Side Project</p>

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
                Explorar ↗
              </a>

              <a
                :href="activeProject.github"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--secondary"
              >
                Código ↗
              </a>
            </div>
          </div>
        </article>
      </Transition>

      <div class="laboratory__thumbs" aria-label="Seleccionar proyecto del laboratorio">
        <button
          v-for="(project, index) in laboratoryProjects"
          :key="project.id"
          type="button"
          class="laboratory-thumb"
          :class="{ 'laboratory-thumb--active': activeIndex === index }"
          @click="selectProject(index)"
        >
          <span>{{ project.emoji }}</span>
          {{ project.title }}
        </button>
      </div>
    </div>
  </section>
</template>