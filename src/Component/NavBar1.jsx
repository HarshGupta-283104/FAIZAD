import React from 'react'
import { LogoWhite, LogoBlack, Day, Night, SearchDark, SearchLight } from '../assets/NavBarAssets/NavItems'


function NavBar1() {
    const NavItems = ['Home', 'Product', 'Features', 'About'];
    let spanId = document.getElementById("#span0");
    console.log(spanId);
    
  return (
    <div className='w-full flex items-center justify-between backdrop:blur-2xl bg-white/80 px-10 py-5 px-4'>
        <img src={LogoBlack} alt="logo" className='w-[200px] cursor-pointer'/>
        <ul className='flex items-center gap-7 text-2xl font-[Regular] text-gray-800 gap-15 cursor-pointer'>
            {NavItems.map((items,index)=>(
             <li key={index} ><span id={"span"+index}>
            {items}
                </span></li>   
            ))}
        </ul>
        <div className='flex items-center gap-5 relative right-1/8'>
            <input type="text" placeholder='Search' className='border-2 rounded-xl p-1 text-center' />
            <img src={SearchDark} alt="search" className='w-8 h-8 cursor-pointer' />

        <img src={Night} alt="toggle-icon" className='w-8 h-8 cursor-pointer '/>
        </div>
    </div>
  )
}

export default NavBar1
