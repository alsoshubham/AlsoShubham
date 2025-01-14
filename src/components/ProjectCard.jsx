/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      {/* Project image with overlay */}
      <div
        className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
      </div>
      {/* Project details */}
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <div className="flex mt-4 justify-between items-center">
          <Link
            to={gitUrl}
            className="flex gap-2 text-gray-500 hover:text-white group/link items-center"
          ><FaGithub />Source Code</Link>
          <Link
            to={previewUrl}
            className="flex gap-2 text-gray-500 hover:text-white group/link items-center"
          ><FaEye />Live Preview</Link>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;