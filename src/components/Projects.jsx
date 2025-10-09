import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import { useQuery } from "@tanstack/react-query";
import { getRepos } from "../service/main.service";

const ProjectsSection = () => {
  const [selectedTag] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  // Sliding scroller refs (must be declared before any early returns)
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onPointerDown = (e) => {
    const slider = sliderRef.current;
    if (!slider) return;
    isDown.current = true;
    // support both mouse and touch via pointer events
    slider.setPointerCapture && slider.setPointerCapture(e.pointerId);
    startX.current = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
    scrollLeft.current = slider.scrollLeft;
    slider.classList.add('dragging');
  };

  const onPointerMove = (e) => {
    if (!isDown.current) return;
    const slider = sliderRef.current;
    if (!slider) return;
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const walk = (x - startX.current) * 1; // scroll-fast multiplier
    slider.scrollLeft = scrollLeft.current - walk;
  };

  const onPointerUp = (e) => {
    const slider = sliderRef.current;
    if (!slider) return;
    isDown.current = false;
    try {
      slider.releasePointerCapture && slider.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
    slider.classList.remove('dragging');
  };

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

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const imgs = slider.querySelectorAll('img');
    imgs.forEach((img) => (img.draggable = false));
  }, [projects]);

  // update active index based on scroll position
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let raf = null;
    const onScroll = () => {
      // throttle using requestAnimationFrame
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const center = slider.scrollLeft + slider.clientWidth / 2;
        const children = Array.from(slider.children || []);
        if (children.length === 0) return setActiveIndex(0);
        let closest = 0;
        let minDist = Infinity;
        children.forEach((child, idx) => {
          const childCenter = child.offsetLeft + child.clientWidth / 2;
          const dist = Math.abs(childCenter - center);
          if (dist < minDist) {
            minDist = dist;
            closest = idx;
          }
        });
        setActiveIndex(closest);
      });
    };

    // initial sync
    onScroll();
    slider.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => onScroll();
    window.addEventListener('resize', onResize);

    return () => {
      slider.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [projects]);

  const scrollToIndex = (idx) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const child = slider.children[idx];
    if (!child) return;
    const left = child.offsetLeft - (slider.clientWidth - child.clientWidth) / 2;
    slider.scrollTo({ left, behavior: 'smooth' });
  };

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
        <div className="relative w-full">
          <div
            ref={sliderRef}
            className="projects-scroller flex gap-4 overflow-x-auto no-scrollbar py-4 px-8 touch-pan-x scrollbar-hide"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onPointerLeave={onPointerUp}
            role="list"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="flex-none mx-1 w-80 align-top"
                role="listitem"
              >
                <ProjectCard
                  title={project.title}
                  tag={project.tag}
                  imgUrl={project.image}
                  description={project.description}
                />
              </div>
            ))}
          </div>
          {/* dot indicators */}
          <div className="mt-4 flex justify-center gap-2" aria-hidden={filteredProjects.length === 0}>
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`h-2 w-2 rounded-full transition-colors ${idx === activeIndex ? 'bg-gray-800 dark:bg-white' : 'bg-gray-300 dark:bg-gray-600'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
