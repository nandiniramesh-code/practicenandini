'use client'

import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
import { TfiLayoutMenuFull } from "react-icons/tfi";

export default function Navbar () {
 const [showMenu, setShowMenu] = useState(false);
    
  return (
    <nav className='bg-slate-300 flex justify-between items-center p-6 '>


    <div>

      <img
        src="/image/puma.png"
        alt="/"
        className='w-20'
      />
    </div>

    <div>
      <div className='hidden lg:flex space-x-6 text-2xl font-bold'>

        <Link href="/home" className='text-slate-700 hover:text-emerald-400 ' >Home</Link>
        <Link href="/contact" className='text-slate-700  hover:text-emerald-400' >contact</Link>
        <Link href="/servieces" className='text-slate-700  hover:text-emerald-400' >servieces</Link>
        <Link href="/galary" className='text-slate-700  hover:text-emerald-400'>galary</Link>


      </div>
      <div className="lg:hidden">
        <button>

      <TfiLayoutMenuFull className='text-slate-100' onClick={ () => setShowMenu (!showMenu)}/>
      </button>
      </div>
    </div>


    { showMenu && (
    
    <div className='bg-red-700 flex justify-center items-center right-0 top-0 fixed w-full h-full z-50 lg:hidden p-5 'onClick={ () =>setShowMenu(!showMenu)}>
        <div className='grid grid-flow-row justify-center items-center text-center  '>
        <Link href="/home" className='text-slate-100 hover:text-emerald-400 p-5' >Home</Link>
        <Link href="/contact" className='text-slate-100  hover:text-emerald-400 p-5' >contact</Link>
        <Link href="/servieces" className='text-slate-100 hover:text-emerald-400' >servieces</Link>
       



        </div>


    </div>

)}


  </nav>
)
}
  

