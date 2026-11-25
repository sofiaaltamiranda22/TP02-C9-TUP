// Tarjeta con los datos del profesor en su inicio
import { Card, Badge, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Avatar from '../common/Avatar'

function TarjetaPerfilProfesor({ nombre, iniciales, materia, calificacion, cantidadResenas, nivel, ubicacion, precio, modalidad }) {
  const estrellas = Math.floor(calificacion)

  const datos = [
    { etiqueta: 'Nivel', valor: nivel },
    { etiqueta: 'Ubicación', valor: ubicacion },
    { etiqueta: 'Precio', valor: `$${precio.toLocaleString('es-AR')}/hora` },
    { etiqueta: 'Modalidad', valor: modalidad },
  ]

  return (
    <Card as="article">
      <Card.Body className="p-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <Avatar iniciales={iniciales} tamano="grande" />
          <div>
            <Card.Title as="h3" className="h4 mb-1">{nombre}</Card.Title>
            <Badge bg="primary" pill>{materia}</Badge>
            <p className="mb-0 mt-1 small">
              <span className="text-warning" aria-hidden="true">
                {'★'.repeat(estrellas)}
                {'☆'.repeat(5 - estrellas)}
              </span>{' '}
              <strong>{calificacion}</strong> ({cantidadResenas} reseñas)
            </p>
          </div>
        </div>

        {/* Datos en una grilla de 2 columnas: etiqueta chiquita arriba y el valor abajo */}
        <dl className="row g-3 mb-4">
          {datos.map((dato) => (
            <div className="col-6" key={dato.etiqueta}>
              <dt className="small text-body-secondary fw-semibold">{dato.etiqueta}</dt>
              <dd className="fw-bold mb-0">{dato.valor}</dd>
            </div>
          ))}
        </dl>

        <Button as={Link} to="/profesor/editar-perfil" variant="outline-dark" size="sm">
          Editar perfil
        </Button>
      </Card.Body>
    </Card>
  )
}

export default TarjetaPerfilProfesor
