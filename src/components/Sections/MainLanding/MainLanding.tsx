import React from "react";

function MainLanding() {
  return (
    <div className="flex flex-col items-center my-2 md:h-[calc(100vh-96px)] lg:justify-center">
      <div className="wrapper flex flex-col justify-between lg:flex-row">
        <div className="flex flex-col lg:justify-center lg:-translate-y-12">
          <h3 className="text-xl lg:text-3xl text-main-blue font-bold text-left mt-4
          ">პროგრამული მომსახურება</h3>
          <h1 className="text-4xl leading-none text-black font-bold text-left my-2
          lg:text-7xl
          ">პატარა და საშუალო ბიზნესისათვის</h1>
          <span className="my-4 flex flex-col lg:flex-row gap-4 items-center">
            <button className="btn w-full bg-main-blue text-white lg:w-32
            hover:bg-main-light-blue 
            ">დაიწყე</button>
            <h4 className="text-xl text-left my-2 text-text-gray">
              ჩვენ გთავაზობთ ყველანაირ გამოსავალს
            </h4>
          </span>
        </div>
        <div className="flex justify-end aspect-square">
            <img className="aspect-square lg:w-12/12 lg:translate-x-12" src={process.env.PUBLIC_URL+'/images/main-hero.png'} alt="Main-Hero" />
        </div>
      </div>
    </div>
  );
}

export default MainLanding;
