import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="wrapper">
        <div className="my-28">
          <h1 className="text-center text-main-blue text-3xl lg:text-6xl font-extrabold">
            გააციფრულე შენი <br className="lg:hidden" /> მცირე თუ საშუალო ბიზნესი <br />
          </h1>
          <h3 className="text-center text-text-gray text-xl my-4">
            ჩვენ გთავაზობთ თქვენზე მორგებულ და ხარისხიან მომსხარუბას შეღავათაინ ფასად.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-16">
          <ServiceCard
            tier="კონსულტაცია"
            description="გაგვაცანი შენი ამოცანა და ჩვენ ამოხსნის გზას გაჩვენებთ."
            price={0}
            perks={[
              "დაჯავშნე კონსულტაცია უფასოდ",
              "მიიღე რჩევები",
              "დაიწყე წარმატებისკენ წინსვლა",
            ]}
            isPopular={false}
          />
          <ServiceCard
            tier="ვებ დეველოპმენტი"
            description="ნებისმიერი საიტის თუ ვებ სივრცის აწყობა, გაშვება და ტექნუკური მომსახურება."
            price={3500}
            perks={[
              "Front-End დეველოპმენტი",
              "Back-End დეველოპმენტი",
              "საიტის და UI/UX დიზაინი",
              "DevOps, ჰოსტინგი, SEO ოპტიმიზაცია"
            ]}
            isPopular
          />
          <ServiceCard
            tier="ზოგადი დეველოპმენტი"
            description="ჩვენ დაგეხმარებით თქვენთვის შევქმნათ პროგრამები, რომლებიც ცხოვრებას გაგიადვილებთ"
            price={1500}
            perks={[
              "აუტომატიზაციები თქვენი ბიზნესისათვის",
              "ბაზები და ბაზების მართვის სისტემები",
              "სხვადასხვა მოწყობილობები და მათი მართვა",
            ]}
            isPopular={false}
          />
          <ServiceCard
            tier="Mobile დეველოპმენტი"
            description="თქვენთვის სასურველი მობილური აპლიკაციის შექმნა და ტექნიკური მომსახურება"
            price={4000}
            perks={[
              "Android დეველოპმენტი",
              "IOS დეველოპმენტი",
              "არსებული აპლიკაციის მოვლა ან თავიდან გადაწერა",
              "აპლიკაციის პლატფორმებზე წარმატებით ჩაშვება"
            ]}
            isPopular={false}
          />
        </div>
        <div className="my-28">
          <h1 className="text-left text-main-blue text-2xl lg:text-4xl font-extrabold">
            ჩვენი ციფრული მარკეტინგის <br className="lg:hidden" /> პაკეტები <br />
          </h1>
          <h3 className="text-left text-text-gray text-xl my-4">
            ჩვენ გთავაზობთ თქვენზე მორგებულ და ხარისხიან მომსხარუბას შეღავათაინ ფასად.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        <ServiceCard
            tier="კონსულტაცია"
            description="გაგვაცანი შენი მარკეტინგული პრობლემები და ჩვენ გეტყვით ამოხსნას."
            price={0}
            perks={[
              "დაჯავშნე კონსულტაცია უფასოდ",
              "მიიღე რჩევები",
              "დაიწყე წარმატებისკენ წინსვლა",
            ]}
            isPopular={false}
          />
          <ServiceCard
            tier="სტანდარტი"
            description="გაგვაცანი შენი ამოცანა და ჩვენ ამოხსნის გზას გაჩვენებთ."
            price={1750}
            perks={[
              "8 მოკლე მეტრაჟიანი ვიდეო",
              "12 გრაფიკული ბანერი",
            ]}
            isPopular={false}
          />
          <ServiceCard
            tier="სტანდარტ+"
            description="ნებისმიერი საიტის თუ ვებ სივრცის აწყობა, გაშვება და ტექნუკური მომსახურება."
            price={2500}
            perks={[
              "12 მოკლე მეტრაჟიანი ვიდეო",
              "16 გრაფიკული ბანერი",
              "1 გრძელვადიანი ვიდეო"
            ]}
            isPopular
          />
          <ServiceCard
            tier="პრემიუმი"
            description="ჩვენ დაგეხმარებით თქვენთვის შევქმნათ პროგრამები, რომლებიც ცხოვრებას გაგიადვილებთ"
            price={3000}
            perks={[
              "16 მოკლე მეტრაჟიანი ვიდეო",
              "24 გრაფიკული ბანერი",
              "3 გრძელვადიანი ვიდეო",
            ]}
            isPopular={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
