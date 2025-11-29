import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row">
      {/* Content Half */}
      <div
        className="w-full md:w-1/2 h-[50vh] md:h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12"
        style={{ backgroundColor: '#fffaf1' }}
      >
        <div className="max-w-2xl">
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight text-coastal-sage"
            // style={{ color: '#17401b' }}
          >
            Keep Tigre Salvaje Alive — Protecting Turtles & Wildlife at Punta
            Burica
          </h1>
          <p
            className="text-lg md:text-xl mb-8 leading-relaxed"
            style={{ color: '#333' }}
          >
            Honor David Teichmann's legacy. Fund patrols, protect nests, and
            restore habitat with real, data-backed conservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg"
              style={{ backgroundColor: '#17401b', color: '#c9e631' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#d4e8cf';
                e.currentTarget.style.color = '#17401b';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#17401b';
                e.currentTarget.style.color = '#c9e631';
              }}
            >
              Protect a Nest — Donate Now
            </Link>
            <Link
              to="/donate?type=monthly"
              className="border-2 px-8 py-4 rounded-md font-semibold transition-colors"
              style={{
                backgroundColor: 'transparent',
                color: '#17401b',
                borderColor: '#17401b',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#17401b';
                e.currentTarget.style.color = '#c9e631';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#17401b';
              }}
            >
              Become a Guardian — $5/mo
            </Link>
          </div>
        </div>
      </div>
      {/* Image Half */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/src/assets/tigresalvajeconservation.webp")',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(23, 64, 27, 0.3), rgba(23, 64, 27, 0.1))',
          }}
        />
      </div>
    </section>
  );
}
