// Encabezado del inicio (alumno y profesor): avatar, saludo, datos y botones a la derecha
import Avatar from './Avatar'

function BannerBienvenida({ iniciales, saludo, detalle, children }) {
  return (
    <section className="d-flex flex-column flex-md-row align-items-md-center gap-3">
      <Avatar iniciales={iniciales} tamano="grande" />
      <div className="flex-grow-1">
        <h1 className="h2 mb-1">{saludo}</h1>
        <p className="mb-0 text-body-secondary">{detalle}</p>
      </div>
      {children && <div className="d-flex flex-wrap gap-2">{children}</div>}
    </section>
  )
}

export default BannerBienvenida
