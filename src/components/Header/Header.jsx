import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { motion } from 'framer-motion'


const Header = () => {
  const transition  =  {type:'spring', duration:2};
  return (
    <div className='header flex items-center justify-between gap-10'>
      <motion.img 
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{...transition, type:'tween'}}
      src={logo}  alt='' className='logo'/>


      <div className="header_menu">
        <motion.ul 
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{...transition, type:'tween'}}
        className='flex gap-5 text-sm pointer text-white'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Programs</li>
            <li className='cursor-pointer'>Why us</li>
            <li className='cursor-pointer'>Plans</li>
            <li className='cursor-pointer'>Testimonials</li>
        </motion.ul>
      </div>
    </div>
  )
}

export default Header
