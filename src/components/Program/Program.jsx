import React from 'react'
import '../Program/Program.css'
import { programsData } from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'
const Program = () => {
  return (
    <div className='program px-7'>
        {/* programe header */}
        <div className="flex items-center justify-between text-5xl uppercase text-white font-bold italic">
            <span className='text_strock'>explore our</span>
            <span>programs</span>
            <span className='text_strock'>to shape you</span>
        </div>
        {/* programe */}
        <div className='program flex gap-3 my-4'>
            {programsData.map((program)=>(
                <div className='program_box bg-gray-500 p-6 text-white text-lg'>
                    <span className='py-2 block fill-white'>{program.image}</span>
                    <span className='text-lg block'>{program.heading}</span>
                    <span className='text-sm block py-5'>{program.details}</span>
                    <div className='flex items-center gap-6'>
                        <button className='text-xs capitalize font-semibold'>Joing Now</button>
                        <img className='h-3' src={rightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Program;