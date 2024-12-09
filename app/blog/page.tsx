import React from "react";
import Image from "next/image";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-800">My Blog</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts Section */}
          <div className="lg:col-span-2">
            {/* Single Blog Post */}
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
            </div>

            {/* Add more blog posts in the same format if needed */}
          </div>

          {/* Sidebar Section */}
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
      </main>
    </div>
  );
};

export default BlogPage;