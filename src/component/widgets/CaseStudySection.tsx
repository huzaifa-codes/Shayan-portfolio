import React from "react";
import ProjectCard from "../shared/ui/CaseStudy";
import Button from "../shared/ui/Button";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  testimonial: string;
  author: string;
  avatarUrl?: string;
  className?: string;
  link: string;
}

const projects: ProjectCardProps[] = [
  {
    title: "Lustra",
    description:
      "Fast, elegant, and conversion-focused, it’s built to boost bookings and build trust.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/18149760/file/original-2f6ca7db3c49d72b5304be01d797227b.png?format=webp&resize=400x300&vertical=center",
    link: "/project/lustra",
    testimonial:
      "More bookings. Less hassle. The site does its job perfectly and looks great doing it.",
    author: "Samantha R., CEO",
    avatarUrl: "/images/avatar.jpg",
  },
  {
    title: "Streamline",
    description:
      "Optimize workflows and deliver smooth client experiences with ease.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/15399318/file/original-f811860cddde0e16cf2d421fc4d657c3.png?format=webp&resize=400x300&vertical=center",
    link: "/project/streamline",
    testimonial:
      "The clean UI made onboarding a breeze and boosted our sales.",
    author: "Alex M., Founder",
    avatarUrl: "/images/avatar2.jpg",
  },
  {
    title: "Pulse",
    description:
      "Stay ahead of the curve with modern solutions made for growing teams.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/16860421/file/original-15eb54b109d3e915dbeedafeb3fdc15a.png?format=webp&resize=400x300&vertical=center",
    link: "/project/pulse",
    testimonial: "It’s professional, reliable, and our customers love it.",
    author: "Kira T., Manager",
    avatarUrl: "/images/avatar3.jpg",
  },
];

const CaseStudySection: React.FC = () => {
  return (
    <div className="relative z-0">
      {/* ✅ Bottom gradient overlay — starts from bottom and fades gently upward */}
      <div className="absolute bottom-0 left-0  right-0 h-[1700px] z-[-2] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t rounded-[80px] max-w-[1500px] mx-auto  from-white via-white/0 to-transparent rounded-t-[100px]" />
      </div>

      {/* ✅ Main content */}
      <div className="px-4 pt-32 space-y-20">
        {/* Title */}
        <h2 className="text-[36px] text-black font-jakarta sm:text-[44px] lg:text-[48px] font-bold text-center">
          Some Of My Selected Projects
        </h2>

        {/* Project Cards */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* View All Button */}
        <div className="  flex justify-center">
          <Button className="px-14 py-3 bg-black text-white mb-10 rounded-full text-[18px]">
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySection;
