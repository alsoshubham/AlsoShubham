/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLinkedin, SiMedium } from "react-icons/si";
export default function HeroSection() {
  const navigate = useNavigate();

  // Open Calendly in a new tab for faster experience
  const openCalendly = () => {
    window.open('https://calendly.com/hello-alsoshubham/30min', '_blank');
  };

  return (
    <section className=" hero-container max-w-screen-xl justify-center items-center mx-auto px-4 py-6 md:px-0 my-10 md:my-20">
      <h1
        className="text-3xl md:text-4xl text-white mb-4 font-semibold"
        style={{ fontFamily: "Inter, sans-serif" }}>
        <span className="text-lg md:text-xl font-light text-gray-400 mb-2 tracking-wide">
          Hi, I'm Shubham
        </span>
        <br />
        <span className="text-lg md:text-xl font-light text-gray-400 mb-2 tracking-wide">
          A UX Strategist & Product Manager
        </span>
      </h1>
      <h2
        className="h2 text-4xl md:text-4xl text-center text-white mb-4 font-semibold leading-snug"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Building early-stage startups from
        <div className="flex items-center justify-center gap-2 my-2 text-3xl md:text-4xl font-bold">
          <span>0</span>
          <ArrowRight className="w-7 h-7 md:w-8 md:h-8" />
          <span>1</span>
        </div>
        blending{" "}
        <span className="text-purple-400 font-bold">Product Thinking</span>,
        <br />
        <span className="text-purple-400 font-bold">UX Strategy</span> and{" "}
        <span className="text-purple-400 font-bold">Engineering</span>
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-10">
        <button
          className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold text-base shadow-md hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={() => navigate("/projects")}
        >
          See My Work
        </button>
        <button
          className="px-7 py-3 rounded-full bg-transparent border-2 border-purple-500 text-purple-300 font-semibold text-base hover:bg-purple-600/10 hover:text-white hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={openCalendly}
        >
          Say Hello!
        </button>
      </div>
      <div className="flex mt-4 space-x-5 justify-center items-center">
        <a
          href="https://x.com/alsoshubham_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors duration-200"
          aria-label="Twitter"
        >
          <FaTwitter className="w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com/alsoshubham.here/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors duration-200"
          aria-label="Instagram"
        >
          <FaInstagram className="w-5 h-5" />
        </a>
        <a
          href="https://medium.com/@alsoshubham"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors duration-200"
          aria-label="Medium"
        >
          <SiMedium className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/alsoshubham/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <SiLinkedin className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
