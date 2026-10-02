import { Link } from 'react-router-dom'
import PanelVisualAuth from '../../components/auth/PanelVisualAuth'
import CampoPassword from '../../components/auth/CampoPassword'

function Login() {
  return (
    <div className="mi-fondo-puntos flex-grow-1 d-flex justify-content-center align-items-center p-3">
      <div className="card shadow-lg border-0 overflow-hidden" style={{ maxWidth: '900px', width: '100%' }}>
        <div className="row g-0">
          
          <PanelVisualAuth 
            titulo="¡Hola de nuevo!" 
            subtitulo="Ingresá para conectarte con tus profesores y clases." 
          />

    
          <div className="col-md-6 p-4 p-md-5 bg-white">
            <h2 className="fw-bold mb-4">Iniciar sesión</h2>
            
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="nombre@ejemplo.com" 
                  required 
                />
              </div>

              <div className="mb-3">
                <CampoPassword 
                  id="password" 
                  label="Contraseña" 
                  placeholder="Ingresá tu contraseña" 
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3">
                Ingresar
              </button>
            </form>

            <div className="text-center mt-4">
              <p className="mb-0 text-muted">
                ¿No tenés una cuenta?{' '}
                <Link to="/registro" className="fw-bold text-decoration-none">
                  Registrate acá
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login