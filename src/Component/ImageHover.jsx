import React, { useEffect, useRef, useState } from 'react';
import { ImagePopup } from '.';
import gsap from 'gsap';

function ImageHover() {
  const containerRef = useRef([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [LastX, setLastX] = useState(0);
  const [LastY, setLastY] = useState(0);
  const distanceThreashold = 180;

  useEffect(() => {
    // if(!containerRef) return;
    //  const ImagePopup = containerRef.current.querySelectorAll('.imgPop');
 
     console.log(ImagePopup);
  },[containerRef.current])
  
  const trailAnimation = ()=>{
    setCurrentImageIndex((currentImageIndex + 1)%ImagePopup.length);
    console.log(currentImageIndex);
    
    
  }






  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 z-20 pointer-events-none"
    >
      {ImagePopup.map((link, index) => (
        <div
        ref={(el)=>{containerRef.current.push(el)}}
          key={index}
          className=" absolute w-[200px] h-[200px] pointer-events-none"
        >
          <img
            src={link}
            alt={`pop-${index}`}
            className="w-full h-full object-cover imgPop"
          />
        </div>
      ))}
    </div>
  );
}

export default ImageHover;
