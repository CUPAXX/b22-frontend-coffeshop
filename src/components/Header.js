import React from 'react'
import { Link } from 'react-router-dom';

export default function Header () {
  return (
        <header className="flex flex-row justify-center items-center bg-white py-2 md:py-6 ">
        <div className="flex flex-row w-18 md:w-44 items-center mr-8 md:mr-40">
            <Link to="/" className="">
                <img className="h-8" src="assets/logo.png" alt="logo"/>
              </Link>
              <Link to="/" className=" font-extrabold text-base md:text-xl pl-3">Coffee Shop</Link>
        </div>

        <nav className="flex flex-row items-center">
          <Link to="/" className="text-gray-600 hover:underline text-sm md:text-base p-2 md:p-4">Home</Link>
          <Link to="/product/9" className=" text-gray-600 hover:underline text-sm md:text-base p-2 md:p-4">Product</Link>
          <Link to="/yourcart" className=" text-gray-600 hover:underline text-sm md:text-base p-2 md:p-4">Your Cart</Link>
          <Link to="/history" className=" text-gray-600 hover:underline text-sm md:text-base p-2 md:p-4">History</Link>
        </nav>
        <div className="flex flex-row ml-8 md:ml-36 w-56 space-x-5 md:space-x-10">
          <Link to="/login" className="pt-1 md:pt-2"><button className=" font-semibold hover:underline ">Login</button></Link>
          <Link to="/signup"><button className="btn h-8 md:h-10 px-4 md:px-8 text-yellow-900 rounded-full font-semibold bg-yellow-400 hover:bg-yellow-300">Sign Up</button></Link>
          </div>
      </header>
  )
}
