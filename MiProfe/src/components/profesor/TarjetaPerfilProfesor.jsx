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
    <Card as="article" className="overflow-hidden">
      <div className="bg-primary py-1"></div>
      <Card.Body className="d-flex flex-column flex-sm-row align-items-sm-center gap-4">
        <Avatar iniciales={iniciales} tamano="grande" />
        <div>
          <Card.Title as="h2" className="mb-1">{nombre}</Card.Title>
          <Badge bg="primary" pill>{materia}</Badge>
          <p className="my-2">
            <span className="text-warning" aria-hidden="true">
              {'★'.repeat(estrellas)}
              {'☆'.repeat(5 - estrellas)}
            </span>{' '}
            {calificacion} ({cantidadResenas} reseñas)
          </p>
          <ul className="list-unstyled d-flex flex-wrap gap-3 mb-3">
            {datos.map((dato) => (
              <li key={dato.etiqueta}>
                <strong>{dato.etiqueta}:</strong> {dato.valor}
              </li>
            ))}
          </ul>
          <Button as={Link} to="/profesor/editar-perfil" variant="outline-dark" size="sm">
            Editar perfil
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default TarjetaPerfilProfesor
