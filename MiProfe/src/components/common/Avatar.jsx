// Circulo con las iniciales o la foto de una persona (.avatar, .avatar--grande, --chico, --mini)
function Avatar({ iniciales, tamano, className }) {
  let clases = 'avatar'
  if (tamano) clases += ` avatar--${tamano}`
  if (className) clases += ` ${className}`

  return (
    <div className={clases} aria-hidden="true">
      {iniciales}
    </div>
  )
}

export default Avatar