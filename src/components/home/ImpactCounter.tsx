import Nesting from '../../assets/Nesting-Green-Sea-Turtles.jpg';

export default function ImpactCounter() {
  // In production, these would come from Firestore
  // const [hatchlings] = useState(15234);
  // const [nests] = useState(127);
  // const [volunteers] = useState(43);
  // const [students] = useState(8);
  // const [progress] = useState(76); // percentage toward 20,000 goal

  return (
    <section
      className="py-10"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(23, 64, 27, 0.5), rgba(23, 64, 27, 0.5))',
      }}
    >
      {/* <div className="order-1 md:order-2"> */}
      {/* <div className="aspect-square bg-deep-marine/10 rounded-lg overflow-hidden"> */}
      <img
        src={Nesting}
        alt="Olive Ridley Sea Turtle"
        className="w-full h-full object-cover"
      />
      {/* </div> */}
      {/* <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-white mb-12">
          2024 Season Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-hatchling-olive mb-2">
              {hatchlings.toLocaleString()}
            </div>
            <div className="text-sandstone">
              hatchlings released this season
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-sunset-coral mb-2">
              {nests}
            </div>
            <div className="text-sandstone">nests protected</div>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">
              {volunteers}
            </div>
            <div className="text-sandstone">volunteers trained</div>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-coastal-sage mb-2">
              {students}
            </div>
            <div className="text-sandstone">school groups hosted</div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between text-white mb-2">
            <span>Progress toward 20,000 hatchlings</span>
            <span className="font-bold">{progress}%</span>
          </div>
          <div className="h-4 bg-coastal-sage/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-hatchling-olive rounded-full transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-center mt-6">
            <div className="inline-block bg-coastal-sage/20 rounded-full px-6 py-2 text-sandstone">
              ⏰ 67 days remaining in nesting season
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/donate"
            className="inline-block px-8 py-4 rounded-md font-bold text-lg transition-colors"
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
            Help us reach our goal →
          </a>
        </div>
      </div> */}
    </section>
  );
}
