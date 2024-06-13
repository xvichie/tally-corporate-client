import React from "react";

function ProjectsLanding() {
  return (
    <div className="flex flex-col items-center my-4 bg-bg-black py-16">
      <div className="wrapper flex flex-row-reverse lg:flex-row justify-between gap-4 items-center">
        <div className="flex items-center w-[50%] justify-center">
          <img
            src={process.env.PUBLIC_URL + "/images/solarone-featured-02.png"}
            alt="Stats1"
            className="w-full hidden lg:block"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl font-bold text-yellow-500 text-left my-2">
            ჩვენი ნამუშევრები
          </h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-left mb-2 mt-2 text-white">
            გაეცანი ჩვენ პროექტებს
          </h2>
          <div className="w-10/12 h-1 bg-yellow-500 rounded-3xl mb-4"></div>
          <h5 className="text-xl text-left text-text-gray">
            ჩვენი პორტფოლიო დაგანახებს ჩვენს შესაძლებლობებს.
          </h5>
          <span className="text-left my-6">
            <button className="btn mr-4 bg-yellow-500 text-white">
              პროექტების ნახვა
            </button>
            {/* <button className="btn btn-outline bg-white">Try It Now</button> */}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectsLanding;
