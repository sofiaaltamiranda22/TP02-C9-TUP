import { Button } from 'react-bootstrap'

// Boton de una materia. Que pasa al tocarlo lo decide la pagina (llega por la prop onElegir)
function BotonMateria({ icono, materia, onElegir }) {
  return (
    <Button
      variant="outline-secondary"
      onClick={onElegir}
      className="w-100 d-flex align-items-center justify-content-center gap-2"
    >
      <img src={icono} alt="" width="20" height="20" /> {materia}
    </Button>
  )
}

export default BotonMateria
