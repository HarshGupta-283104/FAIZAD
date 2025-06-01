import React, { useEffect, useRef } from 'react';
import { heroContent, HeroFooter, ImagePopup } from '.';
import gsap from 'gsap';
import ImageTrail from './ImageTrail';

function Hero() {
  const animateRef = useRef([]);
  useEffect(()=>{
    
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
    duration:  1,
    bottom:0,
    delay: index * 0.01,
    opacity:1,
    ease: 'easeinOut',
  }
);
   })
  },[])
 
  return (
<div className=' fixed z-10'>
<ImageTrail 
   items={ImagePopup} 

/>
  <div className='hero-wrapper' >
      <div className='hero-width'>
    
        <h1 className='hero-text'>
              {
                heroContent.map((item, index)=>(
                    <div key={index} className={`${index ==0 &&'pl-[1.9em] max-[1285px]:pl-3'} overflow-hidden p-2 inline-block md:mr-3 tracking-[-0.3rem] max-[768px]:tracking-normal  relative z-1 h-fit`}>
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
      
        <div className='hero-span'>
            {HeroFooter.map((item,i)=>(
              <span key={i} > {item} </span>
            ))}
        </div>
  </div>
  
</div>
  )
}

export default Hero
