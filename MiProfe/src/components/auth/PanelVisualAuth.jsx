import { Link } from 'react-router-dom'
import logo from '../../assets/img/Logo_Principal.png'
import '../../styles/auth.css'

function PanelVisualAuth({ frase, detalle }) {
  return (
    <div className="auth-visual position-relative">
      <div className="position-relative z-1 h-100 p-4 d-flex flex-column justify-content-between">
        <Link to="/" className="mi-titulo d-flex align-items-center gap-2 fs-4 fw-bolder text-white text-decoration-none">
          <img src={logo} alt="" width="42" height="42" className="rounded-circle bg-white object-fit-contain" />
          MiProfe
        </Link>
        <blockquote className="mi-titulo m-0 fs-4 fw-bold text-white">
          {frase}
          <span className="d-block mt-3 fs-6 fw-medium text-white text-opacity-75">{detalle}</span>
        </blockquote>
      </div>
    </div>
  )
}
export default PanelVisualAuth