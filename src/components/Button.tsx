import React, { type ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string; 
  iconComponent?: ReactNode; 
  buttonText?: string | number;
  buttonClassName?:string
  iconClassName?:string,
  textClassName?:string,
  iconStart?:boolean
  
}
const Button:React.FC<ButtonProps> = ({icon,iconComponent,buttonText,buttonClassName,iconClassName,textClassName,iconStart=true,...props}) => {
  return (
    <button className={`inline-flex items-center transition-colors cursor-pointer duration-200 border-none  outline-none focus:outline:none`} {...props}>
       <div className={`flex items-center ${buttonClassName}`}>

     {iconStart &&
     <>  
      {icon && <img src={icon} alt='btnicon' className={`${iconClassName}`}/>}
        {iconComponent && iconComponent}
        </>
        }
        <span className={`${textClassName}`}>{buttonText}</span>
         {!iconStart &&
     <>  
      {icon && <img src={icon} alt='btnicon ' className={`${iconClassName}`}/>}
        {iconComponent && iconComponent}
        </>
        }
       </div>
    </button>
  )
}

export default Button