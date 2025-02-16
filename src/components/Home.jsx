import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Socials from "./Socials.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center px-28">
      <div className="px-6">
        <p className="text-center text-4xl font-bold text-gray-500 mt-4 mb-8 md:mb-10 flex justify-center items-center">
          Hi, I am Shubham, <br />
          Full Stack Developer, <br /> UX Strategist and UI Designer. <br />
          <br />
          Crafting digital experiences with clean code <br /> and creative
          solutions.
        </p>
        <br />
        <div className="flex justify-center items-center">
          <button className="px-6 py-3 w-full sm:w-fit border-1 solid rounded-md mr-6 bg-gradient-to-r from-purple-400 to-purple-700 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 text-white hover:text-purple-500 "
           onClick={() => navigate('/projects')}>View Projects</button>
          <button className="px-6 py-3 w-full sm:w-fit border-1 solid rounded-md mr-6 bg-gradient-to-r from-purple-400 to-purple-700 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 text-white hover:text-purple-500 "
          onClick={() => navigate('/contact')}>Contact Me</button>
        </div>
        <div className="flex mt-4 space-x-5 justify-center items-center">
          <Link to="https://x.com/alsoshubham_" className="text-gray-500 hover:text-blue-600">
            <FaXTwitter className="w-4 h-4" />
          </Link>
          <Link to="https://github.com/alsoshubham" className="text-gray-500 hover:text-blue-600">
            <FaGithub className="w-4 h-4" />
          </Link>
          <Link to="https://www.instagram.com/alsoshubham.here/" className="text-gray-500 hover:text-blue-600">
            <FaInstagram className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
      <Socials />
    </div>
  );
}
