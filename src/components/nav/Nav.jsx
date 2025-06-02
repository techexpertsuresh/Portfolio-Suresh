import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import './nav.css'
const Nav = () => {
const [activeNav,setactiveNav] = useState("#");
  return (
    <nav className='nav'>
        <a href="#"  onClick={()=>setactiveNav("#")}   className={activeNav === '#' ? "active" : ""}><AiOutlineHome /></a>
        <a href="#about" onClick={()=>setactiveNav("#about")} className={activeNav === '#about' ? "active" : ""}><AiOutlineUser /></a>
        <a href="#experience"  onClick={()=>setactiveNav("#experience")} className={activeNav === '#experience' ? "active" : ""}><BiBook /></a>
        <a href="#services"  onClick={()=>setactiveNav("#services")} className={activeNav === '#services' ? "active" : ""}><RiServiceLine/></a>
        <a href="#contact"  onClick={()=>setactiveNav("#contact")} className={activeNav === '#contact' ? "active" : ""}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
