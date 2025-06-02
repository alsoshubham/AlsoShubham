import { Link } from "react-router-dom";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-0 my-10 md:my-20">
      <p className="text-center text-4xl font-bold text-[#ffffff] mt-4 mb-8 md:mb-10 flex justify-center items-center">
        Hello, I am <br /> <h1 className="font-serif">Shubham</h1><br />
        Full Stack Developer, <br /> UX Strategist and UI Designer. <br />
        <br />
        Crafting digital experiences with clean code <br /> and creative
        solutions.
      </p>
      <br />
      <div className="flex justify-center items-center">
        <button
          className="px-6 py-3 w-full sm:w-fit border-1 solid rounded-md mr-6 bg-gradient-to-r from-purple-400 to-purple-700 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 text-white hover:text-purple-500 "
          onClick={() => navigate("/projects")}
        >
          View Projects
        </button>
        <button
          className="px-6 py-3 w-full sm:w-fit border-1 solid rounded-md mr-6 bg-gradient-to-r from-purple-400 to-purple-700 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 text-white hover:text-purple-500 "
          onClick={() => navigate("/contact")}
        >
          Contact Me
        </button>
      </div>
      <div className="flex mt-4 space-x-5 justify-center items-center">
        <Link
          to="https://x.com/alsoshubham_"
          className="text-[#ffffff] hover:text-blue-600"
        >
          <FaXTwitter className="w-4 h-4" />
        </Link>
        <Link
          to="https://github.com/alsoshubham"
          className="text-[#ffffff] hover:text-blue-600"
        >
          <FaGithub className="w-4 h-4" />
        </Link>
        <Link
          to="https://www.instagram.com/alsoshubham.here/"
          className="text-[#ffffff] hover:text-blue-600"
        >
          <FaInstagram className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
