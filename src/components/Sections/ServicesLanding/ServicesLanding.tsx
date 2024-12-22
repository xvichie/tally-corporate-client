import React from "react";
import { Link } from "react-router-dom";

function ServicesLanding() {
  return (
    <div className="flex flex-col items-center py-20 bg-white">
      <div className="wrapper flex justify-between gap-4 items-center">
        <div className="flex flex-col">
          <h4 className="text-xl font-bold text-main-blue text-left my-2">
            ყველაფერი, რაც გჭირდება
          </h4>
          <h2 className="text-4xl lg:text-5xl text-black font-bold text-left mb-2 mt-2">
            გაეცანი ჩვენს სერვისებს და აირჩიე შენთვის სასურველი
          </h2>
          <div className="w-10/12 h-1 bg-yellow-500 rounded-3xl mb-4"></div>
          <h5 className="text-xl text-text-gray text-left">
            ჩვენ გვჯერა კარგი იდეების წარმატებულ პროდუქტებად გადაქცევის.
          </h5>
          <span className="text-left my-6">
            <Link to={'/services'}>
            <button className="btn mr-4 bg-main-blue text-white">
              სერვისების ნახვა
            </button>
            </Link>
            {/* <button className="btn btn-outline">Try It Now</button> */}
          </span>
        </div>
        <div className="flex items-center w-[60%] justify-center">
          <img
            src={process.env.PUBLIC_URL + "/images/solarone-featured-01.png"}
            alt="Stats1"
            className="w-full hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesLanding;
