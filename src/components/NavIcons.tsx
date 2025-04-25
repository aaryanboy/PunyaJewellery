"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import CartModel from "./CartModel";


const NavIcons = () => {
   
    const [isCartOpen, setIsCartOpen] = useState(false);
    return (
        <div className="flex items-center gap-4 xl:gap-6">
       
            <a href="https://wa.me/9847465703" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp text-4xl"></i>
            </a>

            <Link href="/contactus">
            
               <div className="border-2 border-black rounded p-.5 hover:text-green-600 hover:border-green-600">ContactUs</div>
        
            </Link>
        
            {/* 
            {/* favourates 
           <div className="relative cursor-pointer">
           <Image src="/star.png" alt="" width={22} height={22}  onClick={()=>setIsCartOpen ((prev)=>!prev)}/>
           <div className="absolute -top-4 -right-4 w-6 h-6 bg-notification rounded-full text-white text-sm flex items-center justify-center">5</div>
           </div>
            {isCartOpen && (
                <div className="relative"><CartModel/></div>
                
            )} */}


        </div>
    );

}

export default NavIcons;