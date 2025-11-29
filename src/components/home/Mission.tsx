import { Link } from 'react-router-dom';

export default function Mission() {
  return (
    <section
      style={{ backgroundColor: '#fffaf1', borderTopWidth: 1 }}
      className="py-20"
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-5xl md:text-8xl font-serif mb-8"
            style={{ color: '#666' }}
          >
            Our Mission
          </h1>

          <div className="prose prose-lg mx-auto text-driftwood leading-relaxed">
            <p className="text-xl mb-6">
              David Teichmann (1952–2021) lived on the edge of Punta Burica to
              protect the smallest lives. His handwritten notebooks document
              decades of nests, hatchlings, and the community fights to keep
              beaches safe. This site preserves his work and keeps his mission
              alive.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-sunset-coral mb-2">
                100,000+
              </div>
              <div className="text-coastal-sage">
                sea turtle hatchlings released
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-hatchling-olive mb-2">
                15+
              </div>
              <div className="text-coastal-sage">
                years of research data digitized
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-deep-marine mb-2">5</div>
              <div className="text-coastal-sage">
                hectares of protected sanctuary
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-driftwood mb-2">3</div>
              <div className="text-coastal-sage">
                species of endangered primates monitored
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              to="/david-teichmann"
              className="inline-flex items-center text-deep-marine font-semibold hover:text-coastal-sage transition-colors"
            >
              Read David's Story
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
