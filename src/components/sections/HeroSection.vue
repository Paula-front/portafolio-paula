<script setup>
import { ref } from 'vue'

const activeSkill = ref({
  name: 'Vue 3',
  description: 'Construcción de interfaces modernas mediante componentes reutilizables.',
  tag: 'Framework principal'
})

const skills = [
  {
    name: 'Vue 3',
    description: 'Construcción de interfaces modernas mediante componentes reutilizables.',
    tag: 'Framework principal'
  },
  {
    name: 'JavaScript',
    description: 'Lógica, interactividad, consumo de datos y manejo dinámico de la aplicación.',
    tag: 'Lenguaje base'
  },
  {
    name: 'APIs',
    description: 'Integración de datos externos para crear aplicaciones funcionales y dinámicas.',
    tag: 'Datos reales'
  },
  {
    name: 'Responsive',
    description: 'Diseños adaptables para escritorio, tablet y dispositivos móviles.',
    tag: 'Diseño adaptable'
  }
]

const selectSkill = (skill) => {
  activeSkill.value = skill
}
</script>

<template>
  <section id="inicio" class="hero section">
    <div class="hero__glow hero__glow--one"></div>
    <div class="hero__glow hero__glow--two"></div>

    <div class="hero__content">
      <p class="section-label">Portafolio Front-End</p>

      <div class="hero__badge">
        <span></span>
        Disponible para nuevos desafíos
      </div>

      <h1>
        Hola, soy
        <span>Paula Pérez Valenzuela</span>
      </h1>

      <h2>Front-End Developer Trainee</h2>

      <p class="hero__description">
        Diseño y desarrollo aplicaciones web responsivas, funcionales y visualmente
        atractivas, combinando código, diseño e interactividad con Vue.js,
        JavaScript, HTML y CSS.
      </p>

      <div class="hero__actions">
        <a href="#proyectos" class="btn btn--primary">Ver proyectos</a>

        <a
          href="https://github.com/Paula-front"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--secondary"
        >
          GitHub ↗
        </a>
      </div>

      <div class="hero__skills" aria-label="Tecnologías destacadas">
        <button
          v-for="skill in skills"
          :key="skill.name"
          type="button"
          class="hero__skill"
          :class="{ 'hero__skill--active': activeSkill.name === skill.name }"
          @click="selectSkill(skill)"
        >
          {{ skill.name }}
        </button>
      </div>

      <article class="hero__active-skill">
        <span>{{ activeSkill.tag }}</span>
        <strong>{{ activeSkill.name }}</strong>
        <p>{{ activeSkill.description }}</p>
      </article>

      <div class="hero__stats">
        <article>
          <strong>4+</strong>
          <span>Proyectos destacados</span>
        </article>

        <article>
          <strong>Vue 3</strong>
          <span>Framework principal</span>
        </article>

        <article>
          <strong>Vercel</strong>
          <span>Deploy online</span>
        </article>
      </div>
    </div>

    <div class="hero__visual">
      <div class="floating-tag floating-tag--one">HTML</div>
      <div class="floating-tag floating-tag--two">CSS</div>
      <div class="floating-tag floating-tag--three">Vue</div>

      <article class="profile-card profile-card--hero">
        <div class="profile-card__top">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="profile-card__avatar">PP</div>

        <h3>Frontend Portfolio</h3>

        <p>
          Interfaces modernas, código ordenado y proyectos desplegados para revisión.
        </p>

        <div class="code-card">
          <p><span>const</span> perfil = &#123;</p>
          <p>&nbsp;&nbsp;rol: <strong>'Frontend'</strong>,</p>
          <p>&nbsp;&nbsp;stack: <strong>'Vue + JS'</strong>,</p>
          <p>&nbsp;&nbsp;deploy: <strong>'Vercel'</strong>,</p>
          <p>&nbsp;&nbsp;estado: <strong>'Aprendiendo'</strong></p>
          <p>&#125;</p>
        </div>
      </article>
    </div>

    <a href="#sobre-mi" class="scroll-indicator" aria-label="Ir a la sección sobre mí">
      <span></span>
    </a>
  </section>
</template>