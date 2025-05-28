import React from 'react';
import * as object from './index'
function Hero() {
  console.log(object);
  
 
  return (
    <div className='w-full h-screen bg-blue-600 pt-30'>
      <div className='w-[55%]  text-white text-[7rem] leading-30 font-[Regular] text-center'>
        
            <span className=''>Designer — </span><br />    
            <span>Creative Director</span> 
            <span>at ©Hatypo Studio</span>

      </div>
      <div className='w-full h-screen text-white text-[2rem] leading-30 font-[Regular] text-center mt-10'>
        Raj
      </div>
    </div>
  )
}

export default Hero
