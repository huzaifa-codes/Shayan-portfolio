import React from "react";
import SectionWrapper from "../shared/ui/SectionWrapper";
import { useConContext } from "../../contaxt/useConContext";
  
const HeroSection: React.FC = () => {

   const { setContect } = useConContext();
  return (
    <SectionWrapper>
      <section className="mt-[130px]">
      <div className="relative rounded-[30px] bg-white p-10 md:p-14 overflow-hidden">
        {/* ✅ Bottom Fade Effect */}
        <div className="absolute inset-0 rounded-[36px] pointer-events-none z-0">
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#F5F5F0] to-transparent rounded-b-[36px]" />
        </div>

        {/* Main Grid */}
        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center font-jakarta">
          {/* Left Content */}
          <div className="space-y-8">
            <span className="inline-flex items-center px-5 py-2 text-[15px] font-medium border border-green-500 rounded-full bg-white text-black shadow-sm">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Available For Projects
            </span>

            <h1 className="text-[40px] leading-[56px] font-bold tracking-[-0.02em] text-black">
              Sr. UX Designer <br />
              Helping Founders & <br />
              Startups Build <br />
              Products Users Love
            </h1>

            <div className="flex flex-wrap gap-4">
              <button onClick={()=> setContect(true)} className="bg-black text-white px-8 py-[14px] rounded-full text-lg hover:bg-neutral-800 transition-all">
                Let’s Connect
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-neutral-800 transition-all">
                View Recent Work – Figma
              </button>
            </div>
          </div>

          {/* Right Placeholder Box */}
          <div className="w-full h-[320px] md:h-[400px] bg-white rounded-[32px] shadow-inner"></div>
        </div>
      </div>
    </section>
    </SectionWrapper>
  );
};

export default HeroSection;
