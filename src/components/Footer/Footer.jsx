import React from 'react'
import insta from '../../assets/instagram.png'
import git from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
import './Footer.css'
import { motion } from 'framer-motion'

const Footer = () => {
  const transition = {type:'spring', duration:3}
  return (
    <div className='relative flex flex-col items-center my-10'>
        <hr className='w-full bg'/>
        <div className="blur footer_blur_1"></div>
        <div className="blur footer_blur_2"></div>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{...transition, type:'tween'}}
        viewport={{ once: true, amount: 0.8 }}
        className='mt-10'>
            <div className="social_media flex gap-10">
                    <img className='h-8' src={linkedin} alt="" />
                    <img className='h-8' src={git} alt="" />
                    <img className='h-8' src={insta} alt="" />
            </div>
            <div className="logo mt-10">
                <img src={logo} />
            </div>
       </motion.div>
    </div>
  )
}

export default Footer
