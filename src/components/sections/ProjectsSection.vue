<script setup>
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard.vue'
</script>

<template>
  <section id="proyectos" class="section projects">
    <div class="section-header projects__header">
      <p class="section-label">Proyectos</p>
      <h2>Trabajos destacados</h2>
      <p>
        Aplicaciones desarrolladas con Vue 3, consumo de APIs y enfoque en
        experiencia de usuario.
      </p>
    </div>

    <div class="projects__grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>