import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Button from '../shared/ui/Button';
import SectionWrapper from '../shared/ui/SectionWrapper';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 px-4">
      <SectionWrapper>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a className="font-heading text-black font-bold text-3xl  sm:text-[39px]">
            Shayandesigns
          </a>


          <ul className="hidden md:flex items-center gap-[46px] font-nav text-[18px] lg:text-[25px] text-zinc-900">
            <li><Link to={'/'}>Home</Link></li>
            <li><a href="#" className="hover:text-zinc-900">Portfolio</a></li>
            <li><a href="#" className="hover:text-zinc-900">About</a></li>
            <li><a href="#" className="hover:text-zinc-900">Contact</a></li>
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button className="text-[16px] lg:text-[20px]">Let’s Connect</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden ">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
              {isMenuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu - with animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
          }`}
        >
          <div className="mt-4 space-y-4 font-nav text-[20px] text-zinc-800">
            <a href="#" className="block hover:text-zinc-900">Home</a>
            <a href="#" className="block hover:text-zinc-900">Portfolio</a>
            <a href="#" className="block hover:text-zinc-900">About</a>
            <a href="#" className="block hover:text-zinc-900">Contact</a>
            <Button className="text-[18px] w-full">Let’s Connect</Button>
          </div>
        </div>
      </SectionWrapper>
    </header>
  );
}
