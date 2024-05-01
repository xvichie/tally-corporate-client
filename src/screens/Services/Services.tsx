import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="wrapper">
        <div className="my-28">
          <h1 className="text-center text-main-blue text-3xl lg:text-6xl font-extrabold">
            სწორი გადაწყვეტილება <br className="lg:hidden" /> შენი პატარა <br /> ბიზნესისათვის
          </h1>
          <h3 className="text-center text-text-gray text-xl my-4">
            ჩვენ გთავაზობთ საუკეთესო თქვენთვის საუკეთესო მომსხარუბას შეღავათაინ ფასად.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-16">
          <ServiceCard
            tier="კონსულტაცია"
            description="მოგვიყევით თქვენი ამოცანა და ჩვენ ამოხსნის გზას მოგცემთ"
            price={0}
            perks={[
              "დაჯავშნე კონსულტაცია უფასოდ და მიიღე გადაწყვეტილებები",
              "გამოცდილი გუნდი",
              
            ]}
            isPopular={false}
          />
          <ServiceCard
            tier="ვებ დეველოპმენტი"
            description="ნებისმიერი საიტის თუ ვებ სივრცის აწყობა, გაშვება და ტექნუკური მომსახურება."
            price={200}
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
            price={300}
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
            price={1500}
            perks={[
              "Android დეველოპმენტი",
              "IOS დეველოპმენტი",
              "არსებული აპლიკაციის მოვლა ან თავიდან გადაწერა",
              "აპლიკაციის პლატფორმებზე წარმატებით ჩაშვება"
            ]}
            isPopular={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
