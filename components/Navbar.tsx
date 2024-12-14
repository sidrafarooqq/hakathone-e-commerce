'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 py-4">
        
        <Image 
          src="/Frame 168 (1).svg" 
          alt="logo" 
          height={50} 
          width={50} 
          className="cursor-pointer"
          onClick={() => route.push('/')}
        />

     
        <div className="hidden md:flex space-x-6 lg:space-x-10">
          <button onClick={() => route.push('/')} className="hover:text-purple-600 text-gray-700 font-medium">
            Home
          </button>
          <button onClick={() => route.push('/Products')} className="hover:text-purple-600 text-gray-700 font-medium">
            Shop
          </button>
          <button onClick={() => route.push('/blog')} className="hover:text-purple-600 text-gray-700 font-medium">
            Blogs
          </button>
          <button onClick={() => route.push('/contact')} className="hover:text-purple-600 text-gray-700 font-medium">
            Contact
          </button>
        </div>

      
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          <FaUser size={20} className="text-gray-600 hover:text-purple-600 cursor-pointer" />
          <FaSearch size={20} className="text-gray-600 hover:text-purple-600 cursor-pointer" />
          <FaHeart size={20} className="text-gray-600 hover:text-purple-600 cursor-pointer" />
          <FaShoppingCart size={20} className="text-gray-600 hover:text-purple-600 cursor-pointer" />
        </div>

        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-purple-600 focus:outline-none"
          >
            {isOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-gray-50 py-4 px-6 space-y-4">
          <button onClick={() => { setIsOpen(false); route.push('/'); }} className="block text-gray-700 hover:text-purple-600 font-medium">
            Home
          </button>
          <button onClick={() => { setIsOpen(false); route.push('/Products'); }} className="block text-gray-700 hover:text-purple-600 font-medium">
            Shop
          </button>
          <button onClick={() => { setIsOpen(false); route.push('/blog'); }} className="block text-gray-700 hover:text-purple-600 font-medium">
            Blogs
          </button>
          <button onClick={() => { setIsOpen(false); route.push('/contact'); }} className="block text-gray-700 hover:text-purple-600 font-medium">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;