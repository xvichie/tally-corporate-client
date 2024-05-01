import React from "react";
import Project from "../../types/Project";


function ProjectCard( project: Project) {
  return (
    <div className="w-full max-h-96 overflow-hidden relative group hover:cursor-pointer">
      <img
        src={project.thumbnailUrl}
        alt={project.title} // More contextually relevant alt text
        className="w-full max-h-96 rounded-lg object-cover
        group-hover:scale-125 group-hover: group-hover:blur-lg
        transition-all duration-300 ease-in-out"
      />
      <h3 className="absolute inset-0 items-center justify-center
      hidden group-hover:flex
      transition-all duration-300 ease-in
      text-xl font-bold text-white text-center p-4">
        {project.title}
      </h3>
    </div>
  );
}

export default ProjectCard;
