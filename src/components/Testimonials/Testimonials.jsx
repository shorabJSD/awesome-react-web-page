import React, { useState } from 'react'
import { testimonialsData } from '../../data/testimonialsData';
import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png';
import './Testimonials.css'
import { motion } from 'framer-motion';

const Testimonials = () => {
    
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
     const transition = {type:'spring', duration:3}
     const anim = {type:'spring', duration:1}

    return (
        <div className='testimonials flex px-7 mb-5 gap-5 my-10'>
            <div className="left_test">
                <div className='flex flex-col'>
                    <span style={{color:"var(--orange)"}} className='text-xs uppercase font-bold'>testimonials</span>
                    <span className='text-4xl font-bold text-white uppercase py-4 text_strock'>what they</span>
                    <span className='text-white text-3xl uppercase font-bold'>say about us</span>
                </div>
                <div className="">
                    <motion.span
                    key={selected}
                    initial={{opacity:0, x:200}}
                    animate={{opacity:1, x:0}}
                    exit={{opacity:0, x:-100}}
                    transition={{...anim, type:'tween'}}
                    
                    style={{fontFamily:'"Roboto", sans-serif'}} className='text-white text-xs tracking-wider'>{testimonialsData[selected].review}</motion.span>
                </div>
                <motion.div
                key={selected}
                initial={{opacity:0, x:100}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:-100}}
                transition={{...anim, type:'tween'}}
               
                className="">
                    <span style={{color:'var(--orange)'}} className=' font-bold'>{testimonialsData[selected].name}</span>
                    <span className='text-white font-bold'> - {testimonialsData[selected].status}</span>
                </motion.div>
            </div>
            <div className="right_test flex items-center justify-center flex-col">
                <div className="test_anim flex flex-col items-center justify-center">
                    <motion.div 
                     initial={{opacity:'0', x:-100}}
                     whileInView={{opacity:'1', x:'0'}}
                     transition={{...transition, type:'tween'}}
                    ></motion.div>
                    <motion.div 
                    initial={{opacity:'0', x:100}}
                    whileInView={{opacity:'1', x:'0'}}
                    transition={{...transition, type:'tween'}}
                    ></motion.div>
                </div>
                <div className='test_img flex'>
                    <motion.img
                    key={selected}
                    initial={{opacity:0, x:100}}
                    animate={{opacity:1, x:0}}
                    exit={{opacity:0, x:-100}}
                    transition={{...anim, type:'tween'}}
                    style={{width:'18rem', height:'25rem', objectFit:'cover'}} src={testimonialsData[selected].image} alt="" />
                </div>
                <div className="arrow flex gap-3">
                    <img
                    onClick={()=>{
                        selected===0
                            ?setSelected(tLength-1)
                            :setSelected((pre)=>pre-1)
                    }}
                    className='h-6 font-bold cursor-pointer' src={leftArrow} alt=""/>
                    <img
                     onClick={()=>{
                        selected===tLength-1
                            ?setSelected(0)
                            :setSelected((pre)=>pre+1)
                    }}
                    className='h-6 cursor-pointer' src={rightArrow} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
