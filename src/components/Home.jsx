import About from "./About/About.jsx";
import Projects from "./Projects/ProjectsSection.jsx";
import Contact from "./ContactPage/Contact";
import SocialSection from "./Socials/SocialSection.jsx";
export default function Home() {
  return (
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        molestiae quibusdam, neque eveniet quos quidem molestias inventore!
        Commodi modi, magni consequuntur porro ea dignissimos odio mollitia
        praesentium officiis error iste?
      </p>
      <About />
      <Projects />
      <Contact />
      <SocialSection/>
    </div>
  );
}
