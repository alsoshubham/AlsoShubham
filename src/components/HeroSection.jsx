/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLinkedin, SiMedium } from "react-icons/si";
export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className=" hero-container max-w-screen-xl mx-auto px-4 md:px-0 my-10 md:my-20">
      <h2 className="h2 text-4xl md:text-4xl text-start text-white mb-4 font-semibold leading-snug" style={{ fontFamily: 'Inter, sans-serif' }}>
        Built to scale early-stage startups <br /> from 0 <ArrowRight/> 1 <br />
        blending <span className="text-purple-400 font-bold">Product Thinking</span>,<br />
        <span className="text-purple-400 font-bold">UX Strategy</span> and <span className="text-purple-400 font-bold">Engineering</span>
      </h2>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-5 mb-10">
        <button
          className="px-6 py-3 w-full sm:w-fit border border-purple-500 rounded-md sm:mr-6 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-900 text-white font-medium shadow-lg transition-colors duration-200"
          onClick={() => navigate("/projects")}
        >
          See My Work
        </button>
        <button
          className="px-6 py-3 w-full sm:w-fit border border-purple-500 rounded-md bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-900 text-white font-medium shadow-lg transition-colors duration-200"
          onClick={() => navigate("/contact")}
        >
          Let's Build Together
        </button>
      </div>
      <div className="flex mt-4 space-x-5 justify-start items-center">
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
