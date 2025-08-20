import React, { type ReactNode } from 'react'

interface ServiceCardProps {
className?:string;
icon?:ReactNode;
name?:string | ReactNode;
description?: string | ReactNode

}

const ServiceCard:React.FC<ServiceCardProps> = ({className,icon,name,description}) => {
  return (
   <div className={`${className}`}>
    <div className='flex flex-col gap-4 rounded-lg items-center service-card cursor-pointer px-6 py-8 justify-center gap-10 shadow-lg border border-primary'>
{icon && icon}
<div className='flex flex-col gap-1 items-center'>
<span className='text-lg'>{name}</span>
<span className='text-sm text-center'>{description}</span>
</div>
    </div>
    
   </div>
  )
}

export default ServiceCard