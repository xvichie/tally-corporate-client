import React from 'react'
import { Link } from 'react-router-dom'

function CareerLanding() {
  return (
    <div className="flex flex-col items-center py-20 bg-white">
      <div className="wrapper flex justify-between gap-4 items-center">
        <div className="flex flex-col">
          <h4 className='text-xl font-bold text-main-blue text-left my-2'>შემოგვიერთდი</h4>
          <h2 className='text-4xl lg:text-5xl font-bold text-left mb-2 mt-2 text-black'>გახდი ჩვენი გუნდის წევრი</h2>
          <div className="w-11/12 h-1 bg-yellow-500 rounded-3xl mb-4"></div>
          <h5 className='text-xl text-left text-text-gray'>ჩვენ ყოველთვის გვსურს ახალი ტალანტის შემოერთება ჩვენს გუნდში</h5>
          <span className='text-left my-6'>
            <Link to={'/careers'}>
              <button className='btn mr-4 bg-main-blue text-white'>
                  ვაკანსიების ნახვა
              </button>
            </Link>
            {/* <button className='btn btn-outline'>
                Try It Now
            </button> */}
          </span>
        </div>
        <div className="flex items-center w-[60%] justify-center">
          <img
            src={process.env.PUBLIC_URL + "/images/solarone-featured-03.png"}
            alt="Stats1"
            className='w-full hidden lg:block'
          />
        </div>
      </div>
    </div>
  )
}

export default CareerLanding