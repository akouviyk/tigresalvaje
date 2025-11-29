import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Donate() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') || 'one-time';
  const isMemorial = searchParams.get('memorial') === 'true';

  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>(
    initialType === 'monthly' ? 'monthly' : 'one-time'
  );
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [inMemoryOf, setInMemoryOf] = useState(isMemorial);
  const [memorialName, setMemorialName] = useState('');
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');

  const oneTimeAmounts = [25, 50, 100, 250];
  const monthlyAmounts = [
    { amount: 5, name: 'Turtle Guardian' },
    { amount: 25, name: 'Patrol Sponsor' },
    { amount: 50, name: 'Nest Protector' },
    { amount: 100, name: 'Conservation Champion' },
    { amount: 250, name: 'Legacy Circle' },
  ];

  const getSelectedAmount = () => {
    return customAmount || amount;
  };

  return (
    <>
      <Helmet>
        <title>Donate to Tigre Salvaje | Protect Sea Turtles in Panama</title>
        <meta
          name="description"
          content="Your gift funds beach patrols, nest protection, and community education. One-time or monthly. PayPal or credit card. Tax-deductible (pending 501(c)(3))."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-deep-marine py-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Protect a Nest. Save a Generation.
          </h1>
          <p className="text-xl text-sandstone max-w-3xl mx-auto">
            Every $50 sponsors a nest. Every $25/month funds nightly patrols.
            Your gift keeps David's mission alive.
          </p>
        </div>
      </section>

      {/* Main Donation Form */}
      <section className="bg-white py-20">
        <div className="section-container max-w-4xl">
          {/* Donation Type Tabs */}
          <div className="flex border-b border-coastal-sage mb-12">
            <button
              onClick={() => setDonationType('one-time')}
              className={`flex-1 py-4 text-lg font-semibold transition-colors ${
                donationType === 'one-time'
                  ? 'text-deep-marine border-b-4 border-deep-marine'
                  : 'text-coastal-sage hover:text-deep-marine'
              }`}
            >
              One-Time Donation
            </button>
            <button
              onClick={() => setDonationType('monthly')}
              className={`flex-1 py-4 text-lg font-semibold transition-colors ${
                donationType === 'monthly'
                  ? 'text-deep-marine border-b-4 border-deep-marine'
                  : 'text-coastal-sage hover:text-deep-marine'
              }`}
            >
              Monthly Donation
            </button>
          </div>

          {/* One-Time Donation */}
          {donationType === 'one-time' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-deep-marine mb-6">
                  Select Amount
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {oneTimeAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => {
                        setAmount(amt.toString());
                        setCustomAmount('');
                      }}
                      className={`p-6 rounded-lg border-2 transition-all ${
                        amount === amt.toString() && !customAmount
                          ? 'border-deep-marine bg-deep-marine text-white'
                          : 'border-coastal-sage hover:border-deep-marine'
                      }`}
                    >
                      <div className="text-2xl font-bold">${amt}</div>
                      <div className="text-sm mt-2">
                        {amt === 25 && 'Release 30 hatchlings'}
                        {amt === 50 && 'Sponsor a nest'}
                        {amt === 100 && '1 week of patrols'}
                        {amt === 250 && '1 month of support'}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-driftwood mb-2">
                    Or enter custom amount:
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-coastal-sage text-xl">
                      $
                    </span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount('');
                      }}
                      placeholder="Enter amount"
                      className="w-full pl-10 pr-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                      min="1"
                    />
                  </div>
                </div>
              </div>

              {/* Donor Information */}
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-deep-marine mb-4">
                  Your Information
                </h3>

                <div>
                  <label className="block text-sm font-medium text-driftwood mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-driftwood mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                    required
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="memorial"
                    checked={inMemoryOf}
                    onChange={(e) => setInMemoryOf(e.target.checked)}
                    className="mt-1"
                  />
                  <label htmlFor="memorial" className="text-sm text-driftwood">
                    Make this donation in memory of someone
                  </label>
                </div>

                {inMemoryOf && (
                  <div>
                    <label className="block text-sm font-medium text-driftwood mb-2">
                      Memorial Name
                    </label>
                    <input
                      type="text"
                      value={memorialName}
                      onChange={(e) => setMemorialName(e.target.value)}
                      placeholder="In memory of..."
                      className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                    />
                  </div>
                )}
              </div>

              {/* PayPal Button */}
              <div className="bg-sandstone p-8 rounded-lg">
                <h3 className="text-xl font-serif text-deep-marine mb-4">
                  Complete Your Donation
                </h3>
                <p className="text-sm text-driftwood mb-6">
                  You'll be redirected to PayPal to complete your secure
                  donation.
                  {getSelectedAmount() && ` Amount: $${getSelectedAmount()}`}
                </p>

                <div id="paypal-button-container" className="mb-4"></div>

                <button
                  disabled={!getSelectedAmount() || !donorName || !email}
                  className="w-full bg-deep-marine text-white py-4 rounded-md font-bold text-lg hover:bg-coastal-sage transition-colors disabled:bg-coastal-sage/50 disabled:cursor-not-allowed"
                >
                  Complete Donation with PayPal
                </button>

                <p className="text-xs text-coastal-sage mt-4 text-center">
                  🔒 Secure payment processing. We never store your payment
                  information.
                </p>
              </div>
            </div>
          )}

          {/* Monthly Donation */}
          {donationType === 'monthly' && (
            <div className="space-y-8">
              <div className="bg-hatchling-olive/10 border-l-4 border-hatchling-olive p-6 mb-8">
                <h3 className="text-xl font-serif text-deep-marine mb-2">
                  Become a Guardian — Join Our Monthly Donor Community
                </h3>
                <p className="text-driftwood">
                  Monthly donors are our foundation. Predictable funding enables
                  better conservation planning, equipment investments, and
                  long-term habitat protection.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-deep-marine mb-6">
                  Select Monthly Amount
                </h3>
                <div className="space-y-4">
                  {monthlyAmounts.map(({ amount: amt, name }) => (
                    <button
                      key={amt}
                      onClick={() => {
                        setAmount(amt.toString());
                        setCustomAmount('');
                      }}
                      className={`w-full p-6 rounded-lg border-2 transition-all text-left ${
                        amount === amt.toString() && !customAmount
                          ? 'border-deep-marine bg-deep-marine text-white'
                          : 'border-coastal-sage hover:border-deep-marine'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-2xl font-bold">${amt}/month</div>
                          <div className="text-lg mt-1">{name}</div>
                        </div>
                        <div
                          className={`text-sm ${
                            amount === amt.toString() && !customAmount
                              ? 'text-sandstone'
                              : 'text-coastal-sage'
                          }`}
                        >
                          {amt === 5 && 'Monthly photo + newsletter'}
                          {amt === 25 && 'Quarterly impact report'}
                          {amt === 50 && 'Annual visit invitation'}
                          {amt === 100 && 'Direct Vielka updates'}
                          {amt === 250 && 'Naming rights'}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-driftwood mb-2">
                    Or enter custom monthly amount:
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-coastal-sage text-xl">
                      $
                    </span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount('');
                      }}
                      placeholder="Enter amount"
                      className="w-full pl-10 pr-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                      min="1"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-coastal-sage">
                      /month
                    </span>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-sandstone p-6 rounded-lg">
                <h4 className="font-semibold text-deep-marine mb-3">
                  Membership Benefits:
                </h4>
                <ul className="space-y-2 text-sm text-driftwood">
                  <li>✅ Exclusive monthly field photos</li>
                  <li>✅ Quarterly video updates from Vielka</li>
                  <li>✅ Early access to volunteer applications</li>
                  <li>✅ Members-only Q&A sessions</li>
                  <li>✅ Annual impact report (first preview)</li>
                  <li>✅ Digital membership certificate</li>
                </ul>
              </div>

              {/* Donor Information */}
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-deep-marine mb-4">
                  Your Information
                </h3>

                <div>
                  <label className="block text-sm font-medium text-driftwood mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-driftwood mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* PayPal Subscribe Button */}
              <div className="bg-sandstone p-8 rounded-lg">
                <h3 className="text-xl font-serif text-deep-marine mb-4">
                  Start Your Monthly Gift
                </h3>
                <p className="text-sm text-driftwood mb-6">
                  You'll be redirected to PayPal to set up your recurring
                  donation.
                  {getSelectedAmount() &&
                    ` Amount: $${getSelectedAmount()}/month`}
                </p>

                <button
                  disabled={!getSelectedAmount() || !donorName || !email}
                  className="w-full bg-hatchling-olive text-white py-4 rounded-md font-bold text-lg hover:bg-deep-marine transition-colors disabled:bg-coastal-sage/50 disabled:cursor-not-allowed"
                >
                  Start Monthly Gift with PayPal
                </button>

                <p className="text-xs text-coastal-sage mt-4 text-center">
                  Cancel anytime. No fees or penalties. 🔒 Secure payment
                  processing.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Urgency Banner */}
      <div className="bg-sunset-coral py-4">
        <div className="section-container">
          <div className="flex flex-wrap justify-center items-center gap-4 text-white text-center">
            <span className="font-semibold">⏰ Nesting Season Active:</span>
            <span>July–December</span>
            <span>•</span>
            <span className="font-semibold">67 days remaining</span>
            <span>•</span>
            <span className="font-semibold">143 nests protected</span>
          </div>
        </div>
      </div>
      {/* Sponsor a Nest Feature */}
      <section
        className=" py-20"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(10, 44, 58, 0.5), rgba(10, 44, 58, 0.5))',
        }}
      >
        <div className="section-container max-w-4xl">
          <div className="bg-white p-12 rounded-lg">
            <h2 className="text-3xl font-serif text-center text-deep-marine mb-6">
              Sponsor a Nest — Special Program
            </h2>
            <p className="text-center text-driftwood mb-8 text-lg">
              $50 One-Time Gift = 1 Nest Sponsored
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-deep-marine mb-4">
                  What You Get:
                </h4>
                <ul className="space-y-3 text-driftwood">
                  <li className="flex items-start">
                    <span className="text-hatchling-olive mr-2">✓</span>
                    <span>
                      <strong>GPS Coordinates</strong> — See exactly where your
                      nest is located
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hatchling-olive mr-2">✓</span>
                    <span>
                      <strong>3 Photo Updates:</strong>
                      <ul className="ml-4 mt-1 text-sm space-y-1">
                        <li>• Egg collection (within 24 hours)</li>
                        <li>• Hatchlings emerge (Day 45–50)</li>
                        <li>• Release to ocean (with hatchling count)</li>
                      </ul>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hatchling-olive mr-2">✓</span>
                    <span>
                      <strong>Digital Certificate</strong> — Personalized with
                      nest ID and species
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hatchling-olive mr-2">✓</span>
                    <span>
                      <strong>Impact Summary</strong> — How many turtles reached
                      the ocean
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-sandstone p-6 rounded-lg">
                <h4 className="font-semibold text-deep-marine mb-4">
                  Already Sponsored This Season:
                </h4>
                <div className="text-center mb-4">
                  <div className="text-5xl font-bold text-sunset-coral mb-2">
                    89
                  </div>
                  <div className="text-coastal-sage">nests sponsored</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-deep-marine mb-1">
                    Goal: 150
                  </div>
                  <div className="text-sm text-coastal-sage">by December</div>
                </div>
                <div className="mt-4 bg-white rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-hatchling-olive h-full"
                    style={{ width: '59%' }}
                  ></div>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setDonationType('one-time');
                setAmount('50');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full bg-hatchling-olive text-white py-4 rounded-md font-bold text-lg hover:bg-deep-marine transition-colors"
            >
              Sponsor a Nest — $50
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="section-container max-w-4xl">
          <h2 className="text-4xl font-serif text-center mb-12">
            Donation FAQ
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Is my donation tax-deductible?',
                a: "We are pursuing U.S. 501(c)(3) status (pending). In the meantime, donations are not yet tax-deductible in the U.S. but may qualify in other jurisdictions. We'll update this page when status changes.",
              },
              {
                q: 'How do you use my donation?',
                a: '70% direct conservation (patrols, incubators, egg purchase program), 23% personnel (Vielka salary, field assistant), 7% admin/legal. See our Impact Dashboard for full breakdown.',
              },
              {
                q: 'Can I donate in memory of someone?',
                a: 'Yes. Add their name during checkout. We can send an acknowledgment card to the family if you provide an address.',
              },
              {
                q: 'Can I visit if I donate?',
                a: 'All donors are welcome to visit (35-minute hike required; basic accommodations available). Monthly donors at $50+ receive priority booking.',
              },
              {
                q: "What if I can't afford to donate?",
                a: 'Share our work on social media. Sign up for our newsletter. Every bit of awareness helps. We also need volunteers (you pay $35/day for meals + accommodation; your work is the gift).',
              },
            ].map((faq, index) => (
              <details key={index} className="bg-sandstone p-6 rounded-lg">
                <summary className="font-semibold text-deep-marine cursor-pointer">
                  {faq.q}
                </summary>
                <p className="mt-3 text-driftwood">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-sandstone py-12">
        <div className="section-container">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-coastal-sage">
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>Secure Payment Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>HTTPS Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>Privacy Protected</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
