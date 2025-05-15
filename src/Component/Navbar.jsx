import React from 'react'
import {navItems} from './index'
function Navbar() {
  return (
    <div>
      {navItems.map((item, index) => (
        <div key={index} className=' w-full flex items-center justify-between p-4 bg-gray-800 text-white'>
          <img src={item.icon} alt={item.name} className='w-6 h-6' />
          <span className='ml-2'>{item.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Navbar
