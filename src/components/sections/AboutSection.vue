<script setup>
import { ref } from 'vue'

const activeItem = ref({
  title: 'Mi enfoque',
  icon: '💻',
  text:
    'Desarrollo interfaces web responsivas, funcionales y visualmente atractivas, cuidando la organización del código y la experiencia de usuario.',
  tags: ['Vue 3', 'JavaScript', 'UX/UI']
})

const aboutItems = [
  {
    title: 'Mi enfoque',
    icon: '💻',
    text:
      'Desarrollo interfaces web responsivas, funcionales y visualmente atractivas, cuidando la organización del código y la experiencia de usuario.',
    tags: ['Vue 3', 'JavaScript', 'UX/UI']
  },
  {
    title: 'Formación',
    icon: '🎓',
    text:
      'Actualmente fortalezco mis habilidades en desarrollo Front-End mediante proyectos personales, buenas prácticas, componentización, consumo de APIs y despliegue web.',
    tags: ['Bootcamp', 'Front-End', 'Aprendizaje continuo']
  },
  {
    title: 'Experiencia previa',
    icon: '🧩',
    text:
      'Mi experiencia en coordinación de proyectos técnicos me ha permitido desarrollar organización, pensamiento práctico y capacidad para resolver problemas.',
    tags: ['Gestión', 'Organización', 'Resolución de problemas']
  },
  {
    title: 'Objetivo actual',
    icon: '🚀',
    text:
      'Busco seguir creciendo como desarrolladora Front-End, creando aplicaciones claras, modernas y bien construidas.',
    tags: ['Código limpio', 'Deploy online', 'Mejora continua']
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
    <div class="about-v2">
      <div class="about-v2__intro">
        <p class="section-label">Sobre mí</p>

        <h2>
          Soy <span>Paula Pérez Valenzuela</span>
        </h2>

        <p class="about-v2__role">
          Front-End Developer Trainee
        </p>

        <p class="about-v2__lead">
          Combino mi experiencia en coordinación de proyectos con mi formación
          en desarrollo Front-End para crear aplicaciones web funcionales,
          ordenadas y con una excelente experiencia de usuario.
        </p>

        <div class="about-v2__stats">
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

        <div class="about-v2__text">
          <p>
            Soy Front-End Developer Trainee apasionada por seguir aprendiendo y
            desarrollando proyectos que resuelvan problemas reales. Disfruto
            trabajar con <strong>Vue 3</strong>, <strong>JavaScript</strong> y
            el consumo de <strong>APIs</strong>, cuidando tanto la organización
            del código como la experiencia de usuario.
          </p>

          <p>
            Actualmente fortalezco mis habilidades desarrollando proyectos
            personales y explorando nuevas tecnologías, con el objetivo de seguir
            creciendo como desarrolladora Front-End y crear aplicaciones claras,
            modernas y bien construidas.
          </p>
        </div>
      </div>

      <div class="about-v2__interactive">
        <div class="about-v2__tabs">
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