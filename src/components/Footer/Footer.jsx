import React from 'react'
import insta from '../../assets/instagram.png'
import git from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='relative flex flex-col items-center my-10'>
        <hr className='w-full bg'/>
        <div className="blur footer_blur_1"></div>
        <div className="blur footer_blur_2"></div>
        <div className='mt-10'>
            <div className="social_media flex gap-10">
                    <img className='h-8' src={linkedin} alt="" />
                    <img className='h-8' src={git} alt="" />
                    <img className='h-8' src={insta} alt="" />
            </div>
            <div className="logo mt-10">
                <img src={logo} />
            </div>
       </div>
    </div>
  )
}

export default Footer
