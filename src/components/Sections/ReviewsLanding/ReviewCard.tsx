import React from "react";
import { BiSolidQuoteSingleRight } from "react-icons/bi";

interface ReviewCardProps{
  body:string;
  name:string;
  imageUrl:string;
}

function ReviewCard({body,name,imageUrl}:ReviewCardProps) {
  return (
    <div className="flex justify-center items-center bg-white rounded-2xl border-black border-2 h-[464px] lg:h-96">
      <div className="py-10 p-8 flex flex-col justify-between h-full w-full">
        <div className="flex justify-start -translate-x-3">
          <BiSolidQuoteSingleRight className="text-black w-10 h-10" />
          <BiSolidQuoteSingleRight className="text-black w-10 h-10 -translate-x-4 " />
        </div>
        <p className="text-xl my-4 text-justify">
          {body}
        </p>
        <div className="flex justify-start items-center">
          <div className="avatar">
            <div className="w-16 rounded-full">
            <img
            src={
              imageUrl
            }
            alt="Customer"
          />
            </div>
          </div>
          <h3 className="text-sm lg:text-lg font-bold ml-6">
          {name}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
