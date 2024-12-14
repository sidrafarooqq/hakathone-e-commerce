
'use client';

import React from 'react';
import Image from 'next/image';

function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div> 
                  <Image
                              src="/Group 78-2.svg"
                              alt="pic"
                              width={1700}
                              height={350}
                              className="w-270 h-332 object-cover "
                            />
                            
            
                  </div>
      <div className="container mx-auto py-12 px-4">
        
        <div className="text-center mb-12 pt-20">
          <h1 className="text-3xl font-bold text-gray-800">Get In Touch With Us</h1>
          <p className="text-gray-600 mt-2">
            For more information about our products & services, please feel free to drop us
            an email. Our staff is always here to help you out. Do not hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Address</h2>
              <p className="text-gray-600">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Phone</h2>
              <p className="text-gray-600">Mobile: (+84) 546-6789</p>
              <p className="text-gray-600">Hotline: (+84) 456-6789</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4">Working Time</h2>
              <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>

         
          <div className="bg-white shadow-lg rounded-lg p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                  Subject (optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#B88E2F] text-white py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Submit
                </button>
              </div>
            </form>
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
                    </div>
    </div>
  );
}

export default ContactPage;