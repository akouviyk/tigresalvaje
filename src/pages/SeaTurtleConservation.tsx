import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import OliveRidley from '../assets/Olive-Ridley-Turtle.jpg';
import GreenSeaTurtle from '../assets/Green-Sea-Turtle.jpg';
import HawksbillSeaTurtle from '../assets/Hawksbill-Sea-Turtle.jpg';

export default function SeaTurtleConservation() {
  return (
    <>
      <Helmet>
        <title>
          Sea Turtle Conservation | Olive Ridley, Green & Hawksbill Turtles
        </title>
        <meta
          name="description"
          content="Learn about the 3 endangered sea turtle species nesting at Punta Burica. Discover our incubation and release programs."
        />
        <meta
          name="keywords"
          content="olive ridley turtles Panama, green sea turtle Punta Burica, hawksbill turtles endangered, turtle nesting season Panama"
        />
      </Helmet>

      {/* Header */}
      <section
        className="py-20"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(10, 44, 58, 0.5), rgba(10, 44, 58, 0.5))',
        }}
      >
        <div className="section-container">
          <h1 className="text-4xl md:text-6xl font-serif text-center text-white mb-6">
            Sea Turtle Conservation at Punta Burica
          </h1>
          <p className="text-xl text-sandstone text-center max-w-4xl mx-auto">
            The Pacific coast of Panama hosts three critically endangered sea
            turtle species. At Tigre Salvaje, we protect their nests during the
            July–December nesting season through beach patrols,
            temperature-controlled incubation, and community-based education.
          </p>
        </div>
      </section>

      {/* Species Profiles */}
      <section className="bg-white py-20">
        <div className="section-container">
          <h2 className="text-4xl font-serif text-center mb-16">
            The Three Species We Protect
          </h2>

          <div className="space-y-16">
            {/* Olive Ridley */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-serif text-deep-marine mb-4">
                  Olive Ridley Sea Turtle
                </h3>
                <p className="text-sm italic text-coastal-sage mb-4">
                  Lepidochelys olivacea
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-sandstone p-4 rounded">
                    <div className="text-sm text-coastal-sage">
                      Conservation Status
                    </div>
                    <div className="font-semibold text-driftwood">
                      Vulnerable (IUCN)
                    </div>
                  </div>
                  <div className="bg-sandstone p-4 rounded">
                    <div className="text-sm text-coastal-sage">
                      Nesting Season
                    </div>
                    <div className="font-semibold text-driftwood">
                      July–December
                    </div>
                  </div>
                  <div className="bg-sandstone p-4 rounded">
                    <div className="text-sm text-coastal-sage">
                      Eggs per Nest
                    </div>
                    <div className="font-semibold text-driftwood">80–130</div>
                  </div>
                  <div className="bg-sandstone p-4 rounded">
                    <div className="text-sm text-coastal-sage">
                      Incubation Period
                    </div>
                    <div className="font-semibold text-driftwood">
                      45–50 days
                    </div>
                  </div>
                </div>

                <p className="text-driftwood leading-relaxed mb-4">
                  The olive ridley is the most common turtle at Punta Burica,
                  accounting for 85% of our nests. Named for their olive-colored
                  shell, these turtles are small but mighty. Females return to
                  the same beach where they hatched—a journey that can take
                  10–15 years.
                </p>

                <div className="bg-sunset-coral/10 border-l-4 border-sunset-coral p-4 mb-4">
                  <h4 className="font-semibold text-deep-marine mb-2">
                    Primary Threats
                  </h4>
                  <ul className="text-sm text-driftwood space-y-1">
                    <li>• Egg poaching (90% of unprotected nests destroyed)</li>
                    <li>• Adult turtles killed by shrimp trawlers</li>
                    <li>• Mother turtles macheted on beaches by poachers</li>
                    <li>• Beach development destroying nesting habitat</li>
                  </ul>
                </div>

                <div className="bg-hatchling-olive/10 border-l-4 border-hatchling-olive p-4">
                  <h4 className="font-semibold text-deep-marine mb-2">
                    How We Help
                  </h4>
                  <p className="text-sm text-driftwood">
                    Nightly beach patrols during peak season. Eggs relocated to
                    incubators within 2 hours of laying. Sand temperature
                    maintained at 30–32°C to produce more females (females
                    return to nest; males do not).
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="aspect-square bg-deep-marine/10 rounded-lg overflow-hidden">
                  <img
                    src={OliveRidley}
                    alt="Olive Ridley Sea Turtle"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Green Sea Turtle */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square bg-deep-marine/10 rounded-lg overflow-hidden">
                  <img
                    src={GreenSeaTurtle}
                    alt="Green Sea Turtle"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-serif text-deep-marine mb-4">
                  Green Sea Turtle
                </h3>
                <p className="text-sm italic text-coastal-sage mb-4">
                  Chelonia mydas
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-sandstone p-4 rounded">
                    <div className="text-sm text-coastal-sage">
                      Conservation Status
                    </div>
                    <div className="font-semibold text-driftwood">
                      Endangered (IUCN)
                    </div>
                  </div>
                  <div className="bg-sandstone p-4 rounded">
                    <div className="text-sm text-coastal-sage">
                      Nesting Season
                    </div>
                    <div className="font-semibold text-driftwood">
                      August–November
                    </div>
                  </div>
                  <div className="bg-sandstone p-4 rounded">
                    <div className="text-sm text-coastal-sage">
                      Eggs per Nest
                    </div>
                    <div className="font-semibold text-driftwood">90–120</div>
                  </div>
                  <div className="bg-sandstone p-4 rounded">
                    <div className="text-sm text-coastal-sage">
                      Incubation Period
                    </div>
                    <div className="font-semibold text-driftwood">
                      50–60 days
                    </div>
                  </div>
                </div>

                <p className="text-driftwood leading-relaxed mb-4">
                  Also called the Eastern Pacific black sea turtle due to their
                  darker coloring in this region, greens are larger and less
                  common than olive ridleys at Punta Burica. They're herbivores
                  as adults (unlike most sea turtles) and play a vital role in
                  maintaining seagrass beds.
                </p>

                <div className="bg-sunset-coral/10 border-l-4 border-sunset-coral p-4 mb-4">
                  <h4 className="font-semibold text-deep-marine mb-2">
                    Primary Threats
                  </h4>
                  <ul className="text-sm text-driftwood space-y-1">
                    <li>• Illegal hunting for meat and shells</li>
                    <li>• Egg poaching</li>
                    <li>• Entanglement in fishing gear</li>
                    <li>
                      • Climate change (rising sand temperatures skew sex
                      ratios)
                    </li>
                  </ul>
                </div>

                <div className="bg-hatchling-olive/10 border-l-4 border-hatchling-olive p-4">
                  <h4 className="font-semibold text-deep-marine mb-2">
                    How We Help
                  </h4>
                  <p className="text-sm text-driftwood">
                    Special monitoring for green turtle nests (larger tracks,
                    deeper nests). Longer incubation requires sustained
                    temperature control. We work with local fishermen to report
                    sightings and reduce bycatch.
                  </p>
                </div>
              </div>
            </div>

            {/* Hawksbill */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-serif text-deep-marine mb-4">
                  Hawksbill Sea Turtle
                </h3>
                <p className="text-sm italic text-coastal-sage mb-4">
                  Eretmochelys imbricata
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-sandstone p-4 rounded">
                    <div className="text-sm text-coastal-sage">
                      Conservation Status
                    </div>
                    <div className="font-semibold text-sunset-coral">
                      Critically Endangered
                    </div>
                  </div>
                  <div className="bg-sandstone p-4 rounded">
                    <div className="text-sm text-coastal-sage">
                      Nesting Season
                    </div>
                    <div className="font-semibold text-driftwood">
                      September–November
                    </div>
                  </div>
                  <div className="bg-sandstone p-4 rounded">
                    <div className="text-sm text-coastal-sage">
                      Eggs per Nest
                    </div>
                    <div className="font-semibold text-driftwood">120–160</div>
                  </div>
                  <div className="bg-sandstone p-4 rounded">
                    <div className="text-sm text-coastal-sage">
                      Incubation Period
                    </div>
                    <div className="font-semibold text-driftwood">
                      55–60 days
                    </div>
                  </div>
                </div>

                <p className="text-driftwood leading-relaxed mb-4">
                  Named for their distinctive hawk-like beak, hawksbills are the
                  rarest turtle at Punta Burica. David documented only 2
                  hawksbill nests in 7 years (2005–2012). Their shells were
                  historically harvested for "tortoiseshell" jewelry, driving
                  them to near extinction.
                </p>

                <div className="bg-sunset-coral/10 border-l-4 border-sunset-coral p-4 mb-4">
                  <h4 className="font-semibold text-deep-marine mb-2">
                    Primary Threats
                  </h4>
                  <ul className="text-sm text-driftwood space-y-1">
                    <li>• Critically low population</li>
                    <li>
                      • Slow recovery due to long maturation period (20–30
                      years)
                    </li>
                    <li>• Continued demand for shells in black markets</li>
                  </ul>
                </div>

                <div className="bg-hatchling-olive/10 border-l-4 border-hatchling-olive p-4">
                  <h4 className="font-semibold text-deep-marine mb-2">
                    How We Help
                  </h4>
                  <p className="text-sm text-driftwood">
                    Every hawksbill nest is a victory. We provide extra
                    protection, detailed documentation, and immediate reporting
                    to regional conservation networks. Genetic samples
                    (non-invasive) collected when possible for population
                    studies.
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="aspect-square bg-deep-marine/10 rounded-lg overflow-hidden">
                  <img
                    src={HawksbillSeaTurtle}
                    alt="Hawksbill Sea Turtle"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-sandstone py-20">
        <div className="section-container">
          <h2 className="text-4xl font-serif text-center mb-16">
            Our Conservation Process
          </h2>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                step: 1,
                title: 'Beach Patrol',
                description:
                  '5–7 hours per night, every night, July–December. We look for fresh tracks, follow them to nests, deter poachers with our presence.',
              },
              {
                step: 2,
                title: 'Nest Relocation',
                description:
                  'We carefully probe the sand to locate the egg chamber. Eggs must be moved within 2 hours of laying, before the embryo attaches to the shell. One wrong move can kill the developing turtle.',
              },
              {
                step: 3,
                title: 'Incubation',
                description:
                  'Eggs are placed in protected incubators that mimic natural nest conditions. Temperature is critical: 30–32°C produces females, 25–26°C produces males. We monitor daily.',
              },
              {
                step: 4,
                title: 'Hatch & Release',
                description:
                  'After 45–60 days, hatchlings dig their way to the surface. We release them at dawn or dusk to avoid predators and heat stress. School groups often join us—education is protection.',
              },
              {
                step: 5,
                title: 'Data Recording',
                description:
                  'Every nest is documented: date, time, species, location (GPS), egg count, hatch count, threats observed. This data builds the scientific record and informs conservation strategy.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-deep-marine rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-serif text-deep-marine mb-3">
                    {item.title}
                  </h3>
                  <p className="text-driftwood leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temperature Science */}
      <section className="bg-white py-20">
        <div className="section-container">
          <h2 className="text-4xl font-serif text-center mb-12">
            Why Temperature Matters
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-400 via-yellow-400 to-red-400 h-24 rounded-lg relative mb-8">
              <div className="absolute left-[10%] top-1/2 -translate-y-1/2 text-center">
                <div className="bg-white px-4 py-2 rounded shadow-lg">
                  <div className="font-bold text-deep-marine">25–26°C</div>
                  <div className="text-sm text-coastal-sage">Males</div>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                <div className="bg-white px-4 py-2 rounded shadow-lg">
                  <div className="font-bold text-deep-marine">27–29°C</div>
                  <div className="text-sm text-coastal-sage">Mixed</div>
                </div>
              </div>
              <div className="absolute right-[10%] top-1/2 -translate-y-1/2 text-center">
                <div className="bg-white px-4 py-2 rounded shadow-lg">
                  <div className="font-bold text-deep-marine">30–32°C</div>
                  <div className="text-sm text-coastal-sage">Females</div>
                </div>
              </div>
            </div>

            <div className="bg-sandstone p-8 rounded-lg">
              <h3 className="text-2xl font-serif text-deep-marine mb-4">
                Why We Optimize for Females
              </h3>
              <p className="text-driftwood leading-relaxed mb-4">
                Only females return to nest. Males stay at sea. By producing
                more females, we accelerate population recovery. One male can
                mate with multiple females, but without females, there are no
                nests.
              </p>
              <p className="text-sm text-coastal-sage italic">
                Note: We maintain natural temperature variation to ensure
                genetic diversity and produce some males.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-deep-marine py-20">
        <div className="section-container">
          <h2 className="text-4xl font-serif text-center text-white mb-12">
            How You Can Help
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-serif text-deep-marine mb-4">
                Sponsor a Nest
              </h3>
              <p className="text-driftwood mb-6">
                $50 — Receive GPS coordinates, 3 photo updates, and a digital
                certificate
              </p>
              <Link
                to="/donate?type=sponsor"
                className="block bg-hatchling-olive text-white py-3 rounded-md font-semibold hover:bg-deep-marine transition-colors"
              >
                Sponsor Now
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-serif text-deep-marine mb-4">
                Monthly Patrol Sponsor
              </h3>
              <p className="text-driftwood mb-6">
                $25/month — Fund one night of beach patrols each month
              </p>
              <Link
                to="/donate?type=monthly"
                className="block bg-sunset-coral text-white py-3 rounded-md font-semibold hover:bg-hatchling-olive transition-colors"
              >
                Start Monthly Gift
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-serif text-deep-marine mb-4">
                Volunteer
              </h3>
              <p className="text-driftwood mb-6">
                Walk the beach with us. Relocate eggs. Release hatchlings.
              </p>
              <Link
                to="/volunteer"
                className="block bg-deep-marine text-white py-3 rounded-md font-semibold hover:bg-coastal-sage transition-colors"
              >
                Apply to Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
