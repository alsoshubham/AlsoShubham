/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLinkedin, SiMedium } from "react-icons/si";
export default function HeroSection() {
  const navigate = useNavigate();
  const openCalendly = () => {
    window.open("https://calendly.com/alsoshubham/30min", "_blank");
  };

  return (
    <section className="hero-container max-w-screen-xl justify-center items-center mx-auto px-4 py-20 md:px-0 my-10 md:my-20">
      <h1
        className="text-3xl md:text-xl text-black dark:text-white mb-2 font-light leading-snug text-center"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Hi, I'm Shubham
        <br />A UX Strategist & Product Manager
      </h1>
      <h2
        className="h2 text-4xl md:text-4xl text-center text-black dark:text-white mb-4 font-semibold leading-snug"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        blending{" "}
        <span className="text-purple-700 font-bold">Product Thinking</span>,
        <br />
        <span className="text-purple-700 font-bold">UX Strategy</span> and{" "}
        <span className="text-purple-700 font-bold">Engineering</span>
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-10">
        <button
          className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold text-base hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={() => navigate("/projects")}
        >
          See My Work
        </button>
        <button
          className="px-7 py-3 rounded-full bg-transparent border-2 border-purple-500 text-purple-500 font-semibold text-base hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2"
          onClick={openCalendly}
        >
          Say Hello!
        </button>
      </div>
      <div className="flex mt-4 space-x-5 justify-center items-center">
        {[
          {
            href: "https://x.com/alsoshubham_",
            label: "Twitter",
            icon: <FaTwitter className="w-5 h-5" />,
          },
          {
            href: "https://www.instagram.com/alsoshubham.here/",
            label: "Instagram",
            icon: <FaInstagram className="w-5 h-5" />,
          },
          {
            href: "https://medium.com/@alsoshubham",
            label: "Medium",
            icon: <SiMedium className="w-5 h-5" />,
          },
          {
            href: "https://www.linkedin.com/in/alsoshubham/",
            label: "LinkedIn",
            icon: <SiLinkedin className="w-5 h-5" />,
          },
        ].map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-purple-400 transition-colors duration-200"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
}
