import React, { useEffect, useRef } from 'react'
import { navItem } from '.'
import gsap from 'gsap';
function Navbar() {

    const navRef = useRef([]);
    useEffect((ref) => {
      const timeline = [];
    navRef.current.forEach((ref) => {
       if(!ref)return

       const topChar = ref.querySelectorAll('.top-char');
       const bottomChar = ref.querySelectorAll('.bottom-char');

       const tl = gsap.timeline({paused:true})

    //    topChar.forEach(e => {
        tl.to(topChar,{
        duration:0.3,
        top:-25,
        position:'relative',
        ease:'easein',
        stagger:0.05
       },0)
       .to(bottomChar,{
        duration:0.3,
        top:-25,
        position:'relative',
        ease:'easein',
        stagger:0.05
       },0)
       
        
    //    });

       const handleMouseEnter = ()=>tl.play()
       const handleMouseLeave = ()=>tl.reverse()

       ref.addEventListener('mouseenter',handleMouseEnter)
       ref.addEventListener('mouseleave',handleMouseLeave)

       timeline.push({tl, ref, handleMouseEnter, handleMouseLeave})
    })

      return()=>{
        timeline.forEach(({tl, ref, handleMouseEnter, handleMouseLeave})=>{
          ref.removeEventListener('mouseenter',handleMouseEnter)
          ref.removeEventListener('mouseleave',handleMouseLeave)
      })
    }




    }, []);
    
  return (
    <div className='nav-main'>
      <div>
        {['FAZA'].map((item,index)=>(
            <div key={index}
            ref={(el)=>navRef.current.push(el)}
            className='flex-col tracking-tighter relative overflow-hidden text-[1.1em]  h-[1.1em] cursor-pointer'>
                <div className='flex '>
                    {[...item].map((char,i)=>(
                    <span key={i} className=' top-char'> {char} </span>
                ))}
                </div>
                <div className= ' absolute top-6 flex '>
                    {[...item].map((char,i)=>(
                    <span key={i} className=' bottom-char'> {char} </span>
                ))}
                </div>
            </div>
        ))}
      </div>
      <div className=' max-[940px]:hidden flex gap-[4em]'>        
        {navItem.map((item,index)=>(
            <div
            ref={(el)=>navRef.current.push(el)}
            className='flex justify-baseline text-base text-[1.1em] cursor-pointer '  key={index}> 
            <div className='flex-col relative overflow-hidden  h-[1.2em]'>
            <div className='inline-block mt-0.5 '>
            {/* UpperOne span */}
                {[...item].map((char,i)=>(
                <span className='top-char' key={i}>
                {char}
                </span>
                
            ))}
            </div>
            <div className='absolute flex top-6'>
            {/* Bottom one span */}
                {[...item].map((char,i)=>(
                <span
                className='bottom-char'
                key={i}>
                {char}
                </span>
                
            ))}
            </div>
            </div>
            


             {index==0&&(<span className='text-sm mt-2.5  ml-1' >(12)</span>)}
             {index==3&&(<span className='text-sm mt-2.5  ml-1' >(soon)</span>)}
             </div>
        ))}
        </div>
        <div className='min-[940px]:hidden cursor-pointer '>menu</div>
    </div>
  )
}

export default Navbar


