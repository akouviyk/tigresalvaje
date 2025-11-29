import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import VielkaImg from '../assets/vielkaTeichmann.jpg';
import Stone1 from '../assets/stonesofV/046404f09cb975dd1cbd60e8b6169026.jpg';
import Stone2 from '../assets/stonesofV/8b0112d935c18b6fa4dbf0d747601539.jpg';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Tigre Salvaje | Our Story & Team</title>
        <meta
          name="description"
          content="Learn about Tigre Salvaje Conservation Foundation, our mission, team, and location at Punta Burica, Panama."
        />
      </Helmet>

      {/* Hero */}
      <section style={{ backgroundColor: '#24582a' }} className="py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-6xl font-serif text-center text-white mb-6">
            About Tigre Salvaje
          </h1>
          <p className="text-xl text-sandstone text-center max-w-3xl mx-auto">
            Protecting endangered sea turtles and wildlife at Punta Burica since
            2005
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ backgroundColor: '#fffaf1' }} className="py-20">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-serif mb-8">Our Story</h2>

          <div className="prose prose-lg max-w-none text-driftwood leading-relaxed space-y-6">
            <p>
              Tigre Salvaje began in 2005 when David Teichmann purchased 12
              acres of beachfront property at Punta Burica with dreams of
              building a hotel. The Panamanian government promised a road. He
              invested $500,000 in infrastructure. The road never came.
            </p>

            <p>
              But the sea turtles did. And so did the poachers. David watched as
              mother turtles were killed on his beach, their eggs stolen and
              sold for $0.10 each in local cantinas. He couldn't look away.
            </p>

            <p>
              What started as one man with a flashlight became 17 years of
              nightly beach patrols, meticulously documented research, and
              community transformation. David walked 5–7 hours every night
              during nesting season, relocating eggs to protected incubators,
              deterring poachers, and educating anyone who would listen.
            </p>

            <p>
              By 2011, David had released a record 14,000 hatchlings in a single
              season. By 2021, the total exceeded 100,000 lives saved.
            </p>

            <p>
              When David passed away in October 2021, his widow Vielka Teichmann
              made a choice: continue the mission or let it die with him. She
              chose to fight. With support from volunteers, donors, and former
              poachers turned protectors, Tigre Salvaje is not only
              surviving—it's thriving.
            </p>

            <p className="font-semibold">
              In 2024, we broke David's record: 14,287 hatchlings released. This
              is his legacy in action.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ backgroundColor: '#d4e8cf' }} className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div
              style={{ backgroundColor: '#fffaf1' }}
              className="p-8 rounded-lg"
            >
              <h2 className="text-3xl font-serif text-deep-marine mb-6">
                Our Mission
              </h2>
              <p className="text-driftwood leading-relaxed">
                To protect endangered sea turtles, primates, and their habitats
                at Punta Burica through community-based conservation, scientific
                research, and education—honoring the legacy of David Teichmann
                and ensuring his work continues for generations to come.
              </p>
            </div>

            <div
              style={{ backgroundColor: '#fffaf1' }}
              className="p-8 rounded-lg"
            >
              <h2 className="text-3xl font-serif text-deep-marine mb-6">
                Our Vision
              </h2>
              <p className="text-driftwood leading-relaxed">
                A future where Punta Burica serves as a model for community-led
                conservation in Central America, where local people see wildlife
                as assets to protect rather than commodities to exploit, and
                where sea turtle populations recover through sustained,
                science-based intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team - Vielka Featured */}
      <section style={{ backgroundColor: '#fffaf1' }} className="py-20">
        <div className="section-container">
          <h2 className="text-3xl font-serif text-center mb-12">Our Team</h2>

          <div className="max-w-5xl mx-auto">
            {/* Vielka - Featured Profile */}
            <div
              className="bg-gradient-to-br p-10 rounded-lg mb-8"
              style={{
                background:
                  'linear-gradient(to bottom right, rgba(212, 232, 207, 0.1), rgba(23, 64, 27, 0.1))',
              }}
            >
              <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
                <div className="md:col-span-1">
                  <div className="aspect-square bg-coastal-sage/20 rounded-lg overflow-hidden">
                    <img
                      src={VielkaImg}
                      alt="Vielka Teichmann"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-serif text-deep-marine mb-2">
                    🌿 Vielka Teichmann
                  </h3>
                  <p className="text-lg text-coastal-sage font-semibold mb-4 italic">
                    Executive Director & Guardian of David's Legacy
                  </p>
                  <p className="text-driftwood leading-relaxed mb-4">
                    Vielka is not simply maintaining a project. She is
                    protecting a promise—a promise made to David, to every
                    hatchling, and to every child who deserves to know sea
                    turtles still exist.
                  </p>
                  <p className="text-driftwood leading-relaxed mb-4">
                    After David's passing in 2021, Vielka stepped forward when
                    many thought Tigre Salvaje would end. With no funding
                    structure, no guaranteed support, she used her own savings
                    and unwavering dedication to keep the mission alive. Today,
                    she divides her time between St. John (USVI) and Panama,
                    managing field operations, coordinating volunteers, and
                    continuing David's meticulous research methodology.
                  </p>
                  <p className="text-driftwood leading-relaxed font-semibold text-sunset-coral">
                    Everything she does, she funds from her own pocket—not out
                    of obligation, but out of love.
                  </p>
                </div>
              </div>

              {/* Mandala Stones Feature */}
              <div
                style={{ backgroundColor: '#fffaf1' }}
                className="p-6 rounded-lg"
              >
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="md:col-span-1 grid grid-cols-2 gap-2">
                    <div className="aspect-square bg-coastal-sage/20 rounded overflow-hidden">
                      <img
                        src={Stone1}
                        alt="Mandala stones"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square bg-coastal-sage/20 rounded overflow-hidden">
                      <img
                        src={Stone2}
                        alt="Painted stones"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-serif text-deep-marine mb-3">
                      🎨 The Mandala Stones
                    </h4>
                    <p className="text-sm text-driftwood leading-relaxed mb-3">
                      In moments of stillness, Vielka creates art as a way to
                      survive grief and fuel the mission. She transforms
                      sea-smoothed stones into vibrant mandala rocks—"pieces of
                      love and light" inspired by the deep greens of Punta
                      Burica and the warm sunrises of St. John.
                    </p>
                    <p className="text-sm text-driftwood font-semibold text-hatchling-olive">
                      The proceeds from every stone sold at a small shop in St.
                      John go straight to conservation efforts—funding beach
                      patrols, nest protection, and the quiet work that rarely
                      gets seen but always makes a difference.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-6 text-center">
                <Link
                  to="/david-teichmann"
                  className="inline-block px-6 py-3 rounded-md font-semibold transition-colors"
                  style={{ backgroundColor: '#24582a', color: '#c9e631' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#d4e8cf';
                    e.currentTarget.style.color = '#24582a';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#24582a';
                    e.currentTarget.style.color = '#c9e631';
                  }}
                >
                  Read Vielka's Full Story →
                </Link>
              </div>
            </div>

            <div
              style={{ backgroundColor: '#d4e8cf' }}
              className="p-6 rounded-lg"
            >
              <h3 className="text-xl font-serif text-deep-marine mb-4">
                Advisory Board (In Formation)
              </h3>
              <p className="text-driftwood text-sm leading-relaxed">
                We are in the process of forming an advisory board of
                conservation professionals, researchers, and community leaders.
                If you're interested in serving, please{' '}
                <Link
                  to="/contact"
                  className="text-hatchling-olive hover:underline"
                >
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section style={{ backgroundColor: '#24582a' }} className="py-20">
        <div className="section-container">
          <h2 className="text-3xl font-serif text-center text-white mb-12">
            Our Location
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="text-sandstone">
              <h3 className="text-2xl font-serif mb-4">Punta Burica, Panama</h3>
              <p className="leading-relaxed mb-6">
                Punta Burica is a remote peninsula at the Panama-Costa Rica
                border on Panama's Pacific coast. The 15km beach serves as
                critical nesting habitat for three species of endangered sea
                turtles. The surrounding forests host three species of primates
                and serve as a biological corridor between protected areas.
              </p>

              <div className="space-y-2 text-sm">
                <p>
                  <strong>Province:</strong> Chiriquí
                </p>
                <p>
                  <strong>District:</strong> Barú
                </p>
                <p>
                  <strong>Nearest Town:</strong> Bella Vista (35-minute hike)
                </p>
                <p>
                  <strong>Nearest City:</strong> Puerto Armuelles (1.5 hours by
                  vehicle)
                </p>
                <p>
                  <strong>Access:</strong> No paved road; foot access only
                </p>
              </div>
            </div>

            <div
              style={{ backgroundColor: '#d4e8cf' }}
              className="p-8 rounded-lg"
            >
              <h3 className="text-xl font-serif text-deep-marine mb-4">
                Why This Location Matters
              </h3>
              <p className="text-driftwood text-sm leading-relaxed mb-4">
                Punta Burica sits at a critical juncture in the Pacific flyway
                for migratory species and serves as a biological corridor
                between Costa Rica's Osa Peninsula and Panama's mainland
                protected areas.
              </p>
              <p className="text-driftwood text-sm leading-relaxed">
                Without protection, this beach would see 90% nest destruction
                rates. Our presence and community partnerships have reversed
                this trend, making Punta Burica a success story in
                community-based conservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section style={{ backgroundColor: '#fffaf1' }} className="py-20">
        <div className="section-container">
          <h2 className="text-3xl font-serif text-center mb-12">
            Tigre Salvaje By the Numbers
          </h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: '20', label: 'Years of conservation (2005–2025)' },
              { number: '100K+', label: 'Sea turtle hatchlings released' },
              { number: '15+', label: 'Years of scientific data preserved' },
              { number: '5 ha', label: 'Protected sanctuary land' },
              { number: '3', label: 'Endangered sea turtle species' },
              { number: '3', label: 'Primate species monitored' },
              { number: '318', label: 'Volunteers trained' },
              { number: '87', label: 'School groups educated' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-hatchling-olive mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-coastal-sage">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section style={{ backgroundColor: '#d4e8cf' }} className="py-20">
        <div className="section-container text-center">
          <h2 className="text-3xl font-serif mb-8">Get Involved</h2>
          <p className="text-driftwood max-w-2xl mx-auto mb-12">
            Whether you donate, volunteer, share our work, or collaborate on
            research, you're helping keep David's legacy alive and protecting
            critical habitat for endangered species.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="px-8 py-4 rounded-md font-bold text-lg transition-colors"
              style={{ backgroundColor: '#24582a', color: '#c9e631' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fffaf1';
                e.currentTarget.style.color = '#24582a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#24582a';
                e.currentTarget.style.color = '#c9e631';
              }}
            >
              Donate
            </Link>
            <Link
              to="/volunteer"
              className="px-8 py-4 rounded-md font-bold text-lg transition-colors"
              style={{ backgroundColor: '#24582a', color: '#c9e631' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fffaf1';
                e.currentTarget.style.color = '#24582a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#24582a';
                e.currentTarget.style.color = '#c9e631';
              }}
            >
              Volunteer
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-md font-bold text-lg transition-colors"
              style={{ backgroundColor: '#24582a', color: '#c9e631' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fffaf1';
                e.currentTarget.style.color = '#24582a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#24582a';
                e.currentTarget.style.color = '#c9e631';
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
