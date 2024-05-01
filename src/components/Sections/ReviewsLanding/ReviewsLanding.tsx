import React from 'react'
import ReviewCard from './ReviewCard'

function ReviewsLanding() {
  return (
    <div className='my-8 flex justify-center py-16 bg-main-blue'>
        <div className="wrapper">
            <h1 className='font-bold text-center text-white text-3xl lg:text-4xl my-4'>წაიკითხე რას ამბობენ ჩვენი კლიენტები</h1>
            <h4 className='text-lg text-main-white text-center lg:text-xl mt-2 mb-16'>საუკეთესო წყარო, რომლისგანაც რჩევის მიღება შეგიძლია</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
            </div>
        </div>
    </div>
  )
}

export default ReviewsLanding