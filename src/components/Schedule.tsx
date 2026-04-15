export default function Schedule() {
  const films = [
    {
      week: 1,
      title: "Rome, Open City",
      director: "Roberto Rossellini",
      year: 1945,
      theme: "The Birth of Neorealism",
      topics: [
        "WWII and resistance",
        "Realism and politics"
      ],
      image: "https://images.makeitglow.co/projects/cmmtst19o0005k0jziu9jjdda/b0bda8c8-5c39-4d37-8781-6febb838dec9.jpg"
    },
    {
      week: 2,
      title: "Bicycle Thieves",
      director: "Vittorio De Sica",
      year: 1948,
      theme: "The Neorealist Masterpiece",
      topics: [
        "Poverty and dignity",
        "Non-professional actors"
      ],
      image: "https://images.makeitglow.co/projects/cmmtst19o0005k0jziu9jjdda/889b1146-c8f1-446a-a099-c1ecc94734f7.jpg"
    },
    {
      week: 3,
      title: "La Strada",
      director: "Federico Fellini",
      year: 1954,
      theme: "Fellini and Poetic Cinema",
      topics: [
        "Symbolism and emotion",
        "Transition beyond neorealism"
      ],
      image: "https://images.makeitglow.co/projects/cmmtst19o0005k0jziu9jjdda/54148e8a-5dac-4f44-bd06-c0edf293aed3.jpg"
    },
    {
      week: 4,
      title: "La Dolce Vita",
      director: "Federico Fellini",
      year: 1960,
      theme: "Italy's Economic Boom",
      topics: [
        "Celebrity culture",
        "Media and spectacle"
      ],
      image: "https://images.makeitglow.co/projects/cmmtst19o0005k0jziu9jjdda/b6388280-ffda-4335-a537-159802956dbd.jpg"
    },
    {
      week: 5,
      title: "L'Avventura",
      director: "Michelangelo Antonioni",
      year: 1960,
      theme: "Modernist Cinema",
      topics: [
        "Alienation",
        "Unconventional storytelling"
      ],
      image: "https://images.makeitglow.co/projects/cmmtst19o0005k0jziu9jjdda/fd174a2c-ff34-4840-8350-5283e445c528.jpg"
    },
    {
      week: 6,
      title: "The Conformist",
      director: "Bernardo Bertolucci",
      year: 1970,
      theme: "Political Cinema",
      topics: [
        "Fascism and psychology",
        "Cinematic style and color"
      ],
      note: "Often the most visually stunning film in the course.",
      image: "https://images.makeitglow.co/projects/cmmtst19o0005k0jziu9jjdda/3b0f4329-58e3-4284-9cc3-ffa06a087236.jpg"
    },
    {
      week: 7,
      title: "Seven Beauties",
      director: "Lina Wertmüller",
      year: 1975,
      theme: "Women Directors / Political Satire",
      topics: [
        "Survival and morality",
        "Dark comedy and politics"
      ],
      image: "https://images.makeitglow.co/projects/cmmtst19o0005k0jziu9jjdda/1fd49a60-fa38-47ed-ab3d-b9f75f646ded.jpg"
    },
    {
      week: 8,
      title: "Happy as Lazzaro",
      director: "Alice Rohrwacher",
      year: 2018,
      theme: "Contemporary Italian Cinema",
      topics: [
        "Rural Italy",
        "Myth and modern capitalism"
      ],
      image: "https://images.unsplash.com/photo-1574267432644-f74f8ec0ce56?w=800&h=600&fit=crop"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 via-rose-900 to-amber-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Film Schedule
          </h1>
          <p className="text-xl sm:text-2xl text-amber-100 max-w-3xl leading-relaxed">
            An eight-week journey through Italian cinema, from neorealism to the present
          </p>
        </div>
      </div>

      {/* Films Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-16">
          {films.map((film) => (
            <div 
              key={film.week}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image */}
                <div className={`order-1 ${film.week % 2 === 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/20 aspect-[4/3]">
                    <img 
                      src={film.image} 
                      alt={film.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3">
                        Week {film.week}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`order-2 ${film.week % 2 === 0 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                    {film.title}
                  </h2>
                  <p className="text-lg text-amber-800 mb-4">
                    {film.director} • {film.year}
                  </p>
                  
                  <div className="bg-amber-100 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">
                      {film.theme}
                    </h3>
                    {film.purpose && (
                      <p className="text-amber-800 leading-relaxed">
                        {film.purpose}
                      </p>
                    )}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-3">
                      Topics for Discussion
                    </h4>
                    <ul className="space-y-2">
                      {film.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-slate-700 leading-relaxed">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {film.note && (
                    <div className="mt-6 p-4 bg-rose-50 border-l-4 border-rose-600 rounded-r-xl">
                      <p className="text-rose-900 italic leading-relaxed">
                        {film.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-amber-900 via-rose-900 to-amber-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            Join Us for the Journey
          </h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Sundays at 5:00 PM • Wine, discussion, and cinema
          </p>
          <a 
            href="mailto:kerrycan8@gmail.com"
            className="inline-block bg-white text-amber-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 transition-all duration-300 hover:-translate-y-0.5 shadow-xl shadow-black/20"
          >
            Contact Kerry to RSVP
          </a>
        </div>
      </div>
    </div>
  )
}