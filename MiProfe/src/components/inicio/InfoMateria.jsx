// Ventana con la descripcion de una materia, que se pide a la API de Wikipedia
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Modal, Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// La URL de la API sale del archivo .env, no se escribe en el componente
const API_URL = import.meta.env.VITE_API_URL

function InfoMateria({ materia, onCerrar }) {
  const [info, setInfo] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  // Cada vez que se toca Reintentar sube en 1 y eso vuelve a ejecutar el useEffect
  const [intento, setIntento] = useState(0)

  // Al abrir la ventana (y al reintentar) pide a Wikipedia el resumen de la materia
  useEffect(() => {
    // Si se cierra la ventana antes de que llegue la respuesta, la respuesta se ignora
    let vigente = true

    const pedirResumen = async () => {
      try {
        const response = await axios.get(`${API_URL}/page/summary/${encodeURIComponent(materia.articulo)}`)
        if (vigente) setInfo(response.data)
      } catch (err) {
        console.error(err)
        if (!vigente) return
        setError(true)
        Swal.fire({
          icon: 'error',
          title: 'No pudimos cargar la materia',
          text: 'Revisá tu conexión a internet y probá de nuevo en unos segundos.',
          confirmButtonText: 'Entendido',
          confirmButtonColor: '#2d8cf0',
        })
      } finally {
        if (vigente) setCargando(false)
      }
    }

    pedirResumen()
    return () => {
      vigente = false
    }
  }, [materia.articulo, intento])

  const reintentar = () => {
    setError(false)
    setCargando(true)
    setIntento(intento + 1)
  }

  return (
    <Modal show onHide={onCerrar} centered>
      <Modal.Header closeButton>
        <Modal.Title as="h2" className="h4">{materia.materia}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {cargando && (
          <div className="text-center py-4" role="status">
            <Spinner animation="border" variant="primary" />
            <p className="mt-2 mb-0">Buscando información...</p>
          </div>
        )}

        {!cargando && error && (
          <div className="text-center py-3">
            <p>No pudimos traer la información de {materia.materia}.</p>
            <Button variant="outline-dark" onClick={reintentar}>Reintentar</Button>
          </div>
        )}

        {!cargando && info && (
          <>
            {info.thumbnail && (
              <img src={info.thumbnail.source} alt={info.title} className="img-fluid rounded d-block mx-auto mb-3" />
            )}
            <p>{info.extract}</p>
            <a href={info.content_urls.desktop.page} target="_blank" rel="noreferrer" className="small">
              Leer más en Wikipedia
            </a>
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-dark" onClick={onCerrar}>Cerrar</Button>
        <Button as={Link} to="/registro">Buscar profesores de {materia.materia}</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default InfoMateria
