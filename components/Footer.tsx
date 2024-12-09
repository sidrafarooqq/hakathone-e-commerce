import React from 'react'

export default function Footer() {
  return (
    <div>
       

    <footer className="text-black py-10 pt-32 ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-14 space-x-16">
       
        <div>
          <h3 className="text-lg font-semibold">Funiro</h3>
          <p className="mt-4 text-gray-400">400 University Drive Suite 200 Coral Gables,
          FL 33134 USA</p>
        
          
        </div>

        
        <div className='gap-8'>
          <h3 className="text-lg font-semibold">Links</h3>
          <p className="mt-4 text-black">home.</p>
          <p className="mt-2 text-black">shop</p>
          <p className="mt-2 text-black">About</p>
          <p className="mt-2 text-black">contact</p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold">Help</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-black hover:text-white">Payment option</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-white">Returns</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-white">Privicy Policies</a>
            </li>
           
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold">News Letter</h3>
          <input
          type='text'
          placeholder='Enter your name'
          ></input>
          
        </div>

        
      </div>

      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-400 text-sm">
      2023 furino. All rights reverved
      </div>
    </footer>
  



    </div>
  )
}
