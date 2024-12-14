"use client"

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

const Products = () => {
  const route=useRouter()
  const products = [
    {
      id: 1,
      name: "Aguard sofa",
      price: " Rs 25,00,000.00",
      image: "/Group 95.svg", 
      
    },
    {
      id: 2,
      name: "Leviso",
      price: "Rs 2500,000",
      image: "/Images--2.svg",
     
    },
    {
      id: 3,
      name: "Lolito",
      price: "Rs 2,500,000",
      image: "/Images--3.svg",
     
    },
    {
      id: 4,
      name: "Respira",
      price: "Rs 5,00,000",
    
      image: "/Images--4.svg",
      
    
    },
    {
      id: 5,
      name: "stylish cofee chair",
      price: "Rs 2,500,000",
     
      image: "/image 1.svg",
     
    },
    {
      id: 6,
      name: "Leviso",
      price: "Rs 2500,000",
      image: "/Images--2.svg",
     
    },
    {
      id: 7,
      name: "Lolito",
      price: "Rs 2,500,000",
      image: "/Images--3.svg",
     
    },
    {
      id: 8,
      name: "Respira",
      price: "Rs 5,00,000",
    
      image: "/Images--4.svg",
      
    
    },
    
  ];

  return (
    

    
    <section className="py-10">
      <div> 
      <Image
                  src="/Group 78.svg"
                  alt="pic"
                  width={1700}
                  height={316}
                  className="w-270 h-332 object-cover "
                />
                

      </div>
      <div className="max-w-7xl mx-auto px-4 "><br />
        
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={270}
                  height={332}
                  className="w-270 h-332 object-cover"
                />
                
              
              </div>
              <div className="p-4">
               <button onClick={() =>route.push(`/Products/${product.id}`)}> <h3 className="font-medium">{product.name}</h3> </button>
                <p className="text-gray-600 font-bold">{product.price}</p>
            
                
              </div>
            </div>
          ))}
         
  
        </div>
     
  
      </div>
      <div className="flex items-center justify-center h-28 space-y-5">
  <div className="flex space-x-4">
    <button className="px-6 py-2 bg-[#F9F1E7] rounded hover:bg-[#B88E2F]">1</button>
    <button className="px-6 py-2 bg-[#F9F1E7] rounded hover:bg-[#B88E2F]">2</button>
    <button className="px-6 py-2 bg-[#F9F1E7] rounded hover:bg-[#B88E2F]">3</button>
    <button className="px-6 py-2 bg-[#F9F1E7] rounded hover:bg-[#B88E2F]">Next</button>
  </div>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 pl-24 bg-[#F9F1E7] h-36">
          <div className="flex items-center space-x-4">
            <div className="text-yellow-500 text-3xl"><Image src="/trophy 1.svg" alt="trophy" height={60} width={60}/></div>
            <div>
              <h4 className="text-lg font-bold">High Quality</h4>
              <p className="text-gray-600 text-sm">Crafted from top materials</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-yellow-500 text-3xl"> <Image src="/guarantee.svg" alt="trophy" height={60} width={60}/></div>
            <div>
              <h4 className="text-lg font-bold">Warranty Protection</h4>
              <p className="text-gray-600 text-sm">Over 2 years</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-yellow-500 text-3xl"> <Image src="/shipping.svg" alt="trophy" height={60} width={60}/></div>
            <div>
              <h4 className="text-lg font-bold">Free Shipping</h4>
              <p className="text-gray-600 text-sm">Order over $150</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-yellow-500 text-3xl"><Image src="/customer-support.svg" alt="trophy" height={60} width={60}/></div>
            <div>
              <h4 className="text-lg font-bold">24/7 Support</h4>
              <p className="text-gray-600 text-sm">Dedicated support</p>
            </div>
            </div>
            </div>

    </section>
  );
};

export default Products;