import { Link } from 'react-router-dom'
import PanelVisualAuth from '../../components/auth/PanelVisualAuth'
import CampoPassword from '../../components/auth/CampoPassword'
import SelectNivel from '../../components/common/SelectNivel'

function Registro() {
  return (
    <div className="mi-fondo-puntos flex-grow-1 d-flex justify-content-center align-items-center p-3">
      <div className="card shadow-lg border-0 overflow-hidden" style={{ maxWidth: '900px', width: '100%' }}>
        <div className="row g-0">
          
          <PanelVisualAuth 
            titulo="¡Sumate a MiProfe!" 
            subtitulo="Creá tu cuenta para empezar a aprender o enseñar." 
          />

          <div className="col-md-6 p-4 p-md-5 bg-white">
            <h2 className="fw-bold mb-4">Crear cuenta</h2>
            
            <form>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre completo</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="nombre" 
                  placeholder="Tu nombre y apellido" 
                  required 
                />
              </div>

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
                  placeholder="Crea una contraseña" 
                />
              </div>

              <div className="mb-3">
                <SelectNivel id="nivel" label="Nivel educativo" />
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3">
                Registrarme
              </button>
            </form>

            <div className="text-center mt-4">
              <p className="mb-0 text-muted">
                ¿Ya tenés una cuenta?{' '}
                <Link to="/login" className="fw-bold text-decoration-none">
                  Iniciá sesión acá
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Registro