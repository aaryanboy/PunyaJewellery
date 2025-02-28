
"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Menu = () => {
    const [open, setOpen] = useState(false);

    const handleClose = (href: string) => {
        if (href) setOpen(false); // Close only if href is not empty
    };

    return (
        <div className="">
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
                    <Link href="" onClick={() => handleClose("")}>Products</Link>
                </div>
            )}
        </div>
    );
};

export default Menu;
