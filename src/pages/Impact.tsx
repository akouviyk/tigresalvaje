import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Impact() {
  // In production, these would come from Firestore real-time
  const [metrics] = useState({
    totalHatchlings: 100234,
    totalNests: 2347,
    volunteers: 318,
    schoolGroups: 87,
    treesPlanted: 1450,
    fundsRaised: 127892,
  });

  const [season2024] = useState({
    hatchlings: 14287,
    nests: 156,
    hatchRate: 91.6,
    volunteers: 23,
    schoolGroups: 9,
    students: 412,
    poachersDetered: 68,
    dogPredationPrevented: 12,
    injuredTurtles: 4,
  });

  return (
    <>
      <Helmet>
        <title>Impact Dashboard | Conservation Results & Annual Reports</title>
        <meta
          name="description"
          content="See real-time data on turtle releases, nests protected, volunteers trained. Download annual reports. Transparency in action."
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
            Impact Dashboard
          </h1>
          <p className="text-xl text-sandstone text-center max-w-3xl mx-auto">
            Real-Time Conservation Results. Transparency matters. See exactly
            how your donations translate to protected nests, released
            hatchlings, and restored habitat.
          </p>
        </div>
      </section>

      {/* Live Counters */}
      <section className="bg-white py-20">
        <div className="section-container">
          <h2 className="text-3xl font-serif text-center mb-12">
            All-Time Impact (Since 2005)
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-sandstone rounded-lg">
              <div className="text-5xl md:text-6xl font-bold text-hatchling-olive mb-2">
                {metrics.totalHatchlings.toLocaleString()}
              </div>
              <div className="text-coastal-sage">
                🐢 Total Hatchlings Released
              </div>
            </div>

            <div className="text-center p-6 bg-sandstone rounded-lg">
              <div className="text-5xl md:text-6xl font-bold text-sunset-coral mb-2">
                {metrics.totalNests.toLocaleString()}
              </div>
              <div className="text-coastal-sage">📍 Total Nests Protected</div>
            </div>

            <div className="text-center p-6 bg-sandstone rounded-lg">
              <div className="text-5xl md:text-6xl font-bold text-deep-marine mb-2">
                {metrics.volunteers}
              </div>
              <div className="text-coastal-sage">👥 Volunteers Trained</div>
            </div>

            <div className="text-center p-6 bg-sandstone rounded-lg">
              <div className="text-5xl md:text-6xl font-bold text-driftwood mb-2">
                {metrics.schoolGroups}
              </div>
              <div className="text-coastal-sage">🎓 School Groups Hosted</div>
            </div>

            <div className="text-center p-6 bg-sandstone rounded-lg">
              <div className="text-5xl md:text-6xl font-bold text-hatchling-olive mb-2">
                {metrics.treesPlanted.toLocaleString()}
              </div>
              <div className="text-coastal-sage">🌳 Trees Planted</div>
            </div>

            <div className="text-center p-6 bg-sandstone rounded-lg">
              <div className="text-5xl md:text-6xl font-bold text-sunset-coral mb-2">
                ${(metrics.fundsRaised / 1000).toFixed(0)}K
              </div>
              <div className="text-coastal-sage">💰 Total Funds Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2024 Season */}
      <section className="bg-sandstone py-20">
        <div className="section-container">
          <h2 className="text-3xl font-serif text-center mb-12">
            2024 Season Highlights
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-hatchling-olive mb-2">
                  {season2024.hatchlings.toLocaleString()}
                </div>
                <div className="text-coastal-sage mb-4">
                  Hatchlings Released
                </div>
                <div className="text-sm text-driftwood">
                  NEW RECORD — surpassing David's 2011 record of 14,000
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-sunset-coral mb-2">
                  {season2024.nests}
                </div>
                <div className="text-coastal-sage mb-4">Nests Protected</div>
                <div className="text-sm text-driftwood">
                  134 Olive Ridley • 21 Green • 1 Hawksbill
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-deep-marine mb-2">
                  {season2024.hatchRate}%
                </div>
                <div className="text-coastal-sage mb-4">Hatch Success Rate</div>
                <div className="text-sm text-driftwood">
                  Above industry average of 75–85%
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-serif text-deep-marine mb-6">
                Threats Mitigated
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-sunset-coral mb-2">
                    {season2024.poachersDetered}
                  </div>
                  <div className="text-sm text-driftwood">
                    Instances of poacher deterrence
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hatchling-olive mb-2">
                    {season2024.dogPredationPrevented}
                  </div>
                  <div className="text-sm text-driftwood">
                    Nests saved from dog predation
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-deep-marine mb-2">
                    {season2024.injuredTurtles}
                  </div>
                  <div className="text-sm text-driftwood">
                    Injured turtles treated & released
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="bg-white py-20">
        <div className="section-container">
          <h2 className="text-3xl font-serif text-center mb-12">
            Financial Transparency
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Revenue */}
            <div className="bg-sandstone p-8 rounded-lg">
              <h3 className="text-2xl font-serif text-deep-marine mb-6">
                2024 Revenue: $52,340
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-driftwood">Individual Donations</span>
                    <span className="font-semibold">$31,200 (60%)</span>
                  </div>
                  <div className="h-3 bg-white rounded-full overflow-hidden">
                    <div
                      className="h-full bg-hatchling-olive"
                      style={{ width: '60%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-driftwood">Recurring Donors</span>
                    <span className="font-semibold">$14,800 (28%)</span>
                  </div>
                  <div className="h-3 bg-white rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sunset-coral"
                      style={{ width: '28%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-driftwood">Volunteers</span>
                    <span className="font-semibold">$4,200 (8%)</span>
                  </div>
                  <div className="h-3 bg-white rounded-full overflow-hidden">
                    <div
                      className="h-full bg-deep-marine"
                      style={{ width: '8%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-driftwood">Grants</span>
                    <span className="font-semibold">$2,140 (4%)</span>
                  </div>
                  <div className="h-3 bg-white rounded-full overflow-hidden">
                    <div
                      className="h-full bg-coastal-sage"
                      style={{ width: '4%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expenses */}
            <div className="bg-sandstone p-8 rounded-lg">
              <h3 className="text-2xl font-serif text-deep-marine mb-6">
                2024 Expenses: $48,910
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-driftwood">Personnel (Vielka)</span>
                    <span className="font-semibold">$24,000 (49%)</span>
                  </div>
                  <div className="h-3 bg-white rounded-full overflow-hidden">
                    <div
                      className="h-full bg-deep-marine"
                      style={{ width: '49%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-driftwood">Nesting Operations</span>
                    <span className="font-semibold">$13,200 (27%)</span>
                  </div>
                  <div className="h-3 bg-white rounded-full overflow-hidden">
                    <div
                      className="h-full bg-hatchling-olive"
                      style={{ width: '27%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-driftwood">Equipment</span>
                    <span className="font-semibold">$4,800 (10%)</span>
                  </div>
                  <div className="h-3 bg-white rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sunset-coral"
                      style={{ width: '10%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-driftwood">Reforestation</span>
                    <span className="font-semibold">$3,500 (7%)</span>
                  </div>
                  <div className="h-3 bg-white rounded-full overflow-hidden">
                    <div
                      className="h-full bg-hatchling-olive"
                      style={{ width: '7%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-driftwood">Admin/Legal</span>
                    <span className="font-semibold">$3,410 (7%)</span>
                  </div>
                  <div className="h-3 bg-white rounded-full overflow-hidden">
                    <div
                      className="h-full bg-coastal-sage"
                      style={{ width: '7%' }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white">
                <div className="flex justify-between text-deep-marine font-semibold">
                  <span>Net Surplus</span>
                  <span>$3,430</span>
                </div>
                <p className="text-xs text-coastal-sage mt-2">
                  Carried forward to 2025 reserve fund
                </p>
              </div>
            </div>
          </div>

          {/* Cost Efficiency */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-hatchling-olive/10 border-l-4 border-hatchling-olive p-8 rounded-lg">
              <h3 className="text-2xl font-serif text-deep-marine mb-4">
                Cost Efficiency
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-hatchling-olive mb-2">
                    $3.42
                  </div>
                  <div className="text-driftwood">per hatchling released</div>
                  <div className="text-sm text-coastal-sage mt-2">
                    vs. $5–$8 industry average
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-sunset-coral mb-2">
                    $313.53
                  </div>
                  <div className="text-driftwood">per nest protected</div>
                  <div className="text-sm text-coastal-sage mt-2">
                    Complete 45-day care cycle
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="bg-sandstone py-20">
        <div className="section-container">
          <h2 className="text-3xl font-serif text-center mb-12">
            Annual Reports
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[2024, 2023, 2022, 2021].map((year) => (
              <div key={year} className="bg-white p-6 rounded-lg text-center">
                <div className="text-6xl mb-4">📄</div>
                <div className="text-2xl font-serif text-deep-marine mb-2">
                  {year}
                </div>
                <div className="text-sm text-coastal-sage mb-4">
                  {year === 2024 && 'NEW! — 24 pages'}
                  {year === 2023 && '20 pages'}
                  {year === 2022 && '18 pages'}
                  {year === 2021 && 'Tribute to David'}
                </div>
                <a
                  href={`/reports/tigre-salvaje-${year}.pdf`}
                  className="block bg-deep-marine text-white py-2 px-4 rounded font-semibold hover:bg-coastal-sage transition-colors text-sm"
                  download
                >
                  Download PDF
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/reports/all-reports.zip"
              className="inline-block bg-hatchling-olive text-white px-6 py-3 rounded-md font-semibold hover:bg-deep-marine transition-colors"
              download
            >
              Download All Reports (ZIP)
            </a>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="bg-white py-20">
        <div className="section-container">
          <h2 className="text-3xl font-serif text-center mb-12">
            Impact Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-sandstone p-6 rounded-lg">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-serif text-deep-marine mb-3">
                They'll Remember This Forever
              </h3>
              <p className="text-driftwood text-sm italic mb-4">
                "We brought 45 students from Bella Vista Elementary. Most had
                never seen the ocean. When they released those baby turtles,
                their faces lit up. This is how you build the next generation of
                conservationists."
              </p>
              <p className="text-deep-marine font-semibold text-sm">
                — Maestra Rosa, Teacher
              </p>
            </div>

            <div className="bg-sandstone p-6 rounded-lg">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-serif text-deep-marine mb-3">
                I Came Back Five Times
              </h3>
              <p className="text-driftwood text-sm italic mb-4">
                "I volunteered in 2015, then 2016, 2017, 2019, and 2022. I can't
                stay away. There's something about walking that beach at night,
                knowing you're the only thing between those eggs and
                extinction."
              </p>
              <p className="text-deep-marine font-semibold text-sm">
                — Matt, France
              </p>
            </div>

            <div className="bg-sandstone p-6 rounded-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-serif text-deep-marine mb-3">
                From Poacher to Protector
              </h3>
              <p className="text-driftwood text-sm italic mb-4">
                "I used to collect eggs to sell. Then Vielka offered me rice and
                beans instead. Now I patrol with her. My children will have
                turtles because of this project."
              </p>
              <p className="text-deep-marine font-semibold text-sm">
                — Juan, Local Fisherman (name changed)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-marine py-20">
        <div className="section-container text-center">
          <h2 className="text-4xl font-serif text-white mb-6">
            Be Part of the Next Success Story
          </h2>
          <p className="text-xl text-sandstone mb-12 max-w-3xl mx-auto">
            After David's death in 2021, many feared the project would collapse.
            Instead, Vielka's leadership and growing community support have
            driven us to our highest numbers ever. This is David's legacy in
            action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-sunset-coral text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-hatchling-olive transition-colors"
            >
              Donate Now
            </Link>
            <Link
              to="/volunteer"
              className="bg-white text-deep-marine px-8 py-4 rounded-md font-bold text-lg hover:bg-sandstone transition-colors"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
