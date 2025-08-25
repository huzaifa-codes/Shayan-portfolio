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

// Define tags with bigger padding colors
const tags: { icon: IconType; text: string; color: string }[] = [
  { icon: FaClipboardList, text: "50+ Projects", color: "bg-orange-100 text-orange-800" },
  { icon: FaUserFriends, text: "40+ Clients", color: "bg-yellow-100 text-yellow-800" },
  { icon: FaClock, text: "10+ Years in Dev", color: "bg-blue-100 text-blue-800" },
  { icon: FaMobileAlt, text: "15+ Live Apps", color: "bg-green-100 text-green-800" },
  { icon: FaDesktop, text: "35+ Websites", color: "bg-gray-100 text-gray-700" },
  { icon: FaFeather, text: "UX Focused", color: "bg-indigo-100 text-indigo-700" },
  { icon: FaBook, text: "API Builder", color: "bg-green-100 text-green-700" },
  { icon: FaReact, text: "React Expert", color: "bg-red-100 text-red-700" },
  { icon: FaThumbsUp, text: "Pixel Perfect", color: "bg-yellow-100 text-yellow-700" },
];

function TagItem({ icon: Icon, text, color }: { icon: IconType; text: string; color: string }) {
  return (
    <span
      className={`flex items-center gap-3 px-10 py-4 rounded-2xl font-semibold text-lg whitespace-nowrap ${color}`}
    >
      <Icon className="text-2xl" />
      {text}
    </span>
  );
}

export default function TagsStrip() {
  const scrollingTags = [...tags, ...tags]; // Double the list for seamless loop

  return (
    <div className="relative w-full overflow-hidden py-10 bg-white mt-20">
      {/* Gradient shadows on both sides */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

      {/* First Row → Left to Right */}
      <motion.div
        className="flex gap-6 mb-6"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {scrollingTags.map((tag, i) => (
          <TagItem key={`row1-${i}`} {...tag} />
        ))}
      </motion.div>

      {/* Second Row → Right to Left */}
      <motion.div
        className="flex gap-6"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {scrollingTags.map((tag, i) => (
          <TagItem key={`row2-${i}`} {...tag} />
        ))}
      </motion.div>
    </div>
  );
}


