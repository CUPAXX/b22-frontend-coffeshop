import React, { Component } from 'react';

class ForgotP extends Component {
  render () {
    return (
      <React.Fragment>
      <div className="bgFpassword flex justify-center">
        <div className="flex flex-col items-center mt-12 md:mt-28 w-full mx-10 md:mx-32">
            <div className="text-white text-2xl md:text-4xl font-bold">Forgot your password?</div>
            <div className="text-white font-semibold">Don&apos;t worry, we got your back!</div>
            <div className="flex flex-col md:flex-row items-center w-full">
                <input className="p-8 md:p-10 h-10 md:h-20 w-full md:mr-8 rounded-xl my-10 md:my-28" type="text" placeholder="Enter your email adress to get link"/>
            <button className="btn text-yellow-900 font-bold mb-10 md:mb-0 h-12 md:h-20 px-14 bg-yellow-400 rounded-xl">Send</button>
            </div>

            <div className="text-center text-white text-sm md:text-lg font-semibold mb-5" style={{ width: '350px' }}>Click here if you didn’t receive any link in 2 minutes</div>
            <button className="btn3 text-white font-bold h-14 md:h-20 px-28 md:px-36 rounded-xl">Resend Link</button>
            <div className="text-center text-white text-lg font-semibold my-4">01:54</div>
        </div>
    </div>
      </React.Fragment>
    );
  }
}

export default ForgotP;
