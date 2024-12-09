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
      <div className="max-w-7xl mx-auto px-4">
        
        <h1 className="text-3xl font-bold my-2 p-14">Explore Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </section>
  );
};

export default Products;