export default function TheProblem() {
  return (
    <section style={{ backgroundColor: '#d4e8cf' }} className="py-20">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-12">
            The Problem
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-[12/16] bg-deep-marine/10 rounded-lg overflow-hidden">
                {' '}
                <iframe
                  src="https://www.youtube.com/embed/Ry5NzE33gng"
                  title="David Teichmann explains the poaching crisis"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-sunset-coral mb-2">
                  90%
                </div>
                <p className="text-driftwood">
                  of sea turtle nests lost without intervention
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-sunset-coral mb-2">
                  $0.10
                </div>
                <p className="text-driftwood">
                  per egg in local cantinas drives poaching
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-sunset-coral mb-2">
                  10,000+
                </div>
                <p className="text-driftwood">
                  potential turtles lost per mother killed
                </p>
              </div>

              <div className="prose prose-lg mt-8">
                <p className="text-driftwood leading-relaxed">
                  Without intervention, poachers destroy nests for eggs sold at
                  $0.10 each. Mother turtles are killed on the beach. Monkeys
                  are shot so babies can be sold as pets. Forests are cleared
                  for cattle and palm oil.
                </p>
                <p className="text-driftwood leading-relaxed mt-4 font-semibold">
                  But there's hope. For 17 years, David walked these beaches
                  every night. Now Vielka continues his mission—but she needs
                  your support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
