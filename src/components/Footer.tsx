import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-deep-marine text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif text-white mb-4">Tigre Salvaje</h3>
            <p className="text-coastal-sage text-sm">
              Protecting endangered sea turtles and wildlife at Punta Burica, Panama since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/donate" className="text-coastal-sage hover:text-hatchling-olive transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-coastal-sage hover:text-hatchling-olive transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-coastal-sage hover:text-hatchling-olive transition-colors">
                  Research Archive
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-coastal-sage hover:text-hatchling-olive transition-colors">
                  Impact Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/donate" className="text-coastal-sage hover:text-hatchling-olive transition-colors">
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link to="/donate?type=sponsor" className="text-coastal-sage hover:text-hatchling-olive transition-colors">
                  Sponsor a Nest
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-coastal-sage hover:text-hatchling-olive transition-colors">
                  Apply to Volunteer
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-coastal-sage hover:text-hatchling-olive transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-coastal-sage">
              <li>Punta Burica, Barú</li>
              <li>Chiriquí, Panama</li>
              <li className="mt-4">
                <a 
                  href="mailto:vielkateichmann@hotmail.com"
                  className="hover:text-hatchling-olive transition-colors"
                >
                  vielkateichmann@hotmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/50764469529"
                  className="hover:text-hatchling-olive transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +507 6446-9529
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coastal-sage mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-coastal-sage">
          <p>© 2025 Tigre Salvaje Conservation Foundation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-hatchling-olive transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-hatchling-olive transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-hatchling-olive transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Compliance Statement */}
        <div className="mt-8 text-xs text-coastal-sage text-center">
          <p>
            Tigre Salvaje operates under Panama's wildlife protection laws (Ley 371/2023). 
            We do not purchase eggs for resale. All field handling is performed under permit or via community rescue programs.
          </p>
        </div>
      </div>
    </footer>
  )
}
