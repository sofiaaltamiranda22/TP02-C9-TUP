import logo from '../../assets/img/Logo_Principal.png'
import '../../styles/auth.css'

function PanelVisualAuth({ frase, detalle }) {
  return (
    <div className="auth-visual">
      <div className="auth-visual-content">
        <a href="#" className="auth-visual-logo">
          <img src={logo} alt="" />
          MiProfe
        </a>
        <blockquote className="auth-visual-quote">
          {frase}
          <span>{detalle}</span>
        </blockquote>
      </div>
    </div>
  )
}
export default PanelVisualAuth
