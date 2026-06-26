<script setup>
import { computed, ref } from 'vue'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard.vue'

const activeFilter = ref('Todos')

const filters = ['Todos', 'Vue + API', 'Creativo', 'Datos reales', 'Visual']

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Todos') {
    return projects
  }

  return projects.filter((project) => project.category === activeFilter.value)
})
</script>

<template>
  <section id="proyectos" class="section projects">
    <div class="section-header">
      <p class="section-label">Proyectos</p>
      <h2>Trabajos destacados</h2>
      <p>
        Selección de proyectos desarrollados durante mi formación, mostrando
        consumo de APIs, componentes, rutas, despliegue y diseño responsive.
      </p>
    </div>

    <div class="projects__filters">
      <button
        v-for="filter in filters"
        :key="filter"
        type="button"
        class="filter-btn"
        :class="{ 'filter-btn--active': activeFilter === filter }"
        @click="activeFilter = filter"
      >
        {{ filter }}
      </button>
    </div>

    <TransitionGroup name="project-list" tag="div" class="projects__grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </TransitionGroup>
  </section>
</template>