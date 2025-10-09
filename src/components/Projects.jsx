/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import { useQuery } from "@tanstack/react-query";
import { getRepos } from "../service/main.service";

const ProjectsSection = () => {
  const [selectedTag] = useState("All");
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

  // Filter projects based on selected tag
  const filteredProjects = Array.isArray(projects)
    ? projects.filter((project) =>
        selectedTag === "All" ? true : project.tag.includes(selectedTag)
      )
    : [];

  const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
      ? "text-[#171717] border border-purple-500"
      : "text-[#ADB7BE]";

    return (
      <button
        className={`${buttonStyles} rounded-full px-6 py-2 text-xl cursor-pointer`}
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

  // Marquee component for horizontally scrolling project cards
  const Marquee = ({ children }) => (
    <div className="relative w-full overflow-x-hidden py-4 group">
      <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
        {children}
      </div>
    </div>
  );
  Marquee.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <section className="projects-section my-10 md:my-20">
      <div
        className="container mx-auto px-4 md:px-0 text-black
       dark:text-white text-center mb-12 flex flex-col items-center gap-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">Projects & Case Studies</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Real products. Real users. Real impact.
          </p>
        </div>
        <Marquee>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="inline-block mx-4 w-80 align-top infinite-card"
            >
              <ProjectCard
                title={project.title}
                tag={project.tag}
                imgUrl={project.image}
                description={project.description}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ProjectsSection;
