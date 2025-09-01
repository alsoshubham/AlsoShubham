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
    <section className="projects-section py-16">
      <div className="container mx-auto px-4 md:px-0 text-white text-center mb-12 flex flex-col items-center gap-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects & Case Studies</h2>
          <p className="text-lg text-white">
            Real products. Real users. Real impact. Here's a selection of
            products I've helped shape, scale, or ship — with deep involvement
            from discovery to delivery.
          </p>
        </div>
        <Marquee>
          {filteredProjects.map((project) => (
            <div key={project.id} className="inline-block mx-4 w-80 align-top infinite-card">
              <ProjectCard
                title={project.title}
                tag={project.tag}
                imgUrl={project.image}
                // gitUrl={project.gitUrl}
                description={project.description}
                // previewUrl={project.previewUrl}
              />
            </div>
          ))}
        </Marquee>
        {/* <button>
          <a
            href="https://medium.com/@alsoshubham"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 w-full sm:w-fit border border-purple-500 rounded-md mr-6 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-900 text-white font-medium shadow-lg transition-colors duration-200"
            onClick={() => window.open("https://medium.com/@alsoshubham", "_blank")}
          >
            Read More on Medium 
          </a>
        </button> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
