import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../bg/logo.png'
import chat from '../bg/chat.png'
import user from '../bg/user.png'

export default function HeaderLogin () {
  return (
        <header className="flex flex-row justify-center items-center bg-white py-6">
        <div className="flex flex-row w-44 items-center mr-40">
            <Link to="/" className="">
                <img className="h-8" src={logo} alt="logo"/>
              </Link>
              <Link to="/" className="k font-extrabold text-xl pl-3">Coffee Shop</Link>
        </div>
        <nav className="tNav flex flex-row items-center">
          <Link to="/" className="  text-gray-600 hover:underline p-4">Home</Link>
          <a href="/product/9" className="text-gray-600 hover:underline p-4">Product</a>
          <Link to="/yourcart" className=" text-gray-600 hover:underline p-4">Your Cart</Link>
          <Link to="/history" className=" text-gray-600 hover:underline p-4">History</Link>
        </nav>
        <div className="flex flex-row w-56 ml-36 space-x-10">
            <i className=" fa fa-search text-gray-700" style={{ fontSize: '40px' }}></i>
            <div className="">
                <img className=" items-center h-10 w-10 relative" src={chat} alt="chat"/>
                <div className="absolute -mt-11 -ml-2">
                    <div className="bg-yellow-900 w-4 h-4 flex justify-center items-center rounded-full font-bold text-white" style={{ fontSize: '10px' }}>1</div>
                </div>
              </div>
              <Link to="/profile">
                <img className=" items-center h-10 w-10 rounded-full" src={user} alt="user"/>
              </Link>
          </div>
      </header>
  )
}
