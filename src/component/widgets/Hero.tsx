import React from 'react';
import Button from '../shared/ui/Button';
import SectionWrapper from '../shared/ui/SectionWrapper';

const Hero: React.FC = () => {
  return (
    <section className="w-full mt-6 sm:mt-20 px-4">
      <SectionWrapper>
        <div className="grid gap-12 items-center lg:grid-cols-2">
          {/* Text Column */}
          <div className="lg:text-left">
            <h1 className="font-heading sm:leading-[1.6] text-[34px] sm:text-[46px] lg:text-[65px] break-words text-black">
              Senior UX Designer
              <br />
              Build{' '}
              <span className="text-gray-600 text-[40px] sm:text-[65px] lg:text-[70px] font-heading">
                60+
              </span>{' '}
              Projects
              <br />
              for{' '}
              <span className="text-gray-600">Designers</span>,{' '}
              <span className="text-gray-600">Founders</span>, and{' '}
              <span className="text-black">Startups</span>.
            </h1>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10 flex lg:justify-start">
              <Button className="text-xl sm:text-2xl py-3.5 px-6">Partner With Me</Button>
            </div>
          </div>

          <div className="w-full max-w-[620px] lg:ml-auto">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white shadow-sm ring-1 ring-black/5" />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Hero;
