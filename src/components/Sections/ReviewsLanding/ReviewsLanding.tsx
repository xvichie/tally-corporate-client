import React from 'react'
import ReviewCard from './ReviewCard'

function ReviewsLanding() {
  return (
    <div className='my-8 flex justify-center py-16 bg-bg-gray'>
        <div className="wrapper">
            <h1 className='font-bold text-3xl lg:text-4xl my-4'>Find out what our most successful clients say about us</h1>
            <h4 className='text-lg lg:text-xl mt-2 mb-16'>It’s always the best source to hear from others who have already worked with us.</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
            </div>
        </div>
    </div>
  )
}

export default ReviewsLanding