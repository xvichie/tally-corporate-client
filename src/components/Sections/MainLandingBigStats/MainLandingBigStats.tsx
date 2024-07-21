import React, { useEffect, useState } from 'react'
import MainCarousel from '../../Carousel/MainCarousel'
import { DocumentData, collection, getDocs, query } from 'firebase/firestore';
import Project from '../../../types/Project';
import { db } from '../../../services/firebase';
import { Link } from 'react-router-dom';

function MainLandingBigStats() {

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
          link: data.link
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
    <div className='flex flex-col items-center h-80 sm:h-76 lg:h-28 relative bg-main-white'>
        <div className="w-10/12 flex flex-col bg-white absolute -translate-y-[15%] sm:-translate-y-[20%] lg:-translate-y-[50%] rounded-lg">
            <div className="flex flex-col lg:flex-row justify-between">
                <div className='py-8 ml-8 mr-8 flex flex-col justify-center'>
                    <h3 className='font-bold text-main-text-purple text-xl mb-2'>ჩვენი პროექტები:</h3>
                    <div>
                        <MainCarousel children={
                            projects.reverse().filter((project,index) => index <= 2).map((project, index) =>
                            <Link to={project.link} key={index} target='_blank'> 
                                <img 
                                className='h-24
                                hover:cursor-pointer
                                ' 
                                src={project.thumbnailUrl} alt='project thumbnail'></img>
                            </Link>
                        )
                            } />
                    </div>
                </div>
                <div className='flex-grow grid grid-cols-2'>
                    <div className='bg-yellow-500 py-8 flex flex-col justify-center w-[1/2] items-center'>
                        <div className="wrapper flex flex-col items-center">
                            <h1 className='text-white font-bold text-md lg:text-md text-center'>დასრულებული <br />პროექტები</h1>
                            <h1 className='text-white font-bold text-7xl'>17</h1>
                        </div>
                    </div>
                    <div className='bg-main-orange py-8 flex flex-col justify-center w-[1/2] items-center'>
                        <div className="wrapper flex flex-col items-center">
                            <h1 className='text-white font-bold text-md lg:text-md text-center'>მიმდინარე <br />პროექტები</h1>
                            <h1 className='text-white font-bold text-7xl'>2</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainLandingBigStats