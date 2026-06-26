<script setup>
import { computed, ref } from 'vue'

const contactEmail = 'tu-correo@email.com'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = ref({})
const isSubmitted = ref(false)

const isFormValid = computed(() => {
  return (
    form.value.name.trim() &&
    form.value.email.trim() &&
    form.value.subject.trim() &&
    form.value.message.trim()
  )
})

const validateForm = () => {
  errors.value = {}

  if (!form.value.name.trim()) {
    errors.value.name = 'Ingresa tu nombre.'
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'Ingresa tu correo.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Ingresa un correo válido.'
  }

  if (!form.value.subject.trim()) {
    errors.value.subject = 'Ingresa un asunto.'
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'Escribe un mensaje.'
  }

  return Object.keys(errors.value).length === 0
}

const handleSubmit = () => {
  isSubmitted.value = false

  if (!validateForm()) return

  const subject = encodeURIComponent(form.value.subject)

  const body = encodeURIComponent(`
Hola Paula,

Te contacto desde tu portafolio web.

Nombre: ${form.value.name}
Correo: ${form.value.email}

Mensaje:
${form.value.message}
  `)

  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`

  isSubmitted.value = true
}
</script>

<template>
  <section id="contacto" class="section contact contact--premium">
    <div class="section-header contact__header">
      <p class="section-label">Contacto</p>
      <h2>¿Trabajamos en una idea digital?</h2>
      <p>
        Si tienes una oportunidad, una idea o simplemente quieres conversar sobre
        desarrollo Front-End, estaré encantada de leerte.
      </p>
    </div>

    <div class="contact-premium__layout">
      <aside class="contact-panel">
        <div class="contact-panel__icon">📬</div>

        <h3>Hablemos</h3>

        <p>
          Completa el formulario y se abrirá tu correo con la información lista
          para enviar.
        </p>

        <div class="contact-panel__links">
          <a
            href="https://github.com/Paula-front"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>🐱</span>
            GitHub
          </a>

          <a href="mailto:tu-correo@email.com">
            <span>📧</span>
            Correo
          </a>

          <span>
            <span>📍</span>
            Chile
          </span>
        </div>
      </aside>

      <form class="contact-form-premium" @submit.prevent="handleSubmit">
        <div class="form-row">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Tu nombre"
            />
            <small v-if="errors.name">{{ errors.name }}</small>
          </div>

          <div class="form-group">
            <label for="email">Correo</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="correo@ejemplo.com"
            />
            <small v-if="errors.email">{{ errors.email }}</small>
          </div>
        </div>

        <div class="form-group">
          <label for="subject">Asunto</label>
          <input
            id="subject"
            v-model="form.subject"
            type="text"
            placeholder="Consulta / oportunidad / proyecto"
          />
          <small v-if="errors.subject">{{ errors.subject }}</small>
        </div>

        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="6"
            placeholder="Cuéntame brevemente en qué puedo ayudarte..."
          ></textarea>
          <small v-if="errors.message">{{ errors.message }}</small>
        </div>

        <button
          type="submit"
          class="btn btn--primary contact-form-premium__button"
          :class="{ 'contact-form-premium__button--ready': isFormValid }"
        >
          Enviar mensaje ↗
        </button>

        <Transition name="fade">
          <p v-if="isSubmitted" class="contact-form-premium__success">
            ✨ Se abrirá tu aplicación de correo para enviar el mensaje.
          </p>
        </Transition>
      </form>
    </div>
  </section>
</template>