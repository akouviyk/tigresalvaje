import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy & Legal | Tigre Salvaje</title>
        <meta 
          name="description" 
          content="Privacy policy, donation terms, volunteer waiver, and legal compliance information for Tigre Salvaje Conservation Foundation." 
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-deep-marine py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-serif text-center text-white mb-4">
            Privacy Policy & Legal Information
          </h1>
          <p className="text-sandstone text-center">Last Updated: January 1, 2025</p>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-sandstone py-8 sticky top-20 z-10">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {['Privacy Policy', 'Donation Terms', 'Volunteer Waiver', 'Panama Law Compliance', 'Accessibility'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-deep-marine hover:text-hatchling-olive transition-colors font-semibold"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy-policy" className="bg-white py-16">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-serif text-deep-marine mb-8">Privacy Policy</h2>
          
          <div className="prose prose-lg max-w-none text-driftwood space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">1. Introduction</h3>
              <p>
                Tigre Salvaje Conservation Foundation ("we," "us," "our") respects your privacy. 
                This policy explains how we collect, use, and protect your personal information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">2. Information We Collect</h3>
              
              <h4 className="font-semibold mt-4 mb-2">From Donors:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, email address, mailing address (optional)</li>
                <li>Payment information (processed by PayPal; we do not store card numbers)</li>
                <li>Donation amount, frequency, and date</li>
                <li>Communication preferences (newsletter, updates)</li>
              </ul>

              <h4 className="font-semibold mt-4 mb-2">From Volunteers:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, age, nationality, passport number</li>
                <li>Emergency contact information</li>
                <li>Health conditions relevant to volunteer work</li>
                <li>Travel insurance details</li>
              </ul>

              <h4 className="font-semibold mt-4 mb-2">From Website Visitors:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address, browser type, pages visited (via analytics)</li>
                <li>Cookie data (see Cookie Policy below)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">3. How We Use Your Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Process donations and issue receipts</li>
                <li>Send thank-you emails and donor updates</li>
                <li>Coordinate volunteer logistics</li>
                <li>Improve our website and programs</li>
                <li>Comply with legal requirements (tax reporting)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">4. Information Sharing</h3>
              <p className="mb-2">We DO NOT sell, rent, or share your personal information with third parties except:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Payment processors (PayPal) — required for transactions</li>
                <li>Email service providers — required for donor communications</li>
                <li>Legal compliance (if required by law)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">5. Data Security</h3>
              <p>
                We use industry-standard security measures including HTTPS encryption, secure databases 
                (Firebase with security rules), and limited staff access to personal data. However, no 
                internet transmission is 100% secure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">6. Your Rights</h3>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion (subject to legal retention requirements)</li>
                <li>Opt out of marketing emails (unsubscribe link in every email)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">7. Contact</h3>
              <p>
                Questions about privacy? Email:{' '}
                <a href="mailto:vielkateichmann@hotmail.com" className="text-hatchling-olive hover:underline">
                  vielkateichmann@hotmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Terms */}
      <section id="donation-terms" className="bg-sandstone py-16">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-serif text-deep-marine mb-8">Donation Terms & Conditions</h2>
          
          <div className="prose prose-lg max-w-none text-driftwood space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">1. Tax Deductibility</h3>
              <p>
                Tigre Salvaje is pursuing U.S. 501(c)(3) status (pending). Currently, donations are NOT 
                tax-deductible in the United States. We will update this page when status changes. Donors 
                in other jurisdictions should consult local tax advisors.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">2. Refund Policy</h3>
              
              <h4 className="font-semibold mt-4 mb-2">One-Time Donations:</h4>
              <p>
                Non-refundable after processing (typically within 24 hours). Exceptions may be made for 
                duplicate charges or technical errors. Contact us within 7 days.
              </p>

              <h4 className="font-semibold mt-4 mb-2">Recurring Donations:</h4>
              <p>
                Cancel anytime via donor dashboard or email. No refunds for past charges. Cancellation 
                takes effect the following billing cycle.
              </p>

              <h4 className="font-semibold mt-4 mb-2">Nest Sponsorships:</h4>
              <p>
                Non-refundable. If a sponsored nest fails to hatch (due to natural causes), we'll provide 
                a full report and offer to apply your sponsorship to a future nest.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">3. Use of Funds</h3>
              <p>
                We reserve the right to allocate funds to areas of greatest need. Designated gifts (e.g., 
                "for reforestation only") will be honored when possible, but operational flexibility is 
                sometimes required.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">4. Recognition</h3>
              <p>
                Donors may be recognized on our website, social media, or annual reports unless you opt out. 
                Contact us to remain anonymous.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">5. Currency</h3>
              <p>
                All donations are processed in USD. Your bank may apply currency conversion fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Waiver Summary */}
      <section id="volunteer-waiver" className="bg-white py-16">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-serif text-deep-marine mb-8">Volunteer Waiver (Summary)</h2>
          
          <div className="prose prose-lg max-w-none text-driftwood space-y-6">
            <p className="text-sunset-coral font-semibold">
              Full waiver must be signed before participation. Key points:
            </p>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">Assumption of Risk</h3>
              <p>
                Volunteering at Tigre Salvaje involves physical activity, exposure to wildlife, remote location, 
                and limited medical facilities. You acknowledge these risks voluntarily.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">Health & Fitness</h3>
              <p>
                You certify that you are physically capable of performing volunteer duties and have disclosed 
                any relevant health conditions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">Travel Insurance</h3>
              <p>
                You are required to maintain travel insurance covering medical expenses and emergency evacuation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">Liability Release</h3>
              <p>
                You release Tigre Salvaje, Vielka Teichmann, and associated personnel from liability for injuries 
                or damages except in cases of gross negligence.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">Photo/Video Release</h3>
              <p>
                You grant permission for Tigre Salvaje to use photos/videos of you for educational and marketing 
                purposes (opt-out available).
              </p>
            </div>

            <div className="flex gap-4">
              <Link
                to="/volunteer-waiver-en.pdf"
                className="inline-block bg-deep-marine text-white px-6 py-3 rounded-md font-semibold hover:bg-coastal-sage transition-colors"
              >
                Download Full Waiver (English)
              </Link>
              <Link
                to="/volunteer-waiver-es.pdf"
                className="inline-block bg-coastal-sage text-white px-6 py-3 rounded-md font-semibold hover:bg-deep-marine transition-colors"
              >
                Download Full Waiver (Spanish)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Panama Law Compliance */}
      <section id="panama-law-compliance" className="bg-sandstone py-16">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-serif text-deep-marine mb-8">Panama Wildlife Law Compliance</h2>
          
          <div className="prose prose-lg max-w-none text-driftwood space-y-6">
            <p className="font-semibold">Ley 371/2023: Wildlife Protection in Panama</p>
            <p>
              Tigre Salvaje operates in full compliance with Panama's wildlife protection laws, specifically 
              Ley 371 (Law 371 of August 2, 2023), which strengthens penalties for wildlife trafficking and 
              habitat destruction.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">Our Compliance Measures:</h3>
              
              <h4 className="font-semibold mt-4 mb-2">1. Egg Collection:</h4>
              <p>
                We DO NOT purchase sea turtle eggs for resale or consumption. Our egg collection program 
                operates under a community-based rescue model:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Eggs are collected from nests likely to be destroyed (by poachers or predators)</li>
                <li>Local community members are compensated with commodities (rice, beans, fuel)—NOT cash for eggs</li>
                <li>All eggs are incubated and hatchlings are released (zero commercial use)</li>
              </ul>

              <h4 className="font-semibold mt-4 mb-2">2. Permitting:</h4>
              <p>
                We are in the process of obtaining formal research and rescue permits from MiAmbiente 
                (Panama's Ministry of Environment). Our work has been conducted in collaboration with local 
                authorities and with zero complaints filed against us in 20 years.
              </p>

              <h4 className="font-semibold mt-4 mb-2">3. Transparency:</h4>
              <p>
                We maintain detailed records of all conservation activities and submit reports to relevant 
                authorities upon request.
              </p>
            </div>

            <p>
              <strong>For Permit Details or Legal Inquiries:</strong><br />
              Contact: <a href="mailto:vielkateichmann@hotmail.com" className="text-hatchling-olive hover:underline">vielkateichmann@hotmail.com</a><br />
              Subject Line: "Legal/Permit Inquiry"
            </p>
          </div>
        </div>
      </section>

      {/* Accessibility Statement */}
      <section id="accessibility" className="bg-white py-16">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-serif text-deep-marine mb-8">Accessibility Statement</h2>
          
          <div className="prose prose-lg max-w-none text-driftwood space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">Our Commitment</h3>
              <p>
                Tigre Salvaje is committed to making our website accessible to all users, including those with 
                disabilities. We strive to comply with WCAG 2.1 Level AA standards.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">Website Accessibility Features:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Semantic HTML structure</li>
                <li>Alt text for all images</li>
                <li>Keyboard navigation support</li>
                <li>Sufficient color contrast (tested)</li>
                <li>Readable font sizes (minimum 16px body text)</li>
                <li>No flashing or strobing content</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">Physical Site Accessibility</h3>
              <p className="text-sunset-coral font-semibold">
                IMPORTANT: The Tigre Salvaje field site is NOT wheelchair accessible.
              </p>
              <p>
                The 35-minute hike involves uneven terrain, creek crossings, and sandy beaches. Volunteers 
                must be able to walk extended distances and perform physical labor.
              </p>
              <p>
                If you have questions about accommodations or accessibility, please contact us before applying.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">Feedback</h3>
              <p>
                If you encounter accessibility barriers on our website, please email:{' '}
                <a href="mailto:vielkateichmann@hotmail.com" className="text-hatchling-olive hover:underline">
                  vielkateichmann@hotmail.com
                </a>{' '}
                with "Accessibility" in the subject line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section className="bg-sandstone py-16">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-serif text-deep-marine mb-8">Cookie Policy</h2>
          
          <div className="prose prose-lg max-w-none text-driftwood space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">What Are Cookies?</h3>
              <p>
                Small text files stored on your device to improve website functionality and analytics.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">Cookies We Use:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Essential:</strong> Session management, security</li>
                <li><strong>Analytics:</strong> Google Analytics 4 (anonymized IP), Cloudflare Analytics</li>
                <li><strong>Marketing:</strong> None (we don't use ad tracking cookies)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deep-marine mb-3">Managing Cookies</h3>
              <p>
                Most browsers allow you to control cookies via settings. Disabling cookies may affect website 
                functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Legal Matters */}
      <section className="bg-deep-marine py-16">
        <div className="section-container max-w-4xl text-center">
          <h2 className="text-3xl font-serif text-white mb-6">Contact for Legal Matters</h2>
          
          <div className="text-sandstone space-y-4">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:vielkateichmann@hotmail.com" className="text-hatchling-olive hover:underline">
                vielkateichmann@hotmail.com
              </a>
            </p>
            <p>
              <strong>Mailing Address:</strong><br />
              Tigre Salvaje Conservation Foundation<br />
              Punta Burica, Barú District<br />
              Chiriquí Province, Panama
            </p>
            <p>
              <strong>Phone (WhatsApp):</strong><br />
              <a href="https://wa.me/50764469529" className="text-hatchling-olive hover:underline">
                +507 6446-9529
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
