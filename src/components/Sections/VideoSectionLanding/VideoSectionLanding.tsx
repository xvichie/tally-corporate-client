import React from 'react'

function VideoSectionLanding() {
  return (
    <div className='flex flex-col items-center my-8 lg:my-16'>
        <div className="wrapper">
            <h1 className='font-bold text-3xl my-2 lg:my-6 lg:text-5xl'>Drive to Enchange Your Online Experience</h1>
            <h4 className='text-md my-2 lg:text-lg'>We create compelling experiences and exceptional campaigns for the world’s top brands and social ventures.</h4>
            <video className='my-4' src={process.env.PUBLIC_URL+'/videos/s1-lg-01.mp4'} loop controls={false} autoPlay></video>
        </div>
    </div>
  )
}

export default VideoSectionLanding