import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

const Products = () => {
  const route = useRouter()
  const products = [
    {
      id: 1,
      name: "Syltherin",
      discription: " style cofee chair",
      price: "$2500,000",
      oldprice:"3500,000",
      image: "/Group 95.svg", 
    
    },
    {
        id: 2,
        name: "Leviosa",
        discription: " style cofee chair",
        price: "RP 2500,000",
        oldprice: "34,00,000",
        image: "/Images--2.svg", 
        isNew: false,
      }, {
        id: 3,
        name: "Lolito",
        discription: "Luxury Big Sofa",
        price: "Rp 7,000,000",
       oldprice: "Rp 14,000,000",
        image: "/Images--3.svg", 
        isNew: false,
      }, {
        id: 4,
        name: "Respira",
        discription: " outdoor bar table and stool",
        price: "Rp 5,00,000",
        oldprice: " 7,00,000",
        image: "/Images--4.svg", 
        isNew: false,
      }, {
        id: 5,
        name: "Grifo",
        discription: " Night Lamp",
        price: " Rp 1,500,000",
        image: "/Images--5.svg",
        isNew: false,
      }, {
        id: 6,
        name: "Muggo",
        discription: "smal mug",
        price: "Rp 2500,000",
        image: "/Images--6.svg", 
        isNew: false,
      }, {
        id: 7,
        name: "Pinkgy",
        discription: "Cute bed set",
        price: "Rp 7,000,000",
        image: "/Images--7.svg", 
        isNew: false,
      }, {
        id: 8,
        name: "potty",
        discription: " Minimalist flower pot",
        price: "5,00,000",
        image: "/Images--8.svg", 
        isNew: false,
      },
     
   
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-black text-center p-20 ">Our Products</h2>
       
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
                  height={302}
                  width={285}
              
                  className="w-285 h-302 object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <h3 className="font-semibold">{product.discription}</h3>
                <p className="text-gray-500 font-bold flex">{product.price}</p>
               <p className="text-gray-500 font-bold line-through">{product.oldprice}</p> 
               
                
                <button className="mt-2 w-full bg-white text-[#B88E2F] border border-[#B88E2F] py-2 rounded hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-8 text-center ">
        <button onClick={()=>route.push("/Products")} className="text-[#B88E2F] justify-center m-4 border border-[#B88E2F] "> Show more</button>
        </div>
      </div>
      
    </section>

    
  );
};

export default Products;