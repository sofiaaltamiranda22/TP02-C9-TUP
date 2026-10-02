import calidad from '../assets/img/calidad.png'
import tarjeta from '../assets/img/tarjeta-de-credito.png'
import charla from '../assets/img/charla.png'
import matematicas from '../assets/img/matematicas.png'
import ingles from '../assets/img/eng.png'
import fisica from '../assets/img/atomo.png'
import programacion from '../assets/img/lenguaje-de-codificacion.png'
import quimica from '../assets/img/matraz.png'
import lengua from '../assets/img/espanol.png'
import historia from '../assets/img/desplazarse.png'

export const beneficios = [
  { id: 1, icono: calidad, titulo: 'Perfiles verificados', texto: 'Identidad y formación confirmadas.' },
  { id: 2, icono: tarjeta, titulo: 'Sin comisiones ocultas', texto: 'Vos acordás el precio con tu profe.' },
  { id: 3, icono: charla, titulo: 'Chat integrado', texto: 'Coordiná todo sin salir de MiProfe.' },
]

export const pasos = [
  {
    id: 1,
    numero: '01',
    titulo: 'Buscá y compará',
    texto: 'Filtrá profesores por materia, precio, modalidad y horario hasta encontrar el que mejor encaje con vos.',
  },
  {
    id: 2,
    numero: '02',
    titulo: 'Enviá tu solicitud',
    texto: 'Contale al profesor qué necesitás. Cuando la acepta, ya podés coordinar el primer encuentro por chat.',
  },
  {
    id: 3,
    numero: '03',
    titulo: 'Aprendé a tu ritmo',
    texto: 'Llevá tus clases, tus grupos de estudio y tu progreso desde un panel pensado para vos.',
  },
]

export const materias = [
  { id: 1, icono: matematicas, materia: 'Matemática' },
  { id: 2, icono: ingles, materia: 'Inglés' },
  { id: 3, icono: fisica, materia: 'Física' },
  { id: 4, icono: programacion, materia: 'Programación' },
  { id: 5, icono: quimica, materia: 'Química' },
  { id: 6, icono: lengua, materia: 'Lengua' },
  { id: 7, icono: historia, materia: 'Historia' },
]

export const destacados = [
  {
    id: 1,
    iniciales: 'TM',
    nombre: 'Tomás M.',
    materias: 'Programación · Álgebra',
    frase: 'Enseño con proyectos reales, para que lo que aprendas te sirva desde el primer día.',
    precio: '$5.200',
    calificacion: '5.0',
  },
  {
    id: 2,
    iniciales: 'CL',
    nombre: 'Camila L.',
    materias: 'Inglés · Preparación de exámenes',
    frase: 'Clases dinámicas y en inglés desde el minuto uno. Ideal si tenés un viaje o examen cerca.',
    precio: '$4.000',
    calificacion: '4.8',
  },
  {
    id: 3,
    iniciales: 'FS',
    nombre: 'Franco S.',
    materias: 'Física · Química',
    frase: 'Profesor de secundaria hace 8 años. Te ayudo a entender, no solo a memorizar.',
    precio: '$3.800',
    calificacion: '4.9',
  },
]

export const ctas = [
  {
    id: 1,
    titulo: '¿Querés aprender?',
    texto: 'Explorá cientos de profesores particulares y empezá hoy mismo.',
    textoBoton: 'Buscar profesor',
    fondo: 'dark',
    varianteBoton: 'primary',
  },
  {
    id: 2,
    titulo: '¿Querés dar clases?',
    texto: 'Publicá tu oferta, elegí tus horarios y empezá a generar ingresos enseñando.',
    textoBoton: 'Ser profesor',
    fondo: 'primary',
    varianteBoton: 'light',
  },
]