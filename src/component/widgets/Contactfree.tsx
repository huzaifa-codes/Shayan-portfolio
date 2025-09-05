import Button from "../shared/ui/Button";
import SectionWrapper from "../shared/ui/SectionWrapper";

export default function ContactConsultancySection() {
  return (
    <SectionWrapper>
  <section
      className="bg-black rounded-[40px] lg:rounded-[80px]
                 px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20 
                 flex flex-col lg:flex-row items-center gap-10 lg:gap-12"
    >
      {/* Left Content */}
      <div className="flex-1 text-white max-w-2xl text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold mb-4 lg:mb-6">
          Let’s Contact Free Consultancy!
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-semibold mb-4 lg:mb-6 leading-snug text-gray-200">
          Want to Build a Scalable Design from Scratch?
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-[23px] font-normal leading-relaxed text-gray-300 mb-6 lg:mb-10">
          Let’s connect for a free consultancy. I’ll guide you step by step on
          how to build a design from scratch that is scalable, user-friendly,
          and impactful.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
          <Button className="bg-white text-black rounded-full px-6 py-3 sm:px-8 sm:py-3 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
            Book A Meeting
          </Button>
          <Button className="border border-white text-white rounded-full px-6 py-3 sm:px-8 sm:py-3 font-semibold hover:bg-white hover:text-black transition-colors duration-300">
            Partner With Me
          </Button>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 w-full max-w-[500px]">
        <div className="bg-white rounded-md h-[200px] sm:h-[250px] md:h-[320px] lg:h-[460px] w-full" />
      </div>
    </section>
    </SectionWrapper>
  
  );
}
