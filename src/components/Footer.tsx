import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='flex  w-full items-center justify-center flex-col gap-4 bg-black  py-4 text-xs'>
        <div className="grid grid-cols-2 gap-4">
            <Link to={"https://www.instagram.com/hqmsolutions53"} target="_blank">
            <FaInstagram size={18} />
            </Link>
            <Link to={"https://www.linkedin.com/in/hqm-solutions-a34927369"} target="_blank" >
            <FaLinkedin  size={18} />
            </Link>
            

        </div>
        <span>© 2025 HQM Solution. All rights reserved.</span>
    </div>
  )
}

export default Footer