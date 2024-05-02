import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaUserAstronaut } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";



function AboutUs() {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex flex-col gap-8 my-24 items-center">
        <div className="wrapper">
          <h1 className="font-extrabold text-4xl lg:text-5xl text-center lg:text-left mb-2 text-main-blue">
            ვინ ვართ ჩვენ?
          </h1>
          <div className="w-11/12 lg:w-4/12 h-1 bg-yellow-500 rounded-3xl mb-8"></div>
          <div className="flex flex-row justify-between gap-32">
            <img
              src={
                process.env.PUBLIC_URL + "/images/solarone-about-755x1024.jpeg"
              }
              alt="About"
              className="hidden lg:block rounded-xl
              lg:h-[40rem]
              "
            />
            <div className="flex flex-col justify-between">
              <h3 className="text-lg my-4 lg:mt-0 lg:text-xl lg:font-bold text-text-gray">
                ჩვენ ვართ ახალგაზრდებისგან დაკომპლექტებული გამოცდილი Software Solutions კომპანია, რომლის მთავარი მიზანია, შექმნას ციფრული პროდუქტები, რომლებიც მომხმარებლებს პირღიას ტოვებენ.
              </h3>
              <div className="stats stats-vertical w-full shadow text-left bg-main-white">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <FaCode className="h-8 w-8" />
                  </div>
                  <div className="stat-title font-bold text-primary">პროექტი</div>
                  <div className="stat-value text-primary">20+</div>
                  <div className="stat-desc text-main-orange">+2 ცალი ბოლო 1 თვეში</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-primary">
                    <GrUserWorker className="h-8 w-8" />
                  </div>
                  <div className="stat-title font-bold text-primary">პროექტი</div>
                  <div className="stat-value text-primary">20+</div>
                  <div className="stat-desc text-main-orange">+2 ცალი ბოლო 1 თვეში</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-primary">
                    <FaUserAstronaut className="w-8 h-8" />
                  </div>
                  <div className="stat-title font-bold text-primary">პროექტი</div>
                  <div className="stat-value text-primary">20+</div>
                  <div className="stat-desc text-main-orange">+2 ცალი ბოლო 1 თვეში</div>
                </div>
              </div>
              <button
                className="btn w-full my-6 lg:mb-0
              bg-main-blue text-white
              hover:bg-yellow-500 hover:text-black
              "
              >
                მოგვწერე
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center bg-bg-black w-full py-32">
        <div className="wrapper">
              <div className="flex flex-col my-6">
                <h4 className="text-main-light-blue text-xl font-bold mb-2 lg:text-2xl">გაეცანი გუნდს</h4>
                <h1 className="text-white text-3xl font-bold my-6 lg:text-4xl">ჩვენ ვართ ახალგაზრდა ექსპერტებისა და პროფეიონალების გუნდი, რომლებსაც სურთ თქვენი საქმე კარგად წავიდეს</h1>
                <h6 className="text-text-gray text-lg lg:text-xl font-semibold">ნახე ჩვენი ყველა თანამშრომელი.</h6>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 my-8">
                <div className="">
                    <img src={process.env.PUBLIC_URL+'/images/staff/team-05-variant.png'} alt="Andria Khvichia" className="rounded-xl" />
                    <h4 className="font-bold text-left text-2xl text-white mt-4">ანდრია ხვიჩია</h4>
                    <h6 className="text-text-gray text-left">დამფუძნებელი, Full-Stack Developer</h6>
                </div>
                <div className="">
                    <img src={process.env.PUBLIC_URL+'/images/staff/team-05-variant.png'} alt="Giorgi Tsnobiladze" className="rounded-xl" />
                    <h4 className="font-bold text-left text-2xl text-white mt-4">გიორგი ცნობილაძე</h4>
                    <h6 className="text-text-gray text-left">დამფუძნებელი</h6>
                </div>
                <div className="">
                    <img src={process.env.PUBLIC_URL+'/images/staff/team-05-variant.png'} alt="Andria Khvichia" className="rounded-xl" />
                    <h4 className="font-bold text-left text-2xl text-white mt-4">საბა ჯანგიძე</h4>
                    <h6 className="text-text-gray text-left">დამფუძნებელი, Full-Stack Developer</h6>
                </div>
                <div className="">
                    <img src={process.env.PUBLIC_URL+'/images/staff/team-05-variant.png'} alt="Andria Khvichia" className="rounded-xl" />
                    <h4 className="font-bold text-left text-2xl text-white mt-4">მარიამ ესიტაშვილი</h4>
                    <h6 className="text-text-gray text-left">დეველოპერი</h6>
                </div>
                <div className="">
                    <img src={process.env.PUBLIC_URL+'/images/staff/team-05-variant.png'} alt="Andria Khvichia" className="rounded-xl" />
                    <h4 className="font-bold text-left text-2xl text-white mt-4">ლუკა იაკობაშვილი</h4>
                    <h6 className="text-text-gray text-left">გრაფიკული დიზაინერი</h6>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
