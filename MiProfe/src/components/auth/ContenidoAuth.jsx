// Pantalla de Login y Registro: ilustracion de fondo y el formulario en un cuadro blanco en el medio
import '../../styles/auth.css'
import '../../styles/bento.css'

// tamano: 'chica' para el login y 'grande' para el registro (que tiene mas campos)
function ContenidoAuth({ tamano = 'chica', children }) {
  return (
    <section className="auth-fondo flex-grow-1 d-flex align-items-center justify-content-center px-3 py-4 py-md-5">
      <article className={`cuadro auth-tarjeta auth-tarjeta--${tamano} p-4 p-md-5`}>{children}</article>
    </section>
  )
}

export default ContenidoAuth
