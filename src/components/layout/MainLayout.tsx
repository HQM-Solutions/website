import React, { useEffect, u useRef, useState, type ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import bg from '@/assets/bg.png'
import { cn } from '@/lib/utils'

interface MainLayoutProps {
    children:ReactNode
}

const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
  const [currentScroll, setCurrentScroll] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setCurrentScroll(scrollRef.current.scrollTop);
      }
    };

    const node = scrollRef.current;
    if (node) {
      node.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (node) {
        node.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className={cn(
      "w-full h-screen overflow-hidden w-screen h-screen bg-center bg-no-repeat bg-cover bgbrightness-[0.1] bg-white bg-primarygradient-500",
      //
      // ?'bg-white':''
    )} 
      style={{ 
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.5) 100%),
          url(${bg})
        `,
        imageRendering: 'crisp-edges'
      }}
    >
      {/* NavBar */}
      <Navbar isOneScreenDown={window.innerHeight-currentScroll-64<0}/>
      <div ref={scrollRef} className='h-full overflow-y-auto'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
