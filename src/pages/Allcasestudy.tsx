import React from 'react'
import { caseStudies } from "../data/Casestudy";
import CaseStudy from "../component/shared/ui/CaseStudy";


const  Allcasestudy:React.FC = () => {
  return (
   
         <div className="max-w-[1430px] mx-auto">
           <div className="text-center max-w-3xl mx-auto">
             <p className="text-gray-600 mt-4 font-perah text-[26px] sm:text-[30px] py-10">
               A comprehensive showcase of my recent projects — crafted with precision, clarity, and purpose.
             </p>
           </div>
   
           <div className="flex flex-col gap-20 sm:gap-28">
             {caseStudies.map((item, index) => (
               <CaseStudy key={index} {...item} />
             ))}
           </div>
   
         </div>
  )
}

export default Allcasestudy

