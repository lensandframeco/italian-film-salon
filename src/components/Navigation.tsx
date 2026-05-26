import { useState } from 'react'

interface NavigationProps {
  currentPage: 'home' | 'schedule' | 'tickets' | 'host'
  setCurrentPage: (page: 'home' | 'schedule' | 'tickets' | 'host') => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleNavClick = (page: 'home' | 'schedule' | 'tickets' | 'host', hash?: string) => {
    setCurrentPage(page)
    setIsOpen(false)
    if (hash && page === 'home') {
      setTimeout(() => {
        const element = document.querySelector(hash)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => handleNavClick('home')}
          className="text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors"
        >
          Cine-Salon
        </button>
        <div className="hidden items-center gap-8 md:flex">
          <button 
            onClick={() => handleNavClick('home', '#films')}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Featured Films
          </button>
          <button 
            onClick={() => handleNavClick('schedule')}
            className={`text-sm font-medium transition-colors ${
              currentPage === 'schedule' ? 'text-amber-400' : 'text-slate-300 hover:text-white'
            }`}
          >
            Full Schedule
          </button>
          <button 
            onClick={() => handleNavClick('home', '#about')}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('host')}
            className={`text-sm font-medium transition-colors ${
              currentPage === 'host' ? 'text-amber-400' : 'text-slate-300 hover:text-white'
            }`}
          >
            The Host
          </button>
          <button 
            onClick={() => handleNavClick('tickets')}
            className={`text-sm font-medium transition-colors ${
              currentPage === 'tickets' ? 'text-amber-400' : 'text-slate-300 hover:text-white'
            }`}
          >
            Get Tickets
          </button>
          <button 
            onClick={() => handleNavClick('home', '#contact')}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Contact
          </button>
          <a 
            href="mailto:kcandaele@gmail.com"
            className="rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-rose-500 shadow-lg shadow-rose-500/30"
          >
            Join Us
          </a>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 md:hidden"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-4 py-4 md:hidden">
          <div className="flex flex-col space-y-3">
            <button onClick={() => handleNavClick('home', '#films')} className="text-left text-sm font-medium text-slate-300">
              Featured Films
            </button>
            <button onClick={() => handleNavClick('schedule')} className="text-left text-sm font-medium text-slate-300">
              Full Schedule
            </button>
            <button onClick={() => handleNavClick('home', '#about')} className="text-left text-sm font-medium text-slate-300">
              About
            </button>
            <button onClick={() => handleNavClick('host')} className="text-left text-sm font-medium text-slate-300">
              The Host
            </button>
            <button onClick={() => handleNavClick('tickets')} className="text-left text-sm font-medium text-slate-300">
              Get Tickets
            </button>
            <button onClick={() => handleNavClick('home', '#contact')} className="text-left text-sm font-medium text-slate-300">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
