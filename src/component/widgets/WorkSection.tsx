import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../shared/ui/Button";
import SectionWrapper from "../shared/ui/SectionWrapper";

const filters = ["All", "Mobile Apps", "Dashboard", "Website"];

interface Project {
  title: string;
  category: string;
}

const allProjects: Project[] = [
  { title: "Laundry App", category: "Mobile Apps" },
  { title: "Food Delivery", category: "Mobile Apps" },
  { title: "Fitness Tracker", category: "Mobile Apps" },
  { title: "Community Management", category: "Dashboard" },
  { title: "Admin Panel", category: "Dashboard" },
  { title: "Analytics Board", category: "Dashboard" },
  { title: "Portfolio Website", category: "Website" },
  { title: "Landing Page", category: "Website" },
  { title: "E-commerce Site", category: "Website" },
];

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  // Fix animation speed: base time per item is constant based on "All" category duration (40s)
  const baseTimePerItem = 40 / allProjects.length; // 40s divided by total items (9)
  const animationDuration = filteredProjects.length * baseTimePerItem;

  return (
    <SectionWrapper>
      <section className="mt-10 bg-white sm:rounded-[40px] shadow-xl overflow-hidden border border-gray-200">
        <div className="px-4 sm:px-6 py-12 text-center max-w-7xl mx-auto">
          <h2 className="text-[30px] sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Want To See My Work
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full font-medium text-sm sm:text-base transition-all border
                    ${
                      isActive
                        ? "bg-indigo-100 text-indigo-800 border-indigo-300"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Marquee Section */}
          <div className="relative overflow-hidden mb-16">
            <motion.div
              className="flex gap-6 w-max"
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{ repeat: Infinity, duration: animationDuration, ease: "linear" }}
              // key helps re-trigger animation on filter change
              key={activeFilter}
            >
              {[...filteredProjects, ...filteredProjects].map((project, i) => (
                <div
                  key={i}
                  className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[390px] flex-shrink-0"
                >
                  <div className="aspect-[4/4] bg-gray-100 rounded-xl shadow-sm flex items-center justify-center text-gray-400 text-xl font-semibold mb-3">
                    Preview
                  </div>
                  <p className="text-base sm:text-[20px] text-start font-semibold text-gray-700">
                    {project.title}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button className="  text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition-all">
              View My Recent Work In Figma
            </Button>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
