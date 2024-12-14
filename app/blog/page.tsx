import React from "react";
import Image from "next/image";

const BlogPage = () => {
  return (
    <div className="min-h-screen">
        <div> 
            <Image
                        src="/Group 78-1.svg"
                        alt="pic"
                        width={1700}
                        height={350}
                        className="w-270 h-332 object-cover "
                      />
                      
      
            </div>
      
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          
        </div>
      </header>

    
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
          <div className="lg:col-span-2">
          
            <article className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <Image
                src="/Rectangle 68.svg"
                alt="Blog Post Thumbnail"
                height={500}
                width={817}
                className=" object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="mr-4">
                    <i className="fas fa-user"></i> Admin
                  </span>
                  <span className="mr-4">
                    <i className="fas fa-calendar"></i> 14 Oct 2022
                  </span>
                  <span>
                    <i className="fas fa-tag"></i> Wood
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Going all-in with millennial design
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices...
                </p>
                <button className="mt-4 text-blue-500 hover:underline">
                  Read more
                </button>
              </div>
              
            </article>
            <div>
            <article className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <Image
                src="/Rectangle 69.svg"
                alt="Blog Post Thumbnail"
                height={500}
                width={817}
                className=" object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="mr-4">
                    <i className="fas fa-user"></i> Admin
                  </span>
                  <span className="mr-4">
                    <i className="fas fa-calendar"></i> 14 Oct 2022
                  </span>
                  <span>
                    <i className="fas fa-tag"></i> Wood
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Going all-in with millennial design
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices...
                </p>
                <button className="mt-4 text-blue-500 hover:underline">
                  Read more
                </button>
              </div>
          
            </article>
            <div>
            <article className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <Image
                src="/Rectangle 68 (1).svg"
                alt="Blog Post Thumbnail"
                height={500}
                width={817}
                className=" object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="mr-4">
                    <i className="fas fa-user"></i> Admin
                  </span>
                  <span className="mr-4">
                    <i className="fas fa-calendar"></i> 14 Oct 2022
                  </span>
                  <span>
                    <i className="fas fa-tag"></i> Wood
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Handmade pieces that took time to make
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices...
                </p>
                <button className="mt-4 text-blue-500 hover:underline">
                  Read more
                </button>
              </div>
              
            
              </article>
              </div>
            </div>

            
          </div>

          
          <aside>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Categories
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>Crafts (2)</li>
                <li>Design (8)</li>
                <li>Handmade (7)</li>
                <li>Interior (1)</li>
                <li>Wood (6)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Recent Posts
              </h3>
              <ul className="text-gray-600 space-y-4">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Going all-in with millennial design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Exploring new ways of decorating
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Handmade pieces that take time to make
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Modern home in Milan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Colorful office redesign
                  </a>
                </li>
              </ul>
            </div>
          </aside>
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
                      <h4  className="text-lg font-bold">24/7 Support</h4>
                      <p className="text-gray-600 text-sm">Dedicated support</p>
                    </div>
                    </div>
                    </div>
      </main>
    </div>
  );
};

export default BlogPage;