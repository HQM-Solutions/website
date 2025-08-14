import React from 'react'
import navIcon from '@/assets/logo.png'
import Button from '@/components/Button'
import { navItems } from '@/constants/landingPage'
import { cn } from '@/lib/utils'

const Navbar:React.FC<{
	isOneScreenDown: boolean;
}> = ({
  isOneScreenDown,
}) => {
  return (
   <nav className={cn(
      "grid grid-cols-[1fr_auto_1fr] items-center w-full max-w-[1440px] mx-auto px-3 gradient-bg gradient-transparent",
      isOneScreenDown && "gradient-primary",
    )}>
     {/* Logo */}
     <div className='flex items-center gap-[-1px]'>
       <div className='self-start'>
         <img src={navIcon} alt="navicon" className="h-16 w-auto" />
       </div>
       <div className='flex flex-col ms-[-12px]'>
         <span className={cn(
            'font-bold gradient-text gradient-primary',
            isOneScreenDown && 'gradient-white'
          )}>HQM SOLUTIONS</span>
         <span className='text-[8px] mt-[-3px]'>Pixels to Platforms, We Do It All</span>
       </div>
     </div>
     <div className='flex items-center gap-6 '>
       {navItems?.map((item, idx)=> <div key={idx} className='text-sm font-light cursor-pointer'>
          <a href="#" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">{item?.name}</a>
        </div>)}
     </div>
     <div className='flex items-center justify-end'>
       <Button 
          buttonText="Let's Talk" 
          textClassName={cn("gradient-text", isOneScreenDown ? "gradient-primary" : "gradient-white")}
          buttonClassName={cn(
            "px-6 py-2 rounded-lg hover:shadow-primary gradient-bg gradient-primary", 
            isOneScreenDown && "gradient-white"
          )}
        />
     </div>
   </nav>
  )
}

export default Navbar
