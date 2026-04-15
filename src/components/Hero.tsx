export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      {/* Background image from La Dolce Vita - Trevi Fountain scene */}
      <div className="absolute inset-0">
        <img 
          src="https://images.makeitglow.co/projects/cmmtst19o0005k0jziu9jjdda/013729ac-5d5a-4a61-a51e-10749855518e.webp" 
          alt="Iconic Italian Cinema Scene" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/15 to-transparent" />
      </div>
      
      {/* Gradient orbs for depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-rose-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">
            Every Sunday, 11:30 to 3:30 May 10-June 28 at The Electric Lodge in Venice
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            A Journey Through{' '}
            <span className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">
              Italian Cinema
            </span>
          </h1>
          <p className="mt-4 text-xl font-medium text-slate-400 sm:text-2xl">
            From Neo-realism to the Present
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
            Join Kerry Candaele for an intimate Sunday salon featuring classic and contemporary 
            Italian films, Italian wine, and engaging discussion about cinema, culture, and history.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a 
              href="#films" 
              className="inline-flex items-center rounded-full bg-rose-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition-all hover:bg-rose-500 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-0.5"
            >
              Explore Films
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center rounded-full border border-slate-700 px-8 py-3.5 text-sm font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
