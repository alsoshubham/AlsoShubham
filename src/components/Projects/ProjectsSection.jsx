import { useState } from "react";
import ProjectTag from "./ProjectTag";
import projectsData from "../constant";

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [tag, setTag] = useState("All");

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
        Journey Through My Tragedic Valuable Projects, here all the projects are
        build from scratch and with live users and active subscribers
      </h2>
      <p className="text-center text-1xl text-[#ADB7BE]">
        {" "}
        Explore more projects on my{" "}
        <a href="https://github.com/alsoshubham">GitHub</a>
      </p>
      {/* Applied filters on my projects */}
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
