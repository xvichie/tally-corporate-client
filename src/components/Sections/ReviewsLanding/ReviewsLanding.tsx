import React from 'react'
import ReviewCard from './ReviewCard'

function ReviewsLanding() {
  return (
    <div className='flex justify-center py-24 bg-main-blue'>
        <div className="wrapper">
            <h1 className='font-bold text-center text-white text-3xl lg:text-4xl my-4 flex flex-col items-center'>
              წაიკითხე რას ამბობენ კლიენტები ჩვენ შესახებ
              <div className="w-8/12 h-1 bg-yellow-500 rounded-3xl mt-2"></div>
              </h1>
            <h4 className='text-lg text-gray-200 text-center lg:text-xl mt-2 mb-16'>ობიექტური წყარო, რომლისგანაც რჩევის მიღება შეგიძლია</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <ReviewCard
                body='თალის გამოცდილი გუნდი ძალიან დაგვეხმარა ჩემს სტარტაპს ციფრული ინფრასტრუქტურის დანერგვაში. მათი სწრაფი, ხარისხიანი და ხელმისაწვდომი მომსახურება გვაძლევს საშუალებას, რომ ჩვენი საქმე შეუფერხებლად ვაკეთოთ.'
                name='გიორგი კაპანაძე, CEO'
                imageUrl='https://firebasestorage.googleapis.com/v0/b/alfa-website-22a9b.appspot.com/o/caucasian%20kaci%201.png?alt=media&token=ce6132d4-6933-4f63-8bda-b5a102b5c57b'
                ></ReviewCard>
                <ReviewCard
                body='თალიმ ჩემი პირადი პორტფოლიოს ვებსაიტი სულ რაღაც 3 დღეში შეასრულა, რომელიც უზომოდ დამეხმარა კარიერულ წინსვლაში. ახლა ამ საიტის მეშვეობით, ჩემი პოტენვიური მომხმარებლების რაოდენობა თითქის 40%-ით გაიზარდა.'
                name='ნინი ქვილითაია, გრაფიკული დიზაინერი'
                imageUrl='https://firebasestorage.googleapis.com/v0/b/alfa-website-22a9b.appspot.com/o/qali%201.png?alt=media&token=096cf9f8-c794-4d26-9ebc-ed3a2b751e8d'
                ></ReviewCard>
            </div>
        </div>
    </div>
  )
}

export default ReviewsLanding