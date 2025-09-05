import {
  SiBehance,
  SiDribbble,
  SiLinkedin,
  SiFigma,
  SiDiscord,
  SiInstagram,
  SiGoogle,
  SiReddit,
} from "react-icons/si";

const socialLinks = [
  { Icon: SiBehance, label: "Behance", href: "#", colorClass: "text-blue-600" },
  { Icon: SiDribbble, label: "Dribbble", href: "#", colorClass: "text-pink-600" },
  { Icon: SiLinkedin, label: "LinkedIn", href: "#", colorClass: "text-blue-700" },
  { Icon: SiFigma, label: "Figma", href: "#", colorClass: "text-green-600" },
  { Icon: SiDiscord, label: "Discord", href: "#", colorClass: "text-indigo-600" },
  { Icon: SiInstagram, label: "Instagram", href: "#", colorClass: "text-pink-500" },
  { Icon: SiGoogle, label: "Google", href: "#", colorClass: "text-red-600" },
  { Icon: SiReddit, label: "Reddit", href: "#", colorClass: "text-orange-500" },
];

export default function Footer() {
  return (
    <footer className="bg-white max-w-[1300px] w-full mx-auto rounded-[40px] px-6 sm:px-12 lg:px-20 py-10 mt-10 mb-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-black text-center lg:text-left">
        Let’s Connect!
      </h1>

      <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 text-3xl sm:text-4xl md:text-[40px] text-gray-700">
        {socialLinks.map(({ Icon, label, href, colorClass }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className={`${colorClass} transition-transform hover:scale-110 duration-300`}
          >
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  );
}
