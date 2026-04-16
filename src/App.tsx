import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import FilmTabs from './components/FilmTabs'
import About from './components/About'
import Footer from './components/Footer'
import Schedule from './components/Schedule'
import TicketsPage from './pages/TicketsPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'schedule' | 'tickets'>('home')

  return (
    <div className="min-h-screen bg-slate-950 antialiased">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' ? (
        <>
          <Hero />
          <FilmTabs setCurrentPage={setCurrentPage} />
          <About />
          <Footer />
        </>
      ) : currentPage === 'schedule' ? (
        <>
          <Schedule />
          <Footer />
        </>
      ) : (
        <>
          <TicketsPage />
          <Footer />
        </>
      )}
    </div>
  )
}
