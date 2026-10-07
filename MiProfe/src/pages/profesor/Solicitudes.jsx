// Solicitudes de alumnos
import { useState, useEffect } from 'react'
import { Alert, Button } from 'react-bootstrap'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
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

          {pendientes.length === 0 && (
            <Button variant="outline-dark" onClick={() => setPendientes(solicitudes)}>
              Volver a cargar las solicitudes de ejemplo
            </Button>
          )}
        </section>
      </ContenidoPagina>
    </>
  )
}

export default Solicitudes
