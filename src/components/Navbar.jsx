import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ResponsiveMenu from './ResponsiveMenu'
import Logo from "../assets/Logo.png"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div className='md:bg-transparent bg-gray-800 rounded-2xl'>
      <nav className='hidden md:block'>
        <ul className='flex gap-10 items-center justify-end text-white text-2xl font-semibold'>
          <NavLink to={'/'} className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer `}><li >About</li></NavLink>
          <NavLink to={'/resume'} className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer `}><li >Resume</li></NavLink>
          <NavLink to={'/portfolio'} className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer `}><li >Portfolio</li></NavLink>
          {/* <NavLink to={'/blog'} className={({isActive})=> `${isActive ? "text-yellow-500": "text-white"} cursor-pointer `}><li >Blog</li></NavLink> */}
          <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer `}><li >Contact</li></NavLink>
        </ul>
      </nav>
      <div className='flex justify-between items-center text-xl md:hidden  px-5 '>
        {/* <h1 className='text-white font-bold'>Rohit Singh</h1> */}
        <img src={Logo} alt="" className='w-20'/>
        <Menu className='text-yellow-500 ' onClick={toggle} />

      </div>
      <ResponsiveMenu open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Navbar
