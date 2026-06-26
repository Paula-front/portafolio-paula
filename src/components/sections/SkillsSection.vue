<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { skills } from '../../data/skills'

const activeSkill = ref(skills[0])

const selectSkill = (skill) => {
  activeSkill.value = skill
}
</script>

<template>
  <section id="habilidades" class="section skills">
    <div class="section-header">
      <p class="section-label">Skills & Tools</p>
      <h2>Mi caja de herramientas</h2>
      <p>
        Tecnologías y herramientas que utilizo para construir interfaces web
        funcionales, responsivas y visualmente atractivas.
      </p>
    </div>

    <div class="skills__content">
      <div class="skills__grid">
        <button
          v-for="skill in skills"
          :key="skill.name"
          type="button"
          class="skill-card"
          :class="{ 'skill-card--active': activeSkill.name === skill.name }"
          @click="selectSkill(skill)"
        >
          <Icon :icon="skill.icon" class="skill-card__icon" />
          <span>{{ skill.name }}</span>
        </button>
      </div>

      <article class="skills__detail">
        <p class="section-label">Tecnología seleccionada</p>

        <div class="skills__detail-icon">
          <Icon :icon="activeSkill.icon" />
        </div>

        <h3>{{ activeSkill.name }}</h3>
        <p>{{ activeSkill.description }}</p>
      </article>
    </div>
  </section>
</template>