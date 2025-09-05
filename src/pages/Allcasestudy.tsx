import React from 'react'
import { caseStudies } from "../data/Casestudy";
import ProjectCard from '../component/shared/ui/CaseStudy';


const  Allcasestudy:React.FC = () => {
  return (
   
         <div className="max-w-[1430px] mx-auto">
           <div className="text-center max-w-3xl mx-auto">
             <p className="text-gray-700 mt-4 font-perah text-[26px] sm:text-[36px] py-10">
        Curated set of projects I love
             </p>
           </div>
   
           <div className="flex flex-col gap-20 sm:gap-28">
             {caseStudies.map((item, index) => (
               <ProjectCard key={index} {...item}   testimonial={item.quote || "Great project!"} 
  link={"/"} 
  avatarUrl={"/default-avatar.png"} 
  className="w-full"  />
             ))}
           </div>
   
         </div>
  )
}

export default Allcasestudy

