import React, { useEffect, useState } from "react";
import Project from "../../../types/Project";
import { DocumentData, collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../services/firebase";
import ProjectCard from "../../../screens/Projects/ProjectCard";

function ProjectShowcaseLanding() {
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
          link : data.link
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
    <div className="my-48 flex flex-col items-center">
      <div className="flex justify-center items-center h-16 lg:h-24 bg-background-gray">
        <div className="w-full flex flex-col overflow-hidden">
          <div
            x-data="{}"
            x-init="$nextTick(() => {
                  let ul = $refs.logos;
                  ul.insertAdjacentHTML('afterend', ul.outerHTML);
                  ul.nextSibling.setAttribute('aria-hidden', 'true');
              })"
            className="w-full inline-flex flex-nowrap overflow-hidden 
              [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]
              md:[mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-20px),transparent_100%)]
              "
          >
            <ul
              x-ref="logos"
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              {projects &&
                projects.map((project, index) => (
                  <li className="h-96">
                    <ProjectCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      thumbnailUrl={project.thumbnailUrl}
                      link={project.link}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectShowcaseLanding;
