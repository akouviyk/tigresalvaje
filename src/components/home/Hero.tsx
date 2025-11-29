import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Background Image with Overlay */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(10, 44, 58, 0.7), rgba(10, 44, 58, 0.4)), url("../assets/tigresalvajepuntaburica.jpg")',
        }}
      /> */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(10, 44, 58, 0.7), rgba(10, 44, 58, 0.4)), url("../../assets/tigresalvajepuntaburica.jpg")',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 max-w-5xl leading-tight">
          Keep Tigre Salvaje Alive — Protecting Turtles & Wildlife at Punta
          Burica
        </h1>
        <p className="text-xl md:text-2xl text-sandstone max-w-3xl mb-12 leading-relaxed">
          Honor David Teichmann's legacy. Fund patrols, protect nests, and
          restore habitat with real, data-backed conservation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/donate"
            className="bg-sunset-coral text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-hatchling-olive transition-colors shadow-lg"
          >
            Protect a Nest — Donate Now
          </Link>
          <Link
            to="/donate?type=monthly"
            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-md font-semibold hover:bg-white/20 transition-colors"
          >
            Become a Guardian — $5/mo
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
