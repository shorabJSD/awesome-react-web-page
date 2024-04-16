import React, { useState } from 'react'
import { testimonialsData } from '../../data/testimonialsData';
import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png';
import './Testimonials.css'
const Testimonials = () => {
        
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    

    return (
        <div className='testimonials flex px-7 mb-5 gap-5 my-10'>
            <div className="left_test">
                <div className='flex flex-col'>
                    <span style={{color:"var(--orange)"}} className='text-xs uppercase font-bold '>testimonials</span>
                    <span className='text-4xl font-bold text-white uppercase py-4 text_strock'>what they</span>
                    <span className='text-white text-3xl uppercase font-bold'>say about us</span>
                </div>
                <div className="">
                    <span  style={{fontFamily:'"Roboto", sans-serif'}} className='text-white text-xs tracking-wider'>{testimonialsData[selected].review}</span>
                </div>
                <div className="">
                    <span style={{color:'var(--orange)'}} className=' font-bold'>{testimonialsData[selected].name}</span>
                    <span className='text-white font-bold'> - {testimonialsData[selected].status}</span>
                </div>
            </div>
            <div className="right_test flex items-center justify-center flex-col">
                <div className="test_anim flex flex-col items-center justify-center">
                    <div></div>
                    <div></div>
                </div>
                <div className='test_img flex'>
                    <img style={{width:'18rem', height:'25rem', objectFit:'cover'}} src={testimonialsData[selected].image} alt="" />
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
