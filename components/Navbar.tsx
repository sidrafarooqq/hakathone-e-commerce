'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-lg">
        <div className="flex justify-between pb-4">
          <Image src="/Frame 168 (1).svg" alt="logo" height={150} width={150} className="pl-5 pt-8" />

          <div>
            <ul className="flex justify-center space-x-14 mt-8 mr-14 text-xl">
              <button onClick={() => route.push("/")}>
                <li><b>Home</b></li>
              </button>
              <button onClick={() => route.push("/Products")}>
                <li><b>Shop</b></li>
              </button>
              <button onClick={() => route.push("/blog")}>
                <li><b>Blogs</b></li>
              </button>
              <button onClick={() => route.push("/contact")}>
                <li><b>Contact</b></li>
              </button>
            </ul>
          </div>

          <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="hidden md:flex space-x-8 pt-4">
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    <FaUser size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    <FaSearch size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    <FaHeart size={24} />
                  </a>
                  <a href="cart" className="text-gray-600 hover:text-purple-600">
                    <FaShoppingCart size={24} />
                  </a>
                </div>

                <div className="-mr-2 flex md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                  >
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" className="block hover:bg-gray-100 rounded-md px-3 py-2 text-gray-600">
                  <FaUser size={20} className="inline-block mr-2" /> Profile
                </a>
                <a href="#" className="block hover:bg-gray-100 rounded-md px-3 py-2 text-gray-600">
                  <FaSearch size={20} className="inline-block mr-2" /> Search
                </a>
                <a href="#" className="block hover:bg-gray-100 rounded-md px-3 py-2 text-gray-600">
                  <FaHeart size={20} className="inline-block mr-2" /> Favorites
                </a>
                <a href="cart" className="text-gray-600 hover:text-purple-600">
                    <FaShoppingCart size={24} />
                  </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;