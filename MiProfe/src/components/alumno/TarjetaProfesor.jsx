import Avatar from '../common/Avatar'
import '../../styles/alumno.css'
import '../../styles/bento.css'

// Cuadro de profesor con franja de color y avatar. Lo que va abajo (precio, botones) llega como children
function TarjetaProfesor({ nombre, iniciales, materia, children }) {
  return (
    <article className="cuadro cuadro--hover profesor-card h-100 text-center p-0">
      <header className="profesor-card-banner pt-4 pb-5"></header>
      <section className="d-flex flex-column align-items-center flex-grow-1 px-4 pb-4">
        <Avatar iniciales={iniciales} tamano="grande" className="profesor-card-avatar" />
        <h3 className="h5 mb-1">{nombre}</h3>
        <p className="badge bg-primary rounded-pill mb-3">{materia}</p>
        {children}
      </section>
    </article>
  )
}
export default TarjetaProfesor
