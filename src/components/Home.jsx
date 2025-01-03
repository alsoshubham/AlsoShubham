import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Socials from "./Socials.jsx";
export default function Home() {
  return (
    <div>
      <p>
      Hi, I am Shubham, <br />
      Full Stack Developer, UX Strategist, and UI Designer. I also do a bit of Research and Marketing <br />
      Building Startups, and redesigning existing products. <br />
      Crafting digital experiences with clean code and creative solutions
      </p>
      <About />
      <Projects />
      <Contact />
      <Socials/>
    </div>
  );
}
