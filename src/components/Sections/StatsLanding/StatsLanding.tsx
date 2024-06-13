import React from "react";

import { PiPlugsConnectedFill } from "react-icons/pi";

import { FaCode } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

function StatsLanding() {
  return (
    <div className="flex flex-col items-center py-8 bg-main-white">
      <div className="wrapper grid grid-cols-3 gap-4">
        <div className="flex justify-center items-center">
          <FaCode
            className="p-4 w-16 h-16 mr-2
          bg-yellow-400 rounded-full text-main-blue
          "
          ></FaCode>
          <h4 className="text-black text-md">სხვადასხვა სახის დეველოპმენტი</h4>
        </div>
        <div className="flex justify-center items-center">
          <PiPlugsConnectedFill
            className="p-4 w-16 h-16 mr-2
          bg-yellow-400 rounded-full text-main-blue
          "
          ></PiPlugsConnectedFill>
          <h4 className="text-black text-md">თქვენს კლიენტებზე მორგებული</h4>
        </div>
        <div className="flex justify-center items-center">
          <BsLightningChargeFill
            className="p-4 w-16 h-16 mr-2
          bg-yellow-400 rounded-full text-main-blue
          "
          ></BsLightningChargeFill>
          <h4 className="text-black text-md">სწრაფი მომსახურება</h4>
        </div>
      </div>
    </div>
  );
}

export default StatsLanding;
