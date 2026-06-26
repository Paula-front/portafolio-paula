<script setup>
import { ref } from 'vue'

const activeItem = ref({
  title: 'Perfil Front-End',
  icon: '💻',
  text:
    'Estoy construyendo mi camino como desarrolladora Front-End, creando interfaces web responsivas, funcionales y visualmente atractivas con Vue.js, JavaScript, HTML y CSS.',
  tags: ['Vue 3', 'JavaScript', 'Responsive Design']
})

const aboutItems = [
  {
    title: 'Perfil Front-End',
    icon: '💻',
    text:
      'Estoy construyendo mi camino como desarrolladora Front-End, creando interfaces web responsivas, funcionales y visualmente atractivas con Vue.js, JavaScript, HTML y CSS.',
    tags: ['Vue 3', 'JavaScript', 'Responsive Design']
  },
  {
    title: 'Formación',
    icon: '🎓',
    text:
      'Actualmente me encuentro fortaleciendo mis habilidades en desarrollo web a través del Bootcamp Front-End Trainee, aplicando buenas prácticas, componentización, consumo de APIs y despliegue de proyectos.',
    tags: ['Bootcamp', 'Front-End', 'Aprendizaje continuo']
  },
  {
    title: 'Experiencia previa',
    icon: '🧩',
    text:
      'Mi experiencia en gestión y coordinación de proyectos técnicos me ha permitido desarrollar organización, responsabilidad, análisis de problemas y enfoque práctico para construir soluciones claras.',
    tags: ['Gestión', 'Organización', 'Resolución de problemas']
  },
  {
    title: 'Enfoque actual',
    icon: '🚀',
    text:
      'Me interesa crear productos digitales simples de usar, visualmente cuidados y bien documentados, integrando diseño, lógica e interacción para mejorar la experiencia del usuario.',
    tags: ['UX/UI', 'Código limpio', 'Deploy online']
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Entender',
    text: 'Analizar el objetivo del proyecto y las necesidades del usuario.'
  },
  {
    number: '02',
    title: 'Diseñar',
    text: 'Organizar la interfaz, estructura visual y experiencia de navegación.'
  },
  {
    number: '03',
    title: 'Construir',
    text: 'Desarrollar componentes, lógica, estilos y conexión con datos.'
  },
  {
    number: '04',
    title: 'Probar',
    text: 'Revisar errores, responsive, enlaces, consola y experiencia final.'
  }
]

const selectItem = (item) => {
  activeItem.value = item
}
</script>

<template>
  <section id="sobre-mi" class="section about">
    <div class="section-header">
      <p class="section-label">Sobre mí</p>
      <h2>De la organización técnica al desarrollo web</h2>
      <p>
        Combino experiencia en coordinación, pensamiento práctico y formación
        Front-End para construir proyectos digitales claros, funcionales y bien presentados.
      </p>
    </div>

    <div class="about__grid about__grid--interactive">
      <div class="about__text">
        <p>
          Soy <strong>Paula Pérez Valenzuela</strong>, Front-End Developer Trainee.
          Mi enfoque está en crear aplicaciones web que no solo funcionen, sino que
          también sean ordenadas, responsivas y fáciles de utilizar.
        </p>

        <p>
          Durante mi formación he desarrollado proyectos con Vue 3, JavaScript,
          consumo de APIs, manejo de rutas, estados globales, documentación y despliegue
          en plataformas como Vercel.
        </p>

        <p>
          Mi objetivo es seguir creciendo en la industria TI, aportando compromiso,
          aprendizaje constante y una mirada organizada para transformar ideas en
          soluciones digitales.
        </p>

        <div class="about__highlights">
          <article>
            <strong>4+</strong>
            <span>Proyectos publicados</span>
          </article>

          <article>
            <strong>Vue</strong>
            <span>Framework principal</span>
          </article>

          <article>
            <strong>GitHub</strong>
            <span>Evidencia de código</span>
          </article>
        </div>
      </div>

      <div class="about__interactive">
        <div class="about__tabs">
          <button
            v-for="item in aboutItems"
            :key="item.title"
            type="button"
            class="about-tab"
            :class="{ 'about-tab--active': activeItem.title === item.title }"
            @click="selectItem(item)"
          >
            <span>{{ item.icon }}</span>
            {{ item.title }}
          </button>
        </div>

        <Transition name="fade" mode="out-in">
          <article :key="activeItem.title" class="about-detail">
            <div class="about-detail__icon">
              {{ activeItem.icon }}
            </div>

            <h3>{{ activeItem.title }}</h3>
            <p>{{ activeItem.text }}</p>

            <div class="about-detail__tags">
              <span v-for="tag in activeItem.tags" :key="tag">
                {{ tag }}
              </span>
            </div>
          </article>
        </Transition>
      </div>
    </div>

    <div class="about-process">
      <div class="about-process__header">
        <p class="section-label">Mi proceso</p>
        <h3>Cómo transformo una idea en proyecto</h3>
      </div>

      <div class="about-process__grid">
        <article
          v-for="step in processSteps"
          :key="step.number"
          class="process-card"
        >
          <span>{{ step.number }}</span>
          <h4>{{ step.title }}</h4>
          <p>{{ step.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>