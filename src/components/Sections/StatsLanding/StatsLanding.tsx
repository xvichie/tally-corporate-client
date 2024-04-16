import React from "react";

function StatsLanding() {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="wrapper flex flex-col gap-4 lg:flex-row lg:justify-between">
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "/images/icon-circle-01.png"}
            alt="Stats1"
            className="max-h-16 mr-4"
          />
          <h4 className="text-black text-lg">Transparent Data And Insights</h4>
        </div>
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "/images/icon-circle-02.png"}
            alt="Stats1"
            className="max-h-16 mr-4"
          />
          <h4 className="text-black text-lg">Transparent Data And Insights</h4>
        </div>
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "/images/icon-circle-03.png"}
            alt="Stats1"
            className="max-h-16 mr-4"
          />
          <h4 className="text-black text-lg">Transparent Data And Insights</h4>
        </div>
      </div>
    </div>
  );
}

export default StatsLanding;
