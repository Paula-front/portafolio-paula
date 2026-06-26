import climaAppImg from '../assets/images/projects/climaapp.png'
import starWarsImg from '../assets/images/projects/star-wars.png'
import solarCheckImg from '../assets/images/projects/solarcheck.png'
import hopFinderImg from '../assets/images/projects/hop-finder.png'

export const projects = [
  {
    id: 1,
    title: 'ClimaApp',
    type: 'Aplicación del clima',
    category: 'Vue + API',
    description:
      'Aplicación SPA desarrollada con Vue 3 para consultar clima actual, pronóstico semanal, favoritos y preferencias de usuario.',
    details:
      'Este proyecto integra consumo de API, rutas protegidas, manejo de estado global, favoritos, autenticación simulada y una interfaz responsive orientada a la consulta climática.',
    technologies: ['Vue 3', 'Vuex', 'Vue Router', 'API', 'CSS'],
    demo: 'https://clima-app-portfolio.vercel.app/#/',
    repo: 'https://github.com/Paula-front/weather-frontend-m7',
    image: climaAppImg,
    imagePosition: 'top center',
    featured: true
  },
  {
    id: 2,
    title: 'Star Wars Galactic Weather',
    type: 'App temática',
    category: 'Creativo',
    description:
      'Aplicación inspirada en Star Wars que muestra información climática ficticia de planetas mediante una interfaz visual e interactiva.',
    details:
      'Proyecto desarrollado como SPA con Vue Router, navegación dinámica por planetas, diseño temático, cards visuales y experiencia inspirada en una estética galáctica.',
    technologies: ['Vue 3', 'Vue Router', 'Vite', 'CSS'],
    demo: 'https://star-wars-galactic-weather.vercel.app/#/',
    repo: 'https://github.com/Paula-front/star-wars-galactic-weather',
    image: starWarsImg,
    imagePosition: 'top center',
    featured: true
  },
  {
    id: 3,
    title: 'SolarCheck Chile',
    type: 'Consulta de productos',
    category: 'Datos reales',
    description:
      'Aplicación web para consultar protectores solares registrados en el ISP, con búsqueda, filtros y diseño responsive.',
    details:
      'Proyecto enfocado en datos reales, búsqueda por registros, visualización clara de información y diseño limpio para facilitar la consulta de productos.',
    technologies: ['Vue 3', 'JavaScript', 'Datos JSON', 'Vercel'],
    demo: 'https://solarcheck-chile.vercel.app/',
    repo: 'https://github.com/Paula-front/solarcheck-chile',
    image: solarCheckImg,
    imagePosition: 'top left',
    featured: true
  },
  {
    id: 4,
    title: 'Hop Finder',
    type: 'Explorador de cervezas',
    category: 'Visual',
    description:
      'Aplicación visual para explorar estilos de cerveza, con identidad gráfica moderna, cards informativas y enfoque en experiencia de usuario.',
    details:
      'Proyecto con una propuesta visual más llamativa, uso de estilos de cerveza, cards con personalidad gráfica y enfoque en diseño de interfaz atractivo.',
    technologies: ['Vue 3', 'API', 'CSS', 'Vercel'],
    demo: 'https://hop-finder-git-main-paula-front1.vercel.app/',
    repo: 'https://github.com/Paula-front/hop-finder',
    image: hopFinderImg,
    imagePosition: 'center center',
    featured: false
  }
]