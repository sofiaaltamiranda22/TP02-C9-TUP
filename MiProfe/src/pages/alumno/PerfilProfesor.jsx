// Perfil de un profesor, ruta /alumno/profesores/:id
import { useState, useEffect } from 'react'
import { Badge, Button, Alert, ListGroup } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import ContenidoPagina from '../../components/layout/ContenidoPagina'
import Avatar from '../../components/common/Avatar'
import TarjetaResena from '../../components/alumno/TarjetaResena'
import { profesores } from '../../data/alumno'

function PerfilProfesor() {
  const { id } = useParams()
  // ids de los profesores a los que ya les mandaste solicitud (guardados en el navegador)
  const [enviadas, setEnviadas] = useState(
    () => JSON.parse(localStorage.getItem('miprofe-solicitudes-enviadas')) ?? [],
  )

  // Cada vez que mandas una solicitud la guarda, asi no la podes mandar dos veces aunque refresques
  useEffect(() => {
    localStorage.setItem('miprofe-solicitudes-enviadas', JSON.stringify(enviadas))
  }, [enviadas])

  // El id de la URL llega como texto, por eso se pasa a numero
  const profesor = profesores.find((p) => p.id === Number(id))

  if (!profesor) {
    return (
      <ContenidoPagina>
        <title>Profesor no encontrado - MiProfe</title>
        <section>
          <h1>No encontramos a ese profesor</h1>
          <Link to="/alumno">Volver al inicio</Link>
        </section>
      </ContenidoPagina>
    )
  }

  const solicitudEnviada = enviadas.includes(profesor.id)

  return (
    <>
      <title>{`${profesor.nombre} - MiProfe`}</title>
      <meta name="robots" content="noindex" />

      <ContenidoPagina>
        <section id="datos-profesor" className="d-flex flex-wrap align-items-center gap-4">
          <Avatar iniciales={profesor.iniciales} tamano="grande" />
          <div className="flex-grow-1">
            <h1 className="mb-1">{profesor.nombre}</h1>
            <Badge bg="primary" pill>{profesor.materia}</Badge>
            <p className="mt-3 mb-2">{profesor.bio}</p>
            <ul className="list-unstyled d-flex flex-wrap gap-3 mb-0">
              <li><strong>Precio:</strong> ${profesor.precio.toLocaleString('es-AR')}/hora</li>
              <li><strong>Modalidad:</strong> {profesor.modalidad}</li>
              <li><strong>Calificación:</strong> ★ {profesor.calificacion}</li>
            </ul>
          </div>
        </section>

        <section id="horarios">
          <h2 className="h4 mb-3">Horarios disponibles</h2>
          <ListGroup>
            {profesor.horarios.map((horario) => (
              <ListGroup.Item key={horario}>{horario}</ListGroup.Item>
            ))}
          </ListGroup>
        </section>

        <section id="resenas">
          <h2 className="h4 mb-3">Reseñas</h2>
          {profesor.resenas.length === 0 && <p className="text-body-secondary">Todavía no tiene reseñas.</p>}
          <div className="d-flex flex-column gap-3">
            {profesor.resenas.map((resena) => (
              <TarjetaResena
                key={resena.id}
                estrellas={resena.estrellas}
                comentario={resena.comentario}
                autor={resena.autor}
              />
            ))}
          </div>
        </section>

        <section id="acciones" className="d-flex flex-wrap align-items-center gap-3">
          <h2 className="visually-hidden">Contactar</h2>
          {solicitudEnviada ? (
            <Alert variant="success" className="mb-0">
              Ya le enviaste una solicitud a {profesor.nombre}.
            </Alert>
          ) : (
            <Button onClick={() => setEnviadas([...enviadas, profesor.id])}>Solicitar clase</Button>
          )}
          <Button as={Link} to="/alumno/chat" variant="outline-dark">
            Enviar mensaje
          </Button>
        </section>
      </ContenidoPagina>
    </>
  )
}

export default PerfilProfesor

