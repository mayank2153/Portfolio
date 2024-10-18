import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLink2 } from "react-icons/fi";

const FeaturedProjectComponent = ({
  imageSrc,
  projectName,
  description,
  technologies,
  github,
  live,
}) => {
  return (
    <div className="text-white px-6 rounded-lg md:my-20 mb-28">
      <div className="relative">
        <div className="w-full">
          <img
            src={imageSrc || "/api/placeholder/800/400"}
            alt={projectName}
            className="rounded-lg h-[300px] object-cover blur-sm md:blur-0 md:grayscale-0 md:filter brightness-7 sepia-2 hue-rotate-190 saturate-15 hover:brightness-100 md:hover:filter-none hover:sepia-0 hover:hue-rotate-0 transition-all duration-300"
          />
        </div>
        <div className="absolute top-4 right-4 flex flex-col items-end">
          {/* Project Name */}
          <h3 className="text-xl font-semibold mb-2 md:text-teal-400">
            {projectName}
          </h3>

          {/* Links under Project Name for Mobile */}
          <div className="flex gap-8 mb-4 md:hidden bg-[#112240] px-2 py-1 rounded-lg">
            <a
              href={github}
              target="_blank"
              className="text-gray-400 hover:text-white"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>
            <a
              href={live}
              target="_blank"
              className="text-gray-400 hover:text-white"
              rel="noopener noreferrer"
            >
              <FiLink2 />
            </a>
          </div>

          <div className="bg-[#112240] text-white md:text-gray-300 text-lg md:py-6 px-4 min-h-[300px] md:min-h-[100px] rounded-lg mb-4 max-w-[350px] bg-opacity-5 md:bg-opacity-100">
            <p className="text-sm">{description}</p>
            <div className="flex flex-wrap gap-2 md:hidden justify-end mb-4 max-w-[250px]">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 px-2 py-1 rounded-md text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className=" flex-wrap gap-2 hidden md:flex justify-end mb-4 max-w-[250px]">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-700 px-2 py-1 rounded-md text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links for Desktop */}
          <div className=" gap-8  hidden md:flex">
            <a
              href={github}
              target="_blank"
              className="text-gray-400 hover:text-white"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>
            <a
              href={live}
              target="_blank"
              className="text-gray-400 hover:text-white"
              rel="noopener noreferrer"
            >
              <FiLink2 />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectComponent;
