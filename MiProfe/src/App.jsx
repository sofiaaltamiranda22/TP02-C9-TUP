import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import AppRoutes from './components/Routes/AppRoutes'
import ScrollAlInicio from './components/layout/ScrollAlInicio'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollAlInicio />
      <Nav />
      <main className="flex-grow-1 d-flex flex-column">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
