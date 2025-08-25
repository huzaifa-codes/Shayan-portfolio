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
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const updateDimensions = () => {
        const vw = window.innerWidth;
        setViewportWidth(vw);

        // Mobile breakpoint
        if (vw <= 640) {
          setIsMobile(true);
          setCardWidth(vw); // full width on mobile
        } else {
          setIsMobile(false);
          // Fixed card width for desktop (adjust as you like)
          const maxCardWidth = 1100;
          setCardWidth(Math.min(maxCardWidth, vw * 0.8));
        }
      };

      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    // Calculate x offset for desktop
    // We want:
    // pos 0: x = 0 (first card aligned left)
    // pos 1: x = -(cardWidth/2) + (viewportWidth/2 - cardWidth/2) = -(cardWidth - viewportWidth)/2 to center 2nd card
    // pos 2: x = -(cardWidth - viewportWidth) so right edge aligns with viewport right edge
    // For mobile: simple slide by cardWidth * position
const xPosition = (() => {
  if (isMobile) {
    return cardWidth * currentPosition;
  } else {
    switch (currentPosition) {
      case 0:
        return 0;
      case 1:
        return (cardWidth - viewportWidth) / 2;
      case 2:
        return cardWidth - viewportWidth;
      default:
        return cardWidth * currentPosition;
    }
  }
})();


    const handleDotClick = (index: number) => {
      if (index < 0 || index >= VISIBLE_DOTS) return;
      setCurrentPosition(index);
    };

    return (
      <div className="w-full bg-white py-16">
        {/* Title */}
        <div className="flex justify-around max-w-[1360px] mx-auto items-center px-4 sm:px-8">
          <div className="mb-12">
            <p className="font-heading text-black text-[26px] sm:text-[32px] leading-relaxed max-w-4xl mx-auto">
              <span className="text-zinc-600 ">Project</span>
              <br />
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
          className={`relative overflow-hidden mx-auto`}
          style={{
            width: "100vw",
            maxWidth: "100vw",
            touchAction: "pan-y",
            paddingLeft: isMobile ? 0 : 0,
            paddingRight: isMobile ? 0 : 0,
          }}
        >
          <motion.div
            className="flex gap-5"
            animate={{ x: xPosition }}
            transition={{ type: "spring", stiffness: 120, damping: 25 }}
            style={{ cursor: "grab" }}
          >
            {caseStudies.map((item, index) => (
              <div
                key={index}
                style={{
                  minWidth: cardWidth,
                  flexShrink: 0,
                  width: cardWidth,
                  maxWidth: 1100,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <CaseStudy
                  {...item}
                  isMobile={isMobile}
                  hideText={(!isMobile && index === 2)} 
                />
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
      </div>
    );
  };

  export default CaseStudySection;
