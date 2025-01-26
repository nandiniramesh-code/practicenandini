'use client'

import React from 'react'

import { GrNext } from "react-icons/gr"

import { GrPrevious } from "react-icons/gr";
import { useState } from 'react';

export default function HeroSection() {
    const slides = [
        "/image/a.jpg",
        "/image/s.jpg",
        "/image/d.jpg",
    ]

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1  : current - 1);
    };   
    const nextSlide = () => {
        setCurrent(current ===  slides.length - 1 ? 0 : current + 1);
    };
return (

        <div className= ' bg-black grid justify-center items-center lg:grid lg:grid-flow-col p-4'>

            <div className='w-[60%] mx-auto'>
                <h1 className='text-center text-4xl text-slate-100 font-bold'>
                    My website
                </h1>
                <p className='text-center text-2xl font-semibold text-slate-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='w-[60%] mx-auto mt-4'>

                <div className='overflow-hidden rounded-lg relative '>

                    <div className='flex'>
                        {slides.map((slides, index) => (
                            <div key={index} className={index === current ? 'opacity-100' : 'opacity-0'}>
                                {index === current && (
                                    <img src={slides} alt="hero" className='w-full h-full object-cover'/>
                                )}
                            </div>
                        ))}
                                
                    </div>

                    <div className='absolute top-0 w-full h-full flex justify-between px-10'>

                    <button onClick={prevSlide}>
                            <GrPrevious className='text-slate-200 text-4xl' />
                        </button>

                        <button onClick={nextSlide}>
                            <GrNext className='text-slate-200 text-4xl' />
                        </button>
                        


                    </div>

                </div>






            </div>









        </div>








    )
}
