import { Helmet } from 'react-helmet-async';

export default function ResearchArchive() {
  return (
    <>
      <Helmet>
        <title>
          Research Archive | 15+ Years of Sea Turtle Data | Tigre Salvaje
        </title>
        <meta
          name="description"
          content="Access David Teichmann's digitized field notes. Dataset includes nest counts, GPS coordinates, hatch rates from 2005–2021."
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
            Research Archive
          </h1>
          <p className="text-xl text-sandstone text-center max-w-4xl mx-auto">
            15+ Years of Field Data. We have scanned David Teichmann's field
            logs documenting every nest, hatchling, and observed threat at Punta
            Burica from 2005–2021. This dataset is available for researchers,
            students, and conservation organizations.
          </p>
        </div>
      </section>

      {/* Dataset Overview */}
      <section className="bg-white py-20">
        <div className="section-container max-w-6xl">
          <h2 className="text-3xl font-serif text-center mb-12">
            Dataset Overview
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead className="bg-deep-marine text-white">
                <tr>
                  <th className="p-4 text-left">Data Field</th>
                  <th className="p-4 text-left">Description</th>
                  <th className="p-4 text-left">Format</th>
                </tr>
              </thead>
              <tbody className="text-driftwood">
                {[
                  ['Date', 'Nest discovery date', 'YYYY-MM-DD'],
                  ['Time', 'Discovery time (local)', 'HH:MM (24hr)'],
                  ['Species', 'Olive ridley, green, hawksbill', 'Text'],
                  ['Location', 'GPS coordinates', 'Decimal degrees'],
                  ['Egg Count', 'Total eggs in nest', 'Integer'],
                  ['Incubation Temp', 'Average sand temp (°C)', 'Decimal'],
                  ['Hatch Count', 'Live hatchlings', 'Integer'],
                  [
                    'Hatch Success Rate',
                    '% of eggs that hatched',
                    'Percentage',
                  ],
                  ['Threats Observed', 'Poachers, dogs, erosion, etc.', 'Text'],
                  ['Notes', 'Additional observations', 'Long text'],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-sandstone' : 'bg-white'}
                  >
                    <td className="p-4 font-semibold">{row[0]}</td>
                    <td className="p-4">{row[1]}</td>
                    <td className="p-4 text-coastal-sage">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-sandstone p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-hatchling-olive mb-2">
                2,300+
              </div>
              <div className="text-driftwood">Total nest records</div>
            </div>
            <div className="bg-sandstone p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-sunset-coral mb-2">
                17
              </div>
              <div className="text-driftwood">Years of data (2005–2021)</div>
            </div>
            <div className="bg-sandstone p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-deep-marine mb-2">
                100%
              </div>
              <div className="text-driftwood">Data transparency</div>
            </div>
          </div>

          <div className="bg-hatchling-olive/10 border-l-4 border-hatchling-olive p-6 rounded-lg">
            <h3 className="font-semibold text-deep-marine mb-2">
              Attribution Requirement
            </h3>
            <p className="text-driftwood text-sm">
              All uses of this data must cite:{' '}
              <span className="italic">
                "Data source: Tigre Salvaje / David Teichmann"
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Sample Data */}
      <section className="bg-sandstone py-20">
        <div className="section-container max-w-6xl">
          <h2 className="text-3xl font-serif text-center mb-12">Sample Data</h2>

          <div className="bg-white p-6 rounded-lg overflow-x-auto mb-8">
            <pre className="text-xs text-driftwood">
              {`Date,Time,Species,Lat,Lon,EggCount,IncubatorID,AvgTemp_C,HatchDate,HatchCount,HatchRate,Threats,Notes
2010-07-15,03:42,Olive ridley,8.0234,-82.8765,127,INC-03,29.4,2010-08-29,119,93.7%,Poacher tracks visible,Female had scar on left flipper
2010-07-18,02:15,Olive ridley,8.0198,-82.8801,104,INC-01,31.2,2010-09-01,98,94.2%,None,Normal nest
2010-08-03,04:30,Green,8.0267,-82.8734,98,INC-04,28.9,2010-09-27,89,90.8%,Dog disturbance,Partial nest destruction
2010-08-12,01:55,Olive ridley,8.0223,-82.8788,115,INC-02,30.1,2010-09-26,110,95.7%,None,Excellent hatch rate
2010-09-05,03:10,Hawksbill,8.0245,-82.8756,142,INC-05,29.7,2010-11-03,138,97.2%,None,RARE - 2nd hawksbill in 5 years`}
            </pre>
          </div>

          <div className="text-center">
            <a
              href="/data/sample-nest-data.csv"
              download
              className="inline-block bg-deep-marine text-white px-6 py-3 rounded-md font-semibold hover:bg-coastal-sage transition-colors"
            >
              Download Sample CSV (50 rows)
            </a>
          </div>
        </div>
      </section>

      {/* Notebook Archive */}
      <section className="bg-white py-20">
        <div className="section-container">
          <h2 className="text-3xl font-serif text-center mb-12">
            David's Field Notebooks
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                years: '2005–2007',
                pages: 138,
                notes: 'Early years, baseline documentation',
              },
              {
                years: '2008–2010',
                pages: 215,
                notes: 'Incubator protocols refined',
              },
              { years: '2011–2013', pages: 198, notes: 'Record year (2011)' },
              {
                years: '2014–2016',
                pages: 176,
                notes: 'Poaching crisis intensifies',
              },
              {
                years: '2017–2019',
                pages: 189,
                notes: 'Habitat loss documented',
              },
              {
                years: '2020–2021',
                pages: 142,
                notes: "David's final seasons",
              },
            ].map((notebook, i) => (
              <div key={i} className="bg-sandstone p-6 rounded-lg">
                <div className="text-5xl mb-4">📔</div>
                <h3 className="text-xl font-serif text-deep-marine mb-2">
                  Notebook {notebook.years}
                </h3>
                <p className="text-sm text-coastal-sage mb-2">
                  {notebook.pages} pages scanned
                </p>
                <p className="text-sm text-driftwood mb-4">{notebook.notes}</p>
                <button className="w-full bg-deep-marine text-white py-2 rounded font-semibold hover:bg-coastal-sage transition-colors text-sm">
                  View Scans
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Collaboration */}
      <section
        className="py-20"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(10, 44, 58, 0.5), rgba(10, 44, 58, 0.5))',
        }}
      >
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-serif text-center text-white mb-12">
            Research Collaboration Opportunities
          </h2>

          <div className="bg-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-serif text-deep-marine mb-6">
              We Welcome Partnerships With:
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <h4 className="font-semibold text-deep-marine mb-2">
                    Universities
                  </h4>
                  <p className="text-driftwood text-sm">
                    Thesis research, comparative studies, long-term population
                    modeling
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">🔬</div>
                <div>
                  <h4 className="font-semibold text-deep-marine mb-2">
                    Conservation Organizations
                  </h4>
                  <p className="text-driftwood text-sm">
                    Data sharing, joint publications, regional coordination
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">🏛️</div>
                <div>
                  <h4 className="font-semibold text-deep-marine mb-2">
                    Government Agencies
                  </h4>
                  <p className="text-driftwood text-sm">
                    Baseline data for policy decisions, protected area
                    designation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Request Form */}
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-serif text-deep-marine mb-6">
              Request Full Dataset
            </h3>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-driftwood mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-driftwood mb-2">
                    Institution *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-driftwood mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-driftwood mb-2">
                  Research Purpose * (250 words max)
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-2 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-driftwood mb-2">
                  Intended Publications/Outputs
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                />
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="cite" required className="mt-1" />
                  <label htmlFor="cite" className="text-driftwood">
                    I agree to cite "Tigre Salvaje / David Teichmann" in all
                    publications *
                  </label>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="share" required className="mt-1" />
                  <label htmlFor="share" className="text-driftwood">
                    I will share resulting publications with Tigre Salvaje *
                  </label>
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="distribute"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="distribute" className="text-driftwood">
                    I will not distribute raw data without permission *
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-deep-marine text-white py-3 rounded-md font-bold hover:bg-coastal-sage transition-colors"
              >
                Submit Request
              </button>

              <p className="text-center text-sm text-coastal-sage">
                Typical response time: 5–7 business days. Free for
                academic/conservation use.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Data Quality */}
      <section className="bg-sandstone py-20">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-serif text-center mb-12">
            Data Quality & Limitations
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-serif text-deep-marine mb-4">
                Strengths
              </h3>
              <ul className="space-y-2 text-sm text-driftwood">
                <li>✓ Consistent methodology over 15+ years</li>
                <li>
                  ✓ Single observer (David) for majority of records = reduced
                  observer bias
                </li>
                <li>
                  ✓ GPS coordinates available for 90% of nests (added 2008)
                </li>
                <li>✓ Detailed threat documentation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-serif text-deep-marine mb-4">
                Limitations
              </h3>
              <ul className="space-y-2 text-sm text-driftwood">
                <li>
                  ⚠ Incomplete coverage (one person cannot patrol entire 15km
                  beach)
                </li>
                <li>⚠ Some missing data fields in early years (pre-2008)</li>
                <li>
                  ⚠ No genetic sampling (would require permits and lab
                  partnerships)
                </li>
                <li>
                  ⚠ No satellite tracking of hatchlings (equipment cost
                  prohibitive)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
