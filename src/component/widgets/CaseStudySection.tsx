import { useNavigate } from "react-router-dom";
import { caseStudies } from "../../data/Casestudy";
import Button from "../shared/ui/Button";
import CaseStudy from "../shared/ui/CaseStudy";


export default function CaseStudySection() {
  const Navigate = useNavigate()
  return (

      <div className="max-w-[1430px] mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-600 mt-4 font-perah text-[26px] sm:text-[30px] py-10">
            A selection of my recent work — clean, thoughtful, and purposeful.
          </p>
        </div>

        <div className="flex flex-col gap-20 sm:gap-28">
          {caseStudies.slice(0  , 4).map((item, index) => (
            <CaseStudy key={index} {...item} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button  onClick={()=> Navigate('/Allcasestudy')} className="text-2xl sm:text-[23px] py-3.5 px-8 sm:px-12">
            View Full Portfolio
          </Button>
        </div>
      </div>
  );
}
