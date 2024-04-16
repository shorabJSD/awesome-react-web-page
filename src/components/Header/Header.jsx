import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className='header flex items-center justify-between gap-10'>
      <img src={logo}  alt='' className='logo'/>
      <div className="header_menu">
        <ul className='flex gap-5 text-sm pointer text-white'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Programs</li>
            <li className='cursor-pointer'>Why us</li>
            <li className='cursor-pointer'>Plans</li>
            <li className='cursor-pointer'>Testimonials</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
