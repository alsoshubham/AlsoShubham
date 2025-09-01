/* eslint-disable react/no-unescaped-entities */
// import { FaCheck } from "react-icons/fa6";
import { assets } from "../assets/assets";
export default function About() {
  return (
    <div>
      <section className="max-w-screen-xl mx-auto px-4 md:px-0 my-10 md:my-20">
        <div className="text-white">
          <h1 className=" heading flex justify-center text-3xl md:text-4xl mb-4 font-bold">
            About Me
          </h1>
          <div className="space-y-6 justify-evenly md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div>
              <img
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover"
                src={assets.p1}
                alt="profile_img"
              />
            </div>
            <div className="md:w-7/12 lg:w-6/12 space-y-4">
              <p className="mt-6 text-[#ffffff] font-normal text-start text-lg md:text-xl leading-relaxed">
                Hi, I’m a CS Engineer turned into UX Strategist and Product
                Manager, who’s now helping Businesses and Brands. <br />
                helping brands craft better experiences and guiding design
                aspirants to understand the “why” behind great products.
                <br />
                I’m also the co-founder of DezHub India, a design-driven
                community where we host events, workshops, and challenges to
                inspire creativity and collaboration. Alongside this, I founded
                a venture dedicated to manufacturing Braille learning kits for
                visually impaired students, reflecting my belief that design
                should always serve people first. <br />
                Whether it’s mentoring,
                strategizing, or creating, I thrive on turning ideas into
                meaningful, user-centric products.
              </p>
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 tex</p>t-base">
                <div className="flex items-center gap-2">
                  <FaCheck className="text-green-400" />
                  <span>Figuring out users need.</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-green-400" />
                  <span>Distilling the needs into lean MVPs.</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-green-400" />
                  <span>Building products that users love.</span>
                </div>
              </div> */}
              <div className="mt-4 flex justify-start items-center gap-5">
                <a
                  onClick={() => window.open("https://medium.com/@alsoshubham/my-journey-from-engineering-to-ux-product-strategy-c585b0e601a9", "_blank")}
                  rel="noopener noreferrer"
                  className="px-7 py-3 rounded-full bg-transparent border-2 border-purple-500 text-purple-300 font-semibold text-base hover:bg-purple-600/10 hover:text-white hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  More about me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
            <h3 className="text-xl font-semibold mb-2 text-purple-400">
              Product Thinking
            </h3>
            <p className="text-gray-200 mb-4">
              Build the right thing, the right way.
            </p>
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
            <h3 className="text-xl font-semibold mb-2 text-purple-400">
              Engineering
            </h3>
            <p className="text-gray-200 mb-4">
              From wireframe to working product.
            </p>
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
            <h3 className="text-xl font-semibold mb-2 text-purple-400">
              UX Strategies
            </h3>
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
            <span className="font-medium">
              The value I bring is not just in what I do — but how I connect it
              all.
            </span>{" "}
            I bridge product clarity, design empathy, and dev execution — the
            toolkit founders need when everything is still fuzzy and fragile.
          </p>
        </div>
      </section>
    </div>
  );
}
