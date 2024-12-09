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

        <div className="absolute inset-0 flex justify-end items-center pr-5 md:pr-10 lg:pr-20 z-10">
          <div className="bg-[#FFF3E3] p-4 sm:p-6 md:p-8 md:pr-16 lg:pr-24 rounded-md mr-5 sm:mr-10 lg:mr-32">
            <p className="font-bold mt-4 ml-2 sm:ml-4 text-xs sm:text-sm text-black">
              New Arrival
            </p>
            <br />
            <h1 className="text-2xl sm:text-4xl lg:text-5xl text-[#B88E2F] font-bold ml-2 sm:ml-6">
              Discover Our <br /> New Collection
            </h1>
            <br />
            <p className="text-xs sm:text-sm pb-4 ml-2 sm:ml-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-[#B88E2F] h-8 w-24 sm:h-10 sm:w-36 text-xs sm:text-sm text-white ml-2 sm:ml-6 mb-5 sm:mb-7">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <br />
      <div>
        <div className="text-center pt-6 sm:pt-10 pb-4 sm:pb-5">
          <h1 className="text-xl sm:text-3xl font-bold">Browse the Range</h1>
          <p className="text-xs sm:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <div className="space-y-3">
            <Image
              src="/Mask Group.svg"
              alt="Dining"
              height={480}
              width={381}
            />
            <h1 className="text-center font-semibold text-sm sm:text-base">
              Dining
            </h1>
          </div>
          <div className="space-y-3">
            <Image
              src="/Image-living room (1).svg"
              alt="Living"
              height={480}
              width={381}
            />
            <h1 className="text-center font-semibold text-sm sm:text-base">
              Living
            </h1>
          </div>
          <div className="space-y-3">
            <Image
              src="/Mask Group--.svg"
              alt="Bedroom"
              height={480}
              width={381}
            />
            <h1 className="text-center font-semibold text-sm sm:text-base">
              Bedroom
            </h1>
          </div>
        </div>
      </div>

      <div />
    </div>
  )
}

export default Homepage
