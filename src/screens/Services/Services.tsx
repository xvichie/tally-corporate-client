import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="flex flex-col items-center">
      <div className="wrapper">
        <div className="my-28">
          <h1 className="text-center text-5xl lg:text-7xl font-extrabold">
            The right plan <br className="lg:hidden" /> for your <br /> business
          </h1>
          <h3 className="text-center text-xl my-4">
            We are a small team of digital marketing experts supporting your
            businesses growth. Let’s connect and let us help you grow.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 mb-16">
          <ServiceCard
            tier="Basic"
            description="We Will Help You Choose Your Solution For a Problem"
            price={0}
            perks={[
              "ez solution for your business",
              "identify your needs and problems before solving them",
              "Affordable Pricing For Small And Medium Businesses",
              "Top Quality Solutions"
            ]}
            isPopular={false}
          />
          <ServiceCard
            tier="Basic"
            description="We Will Help You Choose Your Solution For a Problem"
            price={0}
            perks={[
              "ez solution for your business",
              "identify your needs and problems before solving them",
              "Affordable Pricing For Small And Medium Businesses",
              "Top Quality Solutions"
            ]}
            isPopular={false}
          />
          <ServiceCard
            tier="Basic"
            description="We Will Help You Choose Your Solution For a Problem"
            price={0}
            perks={[
              "ez solution for your business",
              "identify your needs and problems before solving them",
              "Affordable Pricing For Small And Medium Businesses",
              "Top Quality Solutions"
            ]}
            isPopular={true}
          />
          <ServiceCard
            tier="Basic"
            description="We Will Help You Choose Your Solution For a Problem"
            price={0}
            perks={[
              "ez solution for your business",
              "identify your needs and problems before solving them",
              "Affordable Pricing For Small And Medium Businesses",
              "Top Quality Solutions"
            ]}
            isPopular={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
