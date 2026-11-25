// Grupos del profesor
import { BookOpenText, UsersThree } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import EncabezadoPagina from '../../components/common/EncabezadoPagina'
import { grupos } from '../../data/profesor'

// Cada grupo va de un color distinto (se repiten si hay mas grupos que colores)
const colores = ['violeta', 'verde', 'amarillo']

function GruposProfesor() {
  return (
    <>
      <title>Grupos - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <EncabezadoPagina icono={<UsersThree weight="duotone" />} titulo="Mis grupos" bajada="Los grupos de estudio que armaste con tus alumnos." />

        <ul className="grilla-2" aria-label="Grupos">
          {grupos.map((grupo, indice) => (
            <li key={grupo.id}>
              <article className={`cuadro cuadro--${colores[indice % colores.length]} cuadro--hover`}>
                <span className="cuadro-icono" aria-hidden="true"><BookOpenText weight="duotone" /></span>
                <h2 className="cuadro-etiqueta">{grupo.nombre}</h2>
                <p className="cuadro-numero">{grupo.alumnos}</p>
                <p className="text-body-secondary mb-4">alumnos en el grupo</p>
                <Link to="/profesor/chat" className="btn btn-primary mt-auto align-self-start">
                  Ir al chat del grupo →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </ContenidoPagina>
    </>
  )
}

export default GruposProfesor
