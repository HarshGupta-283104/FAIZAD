import React from 'react'
import Hero from './Component/Hero'
import { CardMarqueeData } from './Component'
function App() {

  console.log(CardMarqueeData);
  
  return (

    <div className='w-full h-full flex flex-col items-center justify-center'>
      <Hero />
    </div>
  )
}

export default App
