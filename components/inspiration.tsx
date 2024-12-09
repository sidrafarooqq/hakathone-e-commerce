import React from 'react';
import Image from 'next/image';

export default function Inspiration() {
  return (
    <div>
      <div className="flex justify-between items-center p-12">
       
        <div>
          <h1 className="text-4xl font-bold">
            50+ Beautiful Rooms <br />
            Inspiration
          </h1>
          <p className="mt-4 text-gray-600">
            Our designers have already created a variety of beautiful room prototypes to inspire you.
          </p>
          <button className="mt-6 bg-[#B88E2F] text-white px-6 py-2 rounded hover:bg-[#a07e29]">
            Explore More
          </button>
        </div>

        
        <Image src="/Products.svg" alt="products" height={552} width={1100} />
      </div>
    </div>
  );
}
