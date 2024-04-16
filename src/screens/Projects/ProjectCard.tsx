import React from "react";

interface ProjectCardInterface {
  imgUrl: string;
  title: string;
}

function ProjectCard({ imgUrl, title }: ProjectCardInterface) {
  return (
    <div className="w-full max-h-96 overflow-hidden relative group">
      <img
        src={imgUrl}
        alt={title} // More contextually relevant alt text
        className="w-full max-h-96 rounded-lg object-cover 
        group-hover:scale-125 group-hover:cursor-pointer 
        transition-transform duration-300 ease-in-out"
      />
      <h3 className="absolute inset-0 items-center justify-center
      hidden group-hover:flex
      transition-all duration-300 ease-in
      text-3xl font-bold text-white text-center p-4">
        {title}
      </h3>
    </div>
  );
}

export default ProjectCard;
