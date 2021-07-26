import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { profileUser } from '../redux/actions/profile'

function Navbar (props)  {
  const { auth } = props.auth
  const { token } = props.auth
  const {data} = props.profile

  useEffect(() => {
    if (token !== null) {
      props.profileUser(token)
    } else {
      console.log('You Cannot Access Site')
    }
  }, [token])


  return (
    <React.Fragment>
      <header className="flex flex-row justify-center items-center bg-white py-2 md:py-6 ">
        <div className="flex flex-row w-18 md:w-44 items-center mr-8 md:mr-40">
            <Link to="/" className="">
                <img className="h-8" src="assets/logo.png" alt="logo"/>
              </Link>
              <Link to="/" className=" font-extrabold text-base md:text-xl pl-3">Coffee Shop</Link>
        </div>

        <nav className="flex flex-row items-center">
          <Link to="/" className="text-gray-600 hover:underline text-sm md:text-base p-2 md:p-4">Home</Link>
          <Link to="/product" className=" text-gray-600 hover:underline text-sm md:text-base p-2 md:p-4">Product</Link>
          <Link to="/yourcart" className=" text-gray-600 hover:underline text-sm md:text-base p-2 md:p-4">Your Cart</Link>
          <Link to="/history" className=" text-gray-600 hover:underline text-sm md:text-base p-2 md:p-4">History</Link>
        </nav>
        <div className="flex flex-row ml-8 md:ml-36 w-56 space-x-5 md:space-x-10">
          {token !== null
            ? <React.Fragment>
             
            <div className="ml-20">
                <img className=" items-center h-10 w-10 relative" src="assets/chat.png" alt="chat"/>
                <div className="absolute -mt-11 -ml-2">
                    <div className="bg-yellow-900 w-4 h-4 flex justify-center items-center rounded-full font-bold text-white" style={{ fontSize: '10px' }}>1</div>
                </div>
              </div>
              <Link to="/profile">
                <img className=" items-center h-10 w-10 rounded-full" src={data.picture} alt="user"/>
              </Link>
            </React.Fragment>

            : (
            <React.Fragment>
            <Link to="/login" className="pt-1 md:pt-2"><button className=" font-semibold hover:underline ">Login</button></Link>
              <Link to="/signup"><button className="btn h-8 md:h-10 px-4 md:px-8 text-yellow-900 rounded-full font-semibold bg-yellow-400 hover:bg-yellow-300">Sign Up</button></Link>
            </React.Fragment>

              )}
        </div>
          {/* <div className="flex flex-row ml-8 md:ml-36 w-56 space-x-5 md:space-x-10">
          <Link to="/login" className="pt-1 md:pt-2"><button className=" font-semibold hover:underline ">Login</button></Link>
          <Link to="/signup"><button className="btn h-8 md:h-10 px-4 md:px-8 text-yellow-900 rounded-full font-semibold bg-yellow-400 hover:bg-yellow-300">Sign Up</button></Link>
          </div> */}

      </header>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

const mapDispatchToProps = { profileUser}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
