import React from 'react'

function VideoSectionLanding() {
  return (
    <div className='flex flex-col items-center py-8 lg:py-16 bg-white'>
        <div className="wrapper">
            <h1 className='font-bold text-center text-main-blue text-3xl my-2 lg:my-6 lg:text-5xl'>გადმოგვაბარე შენი პრობლემები ჩვენ</h1>
            <h4 className='text-md text-center my-2 lg:text-lg'>მოგვანდე შენი საზრუნავი ჩვენ, და იზრუნე უფრო მნიშვნელოვან საქმეებზე</h4>
            <video className='my-4' src={process.env.PUBLIC_URL+'/videos/s1-lg-01.mp4'} loop controls={false} autoPlay></video>
        </div>
    </div>
  )
}

export default VideoSectionLanding