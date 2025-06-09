/* eslint-disable react/no-unescaped-entities */
import { CircleUserRound, Mail } from "lucide-react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLinkedin, SiMedium } from "react-icons/si";
const Socials = () => {
  return (
    <section className="socials-container max-w-screen-xl mx-auto px-4 md:px-0 my-10 md:my-20 relative">
      <div className="flex flex-col items-center justify-center relative">
        <div className="circle1" />
        <div className="circle2" />

        <div className="z-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-8 text-center shadow-lg relative">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-4 text-white">
            Reach Out Across the Cosmos
          </h2>

          {/* Description */}
          <p className="text-white mb-6 max-w-md">
            " Whether it's tech stuff, design things, or just a friendly chat,
            feel free to drop a message! Totally available to disturb me ! "
          </p>

          {/* Social Icons */}
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
            <a
              href="https://topmate.io/alsoshubham/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors duration-200"
              aria-label="Topmate"
            >
              <CircleUserRound />
            </a>
            <a
              className="text-white hover:text-purple-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.open("mailto:hello@alsoshubham.com")}
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
