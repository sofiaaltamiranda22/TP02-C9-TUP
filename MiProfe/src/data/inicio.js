import calidad from '../assets/img/calidad.png'
import tarjeta from '../assets/img/tarjeta-de-credito.png'
import charla from '../assets/img/charla.png'

import matematica from '../assets/img/matematicas.png'
import ingles from '../assets/img/eng.png'
import fisica from '../assets/img/atomo.png'
import programacion from '../assets/img/lenguaje-de-codificacion.png'
import quimica from '../assets/img/matraz.png'
import lengua from '../assets/img/espanol.png'
import historia from '../assets/img/desplazarse.png'


export const pasos = [
  { id: 1, titulo: 'Buscá tu materia', texto: 'Encontrá tutores cerca tuyo' },
  { id: 2, titulo: 'Elegí a tu profe', texto: 'Revisá perfiles y reseñas' },
  { id: 3, titulo: 'Coordiná la clase', texto: 'Chateá y fijá el horario' }
]

export const beneficios = [
  { id: 1, icono: calidad, titulo: 'Perfiles verificados', texto: 'Identidad y formación' },
  { id: 2, icono: tarjeta, titulo: 'Sin comisiones ocultas', texto: 'Vos acordás el precio' },
  { id: 3, icono: charla, titulo: 'Chat integrado', texto: 'Coordiná todo sin salir de MiProfe' }
]

export const materias = [
  { id: 1, nombre: 'Matemática', icono: matematica },
  { id: 2, nombre: 'Inglés', icono: ingles },
  { id: 3, nombre: 'Física', icono: fisica },
  { id: 4, nombre: 'Programación', icono: programacion },
  { id: 5, nombre: 'Química', icono: quimica },
  { id: 6, nombre: 'Lengua', icono: lengua },
  { id: 7, nombre: 'Historia', icono: historia }
]

export const destacados = [
  { id: 1, nombre: 'Profe Ejercicio 1', materia: 'Matemática', precio: '$5000/h' },
  { id: 2, nombre: 'Profe Ejercicio 2', materia: 'Inglés', precio: '$4500/h' },
  { id: 3, nombre: 'Profe Ejercicio 3', materia: 'Programación', precio: '$6000/h' }
]

export const ctas = [
  { id: 1, titulo: '¿Querés aprender?', texto: 'Encontrá al profesor ideal hoy' },
  { id: 2, titulo: '¿Querés enseñar?', texto: 'Sumate como tutor a la plataforma' }
]