"use client";

import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import NavIcons from "./NavIcons";
import FluOutLink from "./FluOutLink";
import { useState } from "react";
const Navbar = () => {
  return (
    <>
    <div className="h-20"></div>

   

    <div className="h-20 bg-white/50 backdrop-blur-md px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64  fixed top-0 z-50 w-full">


      {/* Mobile */}
      <div className="h-full flex   items-center justify-between md:hidden">
        
        <Link href="/" >
        <div className="flex items-center gap-2">
  <Image src="/logonobackground.png" alt="" width={54} height={54} quality={100} />
  <div className="text-2xl tracking-wide whitespace-nowrap font-serif">Punya Jewellery</div>
</div>

        </Link>
        
        <Menu />
      </div>

      
      {/* Larger screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
        <Link href="/" className="flex items-center gap-3">
  <Image src="/logonobackground.png" alt="" width={54} height={54} quality={100} />
  <div className="hidden md:block text-2xl tracking-wide pr-3 whitespace-nowrap font-serif">
    Punya Jewellery
  </div>
</Link>

          
          <FluOutLink />


        </div>

        {/* Right */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-end gap-8">   
            

          {/* <div className="hidden xl:flex">
            <SearchBar />
          </div> */}
          <NavIcons />

           {/* GLOD PRICES CHANGES AT 11 AM EVERYDAY EXPLANE THIS? */}
    {/* helllo worls */}
    
        </div>
      </div>
    </div>
    </>
  );

};

export default Navbar;
