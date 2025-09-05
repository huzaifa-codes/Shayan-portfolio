import React from 'react';
import Button from './Button';
import SectionWrapper from './SectionWrapper';

// ProjectCardProps
type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  testimonial: string;
  author: string;
  avatarUrl?: string; 
  link: string;
  className?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
 

}) => {
  return (
<SectionWrapper>
 <div className="bg-white rounded-[36px] flex flex-col md:flex-row justify-between items-center max-w-[1407px] h-[700px] mx-auto overflow-hidden shadow-md">
      
      {/* Left Content With Padding */}
      <div className="flex flex-col justify-between h-full items-start max-w-[630px] py-20 px-10 md:p-20 font-jakarta">
        <div className="space-y-6">
          <h3 className="text-[35px]  font-jakarta leading-[36px] font-bold text-black">
            {title}
          </h3>

          <p className="text-[24px] font-jakarta   leading-[31px] text-gray-500">
          {description}
          </p>
        </div>

        <Button className="mt-10 px-8 py-4 text-[16px] text-white bg-black rounded-full">
          Password Protected
        </Button>
      </div>

      {/* Image - No Padding, Flush to the Side */}
      <div className="md:block border-none">
        <img
          src={imageUrl}
          alt="eLearning App"
          className="w-[700px] h-[700px] object-cover"
        />
      </div>
    </div>
       
</SectionWrapper>
   
  );
};

export default ProjectCard;
