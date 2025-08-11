import React, { type ReactNode } from 'react'
import Navbar from '../components/Navbar'

interface MainLayoutProps {
    children:ReactNode
}

const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
  return (
  <>
  <div className=' h-screen overflow-hidden'>
    
    {/* NavBar */}
    

    <Navbar/>

<div className='h-full overflow-y-auto'>
    {children}
    </div>
  </div>
  </>
  )
}

export default MainLayout