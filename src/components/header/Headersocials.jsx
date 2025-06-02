import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Headersocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://www.linkedin.com/in/suresh-kumar-i-a19ba170/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/techexpertsuresh"  target='_blank'><FaGithub /></a>
        <a href="" target='_blank'><FaWhatsapp/></a>
      
    </div>
  )
}

export default Headersocials
