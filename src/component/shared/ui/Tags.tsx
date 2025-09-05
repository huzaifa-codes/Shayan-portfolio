import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaClipboardList,
  FaUserFriends,
  FaClock,
  FaMobileAlt,
  FaDesktop,
  FaFeather,
  FaBook,
  FaReact,
  FaThumbsUp,
} from "react-icons/fa";

const tags: { icon: IconType; text: string; color: string; textColor: string }[] = [
  { icon: FaClipboardList, text: "50+ Projects", color: "bg-orange-50", textColor: "text-orange-700" },
  { icon: FaUserFriends, text: "40+ Clients", color: "bg-yellow-50", textColor: "text-yellow-700" },
  { icon: FaClock, text: "10+ Years in Dev", color: "bg-blue-50", textColor: "text-blue-700" },
  { icon: FaMobileAlt, text: "15+ Live Apps", color: "bg-green-50", textColor: "text-green-700" },
  { icon: FaDesktop, text: "35+ Websites", color: "bg-gray-50", textColor: "text-gray-700" },
  { icon: FaFeather, text: "UX Focused", color: "bg-indigo-50", textColor: "text-indigo-700" },
  { icon: FaBook, text: "API Builder", color: "bg-green-50", textColor: "text-green-700" },
  { icon: FaReact, text: "React Expert", color: "bg-red-50", textColor: "text-red-700" },
  { icon: FaThumbsUp, text: "Pixel Perfect", color: "bg-yellow-50", textColor: "text-yellow-700" },
];

function TagItem({ icon: Icon, text, color, textColor }: { icon: IconType; text: string; color: string; textColor: string }) {
  return (
    <span
      className={`flex items-center gap-3 px-12 py-[14px] rounded-[20px]  font-semibold text-lg whitespace-nowrap  cursor-default transition transform hover:scale-105 ${color} ${textColor} select-none`}
    >
      <Icon className="text-xl" />
      {text}
    </span>
  );
}

export default function TagsStrip() {
  const scrollingTags = [...tags, ...tags]; // Double for seamless scroll

  return (
    <section className="relative w-full overflow-hidden py-10">
      {/* Side gradient fades */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-white to-transparent z-20" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-white to-transparent z-20" />

      {/* Top row → Left to Right */}
      <motion.div
        className="flex gap-6 mb-8"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {scrollingTags.map((tag, i) => (
          <TagItem key={`top-${i}`} {...tag} />
        ))}
      </motion.div>

      {/* Bottom row → Right to Left */}
      <motion.div
        className="flex gap-6"
        initial={{ x: "-50%" }}
        animate={{ x: 0 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {scrollingTags.map((tag, i) => (
          <TagItem key={`bottom-${i}`} {...tag} />
        ))}
      </motion.div>
    </section>
  );
}
