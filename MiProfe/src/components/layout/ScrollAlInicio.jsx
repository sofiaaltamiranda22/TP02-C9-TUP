// React Router cambia de pagina sin recargar, asi que el scroll queda donde estaba en la pagina anterior.
// Este componente no muestra nada: cada vez que cambia la ruta, sube la pantalla al principio
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollAlInicio() {
  const { pathname } = useLocation()

  useEffect(() => {
    // 'instant' porque Bootstrap activa el scroll suave y se veia la pagina nueva deslizandose hacia arriba
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default ScrollAlInicio
