import React from 'react';
import Button from '../shared/ui/Button';
import SectionWrapper from '../shared/ui/SectionWrapper';

const Hero: React.FC = () => {
  return (
    <section className="w-full mt-6 sm:mt-20 px-4">
      <SectionWrapper>
        <div className="grid gap-12 items-center lg:grid-cols-2">
          {/* Text Column */}
          <div className=" lg:text-left">
            <h1 className="text-zinc-600 -tracking-wide leading-tight sm:leading-[1.2] text-[34px] sm:text-[46px] lg:text-[65px] break-words">
              <span>Senior </span>
              <span className="text-zinc-900 font-extrabold">UX Designer</span>
              <br />
              <span className="text-black">Build </span>
              <span className="text-zinc-600 font-extrabold">
                <span className="text-gray-800 text-[40px] sm:text-[65px] lg:text-[70px] ">60+</span> Projects
              </span>
              <br />
              <span className="text-black">
                for <span className="text-zinc-600">Designers</span>, <span className="text-zinc-800">Founders</span>, and Startups
                <span className="text-zinc-600">.</span>
              </span>
            </h1>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10 flex  lg:justify-start">
              <Button className="text-xl sm:text-2xl py-3.5 px-6">Partner With Me</Button>
            </div>
          </div>

  
          <div className=" w-full max-w-[620px] lg:ml-auto">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white shadow-sm ring-1 ring-black/5" />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Hero;
