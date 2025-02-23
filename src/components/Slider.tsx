"use client"

import Link from "next/link";
import { title } from "process";
import { use, useEffect, useState } from "react";
import Image from "next/image";



const slides=[
    {
        id: 1,
        title:"slide 1",
        img:"https://images.pexels.com/photos/30824250/pexels-photo-30824250/free-photo-of-playful-seals-on-rocky-san-diego-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description:"description 1",
        url:"/",
        bg:" bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title:"slide 2",
        img:"https://images.pexels.com/photos/30824250/pexels-photo-30824250/free-photo-of-playful-seals-on-rocky-san-diego-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description:"description 2",
        url:"/",
        bg:" bg-gradient-to-r from-gray-50 to-black-50",
    },
    {
        id: 3,
        title:"slide 3",
        img:"https://images.pexels.com/photos/30824250/pexels-photo-30824250/free-photo-of-playful-seals-on-rocky-san-diego-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description:"description 3",
        url:"/",
        bg:" bg-gradient-to-r from-blue-50 to-white-50",
    }, 
]

const Slider = () => {

    const [current, setCurrent] = useState(0);
//     useEffect(() => {
//         const interval = setInterval(() => {
// setCurrent(prev => (prev===slides.length-1 ? 0: prev+1))
//         },3000);

//         return () => clearInterval(interval);
//     })
    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden ">
            <div 
            className="w-max h-full flex transition-all ease-in-out duration-1000"
            style={{ transform: `translateX(-${current * 100}vw)` }}
            >

            {slides.map((slide) => (
                <div 
                className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} 
                key={slide.id}
                >
                    {/* textcontainer */}
                    <div 
                    className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">

                        <h2 className=" text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                        <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold ">{slide.title}</h1>
                        <Link href={slide.url}><button className="rounded-md bg-black text-white py-3 px-4">Shop now</button></Link>
                    </div>

                    {/* imagecontainer */}
                    <div className="h-1/2 xl:w-1/2 xl:h-full relative">

                        <Image src={slide.img} alt="" fill sizes="100%" className="object-cover"/>
                    </div>
                </div>
            ))}
            
            </div>
            
                <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
                {slides.map((slide,index) => (
                    <div 
                    className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current ===index ? "scale-150": ""}`}  
                    key={slide.id} 
                    onClick={()=> setCurrent(index)}
                     >
                        {current ===index && (<div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                        )}</div>
                ))}
                </div>
                </div>
    );


}
export default Slider;