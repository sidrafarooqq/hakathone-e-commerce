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
          className="absolute inset-0"
        />

        <div className="absolute inset-0 flex justify-center md:justify-end items-center px-5 sm:px-10 lg:pr-20 z-10">
          <div className="bg-[#FFF3E3] p-4 sm:p-6 md:p-8 md:pr-16 lg:pr-24 rounded-md text-center md:text-left max-w-lg md:max-w-xl">
            <p className="font-bold mt-4 text-xs sm:text-sm text-black">
              New Arrival
            </p>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl text-[#B88E2F] font-bold mt-2 sm:mt-4 leading-tight">
              Discover Our <br /> New Collection
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="hidden sm:block" />
              Elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-[#B88E2F] h-10 w-32 sm:h-12 sm:w-40 text-xs sm:text-sm text-white mt-4 sm:mt-6 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      
      <div className="px-5 sm:px-10 py-6 sm:py-10">
     
        <div className="text-center pb-4 sm:pb-6">
          <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold">Browse the Range</h1>
          <p className="text-xs sm:text-sm mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
          <div className="space-y-3">
            <Image
              src="/Mask Group.svg"
              alt="Dining"
              height={480}
              width={381}
              className="mx-auto rounded-lg"
            />
            <h1 className="text-center font-semibold text-sm sm:text-base">Dining</h1>
          </div>

          
          <div className="space-y-3">
            <Image
              src="/Image-living room (1).svg"
              alt="Living"
              height={480}
              width={381}
              className="mx-auto rounded-lg"
            />
            <h1 className="text-center font-semibold text-sm sm:text-base">Living</h1>
          </div>

        
          <div className="space-y-3">
            <Image
              src="/Mask Group--.svg"
              alt="Bedroom"
              height={480}
              width={381}
              className="mx-auto rounded-lg"
            />
            <h1 className="text-center font-semibold text-sm sm:text-base">Bedroom</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage