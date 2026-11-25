// Cuadro de un beneficio (Perfiles verificados, Sin comisiones, Chat). color: verde, amarillo o violeta
function TarjetaBeneficio({ icono, titulo, texto, color }) {
  return (
    <article className={`cuadro cuadro--${color} ancho-4`}>
      <span className="cuadro-icono cuadro-icono--arriba mb-3" aria-hidden="true">{icono}</span>
      <h3 className="h5 mb-1">{titulo}</h3>
      <p className="mb-0 text-body-secondary">{texto}</p>
    </article>
  )
}
export default TarjetaBeneficio
