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

  return (
    <SectionWrapper>
      <section className="mt-10 bg-white sm:rounded-[40px] shadow-md overflow-hidden">
        <div className="px-4 sm:px-6 py-10 text-center">
          <h2 className="text-[30px] sm:text-3xl md:text-4xl font-heading text-gray-800 mb-10">
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
                  className={`px-5 py-2 rounded-full font-medium text-base sm:text-lg md:text-xl transition-all
                    ${
                      isActive
                        ? "bg-indigo-100 text-indigo-900"
                        : "bg-white text-gray-600 hover:bg-gray-100"
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
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              {[...filteredProjects, ...filteredProjects].map((project, i) => (
                <div
                  key={i}
                  className="w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px]    text-left flex-shrink-0"
                >
                  <div className="aspect-[5/6] bg-gray-200 rounded-xl mb-2" />
                  <p className="text-base sm:text-lg md:text-xl font-heading font-bold text-gray-600">
                    {project.title}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Fade Gradients */}
            <div className="absolute top-0 left-0 h-full w-10 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-10 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button className="hover:bg-indigo-200 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-md">
              View My Recent Work In Figma
            </Button>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
