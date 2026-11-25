// Solicitudes de alumnos
import { Confetti, Tray } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import EncabezadoPagina from '../../components/common/EncabezadoPagina'
import TarjetaSolicitud from '../../components/profesor/TarjetaSolicitud'
import { solicitudes } from '../../data/profesor'

function Solicitudes() {
  // Arranca con las solicitudes guardadas en el navegador y, si no hay, con las de ejemplo
  const [pendientes, setPendientes] = useState(() => JSON.parse(localStorage.getItem('miprofe-solicitudes')) ?? solicitudes)
  const [aviso, setAviso] = useState(null)

  // Cada vez que cambia la lista la guarda, asi las que ya respondiste no vuelven a aparecer al refrescar
  useEffect(() => {
    localStorage.setItem('miprofe-solicitudes', JSON.stringify(pendientes))
  }, [pendientes])

  // Saca la solicitud de la lista y muestra un aviso con lo que se respondio
  const responder = (solicitud, aceptada) => {
    setPendientes(pendientes.filter((pendiente) => pendiente.id !== solicitud.id))
    setAviso({
      variante: aceptada ? 'success' : 'secondary',
      texto: aceptada
        ? `Aceptaste la clase con ${solicitud.nombre}.`
        : `Rechazaste la solicitud de ${solicitud.nombre}.`,
    })
  }

  return (
    <>
      <title>Solicitudes - MiProfe</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <EncabezadoPagina
          icono={<Tray weight="duotone" />}
          titulo="Solicitudes de alumnos"
          bajada={
            pendientes.length > 0
              ? `Tenés ${pendientes.length} ${pendientes.length === 1 ? 'solicitud pendiente' : 'solicitudes pendientes'}.`
              : 'No tenés solicitudes pendientes.'
          }
        />

        <section aria-label="Lista de solicitudes" className="d-flex flex-column gap-3">
          {aviso && (
            <Alert variant={aviso.variante} dismissible onClose={() => setAviso(null)} className="mb-0">
              {aviso.texto}
            </Alert>
          )}

          {pendientes.length === 0 ? (
            <article className="cuadro text-center align-items-center py-5">
              <p className="icono-auth mx-auto mb-3" aria-hidden="true"><Confetti weight="duotone" /></p>
              <h2 className="h4">¡Estás al día!</h2>
              <p className="text-body-secondary">Respondiste todas las solicitudes.</p>
              <button type="button" className="btn btn-outline-dark" onClick={() => setPendientes(solicitudes)}>
                Volver a cargar las solicitudes de ejemplo
              </button>
            </article>
          ) : (
            <ul className="grilla-2">
              {pendientes.map((solicitud) => (
                <li key={solicitud.id}>
                  <TarjetaSolicitud
                    nombre={solicitud.nombre}
                    iniciales={solicitud.iniciales}
                    materia={solicitud.materia}
                    horario={solicitud.horario}
                    onAceptar={() => responder(solicitud, true)}
                    onRechazar={() => responder(solicitud, false)}
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
      </ContenidoPagina>
    </>
  )
}

export default Solicitudes
