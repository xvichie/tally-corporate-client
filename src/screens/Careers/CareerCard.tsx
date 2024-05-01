import React from 'react'
import Career from '../../types/Career'

import { CiLocationOn } from "react-icons/ci";
import { FaFileCode } from "react-icons/fa6";


function CareerCard(career: Career) {
  return (
    <div className='w-full flex flex-col items-center rounded-xl py-8
    border-2 border-solid border-white
    '>
        <div className="wrapper flex flex-col lg:flex-row justify-between items-center lg:big_wrapper">
            <div className='w-full'>
                <h2 className='font-bold text-xl text-white'>
                    {career.title}
                </h2>
                <div className='flex flex-row text-text-gray my-2 items-center'>
                    <CiLocationOn className='mr-1' />
                    <h4 className='text-sm'>
                        {career.location}
                    </h4>
                </div>
            </div>
            <div className='flex flex-col justify-center w-full lg:w-1/12 mt-8 lg:mt-0'>
                <button className='btn btn-md'>
                    ვრცლად
                </button>
            </div>
        </div>
    </div>
  )
}

export default CareerCard