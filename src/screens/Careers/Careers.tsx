import React, { useEffect, useState } from "react";
import Career from "../../types/Career";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../services/firebase";
import CareerCard from "./CareerCard";
import Spinner from "../../components/Spinner/Spinner";

function Careers() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCareers = async () => {
      const q = query(collection(db, "careers"));
      const querySnapshot = await getDocs(q);
      const careersData: Career[] = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...(doc.data() as Career), // Make sure the fields match the Firestore document
        };
      });
      setCareers(careersData);
      setIsLoading(false);
    };

    fetchCareers();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8 my-24 items-center w-full">
        <div className="wrapper flex flex-row">
          <div className="flex flex-row justify-between gap-32 w-full">
            <img
              src={process.env.PUBLIC_URL + "/images/blog-img-02.png"}
              alt="Careers"
              className="hidden xl:block rounded-xl
              h-[32rem] lg:h-[20rem] 
              "
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-center xl:text-left text-4xl lg:text-5xl w-full">
                  ნახე თავისუფალი პოზიციები
                </h1>
                <h3 className="font-semibold text-center xl:text-left text-md lg:text-lg text-text-gray">
                  დაიწყე შენი კარიერა ჩვენთან და მიიღე გამოცდილება Tech სამყაროში.
                </h3>
              </div>
              <button
                className="btn w-full my-6 lg:mb-0
              bg-main-blue text-white btn-outline
              hover:bg-blue-500
              transition-all duration-150 ease-in
              "
              >
                ვაკანსიები
              </button>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="w-full h-36 flex items-center justify-center">
            <Spinner />
        </div>
      ) : (
        <div className="flex flex-col gap-8 items-center bg-bg-black w-full py-32">
          <div className="wrapper"> 
            <div className="flex flex-col my-6">
              <h4 className="text-main-light-blue text-2xl font-bold mb-2 lg:text-3xl">
                იპოვე შენთვის სასურველი სამსახური
              </h4>
              <h1 className="text-white text-4xl font-bold my-6 lg:text-6xl">
                თავისუფალი <br className="hidden lg:block" /> ვაკანსიები
              </h1>
              <h6 className="text-text-gray text-lg lg:text-xl font-semibold">
                კითხვების შემთხვევაში, მოგვწერეთ ელ. ფოსტაზე:
                alfa20210623@gmail.com.
              </h6>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {careers &&
                careers.map((career, index) => (
                  <CareerCard
                    key={index}
                    title={career.title}
                    description={career.description}
                    location={career.location}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Careers;
