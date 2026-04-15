import { useState } from 'react'
import SEO from '../components/SEO'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meeverro'
const VENMO_URL = 'https://venmo.com/u/Kerry-Candaele'

const SUNDAYS = [
  'Sunday, May 10',
  'Sunday, May 17',
  'Sunday, May 24',
  'Sunday, May 31',
  'Sunday, June 7',
  'Sunday, June 14',
  'Sunday, June 21',
  'Sunday, June 28',
]

type TicketType = 'single' | 'series'

export default function TicketsPage() {
  const [ticketType, setTicketType] = useState<TicketType>('single')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [preferredDate, setPreferredDate] = useState(SUNDAYS[0])
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const amount = ticketType === 'series' ? 120 : 20

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setErrorMsg('')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          ticketType:
            ticketType === 'series' ? 'Full Series Pass ($120)' : 'Single Screening ($20)',
          preferredDate: ticketType === 'series' ? 'All 8 Sundays (full series)' : preferredDate,
          amount: `$${amount}`,
          _subject: `Cine-Salon reservation from ${name}`,
        }),
      })
      if (!res.ok) throw new Error(`Formspree returned ${res.status}`)
      setSubmitted(true)
    } catch (err) {
      setErrorMsg((err as Error).message || 'Something went wrong. Please email kcandaele@gmail.com.')
    } finally {
      setSubmitting(false)
    }
  }

  function selectTicketType(type: TicketType) {
    setTicketType(type)
    // Scroll to form after a small delay so the radio visually updates first
    setTimeout(() => {
      document.getElementById('reservation-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <>
      <SEO
        title="Get Your Tickets | Kerry Candaele's Italian Film Salon"
        description="Reserve your spot at the Cine-Salon. Single screenings $20 or the full 8-week series for $120. Sunday afternoons in Venice with Italian film, wine, and conversation."
        canonical="/tickets"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Header */}
        <div className="bg-slate-900 text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Pricing</h1>
            <p className="text-xl text-slate-300">Choose Your Seat at the Salon</p>
          </div>
        </div>

        {/* Intro */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-lg leading-relaxed text-slate-700 text-center">
            Whether you join us for a single afternoon or the full series, each Cine-Salon gathering is designed to be a complete experience—film, wine, and conversation in an intimate setting.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Single Screening */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Single Screening</h2>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$20</span>
                <span className="text-slate-600 ml-2">per ticket</span>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">Join us for any individual Sunday session.</p>

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

              <button
                type="button"
                onClick={() => selectTicketType('single')}
                className="block w-full bg-slate-900 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-300"
              >
                Reserve Your Seat →
              </button>
            </div>

            {/* Full Series Pass */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg p-8 border-2 border-amber-200 hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Best Value
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Full Series Pass</h2>
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

              <button
                type="button"
                onClick={() => selectTicketType('series')}
                className="block w-full bg-amber-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300"
              >
                Join the Full Series →
              </button>
            </div>
          </div>
        </div>

        {/* Reservation Form */}
        <div id="reservation-form" className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-8">
          {submitted ? (
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 border border-amber-200 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
                Thanks, {name.split(' ')[0] || 'friend'}!
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Kerry will confirm your reservation shortly. To complete your booking, please send ${amount} via Venmo.
              </p>
              <a
                href={VENMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-amber-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg shadow-amber-500/30 hover:bg-amber-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300"
              >
                Pay ${amount} on Venmo →
              </a>
              <p className="mt-6 text-sm text-slate-500 leading-relaxed">
                Venmo will open in a new tab. Send to <span className="font-mono">@Kerry-Candaele</span>.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 border border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
                Reserve Your Spot
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Fill this out and Kerry will confirm your reservation. Payment is sent afterward via Venmo.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Ticket Type */}
                <fieldset>
                  <legend className="block text-sm font-semibold text-slate-900 mb-3">Ticket Type</legend>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <label
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all ${
                        ticketType === 'single'
                          ? 'border-amber-500 bg-amber-50 ring-2 ring-amber-500/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="ticketType"
                        value="single"
                        checked={ticketType === 'single'}
                        onChange={() => setTicketType('single')}
                        className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                      />
                      <span>
                        <span className="block font-semibold text-slate-900">Single Screening</span>
                        <span className="block text-sm text-slate-600">$20 — one Sunday</span>
                      </span>
                    </label>
                    <label
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all ${
                        ticketType === 'series'
                          ? 'border-amber-500 bg-amber-50 ring-2 ring-amber-500/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="ticketType"
                        value="series"
                        checked={ticketType === 'series'}
                        onChange={() => setTicketType('series')}
                        className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                      />
                      <span>
                        <span className="block font-semibold text-slate-900">Full Series Pass</span>
                        <span className="block text-sm text-slate-600">$120 — all 8 Sundays</span>
                      </span>
                    </label>
                  </div>
                </fieldset>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Preferred Date — only for Single */}
                {ticketType === 'single' && (
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-semibold text-slate-900 mb-2">
                      Preferred Date
                    </label>
                    <select
                      id="preferredDate"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    >
                      {SUNDAYS.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Error */}
                {errorMsg && (
                  <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                    {errorMsg}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-amber-600 text-white font-semibold py-4 rounded-lg shadow-lg shadow-amber-500/30 hover:bg-amber-700 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting…' : `Reserve — Pay $${amount} via Venmo after`}
                </button>

                <p className="text-xs text-slate-500 text-center leading-relaxed">
                  You'll get a Venmo link immediately after submitting. Kerry will also be in touch by email.
                </p>
              </form>
            </div>
          )}
        </div>

        {/* Note Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">A Note on the Experience</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Cine-Salon is intentionally small. Attendance is limited to maintain the atmosphere—part screening, part gathering, part conversation.
            </p>
            <p className="text-slate-700 leading-relaxed">
              If you're planning to attend multiple sessions, the full series pass is the best way to ensure your place.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
