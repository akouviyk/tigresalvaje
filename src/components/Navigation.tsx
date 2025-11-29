import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="text-white sticky top-0 z-50 shadow-lg"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(10, 44, 58, 0.9), rgba(10, 44, 58, 0.5))',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl font-serif">Tigre Salvaje</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="hover:text-hatchling-olive transition-colors"
            >
              Home
            </Link>

            <div className="group relative">
              <button className="hover:text-hatchling-olive transition-colors">
                Our Work
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white text-deep-marine rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  to="/conservation/sea-turtles"
                  className="block px-4 py-3 hover:bg-sandstone transition-colors"
                >
                  Sea Turtle Conservation
                </Link>
              </div>
            </div>

            <Link
              to="/research"
              className="hover:text-hatchling-olive transition-colors"
            >
              Research
            </Link>

            <Link
              to="/impact"
              className="hover:text-hatchling-olive transition-colors"
            >
              Impact
            </Link>

            <Link
              to="/david-teichmann"
              className="hover:text-hatchling-olive transition-colors"
            >
              David's Legacy
            </Link>

            <div className="group relative">
              <button className="hover:text-hatchling-olive transition-colors">
                Get Involved
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white text-deep-marine rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  to="/donate"
                  className="block px-4 py-3 hover:bg-sandstone transition-colors font-semibold"
                >
                  Donate
                </Link>
                <Link
                  to="/volunteer"
                  className="block px-4 py-3 hover:bg-sandstone transition-colors"
                >
                  Volunteer
                </Link>
              </div>
            </div>

            <Link
              to="/donate"
              className="bg-sunset-coral px-6 py-2 rounded-md font-semibold hover:bg-hatchling-olive transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-coastal-sage transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block py-2 hover:text-hatchling-olive transition-colors"
            >
              Home
            </Link>
            <Link
              to="/conservation/sea-turtles"
              className="block py-2 hover:text-hatchling-olive transition-colors"
            >
              Sea Turtles
            </Link>
            <Link
              to="/research"
              className="block py-2 hover:text-hatchling-olive transition-colors"
            >
              Research
            </Link>
            <Link
              to="/impact"
              className="block py-2 hover:text-hatchling-olive transition-colors"
            >
              Impact
            </Link>
            <Link
              to="/david-teichmann"
              className="block py-2 hover:text-hatchling-olive transition-colors"
            >
              David's Legacy
            </Link>
            <Link
              to="/donate"
              className="block py-2 hover:text-hatchling-olive transition-colors font-semibold"
            >
              Donate
            </Link>
            <Link
              to="/volunteer"
              className="block py-2 hover:text-hatchling-olive transition-colors"
            >
              Volunteer
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
