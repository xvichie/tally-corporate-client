import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { DocumentData, collection, getDocs, query } from "firebase/firestore";
import { db } from "../../services/firebase";
import Project from "../../types/Project";
import Spinner from "../../components/Spinner/Spinner";

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const q = query(collection(db, "projects"));
      const querySnapshot = await getDocs(q);
      const projectsData: Project[] = querySnapshot.docs.map((doc) => {
        const data = doc.data() as DocumentData;
        // Assuming conversion from Firestore Timestamp to Date if needed
        // const startDate = data.startDate?.toDate();
        // const endDate = data.endDate?.toDate();

        return {
          id: doc.id,
          title: data.title, // ensure these fields match your Firestore document structure
          description: data.description,
          thumbnailUrl: data.thumbnailUrl,
          // startDate,
          // endDate,
        };
      });
      setProjects(projectsData);
      setIsLoading(false);
    };

    fetchProjects();
  }, []);


  return (
    <div className="flex flex-col items-center">
      <div className="wrapper flex flex-col items-center">
        <div className="my-16 gap-8 xl:flex xl:flex-row xl:justify-between items-center">
          <div className="flex flex-col text-left -translate-y-14 lg:-translate-y-0">
            <h4 className="text-md font-bold text-main-blue lg:text-2xl">
              ჩვენი ნამუშევრები
            </h4>
            <h1 className="text-3xl font-extrabold my-2 lg:text-7xl">
              ნახე ჩვენი <br /> დასრულებული <br /> ნამუშევრები
            </h1>
            <h3 className="text-lg my-2 lg:text-xl">
              ჩვენი საკუთარი და სხვა კომპანიის ციფრული პროდუქტები, რომლებიც ყოველდღიურად ამტკიცებენ ჩვენ შესაძლებლობებს.
            </h3>
          </div>
          <div className="lg:min-w-[40%]">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/solarone-contact-1024x749.jpeg"
              }
              alt="Services"
              className="rounded-lg"
            />
          </div>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col gap-12 my-16">
            <h1 className="text-left text-4xl font-bold text-main-blue">ჩვენი პროექტები</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  thumbnailUrl={project.thumbnailUrl}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
