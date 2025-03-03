"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";

const MobileMenu = ({ handleClose }: { handleClose: (href: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCategory = (category: 'gold' | 'silver') => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="flex items-center">
        Products {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="mt-3">
          <div>
            <button onClick={() => { toggleCategory('gold'); handleClose('/Products/Gold'); }} className="w-full flex justify-between">
              <Link href="/Products/Gold">Gold</Link> {activeCategory === 'gold' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {activeCategory === 'gold' && (
              <ul className="pl-6 text-sm">
                <li className="py-1">Necklaces</li>
                <li className="py-1">Rings</li>
                <li className="py-1">Bracelets</li>
              </ul>
            )}
          </div>
          <div className="mt-2">
            <button onClick={() => { toggleCategory('silver'); handleClose('/Products/Silver'); }} className="w-full flex justify-between">
            <Link href="/Products/Silver">Silver</Link>  {activeCategory === 'silver' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {activeCategory === 'silver' && (
              <ul className="pl-6 text-sm">
                <li className="py-1">Earrings</li>
                <li className="py-1">Chains</li>
                <li className="py-1">Pendants</li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (href: string) => {
    if (href) setOpen(false);
  };

  return (
    <div>
      <Image 
        src="/menu.png" 
        alt="Menu Icon" 
        width={28} 
        height={28} 
        className="cursor-pointer" 
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute left-0 bg-gray-900 bg-opacity-85 text-white top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/" onClick={() => handleClose("/")}>Home</Link>
          <Link href="/about" onClick={() => handleClose("/about")}>About us</Link>
          <MobileMenu handleClose={handleClose} />
        </div>
      )}
    </div>
  );
};

export default Menu;