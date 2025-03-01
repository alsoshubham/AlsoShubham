import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Socials from "./Socials.jsx";
import HeroSection from "./HeroSection.jsx";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <About />
        <Projects />
        <Contact />
        <Socials />
      </main>
    </>
  );
}
