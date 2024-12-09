'use client'

import React from 'react'
import Image from 'next/image'



function Homepage() {
  return (
    <div>
     
      <div className="relative h-screen w-screen">
       
        <Image
          src="/----.svg"
          alt="background pic"
          layout="fill"
          objectFit="cover"
        />

        
        <div className="absolute inset-0 flex justify-end items-center pr-20 z-10">
          <div className="bg-[#FFF3E3] p-8 pr-24 mr-32 rounded-md">
            <p className="font-bold mt-4 ml-4 text-sm text-black">
              New Arrival
            </p>
            <br />
            <h1 className="text-5xl text-[#B88E2F] font-bold ml-6">
              Discover Our <br /> New Collection
            </h1><br />
            <p className="pb-4 ml-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-[#B88E2F] h-10 w-36 text-white ml-6 mb-7">
              Buy Now
            </button>
          </div>
        </div>
      </div>
<br />
      <div>
        <div className='text-center pt-10 pb-5'>
        <h1 className='text-3xl font-bold'> Browse the Range</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div  className='flex space-x-8 justify-center '>
        <div className='space-y-3'>
        <Image
          src="/Mask Group.svg"
          alt="background pic"
          height={480}
          width={381}
          
        />
         
        <h1 className='text-center font-semibold'>Dining</h1>    
  </div>
        <div className='space-y-3'>
        <Image
          src="/Image-living room (1).svg"
          alt="background pic"
         height={480}
         width={381}
        />

        <h1 className='text-center font-semibold '> Living</h1>
        </div>
        <div className='space-y-3'>
        <Image
          src="/Mask Group--.svg"
          alt="background pic"
         height={480}
         width={381}
        />
        <h1 className='text-center font-semibold'> Bedroom</h1>
        </div>
   
  </div>
      </div>

<div/>

</div>
  )
}

export default Homepage
