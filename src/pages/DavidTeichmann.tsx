import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import DavidImg from '../assets/David.png';
import VielkaImg from '../assets/vielkaTeichmann.jpg';
import Stone1 from '../assets/stonesofV/046404f09cb975dd1cbd60e8b6169026.jpg';
import Stone2 from '../assets/stonesofV/8b0112d935c18b6fa4dbf0d747601539.jpg';

export default function DavidTeichmann() {
  return (
    <>
      <Helmet>
        <title>David Teichmann (1952-2021) | Tigre Salvaje Founder</title>
        <meta
          name="description"
          content="Remember the man who walked Punta Burica's beaches for 17 years to save sea turtles. Explore his notebooks, videos, and legacy."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 bg-deep-marine">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: `url(${DavidImg})`,
          }}
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-coastal-sage mb-4">
            David Teichmann
          </h1>
          <p className="text-2xl text-sandstone">(1952–2021)</p>
          <p className="text-xl text-white mt-2">
            The Man Who Refused to Give Up
          </p>
        </div>
      </section>

      {/* Life Timeline */}
      <section className="bg-white py-20">
        <div className="section-container max-w-4xl">
          <div className="space-y-16">
            {/* Early Years */}
            <div className="border-l-4 border-deep-marine pl-8">
              <h3 className="text-3xl font-serif text-deep-marine mb-4">
                Early Years: St. Louis to Germany
              </h3>
              <p className="text-driftwood leading-relaxed">
                Born in St. Louis, Missouri, David's path was never
                conventional. Drafted during the Vietnam era, he served in
                Germany, returned home, and drifted through college before
                leaving to pursue construction work and wilderness guiding in
                Canada.
              </p>
            </div>

            {/* Virgin Islands */}
            <div className="border-l-4 border-hatchling-olive pl-8">
              <h3 className="text-3xl font-serif text-deep-marine mb-4">
                1989: Hurricane Hugo & The Virgin Islands
              </h3>
              <p className="text-driftwood leading-relaxed">
                David moved to St. Thomas to repair his brother's boat after
                Hurricane Hugo. He stayed, working construction jobs on St.
                Thomas and St. John. But something was missing. He wanted to
                make a difference—and the Virgin Islands already had plenty of
                environmentalists.
              </p>
            </div>

            {/* Finding Punta Burica */}
            <div className="border-l-4 border-sunset-coral pl-8">
              <h3 className="text-3xl font-serif text-deep-marine mb-4">
                2004: Finding Punta Burica
              </h3>
              <p className="text-driftwood leading-relaxed mb-4">
                David purchased 12 acres of beachfront land at Punta Burica,
                Panama. The Panamanian government promised a road if he built a
                hotel. He invested $500,000 in infrastructure. The road never
                came.
              </p>
              <p className="text-driftwood leading-relaxed font-semibold">
                But the turtles did. And the poachers. And David realized this
                was where he belonged.
              </p>
            </div>

            {/* The Mission */}
            <div className="border-l-4 border-coastal-sage pl-8">
              <h3 className="text-3xl font-serif text-deep-marine mb-4">
                2005–2021: The Mission
              </h3>
              <div className="space-y-4 text-driftwood leading-relaxed">
                <p>
                  For 17 years, David walked the beach 5–7 hours every night
                  during nesting season. He carried a flashlight, a camera, and
                  sometimes a gun—not to harm, but to deter. He photographed
                  poachers. He filed police reports that went nowhere. He bought
                  eggs with rice and beans because paying cash was illegal.
                </p>
                <p>
                  He kept meticulous records. Every nest. Every species. Every
                  egg count. Every hatch rate. Every threat.
                </p>
                <p>
                  He sold his car. His boat. His guns. He worked odd jobs in the
                  Virgin Islands during off-season to fund the next turtle
                  season.
                </p>
                <p>
                  He educated school children. He trained volunteers. He
                  documented the extinction of 40 species in the area—posting
                  crosses on the beach as memorials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Collage */}
      {/* Media Collage */}
      <section className="bg-sandstone py-20">
        <div className="section-container">
          <h2 className="text-3xl font-serif text-center mb-12">
            Conservation in Action
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Video 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/QceJId9-xmo"
                  title="Sea turtle conservation work"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-driftwood">
                  Daily patrols and nest protection
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/zVSjg5i-hxQ"
                  title="Hatchling release process"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-driftwood">
                  Hatchling release at sunset
                </p>
              </div>
            </div>

            {/* Article 1 */}
            <a
              href="https://stthomassource.com/content/2012/07/30/not-profit-tigre-salvaje/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-deep-marine/20 to-sunset-coral/20 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">📰</div>
                  <h3 className="font-serif text-deep-marine mb-2">
                    St. Thomas Source
                  </h3>
                  <p className="text-sm text-driftwood">
                    "Not for Profit: Tigre Salvaje" - Feature on our
                    conservation model
                  </p>
                </div>
              </div>
            </a>

            {/* Video 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/cocJoIsnOfU"
                  title="Community involvement"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-driftwood">
                  Local community participation
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <a
              href="https://www.atlasobscura.com/places/tigre-salvaje"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-hatchling-olive/20 to-sandstone flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">🏛️</div>
                  <h3 className="font-serif text-deep-marine mb-2">
                    Atlas Obscura
                  </h3>
                  <p className="text-sm text-driftwood">
                    "Tigre Salvaje Wildlife Sanctuary" - Cultural heritage
                    feature
                  </p>
                </div>
              </div>
            </a>

            {/* Video 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/b_0AOC-xXCI"
                  title="Educational programs"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-driftwood">
                  School education and outreach
                </p>
              </div>
            </div>

            {/* Article 3 */}
            <a
              href="https://visitpuertoarmuelles.com/what-will-happen-to-the-sea-turtles"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-lg md:col-span-2 lg:col-span-1 hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-sunset-coral/20 to-driftwood/20 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">🌊</div>
                  <h3 className="font-serif text-deep-marine mb-2">
                    Puerto Armuelles
                  </h3>
                  <p className="text-sm text-driftwood">
                    "What Will Happen to the Sea Turtles?" - Local impact story
                  </p>
                </div>
              </div>
            </a>

            {/* Video 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/3Y0kn-e7VBc"
                  title="Research and monitoring"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-driftwood">
                  Scientific research methods
                </p>
              </div>
            </div>

            {/* Article 4 */}
            <a
              href="https://proyectoprimatespanama.org/historia-de-primates/7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-coastal-sage/20 to-deep-marine/20 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">🐒</div>
                  <h3 className="font-serif text-deep-marine mb-2">
                    Primate Project
                  </h3>
                  <p className="text-sm text-driftwood">
                    Collaboration with Proyecto Primates Panama
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* Quote Section */}
      <section className="bg-sandstone py-20">
        <div className="section-container max-w-3xl">
          <blockquote className="text-2xl md:text-3xl font-serif text-center text-deep-marine italic mb-6">
            "I think I qualified for the title eccentric hermit..."
          </blockquote>
          <p className="text-center text-driftwood leading-relaxed">
            "When I first came here they thought I was eccentric and probably a
            little bit crazy because I wanted to try to save the last of the
            turtles and the monkeys. Nobody's ever tried to explain it to them
            before, so they're not going to listen to one stupid, crazy gringo
            living out here in the middle of nowhere on a beach."
          </p>
        </div>
      </section>

      {/* His Legacy in Numbers */}
      <section className="bg-deep-marine py-20">
        <div className="section-container">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-white mb-16">
            His Legacy in Numbers
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-6xl font-bold text-hatchling-olive mb-2">
                100,000+
              </div>
              <div className="text-sandstone">
                sea turtle hatchlings released
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-sunset-coral mb-2">
                14,000
              </div>
              <div className="text-sandstone">
                hatchlings in a single year (2011)
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">15+</div>
              <div className="text-sandstone">
                years of scientific data preserved
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-coastal-sage mb-2">
                17
              </div>
              <div className="text-sandstone">years of nightly patrols</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-hatchling-olive mb-2">
                $500K+
              </div>
              <div className="text-sandstone">personal investment</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-sunset-coral mb-2">1</div>
              <div className="text-sandstone">
                life dedicated entirely to conservation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="bg-white py-20">
        <div className="section-container max-w-4xl">
          <div className="border-l-4 border-driftwood pl-8 mb-16">
            <h3 className="text-3xl font-serif text-deep-marine mb-4">
              October 2021: The End of the Watch
            </h3>
            <p className="text-driftwood leading-relaxed mb-4">
              David Teichmann was found deceased at his residence in Punta
              Burica on October 28, 2021. He was 69 years old. The cause was
              natural.
            </p>
            <p className="text-driftwood leading-relaxed font-semibold">
              He died as he lived: on the beach, in the place he loved,
              surrounded by the animals he protected.
            </p>
          </div>

          {/* Vielka's Story */}
          <div className="bg-gradient-to-br from-hatchling-olive/10 to-sunset-coral/10 p-12 rounded-lg mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-serif text-deep-marine mb-4">
                🌿 Vielka Teichmann
              </h2>
              <p className="text-xl text-coastal-sage italic">
                A Keeper of Light, a Guardian of Legacy
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Intro */}
              <div className="prose prose-lg text-driftwood leading-relaxed mb-8">
                <p>
                  Before the sun rises over Punta Burica, before the first
                  turtle track carves its quiet arc in the sand, there was
                  always someone walking those beaches with gentle intention.
                  Today, that someone is Vielka—a woman whose life was forever
                  changed by a promise, a place, and a love for the living world
                  that cannot be measured in hours or dollars.
                </p>
                <p className="mt-4">But her story does not begin in Panama.</p>
              </div>

              {/* Images Grid */}
              <div className="grid md:grid-cols-3 gap-6 my-12">
                <div className="aspect-square bg-coastal-sage/20 rounded-lg overflow-hidden">
                  <img
                    src={VielkaImg}
                    alt="Vielka Teichmann"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-coastal-sage/20 rounded-lg overflow-hidden">
                  <img
                    src={Stone1}
                    alt="Vielka's mandala stones"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-coastal-sage/20 rounded-lg overflow-hidden">
                  <img
                    src={Stone2}
                    alt="Mandala stone art"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* The Journey */}
              <div className="mb-8">
                <h3 className="text-2xl font-serif text-deep-marine mb-4">
                  🌺 The Journey David Began
                </h3>
                <div className="prose prose-lg text-driftwood leading-relaxed">
                  <p>
                    Years ago, when David set out to share the mission of Tigre
                    Salvaje with the world, he brought Vielka with him on one of
                    his journeys. Together, they visited St. John, a place whose
                    mountains, turquoise waters, and quiet strength mirrored the
                    wild soul of Punta Burica.
                  </p>
                  <p className="mt-4">
                    For Vielka, it felt like destiny—in the shape of a small
                    island. For David, it was a way to show her where Tigre
                    Salvaje could grow. For both, it became a part of their
                    shared story.
                  </p>
                  <p className="mt-4">
                    After David's passing, it was St. John that offered her a
                    second home, a sanctuary where she could rebuild, gather
                    strength, and continue the work he dedicated his life to.
                    Today, she lives in St. John—but her heart is tethered to
                    the beaches of Panama, to the very place where so many
                    hatchlings fought their way toward the sea.
                  </p>
                </div>
              </div>

              {/* Carrying the Legacy */}
              <div className="mb-8 bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-deep-marine mb-4">
                  🌙 Carrying the Legacy Alone
                </h3>
                <div className="prose prose-lg text-driftwood leading-relaxed">
                  <p>
                    When David died, the project he protected for 16 years
                    didn't pause. The tide didn't wait. The eggs didn't wait.
                    Nature never waits.
                  </p>
                  <p className="mt-4">
                    And so Vielka stepped forward, alone but unwavering. With no
                    funding, no legal structure, no guaranteed help, she used
                    her own savings, her own hands, her own time to keep Tigre
                    Salvaje alive.
                  </p>
                  <p className="mt-4">
                    Fuel for patrols. Repairs for the sanctuary. Food for
                    volunteers. Care for injured animals. Travel between St.
                    John and Panama.
                  </p>
                  <p className="mt-4 font-semibold text-sunset-coral">
                    Everything she does, she funds from her own pocket. Not out
                    of obligation—but out of love.
                  </p>
                </div>
              </div>

              {/* Mandala Stones */}
              <div className="mb-8">
                <h3 className="text-2xl font-serif text-deep-marine mb-4">
                  🎨 The Mandala Stones
                </h3>
                <div className="prose prose-lg text-driftwood leading-relaxed">
                  <p className="font-semibold text-lg mb-4">
                    Small stones, infinite meaning.
                  </p>
                  <p>
                    In moments of stillness, Vielka began creating art as a way
                    to survive grief and fuel the mission. She collected
                    stones—drifted by the sea, washed smooth by nature—and
                    transformed them into vibrant mandala rocks.
                  </p>
                  <p className="mt-4">
                    Each one is painted with meditative patterns and colors
                    inspired by both islands— Punta Burica's deep greens, St.
                    John's warm sunrises, Ocean blues that connect them.
                  </p>
                  <p className="mt-4">
                    She calls them{' '}
                    <span className="italic">"pieces of love and light."</span>{' '}
                    And that's exactly what they are.
                  </p>
                  <p className="mt-4 font-semibold text-hatchling-olive">
                    The proceeds from every stone she sells at a small shop in
                    St. John go straight to the conservation efforts—helping
                    fund beach patrols, nest protection, and the quiet work that
                    rarely gets seen but always makes a difference.
                  </p>
                </div>
              </div>

              {/* More Than a Caretaker */}
              <div className="bg-deep-marine/5 p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-deep-marine mb-4">
                  🌺 More Than a Caretaker
                </h3>
                <div className="prose prose-lg text-driftwood leading-relaxed">
                  <p>
                    Vielka is not simply maintaining a project. She is
                    protecting a promise.
                  </p>
                  <p className="mt-4">
                    A promise made to David. A promise made to every hatchling.
                    A promise made to every child who deserves to know sea
                    turtles still exist.
                  </p>
                  <p className="mt-4">
                    She walks the beaches of Panama now in David's footsteps—but
                    she does so with her own strength, her own spirit, her own
                    vision. She carries his legacy, but she also carries
                    something uniquely hers: a devotion that is both fierce and
                    gentle, like the sea itself.
                  </p>
                  <p className="mt-4 font-semibold text-sunset-coral text-lg">
                    Tigre Salvaje is alive today because she refuses to let it
                    become a memory. Every patrol. Every rescued nest. Every
                    mandala stone. Every breath of effort is her offering to the
                    legacy she now protects.
                  </p>
                  <p className="mt-4 text-center italic text-xl">
                    And through her hands, the light continues.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Continue His Mission */}
          <div className="bg-sandstone p-12 rounded-lg">
            <h2 className="text-3xl font-serif text-center text-deep-marine mb-8">
              Continue His Mission
            </h2>
            <p className="text-center text-driftwood mb-12">
              David's work is not finished. Vielka continues to walk the beach,
              but she needs support.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <h4 className="font-semibold text-deep-marine mb-3">
                  Memorial Donation
                </h4>
                <p className="text-sm text-driftwood mb-4">
                  $100+ gets your name added to the David Teichmann Memorial
                  Wall on-site
                </p>
                <Link
                  to="/donate?memorial=true"
                  className="inline-block bg-deep-marine text-white px-6 py-3 rounded-md font-semibold hover:bg-coastal-sage transition-colors"
                >
                  Donate
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <h4 className="font-semibold text-deep-marine mb-3">
                  Sponsor a Nest
                </h4>
                <p className="text-sm text-driftwood mb-4">
                  Dedicate your $50 nest sponsorship to David's memory
                </p>
                <Link
                  to="/donate?type=sponsor"
                  className="inline-block bg-hatchling-olive text-white px-6 py-3 rounded-md font-semibold hover:bg-deep-marine transition-colors"
                >
                  Sponsor
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <h4 className="font-semibold text-deep-marine mb-3">
                  Volunteer
                </h4>
                <p className="text-sm text-driftwood mb-4">
                  Walk the same beaches David walked
                </p>
                <Link
                  to="/volunteer"
                  className="inline-block bg-sunset-coral text-white px-6 py-3 rounded-md font-semibold hover:bg-hatchling-olive transition-colors"
                >
                  Apply
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
