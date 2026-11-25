import { Link } from 'react-router-dom'

// Cuadro grande del final que invita a registrarse. fondo: 'oscuro' o 'azul'
function TarjetaCta({ titulo, texto, textoBoton, fondo, varianteBoton, icono }) {
  return (
    <article className={`cuadro cuadro--${fondo} ancho-6 p-4 p-md-5`}>
      <span className="cuadro-icono" aria-hidden="true">{icono}</span>
      <h3 className="h2 mb-2">{titulo}</h3>
      <p className="mb-4">{texto}</p>
      <Link to="/registro" className={`btn btn-${varianteBoton} align-self-start mt-auto`}>
        {textoBoton} →
      </Link>
    </article>
  )
}

export default TarjetaCta
