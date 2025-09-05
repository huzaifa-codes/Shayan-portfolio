import React from "react";
import SectionWrapper from "../shared/ui/SectionWrapper";
import Button from "../shared/ui/Button";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-[#F5F5F0] py-24">
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-10 items-start font-jakarta">
          {/* Left Side – Heading */}
          <h2 className="text-[40px] md:text-[48px] font-bold text-black">
            About Me
          </h2>

          {/* Right Side – Paragraph + Button */}
          <div className="space-y-6">
            <p className="font-jakarta text-[24px] leading-[36px] font-semibold capitalize text-gray-600">
              I’m Shayan, a UX designer who turns ideas into simple, meaningful experiences.
            </p>
            <p className=" font-jakarta text-[24px] font- leading-[36px] font-semibold capitalize text-gray-600">
              My goal is to design with empathy—making every interaction easy, enjoyable, and unforgettable.
            </p>

            <div className="pt-4">
              <Button className="text-[16px] px-8 py-3 rounded-full bg-black text-white">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default AboutSection;
