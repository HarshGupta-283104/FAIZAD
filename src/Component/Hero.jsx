import React, { useEffect, useRef } from 'react';
import { heroContent, HeroFooter } from '.';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
function Hero() {
  const animateRef = useRef([]);
  useEffect(()=>{
    console.log("Working");
    
   animateRef.current.forEach((el, index)=>{
        gsap.fromTo(el, {
          position: 'relative',
          bottom: -150,
          opacity:0 ,
          onComplete: ()=>{
            
          }
  },
  {
    y: 0,
    stagger: index,
    duration:  0.5,
    bottom:0,
    delay: index * 0.01,
    opacity:1,
  }
);
   })
  },[])
 
  return (
<div>
  <div className='flex h-[calc(100vh-30px)]   flex-col justify-between max-[768px]:pb-18 pt-10 ' >
      <div className='hero-width pt-15 pl-8 md:pt-10 '>
    
        <h1 className='text-[9rem] font-[herothin] max-[768px]:text-[5em] pl-4  uppercase  text-white'>
              {
                heroContent.map((item, index)=>(
                    <div key={index} className={`${index ==0 &&'pl-[1.9em] max-[1285px]:pl-0'} overflow-hidden p-2 inline-block md:mr-3 tracking-[-0.3rem] max-[768px]:tracking-normal  relative z-1 h-fit`}>
                      <span id='SwipeText' className='ml-[-10]  ' >
                      {[...item].map((char, i)=>(
                        <span  ref={(el)=>animateRef.current.push(el)} className={`${char == '-' &&'font-[herothinest] text-[1.2em]'} `} key={i}  >{char}</span>
                      ))}
                    </span> {index ==0 && <br/>}
                    </div>
                  
                ))
              }
        </h1>
      </div>
      
        <div className='min-w-screen capitalize flex font-[herothinest] text-white gap-2 text-[1rem] pl-5 md:text-[1.1rem] md:gap-6 md:pl-15 md:pb-10'>
            {HeroFooter.map((item,i)=>(
              <span key={i} > {item} </span>
            ))}
        </div>
  </div>
  
</div>
  )
}

export default Hero
