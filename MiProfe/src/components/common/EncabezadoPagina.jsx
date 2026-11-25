// Encabezado de cada seccion: un icono, el titulo, una bajada y (si hace falta) botones a la derecha
function EncabezadoPagina({ icono, titulo, bajada, children }) {
  return (
    <header className="encabezado-pagina">
      <span className="encabezado-pagina-icono" aria-hidden="true">{icono}</span>
      <hgroup>
        <h1>{titulo}</h1>
        {bajada && <p className="text-body-secondary mb-0">{bajada}</p>}
      </hgroup>
      {children}
    </header>
  )
}

export default EncabezadoPagina
