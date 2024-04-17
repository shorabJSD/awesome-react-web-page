import React from 'react'
import Header from '../Header/Header'
import heart  from '../../assets/heart.png'
import heroImg  from '../../assets/hero_image.png'
import heroBack  from '../../assets/hero_image_back.png'
import calories  from '../../assets/calories.png'
import './Hero.css'
import { motion } from 'framer-motion'


const Hero = () => {
  const transition = {type:'spring', duration:3}
  return (
    <div className='hero flex'>
      <div className="blur hero_blur"></div>
      <div className="left_h">
        <Header />
        {/* the best ad */}
        <div className="the_best_ad bg-gray-800 mt-20 p-2 rounded-full uppercase font-bold text-sm bg-gray-600 text-white">
          <h3>the best fitness club in the town</h3>
          <motion.span 
          initial={{left:'220px'}}
          whileInView={{left:'0'}}
          transition={{...transition, type:'tween'}}
          ></motion.span>
        </div>
        <div className="flex flex-col hero_text mt-5 text-white text-5xl font-bold uppercase">
          <div>
            <span className='text_strock'>shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div className='text-sm w-3/4 mt-4 normal-case'>
            <span className=''>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>

        {/* figure   */}

        <div className='flex grow gap-4 text-white mt-3'>
          <div className='flex flex-col'>
            <span className='text-lg'>+140</span>
            <span className='uppercase text-sm text-gray-400'>expert coach</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-lg'>+978</span>
            <span className='uppercase text-sm text-gray-400'>members joiend</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-lg'>+50</span>
            <span className='uppercase text-sm text-gray-400'>fitness programs</span>
          </div>
        </div>
        <div className='hero_btn flex w-80 gap-4 mt-5 text-white'>
          <button className='bg-orange px-2 py-1 text-sm font-light text-xs capitalize '>get started</button>
          <button className='px-2 py-1 text-sm font-light text-xs capitalize '>learn more</button>
        </div>
      </div>
      <div className="right_h">
        <button className='right_btn text-xs bg-white px-2 py-2 text-sm font-bold text-xs capitalize '>Joing Now</button>
        <motion.div
        initial={{left:'-150px'}}
        whileInView={{left:'4rem'}}
        transition={{...transition, type:'tween'}}
        
        className='flex-col bg-gray-700 inline-block py-2 px-4 rounded absolute top-20 left-20'>
          <img src={heart} className='heartImg'/>
          <div className='flex text-center flex-col'>
            <span className='text-gray-400 text-xs capitalize mt-2'>heart rate</span>
            <span className='text-white'>116 bpm</span>
          </div>
        </motion.div>
        <img src={heroImg} alt="" className='heroImg' />
        <motion.img 
          initial={{left: '220px'}}
          whileInView={{left: '-10rem'}}
          transition={{...transition, type:'tween'}}
        src={heroBack} alt="" className='heroBackImg' />
        <motion.div
        initial={{bottom:'-5rem', opacity:'0'}}
        whileInView={{bottom:"2rem", opacity:'1'}}
        transition={{...transition, type:'tween'}}
        className="cal_box flex items-center p-4 bg-gray-500 absolute gap-8 rounded t">
          <img src={calories} alt="" className='caloImg'/>
          <div className='flex flex-col gap-4'>
            <span className='text-gray-400 text-xs'>Calories bun</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
