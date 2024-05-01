import React from "react";

import { FaCode } from "react-icons/fa";

function StatsLanding() {
  return (
    <div className="flex flex-col items-center py-8 bg-main-white">
      <div className="wrapper flex flex-col gap-4 lg:flex-row lg:justify-between">
        <div className="flex items-center">
          <FaCode
            className="p-4 w-16 h-16 mr-2
          bg-yellow-400 rounded-full text-main-blue
          "
          ></FaCode>
          <h4 className="text-black text-md">თქვენს კლიენტებზე მორგებული</h4>
        </div>
        <div className="flex items-center">
          <FaCode
            className="p-4 w-16 h-16 mr-2
          bg-yellow-400 rounded-full text-main-blue
          "
          ></FaCode>
          <h4 className="text-black text-md">თქვენს კლიენტებზე მორგებული</h4>
        </div>
        <div className="flex items-center">
          <FaCode
            className="p-4 w-16 h-16 mr-2
          bg-yellow-400 rounded-full text-main-blue
          "
          ></FaCode>
          <h4 className="text-black text-md">თქვენს კლიენტებზე მორგებული</h4>
        </div>
      </div>
    </div>
  );
}

export default StatsLanding;
