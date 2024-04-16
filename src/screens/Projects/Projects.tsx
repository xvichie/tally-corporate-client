import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col items-center">
      <div className="wrapper flex flex-col items-center">
        <div className="my-16 gap-8 xl:flex xl:flex-row xl:justify-between items-center">
          <div className="flex flex-col text-left -translate-y-14">
            <h4 className="text-md font-bold text-main-blue lg:text-2xl">
              Our projects
            </h4>
            <h1 className="text-3xl font-extrabold my-2 lg:text-7xl">
              Let Our <br /> Completed Work <br /> Do The Talking
            </h1>
            <h3 className="text-lg my-2 lg:text-xl">
              We help you grow your business with digital marketing. Let’s have
              a chat and find out how we can help you success in your business
              goals.
            </h3>
          </div>
          <div className="lg:min-w-[40%]">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/solarone-contact-1024x749.jpeg"
              }
              alt="Services"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col gap-12">
            <h1 className="text-left text-5xl font-bold">Our projects:</h1>
          <div className="grid grid-cols-3 gap-8">
            <ProjectCard 
            imgUrl="http://localhost:3000/images/solarone-contact-1024x749.jpeg"
            title="Matka.ge"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
