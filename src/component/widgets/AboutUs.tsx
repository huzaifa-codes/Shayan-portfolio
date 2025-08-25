import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../shared/ui/Button";
import SectionWrapper from "../shared/ui/SectionWrapper";

type AboutEntry = {
  type: string;
  title: string;
  companyOrSchool: string;
  role?: string;
  from: string;
  to: string;
};


const aboutEntries: AboutEntry[] = [
  {
    type: "Experience",
    title: "UX Designer",
    companyOrSchool: "Hudasoft",
    role: "Full-Time",
    from: "Jun 2019",
    to: "Dec 2022",
  },
  {
    type: "Education",
    title: "Bachelor of Computer Science",
    companyOrSchool: "DHA Suffa University",
    from: "Jun 2019",
    to: "Dec 2022",
  },
];

// ✅ Component
export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <SectionWrapper>
      <div className="py-20 px-4  flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Column */}
        <div className="flex-shrink-0 lg:w-1/3">
          <p className="text-[38px] sm:text-[44px] lg:text-[54px] font-semibold text-zinc-600">
            About Me
          </p>
        </div>

        {/* Right Column */}
        <div className=" space-y-7">
          <h2 className="text-[30px] sm:text-[38px] lg:text-[55px] font-heading font-bold text-gray-700 leading-snug">
            I’m Shayan — a UX Designer <br/>
            from Pakistan. I love to design.
          </h2>

          {/* Expandable Content */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                className="space-y-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-6">
                  {aboutEntries.map((item, i) => (
                    <div key={i}>
                      <h3 className="text-[28px] sm:text-[34px] font-semibold text-gray-500 mb-2">
                        {item.type}
                      </h3>
                      <p className="text-gray-700 text-xl sm:text-2xl font-medium">
                        {item.title} - {item.companyOrSchool}
                      </p>
                      {item.role && (
                        <p className="text-lg sm:text-xl text-gray-700">{item.role}</p>
                      )}
                      <p className="text-lg sm:text-xl text-gray-500">
                        {item.from} – {item.to}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Button */}
          <Button
            onClick={() => setExpanded((prev) => !prev)}
            className="hover:bg-indigo-200 text-base sm:text-lg px-6 py-3"
          >
            {expanded ? "See Less" : "See More"}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
