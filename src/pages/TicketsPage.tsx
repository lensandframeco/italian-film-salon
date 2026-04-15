import SEO from '../components/SEO'

export default function TicketsPage() {
  return (
    <>
      <SEO
        title="Get Your Tickets | Kerry Candaele's Italian Film Salon"
        description="Join us for Italian cinema, wine, and conversation. Single screening tickets or full series pass available for Sunday afternoon salons in Venice."
        canonical="/tickets"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Header */}
        <div className="bg-slate-900 text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Pricing
            </h1>
            <p className="text-xl text-slate-300">
              Choose Your Seat at the Salon
            </p>
          </div>
        </div>

        {/* Intro */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-lg leading-relaxed text-slate-700 text-center">
            Whether you join us for a single afternoon or the full series, each Cine-Salon gathering is designed to be a complete experience—film, wine, and conversation in an intimate setting.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Single Screening */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
                Single Screening
              </h2>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$20</span>
                <span className="text-slate-600 ml-2">per ticket</span>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Join us for any individual Sunday session.
              </p>
              
              <div className="mb-8">
                <p className="font-semibold text-slate-900 mb-3">Includes:</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    One curated film screening
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    A glass (or two) of Italian wine
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Post-film discussion led by Kerry Candaele
                  </li>
                </ul>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Perfect if you'd like to drop in, explore a specific film, or get a feel for the salon.
              </p>

              <a
                href="mailto:kcandaele@gmail.com?subject=Single Screening Reservation"
                className="block w-full bg-slate-900 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-300"
              >
                Reserve Your Seat →
              </a>
            </div>

            {/* Full Series Pass */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg p-8 border-2 border-amber-200 hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Best Value
              </div>
              
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
                Full Series Pass
              </h2>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$120</span>
                <span className="text-slate-600 ml-2">for all 8 events</span>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Commit to the full journey through Italian cinema—from neorealism to the present.
              </p>
              
              <div className="mb-8">
                <p className="font-semibold text-slate-900 mb-3">Includes:</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Admission to all 8 screenings
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Wine at every event
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Access to the full arc of films and discussions
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority seating each week
                  </li>
                </ul>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                A more immersive experience, and a better value for those who want to follow the series as it unfolds.
              </p>

              <a
                href="mailto:kcandaele@gmail.com?subject=Full Series Pass Reservation"
                className="block w-full bg-amber-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300"
              >
                Join the Full Series →
              </a>
            </div>
          </div>

          {/* Note Section */}
          <div className="bg-slate-50 rounded-xl p-8 mb-12 border border-slate-200">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">
              A Note on the Experience
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Cine-Salon is intentionally small. Attendance is limited to maintain the atmosphere—part screening, part gathering, part conversation.
            </p>
            <p className="text-slate-700 leading-relaxed">
              If you're planning to attend multiple sessions, the full series pass is the best way to ensure your place.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">
              Questions or Reservations
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              To reserve your spot or learn more, reach out directly:
            </p>
            <a
              href="mailto:kcandaele@gmail.com"
              className="inline-block text-amber-600 hover:text-amber-700 font-semibold text-lg transition-colors duration-300"
            >
              kcandaele@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
