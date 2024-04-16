import React from 'react';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import nb from '../../assets/nb.png';
import tik from '../../assets/tick.png';

import './Reasons.css';
const Reasons = () => {
  return (
    <div className='reason flex gap-10'>
      <div className="left_r">
        <img className='reason_img' src={image1} alt="" />
        <img className='reason_img' src={image2} alt="" />
        <img className='reason_img' src={image3} alt="" />
        <img className='reason_img' src={image4} alt="" />
      </div>
      <div className="right_r">
       <span className='primary uppercase text-xs font-bold'>some reasons</span>

        <div className='font-bold text-4xl text-white uppercase'>
          <span className='text_strock'>why </span>
          <span>choose us?</span>
        </div>
        <div className='my-5'>
           <div className='flex gap-3 text-white text-xs uppercase items-center font-bold my-3'>
              <img className='h-6' src={tik} alt="" />
              <span>over 140+ expert coachs</span>
           </div>
           <div className='flex gap-3 text-white text-xs uppercase items-center font-bold my-3'>
              <img className='h-6' src={tik} alt="" />
              <span>train smarter and faster than before</span>
           </div>
           <div className='flex gap-3 text-white text-xs uppercase items-center font-bold my-3'>
              <img className='h-6' src={tik} alt="" />
              <span>1 free program for new member</span>
           </div>
           <div className='flex gap-3 text-white text-xs uppercase items-center font-bold my-3'>
              <img className='h-6' src={tik} alt="" />
              <span>reliable partners</span>
           </div>
        </div>
        <div className="">
           <span className='text-gray-400'>our partners</span>
           <div className="flex my-4 gap-5">
              <img className='h-7' src={nb} alt="" />
              <img className='h-7' src={adidas} alt="" />
              <img className='h-7' src={nike} alt="" />
           </div>
        </div>
      </div>
    </div>
  )
}

export default Reasons
