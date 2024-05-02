import React from 'react'

function PartnersLanding() {
  return (
    <div className='py-8 flex justify-center bg-white'>
        <div className="wrapper">
            <h1 className='font-bold flex flex-col items-center text-center text-main-blue text-3xl lg:text-4xl my-8'>ჩვენი პარტიორები
                <div className="w-10/12 lg:w-5/12 h-1 bg-yellow-500 rounded-3xl mt-2"></div>
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-4'>
                <div className='flex justify-center'>
                    <img src={process.env.PUBLIC_URL+'/images/companies/nam.png'} alt="NAM" className='grayscale h-16 items-center' />
                </div>
                <div className='flex justify-center'>
                    <img src={process.env.PUBLIC_URL+'/images/companies/nam.png'} alt="NAM" className='grayscale h-16 items-center' />
                </div>
                <div className='flex justify-center'>
                    <img src={process.env.PUBLIC_URL+'/images/companies/nam.png'} alt="NAM" className='grayscale h-16 items-center' />
                </div>
                <div className='flex justify-center'>
                    <img src={process.env.PUBLIC_URL+'/images/companies/nam.png'} alt="NAM" className='grayscale h-16 items-center' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PartnersLanding