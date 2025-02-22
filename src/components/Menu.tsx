"use client"

import Image from "next/image"
import { useState } from "react";
import Link from "next/link";

const Menu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="">
            <Image 
                src="/menu.png" 
                alt="" 
                width={28} 
                height={28} 
                className="cursor-pointer" 
                onClick={()=> setOpen((prev) => !prev)}
                />
                {open &&(
                    <div className="absolute left-0  bg-black text-white top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                        <Link  href="/" >homepage</Link>
                        <Link  href="/" >shop</Link>
                        <Link  href="/" >aboutpage</Link>
                    </div>
            )   }
        </div>
    );
    }
export default Menu;