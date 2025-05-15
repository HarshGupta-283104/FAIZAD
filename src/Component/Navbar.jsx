import React from 'react'
import {navItem} from './'
function Navbar() {
  return (
    <div className='w-full  flex items-center justify-between px-10 bg-gray-800 text-white'>
        <div><span className='uppercase font-[Regular] text-[1.4rem]'>Faza</span></div>
        <div className='flex items-center gap-5'>
    {navItem.map((item, index) => (
        <div key={index} className='p-6  cursor-pointer '>
            <span className='uppercase  font-[Regular] font-extralight text-[1.4rem]'>{item}</span>
         </div>
    ))}
        </div>
   
    </div>
  )
}

export default Navbar
