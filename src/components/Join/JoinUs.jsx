import React from 'react';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const JoinUs = () => {
   
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm('service_8rrxo2w', 'template_jomq7zj', form.current, {
            publicKey: 'E6icjRm_Jx9v3O6dJerPk',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };



  return (
    <div className='join_with_us px-7 flex gap-5 mb-5'>
       <div className="left_j text-white flex-1">
        <hr style={{background:'var(--planCard)', height:'5px'}} className='w-20 border-0'/>
            <div className='mt-3 flex gap-2'>
                <span className='text_strock font-bold text-4xl uppercase'>ready to </span>
                <span className='font-bold text-4xl uppercase'>level up</span>
            </div>
            <div className='my-3 gap-2 flex'>
                <span className='font-bold text-4xl uppercase'>your body</span>
                <span className='text_strock font-bold text-4xl uppercase'>with us</span>
            </div>
       </div>
       <div className="right_j flex-1 flex items-center ">
          <form ref={form} style={{backgroundColor:'var(--caloryCard)'}} className='gap-5 flex p-3' onSubmit={sendEmail}>
            <input type="email" name='user_email' placeholder='your@gmail.com' className='p-2 outline-0 bg-transparent'/>
            <button className='bg-white text-xs px-4'>join now</button>
          </form>
       </div>
    </div>
  )
}

export default JoinUs
