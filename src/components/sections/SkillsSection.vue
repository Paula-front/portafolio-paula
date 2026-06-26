<script setup>
import { skills } from '../../data/skills'
</script>

<template>
  <section id="habilidades" class="section skills">
    <div class="section-header">
      <p class="section-label">Habilidades</p>
      <h2>Tecnologías y herramientas</h2>
      <p>
        Estas son algunas de las tecnologías utilizadas en mis proyectos durante
        el proceso de formación.
      </p>
    </div>

    <div class="skills__grid">
      <span v-for="skill in skills" :key="skill" class="skill-pill">
        {{ skill }}
      </span>
    </div>
  </section>
</template>