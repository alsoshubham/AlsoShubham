/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
"use client";
// import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
// import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Pawnsposes",
    description:
      " Pawnsposes, an e-learning platform with one simple goal: to teach and inspire the next generation to play chess. Whether you're just learning the basics or looking to sharpen your tactics, Pawnsposes is designed to help you grow as a player, step by step. ",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/alsoshubham/Pawnsposes",
    previewUrl: "",
  },
  {
    id: 2,
    title: "RightEducation",
    description:
      "Right Education is an educational Institute with a vision to expand the brightness of better education",
    image: "",
    tag: ["All", "Web", "ML"],
    gitUrl: "https://github.com/alsoshubham/RightEducation",
    previewUrl: "",
  },
  {
    id: 3,
    title: "YogendraTraders",
    description:
      "Yogendra Traders is a textile clothings wholesale and retail store",
    image: "",
    tag: ["All", "Web", "ML"],
    gitUrl: "https://github.com/alsoshubham/Yogendra-Traders",
    previewUrl: "",
  },
  {
    id: 4,
    title: "AlmostLayers",
    description: "A clone webApp of already existing store layers.shop",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/alsoshubham/AlmostLayers",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Solar System WebVR",
    description:
      "Experience the immersive virtual reality of our solar system in your web browser with Solar System WebVR, using Framer technology for an unparalleled journey.",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [isInView, setIsInView] = useInView({ triggerOnce: true, ref });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setVisibleProjects(3);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const showMoreProjects = () => {
    setVisibleProjects(visibleProjects + 3);
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Journey Through My Cosmic Projects, here all the projects are build from scratch and with live users and active subscribers
      </h2>
      <p className="text-center text-1xl text-[#ADB7BE]">
        {" "}
        Explore more projects on my{" "}
        <a href="https://github.com/alsoshubham">GitHub</a>
      </p>
      <div className="text-white flex flex-row justify-center item-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("ML")}
          name="ML"
          isSelected={tag === "ML"}
        />
      </div>
      {/* <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects
          .slice(0, visibleProjects)
          // .map((project, index) => (
          //   // <motion.li
          //   //   key={project.id}
          //   //   initial={{ y: 50, opacity: 0 }}
          //   //   animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          //   //   transition={{ duration: 0.3, delay: index * 0.1 }}
          //   // >
          //   //   <ProjectCard
          //   //     title={project.title}
          //   //     description={project.description}
          //   //     imgUrl={project.image}
          //   //     gitUrl={project.gitUrl}
          //   //     previewUrl={project.previewUrl}
          //   //   />
          //   // </motion.li>
          // ))}
      </ul> */}
      {filteredProjects.length > visibleProjects && (
        <div className="text-center mt-8">
          <button
            onClick={showMoreProjects}
            className="px-6 py-3 w-full sm:w-fit rounded-full mr-6 bg-gradient-to-r from-purple-400 to-purple-700 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 text-white hover:text-purple-500 "
          >
            Show More Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
