import React, { Component } from 'react';

class YourCart extends Component {
  render () {
    return (
      <React.Fragment>
      <div className="bgcart flex justify-center">
        <div className="flex flex-col mx-32">
            <div className="flex flex-col pb-16">
                <div className="font-bold text-4xl text-white w-80 pt-14">Checkout your item now!</div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col pr-40">
                    <div className="flex flex-col bg-white rounded-xl " style={{ height: '550px', width: '350px' }}>
                        <div className="flex flex-col">
                            <div className="font-bold text-2xl py-14 text-yellow-900 text-center ">Order Summary</div>
                        </div>
                        <div className="flex flex-col pb-8 border-b items-center border-gray-300">
                            <div className="flex flex-row">
                                <div className="h-16 w-16">
                                    <img src="assets/cartp.png" alt=""/>
                                </div>
                                <div className="flex flex-col pl-5 pr-10">
                                    <h2>Hazelnut Latte</h2>
                                    <h2>x 1</h2>
                                    <h2>Regular</h2>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h2>IDR 24.0</h2>
                                </div>
                            </div>
                            <div className="flex flex-row pt-5 ">
                                <div className="h-16 w-16">
                                    <img src="assets/cartp2.png" alt=""/>
                                </div>
                                <div className="flex flex-col pl-5 pr-3">
                                    <h2>Chicken Fire Wings</h2>
                                    <h2>x 2</h2>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h2>IDR 30.0</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col pt-5 mx-5">
                            <div className="flex flex-row">
                                <div className="flex flex-col pr-32">
                                    <h2>SUBTOTAL</h2>
                                    <h2>TAX & FEES</h2>
                                    <h2>SHIPPING</h2>
                                </div>
                                <div className="flex flex-col">
                                    <h2>IDR 120.000</h2>
                                    <h2>IDR 20.000</h2>
                                    <h2>IDR 10.000</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row mx-5 pt-10">
                            <div className="font-bold text-2xl text-yellow-900 pr-24">Total</div>
                            <div className="font-bold text-2xl  text-yellow-900">IDR 150.000</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <h2 className="text-white font-bold pb-4">Address details</h2>
                        <h2 className="text-white font-bold pb-4 text-xs pl-44">edit</h2>
                    </div>
                    <div className="flex flex-col bg-white h-44 rounded-xl justify-center px-10" style={{ width: '350px' }}>
                    <h2 className="font-bold">Delivery <span className="font-medium">to Iskandar Street</span> </h2>
                    <span className="border-t border-b border-gray-300 py-1">Km 5 refinery road oppsite republic road, effurun, Jakarta</span>
                    <h2>+62 81348287878</h2>
                    </div>

                    <div className="flex flex-row items-center">
                        <h2 className="text-white font-bold pb-4 pt-10">Payment method</h2>

                    </div>
                    <div className="flex flex-col bg-white h-56 rounded-xl justify-center px-10" style={{ width: '350px' }}>
                        <div className="flex py-4 items-center">
                            <label className="cb2 flex justify-center items-center">
                            <input type="radio" name="radioPay"/>
                            <span className="checkmark2"></span> <span className="flex justify-center items-center w-8 h-8 bg-yellow-600 rounded-lg mx-4"><i className="fa fa-credit-card-alt text-white" style={{ fontSize: '13px' }}></i></span>
                          </label>
                          <span className="font-medium text-lg">Card</span>
                        </div>

                        <div className="flex py-4 items-center border-t border-b border-gray-300">
                            <label className="cb2 flex justify-center items-center">
                            <input type="radio" name="radioPay"/>
                            <span className="checkmark2"></span> <span className="flex justify-center items-center w-8 h-8 bg-yellow-900 rounded-lg mx-4"><i className="fa fa-university text-white" style={{ fontSize: '13px' }}></i></span>
                          </label>
                          <span className="font-medium text-lg">Bank account</span>
                        </div>

                        <div className="flex py-4 items-center">
                            <label className="cb2 flex justify-center items-center">
                            <input type="radio" name="radioPay"/>
                            <span className="checkmark2"></span> <span className="flex justify-center items-center w-8 h-8 bg-yellow-500 rounded-lg mx-4"><i className="fa fa-truck text-white" style={{ fontSize: '13px' }}></i></span>
                          </label>
                          <span className="font-medium text-lg">Cash on delivery</span>
                        </div>
                    </div>
                    <button className="btn3 text-white font-bold h-14 rounded-xl mt-14" style={{ width: '350px' }}>Confirm and Pay</button>
                </div>
            </div>
        </div>
    </div>
      </React.Fragment>
    );
  }
}

export default YourCart;
