/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
// import { FaGithub } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  // Truncate description to 200 characters
  const truncate = (str, n) => (str && str.length > n ? str.slice(0, n) + "..." : str);

  const href = previewUrl || gitUrl || "#";

  return (
    <a
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noreferrer" : undefined}
      aria-label={`Open project ${title}`}
      className="w-80 flex flex-col justify-between rounded-2xl overflow-hidden border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      {/* Image - enforce consistent square aspect ratio for all cards */}
      <div className="w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <div className="relative w-full" style={{ paddingBottom: "100%" }}>
          <img
            src={imgUrl}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Details panel */}
      <div className="flex flex-col flex-1 px-6 py-5 bg-white dark:bg-gray-900 text-start">
        <h5 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 line-clamp-2">{title}</h5>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 break-words line-clamp-4">{truncate(description, 200)}</p>
        {/* optional actions could go here */}
      </div>
    </a>
  );
};
export default ProjectCard;