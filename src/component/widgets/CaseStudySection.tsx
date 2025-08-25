import { useState, useEffect, useRef } from "react";
import { caseStudies } from "../../data/Casestudy";
import Button from "../shared/ui/Button";
import CaseStudy from "../shared/ui/CaseStudy";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const VISIBLE_DOTS = 3;

const CaseStudySection: React.FC = () => {
  const navigate = useNavigate();
  const [currentPosition, setCurrentPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Updated width multiplier to reduce card width (45% of container)
  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setCardWidth(containerWidth * 0.45); // reduced from 0.6 to 0.45
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Adjust offsets proportional to new card width for smooth partial visibility
  const initialOffset = cardWidth * 0.45; // shifted less than before (previously 0.4 * 0.6 = 0.24 containerWidth, now ~0.2)
  const slideAmount = cardWidth * 0.75; // slightly bigger step to avoid overlapping cards

  const xPosition = -(initialOffset + currentPosition * slideAmount);

  const handleDotClick = (index: number) => {
    if (index < 0 || index >= VISIBLE_DOTS) return;
    setCurrentPosition(index);
  };

  return (
    <div className="w-full bg-white py-20">
      {/* Title */}
    <div className="flex justify-around max-w-[1360px] mx-auto items-center  ">
        <div className=" mb-12 px-4 sm:px-8">
        <p className="font-heading text-black text-[26px] sm:text-[32px] leading-relaxed max-w-4xl mx-auto">
         <span className="text-zinc-600 ">Project</span><br/>
Latest Projects
        </p>
      </div>

        <Button
          onClick={() => navigate("/Allcasestudy")}
          className="text-lg sm:text-xl px-8 py-3.5 rounded-full shadow-md transition-all hover:underline"
        >
          View All
        </Button>
    </div>

      {/* Carousel container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden w-full mx-auto"
        style={{ touchAction: "pan-y" }}
      >
        <motion.div
          className="flex gap-6"
          animate={{ x: xPosition }}
          transition={{ type: "spring", stiffness: 120, damping: 25 }}
          style={{ cursor: "grab" }}
        >
          {caseStudies.map((item, index) => (
            <div
              key={index}
              style={{ minWidth: cardWidth, flexShrink: 0 }}
            >
              <CaseStudy {...item} className = 'w-[1100px]' />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-4">
        {[...Array(VISIBLE_DOTS)].map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-colors ${
              currentPosition === index ? "bg-blue-600" : "bg-zinc-400"
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to position ${index + 1}`}
          />
        ))}
      </div>

      {/* View All Button */}
     
    </div>
  );
};

export default CaseStudySection;
