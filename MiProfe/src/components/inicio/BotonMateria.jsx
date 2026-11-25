// Boton de una materia. Que pasa al tocarlo lo decide la pagina (llega por la prop onElegir)
function BotonMateria({ icono, materia, onElegir }) {
  return (
    <button type="button" onClick={onElegir} className="boton-materia">
      <span className="boton-materia-icono" aria-hidden="true">{icono}</span>
      {materia}
    </button>
  )
}

export default BotonMateria
