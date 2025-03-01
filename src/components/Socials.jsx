/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import XIcon from "../assets/images/x.png";
import GitHubIcon from "../assets/images/github.png";
import LinkedInIcon from "../assets/images/linkedin.png";
import GmailIcon from "../assets/images/gmail.png";

const Socials = () => {
  return (
    <section
      id="contact"
      className="max-w-screen-xl mx-auto px-4 md:px-0 my-10 md:my-20 relative"
    >
      <div className="flex flex-col items-center justify-center relative">
        <div className="circle1" />
        <div className="circle2" />

        <div className="z-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-8 text-center shadow-lg relative">
          {/* Background gradients */}
          {/* bg-gradient-to-r from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute left-0 absolute top-1/4 -left-0 transform -translate-x-1/2 -translate-y-1/2 */}
          {/* bg-gradient-to-r from-transparent to-purple-900 rounded-full h-80 w-80 z-0 blur-lg absolute right-0 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 */}

          {/* Heading */}
          <h2 className="text-3xl font-bold mb-4 text-white">
            Reach Out Across the Cosmos
          </h2>

          {/* Description */}
          <p className="text-white mb-6 max-w-md">
            Whether it's tech stuff, design things, or just a friendly chat,
            feel free to drop a message! Totally available to disturb me!!!
          </p>

          {/* Social Icons */}
          <div className="socials flex flex-row gap-4 items-center justify-center">
            <Link to="https://github.com/alsoshubham">
              <img
                src={GitHubIcon}
                className="w-10 h-10 hover:opacity-80 cursor-pointer"
                alt="Github Icon"
              />
            </Link>
            <Link to="https://www.linkedin.com/in/alsoshubham/">
              <img
                src={LinkedInIcon}
                className="w-10 h-10 hover:opacity-80 cursor-pointer"
                alt="LinkedIn Icon"
              />
            </Link>
            <Link to="https://x.com/alsoshubham_">
              <img
                src={XIcon}
                className="w-10 h-10 hover:opacity-80 cursor-pointer"
                alt="X Icon"
              />
            </Link>
            <Link to="mailto:workwithalsoshubham@gmail.com">
              <img
                src={GmailIcon}
                className="w-10 h-10 hover:opacity-80 cursor-pointer"
                alt="Gmail Icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
