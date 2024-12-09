"use client";
import { use } from "react";
import Image from "next/image";
import productsdetail from "@/data/products";
import { useCart } from "@/app/context/page";

const ProductDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const resolvedParams = use(params);
    const { addToCart } = useCart(); 
    const prod = productsdetail.find((p) => p.id === resolvedParams.id);

    if (!prod) {
        return <p>Product not found!</p>;
    }

    const handleAddToCart = () => {
        addToCart(prod); 
        alert(`${prod.name} has been added to your cart!`);
    };

    return (
        <div>
        <div className="bg-[#FFFFFF] flex flex-wrap md:flex-nowrap">
            <div className="flex justify-center w-full md:w-auto">
                <Image 
                    src={prod.image} 
                    alt={prod.name} 
                    width={500} 
                    height={500} 
                    className="my-10 md:my-28 mx-auto md:ml-28"
                />
            </div>
            <div className="w-full md:w-auto md:ml-20 lg:ml-60 my-10 md:my-28 px-6 md:px-0">
                <h1 className="text-3xl md:text-5xl font-bold text-[#111111] mx-0 md:mx-5 py-4 md:py-6">
                    {prod.name}
                </h1>
                <p className="text-[#111111] text-sm md:text-lg">{prod.description}</p>
                <p className="text-[#111111] font-bold text-xl md:text-3xl mt-4">{prod.price}</p>
                <div className="mt-6">
                    <button 
                        onClick={handleAddToCart} 
                        className="bg-[#111111] text-white rounded-full w-28 h-8 md:w-36 md:h-10 text-sm md:text-base"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductDetailPage;
