import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    nationality: '',
    preferredDates: '',
    skills: '',
    whyVolunteer: '',
    emergencyContact: '',
    emergencyPhone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to Firebase/backend
    console.log('Volunteer application:', formData);
    alert("Application submitted! We'll respond within 5-7 days.");
  };

  return (
    <>
      <Helmet>
        <title>
          Volunteer at Tigre Salvaje | Sea Turtle Conservation Panama
        </title>
        <meta
          name="description"
          content="Walk the beach, protect nests, release hatchlings. 35-minute hike, basic accommodations, real conservation work. $35/day."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative h-96" style={{ backgroundColor: '#24582a' }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070")',
          }}
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-coastal-sage mb-4">
            Walk Where David Walked
          </h1>
          <p className="text-xl text-sandstone max-w-2xl">
            No luxury. No Wi-Fi. No shortcuts. Just real conservation work that
            saves real lives.
          </p>
        </div>
      </section>

      {/* Reality Check */}
      <section style={{ backgroundColor: '#d4e8cf' }} className="py-12">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-serif text-center text-deep-marine mb-6">
            This is NOT Eco-Tourism
          </h2>
          <div
            style={{ backgroundColor: '#fffaf1' }}
            className="p-8 rounded-lg"
          >
            <p className="text-driftwood leading-relaxed mb-6 text-center">
              If you want comfort, guided nature walks, and air conditioning,
              this is not the program for you. If you want to make a tangible
              difference, work hard, and experience conservation at its rawest,
              welcome.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-sunset-coral mb-3">
                  What You Won't Have:
                </h3>
                <ul className="space-y-2 text-sm text-driftwood">
                  <li>❌ Cell service or internet on-site</li>
                  <li>❌ Paved road (35-minute hike required)</li>
                  <li>❌ Hot water (cold showers occasionally)</li>
                  <li>❌ Luxury accommodations</li>
                  <li>❌ Nearby stores or restaurants</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-hatchling-olive mb-3">
                  What You Will Have:
                </h3>
                <ul className="space-y-2 text-sm text-driftwood">
                  <li>✅ Running water and electricity</li>
                  <li>✅ Three meals per day</li>
                  <li>✅ Shared accommodations</li>
                  <li>✅ Meaningful conservation work</li>
                  <li>✅ The experience of a lifetime</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section style={{ backgroundColor: '#fffaf1' }} className="py-20">
        <div className="section-container">
          <h2 className="text-4xl font-serif text-center mb-12">
            Your Responsibilities
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div
              style={{ backgroundColor: '#d4e8cf' }}
              className="p-6 rounded-lg"
            >
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-serif text-deep-marine mb-3">
                Nightly Beach Patrols
              </h3>
              <p className="text-driftwood text-sm leading-relaxed">
                Walk 5–7 hours per night during nesting season. Look for turtle
                tracks, locate nests, deter poachers. Document observations in
                field notebook. Carry flashlight, GPS, camera.
              </p>
            </div>

            <div
              style={{ backgroundColor: '#d4e8cf' }}
              className="p-6 rounded-lg"
            >
              <div className="text-4xl mb-4">🥚</div>
              <h3 className="text-xl font-serif text-deep-marine mb-3">
                Nest Relocation
              </h3>
              <p className="text-driftwood text-sm leading-relaxed">
                Carefully excavate eggs within 2 hours of laying. Count and
                measure eggs. Transport to protected incubators. Maintain proper
                temperature and humidity.
              </p>
            </div>

            <div className="bg-sandstone p-6 rounded-lg">
              <div className="text-4xl mb-4">🐢</div>
              <h3 className="text-xl font-serif text-deep-marine mb-3">
                Hatchling Releases
              </h3>
              <p className="text-driftwood text-sm leading-relaxed">
                Monitor incubators for signs of hatching (day 45+). Coordinate
                release timing (dawn or dusk). Document hatch counts and success
                rates. Lead school groups during education events.
              </p>
            </div>

            <div className="bg-sandstone p-6 rounded-lg">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-serif text-deep-marine mb-3">
                Habitat Restoration
              </h3>
              <p className="text-driftwood text-sm leading-relaxed">
                Plant native trees in deforested corridors. Build and maintain
                fencing around young trees. Trail maintenance and beach cleanup.
                Primate monitoring (photo documentation).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section style={{ backgroundColor: '#d4e8cf' }} className="py-20">
        <div className="section-container max-w-4xl">
          <h2 className="text-4xl font-serif text-center mb-12">
            Program Details
          </h2>

          <div
            style={{ backgroundColor: '#fffaf1' }}
            className="p-8 rounded-lg space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-deep-marine mb-2">
                  Duration
                </h3>
                <p className="text-driftwood">
                  Minimum 1 week. Maximum stay flexible.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-deep-marine mb-2">Cost</h3>
                <ul className="text-driftwood text-sm space-y-1">
                  <li>• Week 1: $35/day ($245 total)</li>
                  <li>• Week 2+: $25/day ($175/week)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-deep-marine mb-2">
                  Included
                </h3>
                <p className="text-driftwood text-sm">
                  3 meals/day, shared accommodation, all activities
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-deep-marine mb-2">
                  Not Included
                </h3>
                <p className="text-driftwood text-sm">
                  Transportation, travel insurance, personal items
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-deep-marine mb-2">
                  Schedule
                </h3>
                <ul className="text-driftwood text-sm space-y-1">
                  <li>• High season (Jul–Dec): Nightly patrols</li>
                  <li>• Off-season (Jan–Jun): Reforestation focus</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-deep-marine mb-2">
                  Requirements
                </h3>
                <ul className="text-driftwood text-sm space-y-1">
                  <li>• Age 18+ (or 16+ with guardian)</li>
                  <li>• Moderate fitness level</li>
                  <li>• Travel insurance required</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 35-Minute Hike */}
      <section style={{ backgroundColor: '#fffaf1' }} className="py-20">
        <div className="section-container max-w-4xl">
          <h2 className="text-4xl font-serif text-center mb-12">
            The 35-Minute Hike
          </h2>

          <div
            style={{ backgroundColor: '#d4e8cf' }}
            className="p-8 rounded-lg"
          >
            <h3 className="text-2xl font-serif text-deep-marine mb-6">
              From Bella Vista to Tigre Salvaje
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-sunset-coral mb-2">
                  3 km
                </div>
                <div className="text-coastal-sage">Distance (1.9 miles)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-hatchling-olive mb-2">
                  35 min
                </div>
                <div className="text-coastal-sage">Average time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-deep-marine mb-2">
                  Moderate
                </div>
                <div className="text-coastal-sage">Difficulty level</div>
              </div>
            </div>

            <div className="space-y-4 text-driftwood">
              <div>
                <h4 className="font-semibold mb-2">Terrain:</h4>
                <p className="text-sm">
                  Packed dirt, sandy beach, creek crossing. Some muddy sections
                  during rainy season.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">What to Bring:</h4>
                <p className="text-sm">
                  Sturdy shoes (can get wet), backpack, water, headlamp
                </p>
              </div>

              <div className="bg-white p-4 rounded italic text-sm">
                <p>
                  "A long walk in the mud, but not too far. It's not like you're
                  gonna die or anything getting here."
                </p>
                <p className="text-right mt-2">— Volunteer testimonial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packing List */}
      <section
        className="py-20"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(23, 64, 27, 0.5), rgba(23, 64, 27, 0.5))',
        }}
      >
        <div className="section-container max-w-4xl">
          <h2 className="text-4xl font-serif text-center text-white mb-12">
            What to Bring
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-serif text-deep-marine mb-4">
                Required Items
              </h3>
              <ul className="space-y-2 text-sm text-driftwood">
                <li>✅ Passport + copy</li>
                <li>✅ Travel insurance proof</li>
                <li>✅ Headlamp + extra batteries</li>
                <li>✅ Sturdy shoes (2 pairs)</li>
                <li>✅ Daypack</li>
                <li>✅ Water bottle</li>
                <li>✅ Sunscreen (SPF 50+) + hat</li>
                <li>✅ Insect repellent (DEET 30%+)</li>
                <li>✅ Personal medications</li>
                <li>✅ Toiletries (biodegradable)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-serif text-deep-marine mb-4">
                Recommended Items
              </h3>
              <ul className="space-y-2 text-sm text-driftwood">
                <li>✅ Camera (waterproof case)</li>
                <li>✅ Notebook + pen</li>
                <li>✅ Quick-dry clothing</li>
                <li>✅ Rain jacket</li>
                <li>✅ Sandals</li>
                <li>✅ Earplugs (howler monkeys!)</li>
                <li>✅ Book or journal</li>
                <li>✅ Spanish phrasebook</li>
              </ul>

              <div className="mt-6 pt-6 border-t border-coastal-sage">
                <h4 className="font-semibold text-deep-marine mb-2">
                  Leave at Home:
                </h4>
                <ul className="space-y-1 text-sm text-coastal-sage">
                  <li>❌ Laptop (no Wi-Fi)</li>
                  <li>❌ Hair dryer</li>
                  <li>❌ Formal clothes</li>
                  <li>❌ Expensive jewelry</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: '#fffaf1' }} className="py-20">
        <div className="section-container">
          <h2 className="text-4xl font-serif text-center mb-12">
            Volunteer Testimonials
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-sandstone p-6 rounded-lg">
              <p className="text-driftwood italic mb-4">
                "I came for one week and stayed for three. Watching those little
                guys swim toward the ocean? That's the rewarding part. They're
                so cute and so tiny but fearless."
              </p>
              <p className="font-semibold text-deep-marine">
                — Anonymous, 2014
              </p>
            </div>

            <div className="bg-sandstone p-6 rounded-lg">
              <p className="text-driftwood italic mb-4">
                "I volunteered in 2015, then came back in 2016, 2017, 2019, and
                2022. I can't stay away. David taught me that one person can
                change the world."
              </p>
              <p className="font-semibold text-deep-marine">— Matt, France</p>
            </div>

            <div className="bg-sandstone p-6 rounded-lg">
              <p className="text-driftwood italic mb-4">
                "This is real conservation. No bureaucracy, no luxury
                eco-tourism. Just hard work that saves lives."
              </p>
              <p className="font-semibold text-deep-marine">— Lydia, Visitor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section style={{ backgroundColor: '#d4e8cf' }} className="py-20">
        <div className="section-container max-w-3xl">
          <h2 className="text-4xl font-serif text-center mb-12">
            Apply to Volunteer
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{ backgroundColor: '#fffaf1' }}
            className="p-8 rounded-lg space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-driftwood mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-driftwood mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-driftwood mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  required
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-driftwood mb-2">
                  Nationality *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nationality}
                  onChange={(e) =>
                    setFormData({ ...formData, nationality: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-driftwood mb-2">
                Preferred Dates *
              </label>
              <input
                type="text"
                required
                placeholder="e.g., July 15-22, 2025"
                value={formData.preferredDates}
                onChange={(e) =>
                  setFormData({ ...formData, preferredDates: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-driftwood mb-2">
                Skills You Can Contribute
              </label>
              <input
                type="text"
                placeholder="e.g., Spanish, photography, marine biology background"
                value={formData.skills}
                onChange={(e) =>
                  setFormData({ ...formData, skills: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-driftwood mb-2">
                Why do you want to volunteer? * (250 words)
              </label>
              <textarea
                required
                rows={5}
                value={formData.whyVolunteer}
                onChange={(e) =>
                  setFormData({ ...formData, whyVolunteer: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-driftwood mb-2">
                  Emergency Contact Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.emergencyContact}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      emergencyContact: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-driftwood mb-2">
                  Emergency Contact Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.emergencyPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, emergencyPhone: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                />
              </div>
            </div>

            <div
              style={{ backgroundColor: '#d4e8cf' }}
              className="p-6 rounded-lg text-sm text-driftwood"
            >
              <p className="mb-2">
                By submitting this application, you acknowledge that:
              </p>
              <ul className="space-y-1 ml-4">
                <li>• You are physically capable of the volunteer duties</li>
                <li>
                  • You will obtain travel insurance covering medical expenses
                </li>
                <li>• You understand this is NOT a luxury experience</li>
                <li>
                  • You agree to follow all safety protocols and site rules
                </li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-md font-bold text-lg transition-colors"
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
              Submit Application
            </button>

            <p className="text-center text-sm text-coastal-sage">
              We'll respond within 5–7 business days. Questions? Email
              vielkateichmann@hotmail.com
            </p>
          </form>
        </div>
      </section>

      {/* Download Waiver */}
      <section style={{ backgroundColor: '#fffaf1' }} className="py-12">
        <div className="section-container text-center">
          <h3 className="text-2xl font-serif text-deep-marine mb-4">
            Review the Volunteer Waiver
          </h3>
          <p className="text-driftwood mb-6">
            Download and review before applying
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/volunteer-waiver-en.pdf"
              className="px-6 py-3 rounded-md font-semibold transition-colors"
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
              English Waiver (PDF)
            </Link>
            <Link
              to="/volunteer-waiver-es.pdf"
              className="px-6 py-3 rounded-md font-semibold transition-colors"
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
              Spanish Waiver (PDF)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
