// Datos de ejemplo del panel del profesor (todavia no hay backend). Las paginas los recorren con map()

export const profesor = {
  nombre: 'Ana Giménez',
  iniciales: 'AG',
  materia: 'Matemática',
  calificacion: 4.8,
  cantidadResenas: 32,
  nivel: 'secundario',
  nivelTexto: 'Secundario',
  ubicacion: 'San Miguel de Tucumán',
  precio: 4500,
  modalidades: ['Virtual', 'Presencial'],
  horarios: 'Lunes a viernes de 16 a 20hs',
  descripcion: 'Profesora de Matemática con 8 años de experiencia preparando alumnos de secundario y primer año de facultad.',
}

export const modalidades = ['Virtual', 'Presencial']

export const solicitudes = [
  { id: 1, nombre: 'Martina Torres', iniciales: 'MT', materia: 'Álgebra', horario: 'Miércoles 18hs' },
  { id: 2, nombre: 'Bruno Fariña', iniciales: 'BF', materia: 'Trigonometría', horario: 'Sábado 10hs' },
  { id: 3, nombre: 'Valentina Rojas', iniciales: 'VR', materia: 'Geometría', horario: 'Martes 19hs' },
  { id: 4, nombre: 'Nicolás Medina', iniciales: 'NM', materia: 'Álgebra', horario: 'Viernes 15hs' },
]

// color es la franja de arriba de cada tarjeta (un color de Bootstrap)
export const resumen = [
  {
    id: 1,
    titulo: 'Solicitudes nuevas',
    numero: null, // se calcula en la pagina con las solicitudes que quedan sin responder
    detalle: 'solicitudes pendientes',
    color: 'primary',
    ruta: '/profesor/solicitudes',
    textoLink: 'Ver solicitudes',
  },
  { id: 2, titulo: 'Clases dictadas', numero: 14, detalle: 'clases este mes', color: 'success' },
  { id: 3, titulo: 'Ingresos del mes', numero: '$63.000', detalle: 'facturado en septiembre', color: 'warning' },
]

export const proximasClases = [
  { id: 1, dia: 'Miércoles 16hs', alumno: 'Martina Torres' },
  { id: 2, dia: 'Sábado 10hs', alumno: 'Bruno Fariña' },
]

export const grupos = [
  { id: 1, nombre: 'Grupo de Matemática', alumnos: 5, color: 'info' },
  { id: 2, nombre: 'Grupo de Álgebra avanzada', alumnos: 3, color: 'success' },
]

export const conversaciones = [
  {
    id: 1,
    nombre: 'Martina Torres',
    iniciales: 'MT',
    mensajes: [
      { id: 1, autor: 'Martina', texto: 'Hola profe, ¿confirmamos la clase del miércoles?', propio: false },
      { id: 2, autor: 'Vos', texto: 'Sí, nos vemos a las 18hs.', propio: true },
    ],
  },
  {
    id: 2,
    nombre: 'Grupo de Matemática',
    iniciales: 'GM',
    mensajes: [{ id: 1, autor: 'Valentina', texto: '¿Alguien resolvió el ejercicio 4 de la guía?', propio: false }],
  },
  {
    id: 3,
    nombre: 'Bruno Fariña',
    iniciales: 'BF',
    mensajes: [{ id: 1, autor: 'Bruno', texto: 'Profe, ¿podemos pasar la clase del sábado a las 11?', propio: false }],
  },
]
