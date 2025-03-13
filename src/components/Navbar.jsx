import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div className='bg-transparent '>
      <nav className='hidden md:block'>
        <ul className='flex gap-10 items-center justify-end text-white text-2xl font-semibold'>
          <NavLink to={'/'} className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer `}><li >About</li></NavLink>
          <NavLink to={'/resume'} className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer `}><li >Resume</li></NavLink>
          <NavLink to={'/portfolio'} className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer `}><li >Portfolio</li></NavLink>
          {/* <NavLink to={'/blog'} className={({isActive})=> `${isActive ? "text-yellow-500": "text-white"} cursor-pointer `}><li >Blog</li></NavLink> */}
          <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer `}><li >Contact</li></NavLink>
        </ul>
      </nav>
      <div className='justify-end flex text-xl md:hidden'>
        <Menu className='text-yellow-600 ' onClick={toggle} />

      </div>
      <ResponsiveMenu open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Navbar
