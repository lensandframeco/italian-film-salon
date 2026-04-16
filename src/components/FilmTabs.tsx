import { useState } from 'react'

const films = [
  {
    id: 'bicycle-thieves',
    title: 'Bicycle Thieves',
    year: '1948',
    director: 'Vittorio De Sica',
    image: 'https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/1090-/xDnreVBP7DzeI0FhwaffyacTHlorh9_original.jpg',
    description: 'A masterpiece of Italian neorealism, following a poor father searching for his stolen bicycle in post-war Rome. A profound meditation on dignity, desperation, and the moral complexities of poverty.',
    themes: ['Neorealism', 'Post-war Italy', 'Social Justice', 'Father-Son Relationships'],
    runtime: '89 min'
  },
  {
    id: 'la-dolce-vita',
    title: 'La Dolce Vita',
    year: '1960',
    director: 'Federico Fellini',
    image: 'https://images.makeitglow.co/projects/cmmtst19o0005k0jziu9jjdda/06dee83a-5f68-49cd-9115-b6506bc63d61.webp',
    description: 'Fellini\'s iconic exploration of modern decadence and spiritual emptiness in Rome\'s high society. A journalist navigates the glamorous yet hollow world of celebrities, intellectuals, and aristocrats.',
    themes: ['Modernism', 'Existentialism', 'Celebrity Culture', 'Spiritual Crisis'],
    runtime: '174 min'
  },
  {
    id: 'open-city',
    title: 'Rome, Open City',
    year: '1945',
    director: 'Roberto Rossellini',
    image: 'https://s3.amazonaws.com/criterion-production/films/59cb0ed1a2b0c8c50e5b5f60c8d83df8/HYDxj9djWHjmfJW8qHDPCbcsjWX_original.jpg',
    description: 'A landmark of Italian neorealism, filmed in the immediate aftermath of WWII. This raw, powerful film depicts the Nazi occupation of Rome and the resistance movement, blending documentary realism with dramatic intensity.',
    themes: ['Neorealism', 'WWII', 'Resistance', 'Sacrifice'],
    runtime: '103 min'
  },
  {
    id: 'l-avventura',
    title: 'L\'Avventura',
    year: '1960',
    director: 'Michelangelo Antonioni',
    image: 'https://s3.amazonaws.com/criterion-production/films/7d49a9f0c26b8cb7d3e43d7fafcfb69d/PXSfEo9PMPpcbvk6OTkCwh0Dk63_original.jpg',
    description: 'Antonioni\'s groundbreaking exploration of alienation and ennui among the Italian bourgeoisie. When a woman disappears on a Mediterranean island, the search gradually fades as her lover and best friend drift into an uneasy relationship.',
    themes: ['Modernist Cinema', 'Alienation', 'Existential Emptiness', 'The Italian Bourgeoisie'],
    runtime: '143 min'
  }
]

interface FilmTabsProps {
  setCurrentPage: (page: 'home' | 'schedule' | 'tickets') => void
}

export default function FilmTabs({ setCurrentPage }: FilmTabsProps) {
  const [activeTab, setActiveTab] = useState('bicycle-thieves')
  const activeFilm = films.find(f => f.id === activeTab) || films[0]

  return (
    <section id="films" className="relative bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Films
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            Each screening is carefully selected to explore different aspects of Italian cinema
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {films.map((film) => (
            <button
              key={film.id}
              onClick={() => setActiveTab(film.id)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                activeTab === film.id
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-500/30'
                  : 'border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {film.title}
            </button>
          ))}
        </div>

        {/* Film Content */}
        <div className="mt-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={activeFilm.image}
                alt={activeFilm.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 text-sm font-medium text-rose-400">
                <span>{activeFilm.year}</span>
                <span className="h-1 w-1 rounded-full bg-rose-400" />
                <span>{activeFilm.runtime}</span>
              </div>
              
              <h3 className="mt-4 text-4xl font-bold tracking-tight text-white">
                {activeFilm.title}
              </h3>
              
              <p className="mt-2 text-lg text-slate-400">
                Directed by {activeFilm.director}
              </p>

              <p className="mt-6 text-base leading-relaxed text-slate-300">
                {activeFilm.description}
              </p>

              <div className="mt-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Key Themes
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeFilm.themes.map((theme) => (
                    <span
                      key={theme}
                      className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => setCurrentPage('tickets')}
                  className="inline-flex items-center rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition-all hover:bg-rose-500 hover:-translate-y-0.5"
                >
                  RSVP for Screening
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
