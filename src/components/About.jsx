/* eslint-disable react/prop-types */
// import { FaCheck } from "react-icons/fa6";
import { useState, useId } from "react";
import { assets } from "../assets/assets";
import { Target, Cog, Lightbulb, ChevronDown } from "lucide-react";
function CollapsibleCard({ title, summary, bullets = [], icon, index, activeIndex, onToggle }) {
  const id = useId();
  const open = activeIndex === index;

  return (
    <div
      className={`mb-4 rounded-lg overflow-hidden transition-all duration-300 ${
        open
          ? "border border-purple-500 shadow-lg"
          : "border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-400"
      }`}
    >
      <button
        type="button"
        onClick={() => onToggle && onToggle(index)}
        aria-expanded={open}
        aria-controls={`panel-${id}`}
        className={`w-full text-left px-6 py-5 font-medium flex justify-between items-center transition-colors ${
          open
            ? "bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        }`}
      >
        <span className="flex items-center">
          {icon ? <span className="mr-4 text-purple-500 dark:text-indigo-300">{icon}</span> : null}
          <span>{title}</span>
        </span>

        <ChevronDown
          className={`w-5 h-5 text-purple-600 transform transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="px-6 py-4 bg-white text-gray-700 border-t border-gray-100 dark:bg-gray-800 dark:border-gray-700">
          <p className="text-gray-700 text-start dark:text-gray-200">{summary}</p>
          {bullets && bullets.length > 0 && (
            <ul className="list-disc list-inside text-start text-sm text-gray-700 dark:text-gray-200 mt-3 space-y-1">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section className="max-w-screen-xl mx-auto px-4 md:px-0 my-10 md:my-20">
        <div className="text-black dark:text-white">
          <h1 className="heading flex justify-start text-3xl md:text-4xl mb-4 font-semibold">
            About
          </h1>
          <h2 className="text-lg md:text-xl text-start text-black dark:text-gray-300 font-normal leading-relaxed">
            A bit about me, my journey so far, and what I do.
          </h2>
          <div className="space-y-6 md:space-y-0 md:flex md:items-center md:gap-8 lg:gap-12">
            {/* Left: text content */}
            <div className="md:w-7/12 lg:w-7/12">
              <p className="mt-6 text-sm md:text-md text-start text-gray-700 dark:text-gray-200 font-normal leading-relaxed">
                Hey, I’m a CS engineer who found his spark in design and product
                strategy. These days, I help businesses craft better user
                experiences and guide design aspirants to see the why behind
                what makes great products work. <br /> I grew up in a family
                that valued stability, but I’ve always been driven to carve my
                own path to experiment, fail, learn, and build from scratch. I
                started off sketching, thinking art would be my future. That
                early dream didn’t quite land, but it gave me the hunger to
                create and explore. I dove into engineering not just for the
                degree, but for the space to learn everything I could about
                design, marketing, business, and entrepreneurship. I got my
                hands on Photoshop, Illustrator, Blender, XD, film designing,
                content writing, and everything learned how ideas evolve into
                real products and brands. <br /> Over time, I’ve explored
                projects across industries from TV commercials, media agencies,
                design, into tech and product. From building a chess-learning
                platform to designing assistive tech for visually impaired
                students at IIT Roorkee, now building my brand KAAI, a
                climate-tech startup based on liquid-tree air purification
                technology. Each idea, whether it took off or not, taught me
                something new about empathy, users, and execution. <br /> Of
                course, it wasn’t all smooth sailing. I’ve had partnerships go
                wrong, promises fall through, and projects stall. But those
                experiences taught me the stuff no book covers: documentation,
                trust, and what it really means to build with people. <br />{" "}
                Now, I see myself as a product-focused builder someone who loves
                turning ideas into something real, scalable, and meaningful. My
                journey has been full of experiments, setbacks, and comebacks
                and honestly, I wouldn’t have it any other way.
              </p>
            </div>

            {/* Right: image card */}
            <div className="flex justify-center md:justify-end md:w-5/12">
              <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
                <img
                  className="w-full h-64 md:h-80 object-cover"
                  src={assets.p1}
                  alt="profile_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 pt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="text-start md:pr-10">
            <h2 className="text-4xl font-semibold mb-4">What I Do</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Helping early-stage startups go from idea to impact.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              The value I bring is not just in what I do, but how I connect it
              all. I bridge product clarity, design empathy, and dev execution
              the toolkit founders need when everything is still fuzzy and
              fragile.
            </p>
          </div>
          {/* Right: stacked feature cards */}
          <div className="space-y-6">
            <CollapsibleCard
              index={0}
              activeIndex={activeIndex}
              onToggle={toggleAccordion}
              title="Product Thinking"
              summary="Build the right thing, the right way."
              bullets={[
                'Roadmapping & feature prioritization',
                'User research & problem discovery',
                'Lean experimentation & iteration',
                'Define vision, scope, and MVPs',
              ]}
              icon={<Target />}
            />

            <CollapsibleCard
              index={1}
              activeIndex={activeIndex}
              onToggle={toggleAccordion}
              title="Engineering"
              summary="From wireframe to working product."
              bullets={['Tech Building', 'Scalable component systems', 'API integration & performance', 'SEO, analytics, deployment']}
              icon={<Cog />}
            />

            <CollapsibleCard
              index={2}
              activeIndex={activeIndex}
              onToggle={toggleAccordion}
              title="UX Strategies"
              summary="Craft experiences users love."
              bullets={['Information architecture & flows', 'Wireframes & low-fi prototyping', 'Conversion-focused layout & CTAs', 'Accessibility & responsive design']}
              icon={<Lightbulb />}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
