import React from 'react'
import ReviewCard from './ReviewCard'

function ReviewsLanding() {
  return (
    <div className='flex justify-center py-24 bg-main-blue'>
        <div className="wrapper">
            <h1 className='font-bold text-center text-white text-3xl lg:text-4xl my-4 flex flex-col items-center'>
              წაიკითხე რას ამბობენ ჩვენი კლიენტები
              <div className="w-10/12 h-1 bg-yellow-500 rounded-3xl mt-2"></div>
              </h1>
            <h4 className='text-lg text-gray-200 text-center lg:text-xl mt-2 mb-16'>საუკეთესო წყარო, რომლისგანაც რჩევის მიღება შეგიძლია</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
            </div>
        </div>
    </div>
  )
}

export default ReviewsLanding