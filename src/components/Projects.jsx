
import { useState } from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import { useQuery } from "@tanstack/react-query";
import { getRepos } from "../service/main.service";

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedTag, setSelectedTag] = useState("All");
  const {
    isPending,
    error,
    data: projects,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => getRepos(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  // Handle tag change and reset visible projects
  const handleTagChange = (newTag) => {
    setSelectedTag(newTag);
    setVisibleProjects(3);
  };

  // Filter projects based on selected tag
  const filteredProjects = projects.filter((project) =>
    selectedTag === "All" ? true : project.tag.includes(selectedTag)
  );

  // Show more projects by increasing the visible count
  const showMoreProjects = () => {
    setVisibleProjects((prevCount) => prevCount + 3);
  };

  const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
      ? "text-[#171717] border border-purple-500"
      : "text-[#ADB7BE]";

    return (
      <button
        className={`${buttonStyles} rounded-full px-6 py-2 text-1xl cursor-pointer`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    );
  };
  ProjectTag.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
  };

  // Render project tags
  const renderProjectTags = () => {
    const tags = ["All", "Web", "ML"];
    return tags.map((tag) => (
      <ProjectTag
        key={tag}
        onClick={() => handleTagChange(tag)}
        name={tag}
        isSelected={selectedTag === tag}
      />
    ));
  };

  return (
    <div>
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-gray-500 mt-4 mb-8 md:mb-12">
          Journey Through My Tragedic Valuable Projects, here all the projects
          are build from scratch and with focusing on live users and active
          subscribers
        </h2>
        <p className="text-center text-1xl text-[#ADB7BE]">
          {" "}
          Explore more projects on my{" "}
          <a href="https://github.com/alsoshubham">GitHub</a>
        </p>
        {/* Applied filters on my projects */}
        <div className="text-white flex flex-row justify-center item-center gap-2 py-6">
          {renderProjectTags()}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            tag={project.tag}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            description={project.description}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;