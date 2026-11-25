import { Atom, Backpack, BookOpenText, ChalkboardTeacher, ChatsCircle, Code, Flask, HandCoins, MathOperations, Scroll, ShieldCheck, Translate } from '@phosphor-icons/react'

// Iconos de Phosphor Icons (phosphoricons.com), en estilo "duotone"

export const beneficios = [
  { id: 1, icono: <ShieldCheck weight="duotone" />, titulo: 'Perfiles verificados', color: 'verde', texto: 'Identidad y formación confirmadas.' },
  { id: 2, icono: <HandCoins weight="duotone" />, titulo: 'Sin comisiones ocultas', color: 'amarillo', texto: 'Vos acordás el precio con tu profe.' },
  { id: 3, icono: <ChatsCircle weight="duotone" />, titulo: 'Chat integrado', color: 'violeta', texto: 'Coordiná todo sin salir de MiProfe.' },
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

// articulo: el nombre exacto de la pagina en Wikipedia ("Inglés" solo tiene varios significados)
export const materias = [
  { id: 1, icono: <MathOperations weight="duotone" />, materia: 'Matemática', articulo: 'Matemáticas' },
  { id: 2, icono: <Translate weight="duotone" />, materia: 'Inglés', articulo: 'Idioma inglés' },
  { id: 3, icono: <Atom weight="duotone" />, materia: 'Física', articulo: 'Física' },
  { id: 4, icono: <Code weight="duotone" />, materia: 'Programación', articulo: 'Programación' },
  { id: 5, icono: <Flask weight="duotone" />, materia: 'Química', articulo: 'Química' },
  { id: 6, icono: <BookOpenText weight="duotone" />, materia: 'Lengua', articulo: 'Idioma español' },
  { id: 7, icono: <Scroll weight="duotone" />, materia: 'Historia', articulo: 'Historia' },
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
    fondo: 'oscuro',
    icono: <Backpack weight="duotone" />,
    varianteBoton: 'primary',
  },
  {
    id: 2,
    titulo: '¿Querés dar clases?',
    texto: 'Publicá tu oferta, elegí tus horarios y empezá a generar ingresos enseñando.',
    textoBoton: 'Ser profesor',
    fondo: 'azul',
    icono: <ChalkboardTeacher weight="duotone" />,
    varianteBoton: 'light',
  },
]
