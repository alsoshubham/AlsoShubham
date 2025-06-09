/* eslint-disable react/no-unescaped-entities */
export default function Services() {
    return (
        <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What I Do</h2>
        <p className="text-lg mb-12">
          Helping early-stage startups go from idea to impact.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Product Strategy */}
        <div className="p-6 rounded-xl shadow-lg border bg-white/20 backdrop-blur-md text-white border-white/10">
          <h3 className="text-xl font-semibold mb-2 text-purple-400">Product Thinking</h3>
          <p className="text-gray-200 mb-4">Build the right thing, the right way.</p>
          <ul className="list-disc list-inside text-start text-sm text-gray-100 space-y-1">
            <li>Roadmapping & feature prioritization</li>
            <li>User research & problem discovery</li>
            <li>Lean experimentation & iteration</li>
            <li>Define vision, scope, and MVPs</li>
          </ul>
          <p className="mt-4 text-sm italic text-gray-300">
            Outcome: Align teams on what matters and reduce go-to-market risk.
          </p>
        </div>

        {/* Technical Execution */}
        <div className="p-6 rounded-xl shadow-lg border bg-white/20 backdrop-blur-md text-white border-white/10">
          <h3 className="text-xl font-semibold mb-2 text-purple-400">Engineering</h3>
          <p className="text-gray-200 mb-4">From wireframe to working product.</p>
          <ul className="list-disc list-inside text-start text-sm text-gray-100 space-y-1">
            <li>Tech Building</li>
            <li>Scalable component systems</li>
            <li>API integration & performance</li>
            <li>SEO, analytics, deployment</li>
          </ul>
          <p className="mt-4 text-sm italic text-gray-300">
            Outcome: High-performing, production-ready interfaces.
          </p>
        </div>

        {/* UX & Interface Design */}
        <div className="p-6 rounded-xl shadow-lg border bg-white/20 backdrop-blur-md text-white border-white/10">
          <h3 className="text-xl font-semibold mb-2 text-purple-400">UX Strategies</h3>
          <p className="text-gray-200 mb-4">Craft experiences users love.</p>
          <ul className="list-disc list-inside text-start text-sm text-gray-100 space-y-1">
            <li>Information architecture & flows</li>
            <li>Wireframes & low-fi prototyping</li>
            <li>Conversion-focused layout & CTAs</li>
            <li>Accessibility & responsive design</li>
          </ul>
          <p className="mt-4 text-sm italic text-gray-300">
            Outcome: Intuitive, engaging designs that build trust.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center max-w-2xl mx-auto">
        <p className="text-base text-white mb-4">
          <span className="font-medium">The value I bring is not just in what I do — but how I connect it all.</span> I bridge
          product clarity, design empathy, and dev execution — the toolkit founders need when
          everything is still fuzzy and fragile.
        </p>
      </div>
    </section>
    )
}