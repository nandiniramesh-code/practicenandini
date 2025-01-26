import React from 'react'

export default function Image() {
  return (
   

    <div className='bg-blue-500 min-h-screen lg:grid lg:grid-flow-col flex  items-center justify-center m-32'>

        <div className='lg:grid lg:grid-flow-col  justify-center text-center mx-auto'>



            <div className='text-center  w-[700px] h-[full] p-10 '>
                    <img
                         src='/image/a.jpg'
                         alt='/'
                         width={500}
                         height={500}
                         />
                         <p className='text-neutral-950 font-medium text-2xl m-2 p-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                         </p>
            </div>
            <div className='text-center w-[500px] p-10'>
                    <img
                         src='/image/d.jpg'
                         alt='/'
                         width={500}
                         height={500}
                         />
                         <p className='text-gray-950 font-medium text-2xl'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                         </p>
            </div>


            <div className='text-center w-[500px] p-10'>
                    <img
                         src='/image/s.jpg'
                         alt='/'
                         width={500}
                         height={500}
                         />
                         <p className='text-gray-950 font-medium text-2xl'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                         </p>
            </div>

            </div>



    </div>
)
}
