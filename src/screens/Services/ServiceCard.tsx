import React from "react";

import { FaRegCircleCheck } from "react-icons/fa6";

interface ServiceCardProps {
  tier: string;
  price: number;
  description: string;
  perks: string[];
  isPopular: boolean;
}

function ServiceCard({ tier, price, description, perks, isPopular }: ServiceCardProps) {
  return (
    <div
      className={`flex flex-col items-center
    border-2 border-solid border-border-gray
    rounded-3xl py-6 px-1
    ${isPopular && 'bg-bg-gray'}
    `}
    >
      <div className="mobile_wrapper h-[90%]">
        <div className="w-full flex justify-between items-center">
            <h3 className="text-2xl font-bold text-left text-main-blue">{tier}</h3>
            {isPopular && <h3 className=" text-white bg-main-orange py-2 px-4 rounded-lg">პოპულარული</h3>}
        </div>
        <div className="text-left my-4">
          <h4 className="text-lg text-text-gray font-bold">ფასი</h4>
          <h2 className="font-bold text-main-blue text-4xl">{price === 0 ? "უფასო" : `₾${price}-დან`}</h2>
        </div>
        <h5 className="text-left my-4">{description}</h5>
        <div className="text-left w-full">
          <button className="btn btn-md my-2 bg-main-blue text-white">მოგვწერე</button>
        </div>
        <div className="grid gap-4 my-4">
          {perks.map((perk, index) => (
            <div key={perk + index} className="flex items-center gap-2">
              <span className="flex flex-col justify-center">
                <FaRegCircleCheck size={"24px"} className="" />
              </span>
              <h4 className="text-md text-left">{perk}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
