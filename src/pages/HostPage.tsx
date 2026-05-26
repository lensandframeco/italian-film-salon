import SEO from '../components/SEO'

export default function HostPage() {
  return (
    <>
      <SEO
        title="The Host | Kerry Candaele's Italian Film Salon"
        description="Meet Kerry Candaele, documentary filmmaker, educator, and founder of the Italian Film Salon—a journey through Italian cinema history with wine and discussion."
        canonical="/host"
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-amber-900 via-rose-900 to-stone-900 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              The Host
            </h1>
            <p className="text-xl sm:text-2xl text-amber-100 max-w-3xl leading-relaxed">
              Meet the storyteller behind the salon
            </p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.makeitglow.co/projects/cmmtst19o0005k0jziu9jjdda/ee1fc6de-6060-4fda-9174-5018dc8f0e9f.jpg" 
                  alt="Kerry Candaele"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3 space-y-6 text-lg leading-relaxed text-stone-700">
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-8">Kerry Candaele</h2>
              
              <p>
                Kerry Candaele is a Canadian-American documentary filmmaker, writer, music producer, and educator. Candaele has worked as a history educator and served as a Richard Hofstadter and President's Fellow in the department of history at Columbia University.
              </p>

              <p>
                His work focuses on social justice, political history, and the cultural and political influence of music and the arts.
              </p>

              <p>
                He is the founder of the Ode To Joy Foundation, OTJF (<a href="https://www.odetojoyfoundation.org" target="_blank" rel="noopener noreferrer" className="text-rose-700 hover:text-rose-800 underline">www.odetojoyfoundation.org</a>) as a natural extension of his lifelong commitment to music, storytelling and social purpose. Raised in Lompoc, California after being born in Vancouver, B.C., Kerry grew into a global educator, historian, filmmaker and advocate for the values of tolerance, compassion, equality and artistic freedom.
              </p>

              <p>
                Before establishing the OTJF, Kerry ran a history museum and taught high-school history at The Cate School in Montecito. He then worked overseas in East Timor, Guatemala, Jordan, the West Bank and Gaza for The Democracy Council.
              </p>

              <p>
                Kerry's filmmaking career includes a trilogy of documentaries exploring Beethoven's global and human-spirit legacy: <em>Following the Ninth</em>, <em>Love & Justice</em>, and <em>Last Will & Testament</em>. Other documentary work includes: <em>A League of Their Own</em> (1987, documentary) – Assistant producer, <em>Wal-Mart: The High Cost of Low Price</em> (2005) – Co-producer, <em>Iraq for Sale: The War Profiteers</em> (2006) – Producer.
              </p>

              <p>
                He has presented his films in over 35 U.S. states and 40 countries, has taught Italian Film and Politics at Marymount Manhattan College, and various courses in U.S. and European history at Occidental College, Cal State Dominguez Hills, and other educational institutions.
              </p>

              <p>
                He has also authored three books, among them <em>Bound for Glory 1910-1930: From the Great Migration to the Harlem Renaissance</em> and <em>Journeys With Beethoven</em>, which chronicles his Beethoven films and the music's global impact.
              </p>

              <p className="pt-4 text-stone-900 font-medium">
                He lives in Santa Monica, California, and is the proud father of three daughters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
