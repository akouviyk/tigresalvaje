import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would use Formspree or similar
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Tigre Salvaje | Get in Touch</title>
        <meta
          name="description"
          content="Contact Tigre Salvaje Conservation Foundation. Email, WhatsApp, or visit us at Punta Burica, Panama."
        />
      </Helmet>

      {/* Hero */}
      <section style={{ backgroundColor: '#24582a' }} className="py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-6xl font-serif text-center text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-sandstone text-center max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have questions, want to
            partner, or just want to say hello.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section style={{ backgroundColor: '#fffaf1' }} className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* Email */}
            <div
              style={{ backgroundColor: '#d4e8cf' }}
              className="p-8 rounded-lg text-center"
            >
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-serif text-deep-marine mb-3">
                Email
              </h3>
              <a
                href="mailto:vielkateichmann@hotmail.com"
                className="text-hatchling-olive hover:underline block mb-2"
              >
                vielkateichmann@hotmail.com
              </a>
              <p className="text-sm text-coastal-sage">
                Response time: 24–48 hours
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-sandstone p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-serif text-deep-marine mb-3">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/50764469529"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hatchling-olive hover:underline block mb-2"
              >
                +507 6446-9529
              </a>
              <p className="text-sm text-coastal-sage">
                Preferred for quick questions
              </p>
            </div>

            {/* Address */}
            <div className="bg-sandstone p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-serif text-deep-marine mb-3">
                Visit Us
              </h3>
              <p className="text-driftwood text-sm mb-2">
                Tigre Salvaje
                <br />
                Punta Burica, Barú District
                <br />
                Chiriquí Province, Panama
              </p>
              <p className="text-sm text-coastal-sage">
                35-minute hike from Bella Vista
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div
              style={{ backgroundColor: '#d4e8cf' }}
              className="p-8 rounded-lg"
            >
              <h2 className="text-3xl font-serif text-deep-marine mb-6">
                Send Us a Message
              </h2>

              {submitted && (
                <div className="bg-hatchling-olive/20 border-l-4 border-hatchling-olive p-4 mb-6 rounded">
                  <p className="text-deep-marine font-semibold">
                    ✓ Message sent! We'll respond within 24–48 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none bg-white"
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
                      className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-driftwood mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer Program</option>
                    <option value="donation">Donation Question</option>
                    <option value="research">Research Collaboration</option>
                    <option value="media">Media/Press</option>
                    <option value="partnership">Corporate Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-driftwood mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-coastal-sage rounded-lg focus:border-deep-marine focus:outline-none bg-white"
                  />
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
                  Send Message
                </button>

                <p className="text-center text-sm text-coastal-sage">
                  We typically respond within 24–48 hours. For urgent matters,
                  please use WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ backgroundColor: '#d4e8cf' }} className="py-20">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-serif text-center mb-12">
            Common Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Can I visit Tigre Salvaje?',
                a: 'Yes! All donors and supporters are welcome to visit. The site requires a 35-minute hike from Bella Vista. Basic accommodations available. Volunteers (program participants) stay on-site. Day visitors should coordinate in advance.',
              },
              {
                q: 'How can I send donations by mail or wire transfer?',
                a: 'For large gifts, wire transfers, or check donations, please email us for detailed banking information and mailing address.',
              },
              {
                q: 'Do you accept in-kind donations (equipment, supplies)?',
                a: 'Yes! We need: GPS units, waterproof cameras, solar panels, flashlights, field notebooks, marine biology books, and reforestation supplies. Contact us to coordinate delivery.',
              },
              {
                q: 'Can students/researchers visit for thesis work?',
                a: 'Absolutely. We welcome academic collaborations. Contact us with your research proposal and timeline. Data access and field support available.',
              },
              {
                q: 'Do you offer educational programs for schools outside Panama?',
                a: 'We primarily serve local Panamanian schools due to logistics. However, we can arrange virtual presentations for international schools interested in sea turtle conservation.',
              },
              {
                q: 'How do I update my monthly donation amount?',
                a: "Email us with your current donation details and desired new amount. We'll guide you through the PayPal subscription update process.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                style={{ backgroundColor: '#fffaf1' }}
                className="p-6 rounded-lg"
              >
                <summary className="font-semibold text-deep-marine cursor-pointer">
                  {faq.q}
                </summary>
                <p className="mt-3 text-driftwood text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ backgroundColor: '#fffaf1' }} className="py-20">
        <div className="section-container">
          <h2 className="text-3xl font-serif text-center mb-12">Find Us</h2>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-coastal-sage/20 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-driftwood">
                  Punta Burica, Panama
                  <br />
                  <span className="text-sm text-coastal-sage">
                    Coordinates: 8.0234°N, 82.8765°W
                  </span>
                </p>
              </div>
            </div>

            <p className="text-center text-sm text-coastal-sage mt-4">
              Note: No paved road access. Visitors arrive via 35-minute hike
              from Bella Vista.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
