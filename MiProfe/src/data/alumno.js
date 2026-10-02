export const alumno = {
  nombre: 'Juan Pérez',
  iniciales: 'JP',
  nivel: 'secundario',
  nivelTexto: 'Secundario',
  ubicacion: 'San Miguel de Tucumán',
  descripcion: 'Alumno de secundario buscando reforzar Matemática y Física.',
  materias: ['Matemática', 'Física'],
}

export const materias = ['Matemática', 'Inglés', 'Física', 'Química', 'Programación', 'Historia']

export const modalidades = ['Virtual', 'Presencial', 'Ambas']

// cercano, recomendado y contratado dicen en que lista aparece cada profesor
export const profesores = [
  {
    id: 1,
    nombre: 'Lucía Molina',
    iniciales: 'LM',
    materia: 'Matemática',
    modalidad: 'Virtual',
    precio: 4500,
    calificacion: 4.9,
    proximaClase: 'Miércoles 16hs',
    bio: 'Profesora de Matemática con 5 años de experiencia dando clases a estudiantes de secundaria y universidad.',
    horarios: ['Lunes 16 a 19hs', 'Miércoles 16 a 19hs', 'Viernes 14 a 17hs'],
    cercano: true,
    recomendado: false,
    contratado: true,
    resenas: [
      { id: 1, estrellas: 5, comentario: 'Excelente profesora, explica muy claro.', autor: 'Martina T.' },
      { id: 2, estrellas: 4, comentario: 'Muy puntual y organizada.', autor: 'Bruno F.' },
    ],
  },
  {
    id: 2,
    nombre: 'Diego Ruiz',
    iniciales: 'DR',
    materia: 'Inglés',
    modalidad: 'Presencial',
    precio: 5000,
    calificacion: 4.6,
    proximaClase: 'Lunes 17hs',
    bio: 'Profesor de Inglés. Preparo exámenes internacionales y clases de conversación.',
    horarios: ['Lunes 17 a 20hs', 'Jueves 17 a 20hs'],
    cercano: true,
    recomendado: false,
    contratado: true,
    resenas: [{ id: 1, estrellas: 5, comentario: 'Aprobé el First gracias a sus clases.', autor: 'Valentina R.' }],
  },
  {
    id: 3,
    nombre: 'Camila Suárez',
    iniciales: 'CS',
    materia: 'Programación',
    modalidad: 'Virtual',
    precio: 4800,
    calificacion: 4.8,
    proximaClase: '',
    bio: 'Desarrolladora web. Enseño programación desde cero con ejercicios prácticos.',
    horarios: ['Martes 18 a 21hs', 'Sábados 10 a 13hs'],
    cercano: true,
    recomendado: false,
    contratado: false,
    resenas: [],
  },
  {
    id: 4,
    nombre: 'Sofía Vera',
    iniciales: 'SV',
    materia: 'Física',
    modalidad: 'Ambas',
    precio: 4200,
    calificacion: 4.9,
    proximaClase: 'Sábado 10hs',
    bio: 'Profesora de Física para secundaria y primeros años de la facultad.',
    horarios: ['Miércoles 15 a 18hs', 'Sábados 9 a 12hs'],
    cercano: false,
    recomendado: true,
    contratado: true,
    resenas: [{ id: 1, estrellas: 5, comentario: 'Hace que la física parezca fácil.', autor: 'Nicolás M.' }],
  },
  {
    id: 5,
    nombre: 'Juan Paz',
    iniciales: 'JP',
    materia: 'Química',
    modalidad: 'Virtual',
    precio: 4000,
    calificacion: 4.8,
    proximaClase: '',
    bio: 'Licenciado en Química. Clases para secundaria con mucha práctica de ejercicios.',
    horarios: ['Lunes 14 a 17hs', 'Viernes 16 a 19hs'],
    cercano: false,
    recomendado: true,
    contratado: false,
    resenas: [],
  },
  {
    id: 6,
    nombre: 'Martín Ibarra',
    iniciales: 'MI',
    materia: 'Historia',
    modalidad: 'Presencial',
    precio: 3800,
    calificacion: 4.7,
    proximaClase: 'Jueves 19hs',
    bio: 'Profesor de Historia. Te ayudo a preparar exámenes y trabajos prácticos.',
    horarios: ['Martes 19 a 21hs', 'Jueves 19 a 21hs'],
    cercano: false,
    recomendado: true,
    contratado: true,
    resenas: [{ id: 1, estrellas: 4, comentario: 'Explica con ejemplos y se entiende todo.', autor: 'Lucas G.' }],
  },
]

export const grupos = [
  { id: 1, materia: 'Matemática', profesor: 'Lucía Molina', integrantes: 5 },
  { id: 2, materia: 'Física', profesor: 'Sofía Vera', integrantes: 3 },
]

export const conversaciones = [
  { id: 1, nombre: 'Lucía Molina', iniciales: 'LM', detalle: 'Materia: Matemática' },
  { id: 2, nombre: 'Grupo de Matemática', iniciales: 'GM', detalle: '5 integrantes' },
  { id: 3, nombre: 'Sofía Vera', iniciales: 'SV', detalle: 'Materia: Física' },
]

export const mensajes = [
  { id: 1, texto: 'Hola, ¿cómo estás? Nos vemos el miércoles a las 16hs.', hora: '10:30', propio: false },
  { id: 2, texto: '¡Perfecto! Ahí estaré.', hora: '10:32', propio: true },
]