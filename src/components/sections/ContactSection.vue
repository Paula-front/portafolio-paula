<script setup>
import { ref } from 'vue'

const contactEmail = 'tu-correo@email.com'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const errors = ref({})
const successMessage = ref('')

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
  successMessage.value = ''

  if (!validateForm()) return

  const emailSubject = encodeURIComponent(form.value.subject)

  const emailBody = encodeURIComponent(`
Hola Paula,

Te contacto desde tu portafolio web.

Nombre: ${form.value.name}
Correo: ${form.value.email}
Teléfono: ${form.value.phone || 'No informado'}

Mensaje:
${form.value.message}
  `)

  window.location.href = `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`

  successMessage.value =
    'Se abrirá tu aplicación de correo para enviar el mensaje.'
}
</script>

<template>
  <section id="contacto" class="section contact">
    <div class="section-header contact__header">
      <p class="section-label">Contacto</p>
      <h2>Conversemos sobre una idea digital</h2>
      <p>
        Puedes escribirme para revisar mis proyectos, compartir una oportunidad
        o conversar sobre desarrollo web Front-End.
      </p>
    </div>

    <div class="contact__layout">
      <aside class="contact__info">
        <article class="contact-info-card">
          <span>📩</span>
          <h3>Envíame un mensaje</h3>
          <p>
            Completa el formulario y se abrirá tu correo con la información lista
            para enviar.
          </p>
        </article>

        <article class="contact-info-card">
          <span>💻</span>
          <h3>También puedes revisar mi GitHub</h3>
          <p>
            Ahí encontrarás mis repositorios, proyectos y avances de desarrollo.
          </p>

          <a
            href="https://github.com/Paula-front"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--secondary"
          >
            GitHub ↗
          </a>
        </article>
      </aside>

      <form class="contact__form" @submit.prevent="handleSubmit">
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

        <div class="form-row">
          <div class="form-group">
            <label for="phone">Teléfono</label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              placeholder="+56 9 1234 5678"
            />
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
        </div>

        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="6"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
          <small v-if="errors.message">{{ errors.message }}</small>
        </div>

        <button type="submit" class="btn btn--primary contact__submit">
          Enviar mensaje ↗
        </button>

        <p v-if="successMessage" class="contact__success" aria-live="polite">
          {{ successMessage }}
        </p>
      </form>
    </div>
  </section>
</template>