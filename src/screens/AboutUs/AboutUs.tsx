import React from "react";

function AboutUs() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-8 my-24 items-center">
        <div className="wrapper">
          <h1 className="font-extrabold text-5xl lg:text-6xl text-center lg:text-left mb-8">
            Who are we?
          </h1>
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
              <h3 className="text-lg my-4 lg:mt-0 lg:text-2xl lg:font-bold">
                We are a creative content and design agency for start-ups and
                small businesses. We elevate brands with captivating content and
                engaging, beautiful design—turning visions into realities.
              </h3>
              <div className="stats stats-vertical w-full shadow text-left">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Total Likes</div>
                  <div className="stat-value text-primary">25.6K</div>
                  <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Page Views</div>
                  <div className="stat-value text-secondary">2.6M</div>
                  <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <div className="avatar online">
                      <div className="w-16 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className="stat-value">86%</div>
                  <div className="stat-title">Tasks done</div>
                  <div className="stat-desc text-secondary">
                    31 tasks remaining
                  </div>
                </div>
              </div>
              <button
                className="btn w-full my-6 lg:mb-0
              bg-main-blue text-white
              hover:bg-blue-500
              transition-all duration-150 ease-in
              "
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center bg-bg-black w-full py-32">
        <div className="wrapper">
              <div className="flex flex-col my-6">
                <h4 className="text-main-light-blue text-2xl font-bold mb-2 lg:text-3xl">Meet the team</h4>
                <h1 className="text-white text-4xl font-bold my-6 lg:text-6xl">We are a team of creatives and experts <br className="hidden lg:block" /> who love their work</h1>
                <h6 className="text-text-gray text-lg lg:text-xl font-semibold">Get to know our passionate team of digital marketing experts.</h6>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="my-8">
                    <img src={process.env.PUBLIC_URL+'/images/staff/team-05-variant.png'} alt="Andria Khvichia" className="rounded-xl" />
                    <h4 className="font-bold text-left text-2xl text-white mt-4">Andria Khvichia</h4>
                    <h6 className="text-text-gray text-left">CEO, Co-Founder</h6>
                </div>
                <div className="my-8">
                    <img src={process.env.PUBLIC_URL+'/images/staff/team-05-variant.png'} alt="Giorgi Tsnobiladze" className="rounded-xl" />
                    <h4 className="font-bold text-left text-2xl text-white mt-4">Giorgi Tsnobiladze</h4>
                    <h6 className="text-text-gray text-left">Co-Founder</h6>
                </div>
                <div className="my-8">
                    <img src={process.env.PUBLIC_URL+'/images/staff/team-05-variant.png'} alt="Andria Khvichia" className="rounded-xl" />
                    <h4 className="font-bold text-left text-2xl text-white mt-4">Saba Jangidze</h4>
                    <h6 className="text-text-gray text-left">Co-Founder</h6>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
