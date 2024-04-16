import React from "react";

function ProjectsLanding() {
  return (
    <div className="flex flex-col items-center my-4 bg-bg-black py-16">
      <div className="wrapper flex flex-row-reverse lg:flex-row justify-between gap-4 items-center">
        <div className="flex items-center w-[60%] justify-center">
          <img
            src={process.env.PUBLIC_URL + "/images/solarone-featured-02.png"}
            alt="Stats1"
            className="w-full hidden lg:block"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl font-bold text-main-blue text-left my-2">
            Find An Oppening
          </h4>
          <h2 className="text-5xl lg:text-6xl font-bold text-left mb-8 mt-2 text-white">
            Jobs For Everybody For Results
          </h2>
          <h5 className="text-xl text-left text-text-gray">
            We believe in turning good ideas into powerful brands. Our purpose
            is simple - to help organisations and people flourish.
          </h5>
          <span className="text-left my-6">
            <button className="btn mr-4 bg-main-blue text-white">
              Try It Now
            </button>
            <button className="btn btn-outline bg-white">Try It Now</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectsLanding;
