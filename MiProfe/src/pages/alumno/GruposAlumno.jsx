// Grupos del alumno
import { UsersThree } from '@phosphor-icons/react'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import EncabezadoPagina from '../../components/common/EncabezadoPagina'
import TarjetaGrupo from '../../components/alumno/TarjetaGrupo'
import { grupos } from '../../data/alumno'

// Cada grupo va de un color distinto (se repiten si hay mas grupos que colores)
const colores = ['violeta', 'verde', 'amarillo']

function GruposAlumno() {
  return (
    <>
      <title>Grupos - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <EncabezadoPagina icono={<UsersThree weight="duotone" />} titulo="Mis grupos" bajada="Los grupos de estudio de los que formás parte." />

        <ul className="grilla-2" aria-label="Grupos">
          {grupos.map((grupo, indice) => (
            <li key={grupo.id}>
              <TarjetaGrupo
                materia={grupo.materia}
                profesor={grupo.profesor}
                integrantes={grupo.integrantes}
                color={colores[indice % colores.length]}
              />
            </li>
          ))}
        </ul>
      </ContenidoPagina>
    </>
  )
}

export default GruposAlumno
