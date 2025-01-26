import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-slate-400 flex justify-center items-center mx-auto p-6 m-5 h-full w-full'>

        <div className=' w-64  text-black text-2xl font-semibold '>
            <div>
        
            <span>Follow on social media</span>
            </div>
             
                <div className='space-x-4'>
                
                <Link href='twitter' className='hover:text-sky-600 '>twitter</Link>
                <Link href='facebook' className='hover:text-sky-600 '>facebook</Link>
                <Link href='whatsapp' className='hover:text-sky-600 '>whatsapp</Link>

                </div>
           
            <div>
                <h1>@ Nandini App</h1>
            </div>
            </div>
        
            </div>




  );
}
