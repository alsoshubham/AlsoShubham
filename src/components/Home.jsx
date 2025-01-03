import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Socials from "./Socials.jsx";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center px-28">
      <p className="felx flex-col justify-center items-center text-2xl font-semibold text-start text-gray-900 px-6 pt-32 pb-20">
      Hi, I am Shubham, <br />
      Full Stack Developer, <br /> UX Strategist, and UI Designer. <br />Research and Marketing <br />
      Crafting digital experiences with clean code and creative solutions.
      </p>
      <About />
      <Projects />
      <Contact />
      <Socials/>
    </div>
  );
}
