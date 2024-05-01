import React, { useEffect, useState } from "react";

function MainLandingAlternate() {
  return (
    <div className="flex flex-col items-center h-[50vh] lg:h-[70vh]">
      <div className="w-full h-full carousel">
        <div className="carousel-item w-full relative justify-center">
          <img
            id="slide#1"
            src={process.env.PUBLIC_URL + "/images/background/background-1.png"}
            className="w-full object-cover brightness-[70%] lg:brightness-[85%] h-full"
            alt="Tailwind CSS Carousel component"
          />
          <div className="wrapper h-full absolute">
            <div className="absolute left-0 flex h-full flex-col justify-center max-w-[100%] lg:max-w-[40%] -translate-y-4">
              <h1 className="text-3xl lg:text-5xl font-bold text-white relative pb-2
              ">
                ვებ-დეველოპმენტი
                <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-yellow-500"></div>
              </h1>
              <h3 className="text-white mt-4">
                ჩაგვაბარე შენი პრობლემები ჩვენ და გააციფრულე შენი მცირე თუ საშუალო ბიზნესი!
              </h3>
              <button className="btn btn-md mt-8 lg:mt-16 w-[200px] bg-main-orange text-white
              hover:bg-yellow-500
              ">
                დაგვიკავშირდი
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper"></div>
    </div>
  );
}

export default MainLandingAlternate;
