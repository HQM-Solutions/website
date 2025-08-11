import React from 'react'
import navIcon from '../assets/logo.png'
import Button from './Button'

interface NavbarProps{

}

const Navbar:React.FC<NavbarProps> = () => {

    const navItems = [
        {
            name:"Services"
        },
        {
            name:"Portfolio"
        },
        {
            name:"Our Edge"
        },
        {
            name:"Contact"
        }
    ]
  return (
   <>
   <nav className='flex   backdrop-blur-sm justify-around'>
    {/* Logo */}
    <div className='flex items-center gap-[-1px]'>
        <div className='self-start'>
    <img src={navIcon} alt="navicon" className="h-16 w-auto" />
    </div>
    <div className='flex flex-col ms-[-12px] '>
        <span className='primarytext font-bold'>HQM SOLUTIONS</span>
        <span className='text-[8px] mt-[-3px]'>Pixels to Platforms, We Do It All</span>
    </div>
     </div>

     <div className='flex items-center gap-6 '>
     {navItems?.map((item, idx)=> <div key={idx} className='text-sm font-light cursor-pointer'>
        <span>{item?.name}</span>
      </div>)}
     </div>
     <div className='flex items-center justify-center'>

     <Button buttonText="Let's Talk" buttonClassName={"px-6 py-2 rounded-lg primarybtn "}/>
     </div>


   </nav>
   </>
  )
}

export default Navbar