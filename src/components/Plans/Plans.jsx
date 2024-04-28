import React from 'react'
import { plansData} from '../../data/plansData';
import whitetik from '../../assets/whiteTick.png';
import rightArrow from '../../assets/rightArrow.png';
import './Plans.css'
import { motion } from 'framer-motion';

const Plans = () => {
  const transition = {type:'spring', duration:1}

  return (
    <div className='px-7 plans'>
      <div className="blur plans_blur_1"></div>
      <div className="blur plans_blur_2"></div>
       <div className="flex items-center justify-around text-bold text-3xl uppercase text-white font-bold italic ">
          <span className='text_strock'>ready to start</span>
          <span>your journey</span>
          <span className='text_strock'>now with us</span>
       </div>
 
     {/* our gym plans */}
     <motion.div
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{...transition, type:'tween'}}
        className="ourPlan flex items-center justify-center gap-5 my-8">       
          {
            plansData.map((plan, i)=>(
                <div className=" py-5 px-2" key={i}>
                    <span style={{backgroundColor:'var(--orange)'}} className=''>{plan.icon}</span>
                    <div className="flex flex-col text-white my-6 gap-5">
                        <span className='text-xs font-bold uppercase'>{plan.name}</span>
                        <span className='text-4xl'>$ {plan.price}</span>
                    </div>
                    <div>
                        {
                            plan.features.map((feature)=>(
                                 <div className="flex items-center gap-4 py-1 text-white">
                                    <img src={whitetik} alt="" className="h-3" />
                                    <span style={{fontSize:'1rem'}} className=''>{feature}</span>                               
                                 </div>
                            ))
                        }
                    </div>
                    <div className="flex items-center mt-2 text-white">
                        <span className='text-xs mr-3'>see more benefits</span>
                        <img className='h-3' src={rightArrow} alt="" />
                    </div>
                    <button style={{fontSize:".9rem"}} className='w-full mt-5 bg-white py-2 font-bold'>Joing now</button>
                </div>
            ))
          }
     </motion.div>
       
    </div>
  )
}

export default Plans
