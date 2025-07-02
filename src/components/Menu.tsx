"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";

const MobileMenu = ({ handleClose }: { handleClose: (href: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleMenu} className="flex items-center">
        Products {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="mt-3 flex flex-col gap-2 text-lg">
          <Link href="/Products/Gold" onClick={() => handleClose('/Products/Gold')}>    {/* change this */}
            Gold
          </Link>
          <Link href="/Products/Silver" onClick={() => handleClose('/Products/Silver')}>
            Silver
          </Link>
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
          <Link href="/about" onClick={() => handleClose("/about")}>About Us</Link>
          <MobileMenu handleClose={handleClose} />
          <Link href="/blogs" onClick={() => handleClose("/blogs")}>Blogs</Link>
          <Link href="/contactus" onClick={() => handleClose("/contactus")}>Contact Us</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
