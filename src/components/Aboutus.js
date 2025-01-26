import React from 'react'

export default function Aboutus () {
  return (

    <div className='grid  w-full h-full p-20  justify-center items-center lg:grid lg:grid-flow-col '>
      
        <div className=' relative items-center w-[60%]  mx-auto'>
        <h1 className='font-bold text-left text-6xl text-stone-700'> hello world</h1>
        <p className='text-2xl font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

        </p>
        </div>

        <div className=' h-[100%] w-[100%] shadow-lg p-10 mx-auto'>
            <img 
            src='/image/s.jpg'
            alt='/'
            
           />



        </div>




    </div>
  
  )
}
