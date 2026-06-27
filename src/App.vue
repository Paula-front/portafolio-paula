<script setup>
import { nextTick, onMounted } from 'vue'
import Navbar from './components/layout/Navbar.vue'
import FooterSection from './components/layout/FooterSection.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import LaboratorySection from './components/sections/LaboratorySection.vue'
import ContactSection from './components/sections/ContactSection.vue'

onMounted(async () => {
  await nextTick()

  const sections = document.querySelectorAll('.section')

  sections.forEach((section) => {
    section.classList.add('reveal-section')
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-section--visible')
        }
      })
    },
    {
      threshold: 0.14
    }
  )

  sections.forEach((section) => observer.observe(section))
})
</script>

<template>
  <Navbar />

  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <LaboratorySection />
    <ContactSection />
  </main>

  <FooterSection />
</template>