// Un paso 01/02/03 de "Como funciona" (va adentro de una lista <ol>)
function TarjetaPaso({ numero, titulo, texto }) {
  return (
    <li className="paso">
      <span className="paso-numero" aria-hidden="true">{numero}</span>
      <h3 className="h5 mt-3 mb-1">{titulo}</h3>
      <p className="mb-0 text-body-secondary">{texto}</p>
    </li>
  )
}
export default TarjetaPaso
