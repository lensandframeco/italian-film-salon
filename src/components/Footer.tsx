export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Join the Salon
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Interested in attending? Spaces are limited to ensure an intimate experience. 
              Contact Kerry to learn about upcoming screenings and reserve your spot.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <svg className="h-5 w-5 text-rose-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>kcandaele@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <svg className="h-5 w-5 text-rose-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span>12p to 3p Every Sunday</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">About Kerry Candaele</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Kerry Candaele is a filmmaker, writer, and passionate cinephile with deep roots in 
              Italian culture and cinema. His Sunday salons bring together film lovers who appreciate 
              the artistry, history, and cultural richness of Italian filmmaking.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          &copy; 2026 Cine-Salon
        </div>
      </div>
    </footer>
  )
}
