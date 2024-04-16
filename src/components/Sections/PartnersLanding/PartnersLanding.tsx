import React from 'react'

function PartnersLanding() {
  return (
    <div className='my-8 flex justify-center'>
        <div className="wrapper">
            <h1 className='font-bold text-3xl lg:text-4xl my-8'>We Work with the Following Partners</h1>
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