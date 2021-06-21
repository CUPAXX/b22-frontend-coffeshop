import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../bg/logo.png'

export default function Footer () {
  return (
        <React.Fragment>
        <div className="z-10 relative bg-gray-100 -mt-40 pb-20 ">
        <div className="flex flex-row pt-32 mx-32 items-center">
            <div className="flex-1 flex flex-col space-y-4">
                <div className="flex flex-row items-center">
                    <Link to="/" className="block">
                        <img className="h-6" src={logo}/>
                      </Link>
                      <Link to="/" className="block font-extrabold ml-4 pt-1">Coffee Shop</Link>

                </div>
                <div className="flex flex-row w-80 leading-loose">
                    <h2 className="text-sm font-medium text-gray-700">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</h2>
                </div>
                <div className="flex flex-row">
                    <div className="text-yellow-900 bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center p-1">
                        <i className="fa fa-facebook" style={{ fontSize: '17px' }}></i>
                    </div>
                    <div className=" mx-3 text-yellow-900 bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center p-1">
                        <i className="fa fa-twitter" style={{ fontSize: '17px' }}></i>
                    </div>
                    <div className="text-yellow-900 bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center p-1">
                        <i className="fa fa-instagram" style={{ fontSize: '17px' }}></i>
                    </div>
                </div>
                <div className="block">
                    <h2 className="text-sm text-gray-500">©2020CoffeeStore</h2>
                </div>
            </div>

            <div className="flex flex-col space-y-4 mx-14">
                <h1 className="font-semibold">Product</h1>
                <a className="text-gray-700 text-sm" >Download</a>
                <a className="text-gray-700 text-sm" >Pricing</a>
                <a className="text-gray-700 text-sm" >Locations</a>
                <a className="text-gray-700 text-sm" >Countries</a>
                <a className="text-gray-700 text-sm" >Blog</a>
            </div>
            <div className="flex flex-col space-y-4 mx-14">
                <h1 className="font-semibold">Engage</h1>
                <a className="text-gray-700 text-sm" >Coffe Shop ?</a>
                <a className="text-gray-700 text-sm" >FAQ</a>
                <a className="text-gray-700 text-sm" >About Us</a>
                <a className="text-gray-700 text-sm" >Privacy Policy</a>
                <a className="text-gray-700 text-sm" >Terms of Service</a>
            </div>
        </div>
    </div>
        </React.Fragment>
  );
}
