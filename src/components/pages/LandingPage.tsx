import Button from "@/components/Button"
import bg from '../../assets/bg.mp4'
import Typed from "typed.js";
import React, { useEffect, useRef } from "react";
import ServiceCard from "../ServiceCard";
import { LuPencil } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { IoImageOutline } from "react-icons/io5";

const LandingPage = () => {
   const auto = useRef<HTMLSpanElement>(null); 
  const typed = useRef<Typed | null>(null);

  const services=[
    {icon:<LuPencil size={24}/>,name:"UI/UX Design",description:"Intuitive and beautiful interfaces that captivate users." },
    {icon:<FaCode  size={24}/>,name:"Web & App Dev",description:"High-performance applications for web and mobile platforms." },
    {icon:<IoIosVideocam   size={24}/>,name:"Video Editing",description:"Compelling visual stories that engage and convert." },
    {icon:<IoImageOutline   size={24}/>,name:"Graphic Design",description:"Stunning visuals that define your brand's identity." },
  ]

useEffect(()=>{

    if (auto.current) {
      typed.current = new Typed(auto.current, {
        strings: ["Design to craft the unforgettable.", "Code to engineer the impossible.", "Develop to define the future."],
        typeSpeed: 70,
        backSpeed: 80,
        loop: true,
      });
    }

    return () => {
      
      if (typed.current) {
        typed.current.destroy();
      }
    };
},[])
  return (
  <div className="w-full  mx-auto">
    <div className="h-[calc(100vh-64px)] w-full flex flex-col items-center justify-center  font-bold">
    <div className="relative overflow-hidden h-full w-full"> 
 

    <video
      className="  w-full h-full object-cover object-bottom z-0 blur-[6px] " 
      src={bg}
      autoPlay
      muted
      loop
      
    />
  

 
  <div className="absolute inset-y-0 left-1/2  transform -translate-x-1/2 z-10 flex flex-col w-full justify-center items-center text-white gap-6 px-6 text-center">
    
        <h1 className="text-center leading-[1.24] font-bold text-6xl">We <span className="auto" ref={auto}></span></h1>
        <p className="text-primary-500 text-lg text-center w-1/2">We are a digital services company specializing in UI/UX Design, Development, Video Editing, and Graphic Design. We build the future, today. Start Your Project</p>
    
         <Button buttonText="Start Your Project" buttonClassName={"text-lg mx-auto px-8 py-3 rounded-lg primarybtn"}/>
        
     
  </div>
</div>

    </div>
    <div className="bg-black h-[calc(100vh)] flex flex-col  justify-center  font-bold">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center justify-center">
        <h1 className=" text-center leading-[1] font-bold text-5xl">What We Do</h1>
        <p className="text-primary-500 text-lg text-center">Our core services to elevate your brand.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-6 md:px-8 lg:px-10 gap-4 sm:gap-6 md:gap-8">
        {services?.map((data,idx)=><React.Fragment key={idx}><ServiceCard icon={data?.icon} name={data?.name} description={data?.description}/></React.Fragment>)}
       
        </div>
      </div>
    </div>
    
  </div>)
}

export default LandingPage
