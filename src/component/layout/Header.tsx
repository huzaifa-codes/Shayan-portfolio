import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionWrapper from "../shared/ui/SectionWrapper";
import Button from "../shared/ui/Button";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");


  // Apply dark/light mode class to body
  useEffect(() => {
    document.body.className = theme === "dark" ? "dark" : "";
  }, [theme]);

  return (
    <header className="w-full fixed top-0   py-7 z-20 bg-[#F5F5F0]">
      <SectionWrapper>
        <div className="flex items-center justify-between">

          <Link
            to="/"
            className="font-jakarta font-semibold text-[28px] sm:text-[30px] tracking-tight text-black"
          >
            Shayandesigns
          </Link>


         

          <div className="hidden md:flex items-center gap-10">
             <nav className="hidden md:flex items-center  gap-10 font-jakarta text-[16px] lg:text-[21px] text-black">
            <Link to="/" className="hover:opacity-80  font-jakarta">Home</Link>
            <Link to="/portfolio" className="hover:opacity-80">Portfolio</Link>
            <Link to="/about" className="hover:opacity-80">About</Link>
            <Link to="/contact" className="hover:opacity-80">Contact</Link>
          </nav>
            <Button
              className="bg-black text-white text-sm lg:text-base px-6 py-3 rounded-full hover:bg-neutral-800 transition-all"
  
            >
              Download Resume
            </Button>

            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-all"
              aria-label="Toggle Dark Mode"
            >
              <FaMoon size={16} />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="focus:outline-none"
            >
              {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[500px] mt-4" : "max-h-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 font-jakarta text-[18px] px-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Button
              className="bg-black text-white text-base px-6 py-3 rounded-full"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </header>
  );
}
