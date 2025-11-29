import { Link } from 'react-router-dom'

export default function HowToHelp() {
  return (
    <section className="bg-sandstone py-20">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">How You Can Help</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Donate */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-sunset-coral to-hatchling-olive flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif text-deep-marine mb-3">Donate</h3>
              <p className="text-driftwood mb-4">
                One-time or monthly. Every $50 sponsors a nest. PayPal or credit card.
              </p>
              <Link 
                to="/donate"
                className="block w-full text-center bg-deep-marine text-white py-3 rounded-md font-semibold hover:bg-coastal-sage transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </div>

          {/* Sponsor a Nest */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-hatchling-olive to-coastal-sage flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif text-deep-marine mb-3">Sponsor a Nest</h3>
              <p className="text-driftwood mb-4">
                $50 — Get GPS coordinates, 3 photo updates, digital certificate.
              </p>
              <Link 
                to="/donate?type=sponsor"
                className="block w-full text-center bg-hatchling-olive text-white py-3 rounded-md font-semibold hover:bg-deep-marine transition-colors"
              >
                Sponsor a Nest
              </Link>
            </div>
          </div>

          {/* Volunteer */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-deep-marine to-driftwood flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif text-deep-marine mb-3">Volunteer</h3>
              <p className="text-driftwood mb-4">
                Walk the beach, relocate eggs, release hatchlings. $35/day (week 1).
              </p>
              <Link 
                to="/volunteer"
                className="block w-full text-center bg-driftwood text-white py-3 rounded-md font-semibold hover:bg-deep-marine transition-colors"
              >
                Apply to Volunteer
              </Link>
            </div>
          </div>

          {/* Partner */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-coastal-sage to-deep-marine flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif text-deep-marine mb-3">Partner</h3>
              <p className="text-driftwood mb-4">
                Corporate sponsors, researchers, media. Let's collaborate.
              </p>
              <Link 
                to="/contact"
                className="block w-full text-center bg-coastal-sage text-white py-3 rounded-md font-semibold hover:bg-deep-marine transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
