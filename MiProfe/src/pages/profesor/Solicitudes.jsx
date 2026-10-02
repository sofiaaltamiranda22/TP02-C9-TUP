// Solicitudes de alumnos
import { useState } from 'react'
import { Alert } from 'react-bootstrap'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import TarjetaSolicitud from '../../components/profesor/TarjetaSolicitud'
import { solicitudes } from '../../data/profesor'

function Solicitudes() {
  const [pendientes, setPendientes] = useState(solicitudes)
  const [aviso, setAviso] = useState(null)

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
        <section>
          <h1 className="mb-2">Solicitudes de alumnos</h1>
          <p className="text-body-secondary mb-4">
            {pendientes.length > 0
              ? `Tenés ${pendientes.length} solicitudes pendientes.`
              : 'No tenés solicitudes pendientes.'}
          </p>

          {aviso && (
            <Alert variant={aviso.variante} dismissible onClose={() => setAviso(null)}>
              {aviso.texto}
            </Alert>
          )}

          <div className="d-flex flex-column gap-3">
            {pendientes.map((solicitud) => (
              <TarjetaSolicitud
                key={solicitud.id}
                nombre={solicitud.nombre}
                iniciales={solicitud.iniciales}
                materia={solicitud.materia}
                horario={solicitud.horario}
                onAceptar={() => responder(solicitud, true)}
                onRechazar={() => responder(solicitud, false)}
              />
            ))}
          </div>
        </section>
      </ContenidoPagina>
    </>
  )
}

export default Solicitudes
