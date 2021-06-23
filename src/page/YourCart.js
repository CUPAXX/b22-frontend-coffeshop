import React, { Component } from 'react';
import { connect } from 'react-redux';

class YourCart extends Component {
  
  render () {
    const {items} = this.props.carts
    console
    return (
      <React.Fragment>
      <div className="bgcart flex justify-center">
        <div className="flex flex-col mx-32">
            <div className="flex flex-col pb-16">
                <div className="font-bold text-4xl text-white w-80 pt-14">Checkout your item now!</div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col pr-40">
                    <div className="flex flex-1 flex-col bg-white rounded-xl" >
                        <div className="flex flex-col">
                            <div className="font-bold text-2xl py-10 text-yellow-900 text-center ">Order Summary</div>
                        </div>
                        <div className="flex flex-1 flex-col pb-8 border-b mx-10 border-gray-300">

                        {/* {items?.map(item => (
                              <div key={item.id} className="flex flex-row items-center">
                                    <img className="h-16 w-16 rounded-lg" src={item.picture} alt=""/>
                                <div className="flex flex-col flex-1 ml-5">
                                    <h2>{item.productName}</h2>
                                   
                                      <h2>x 1</h2>
                                      <h2>Reguler</h2>

                                </div>
                                <div>
                                <h2>IDR. {item.base_price.toLocaleString('en')}</h2>
                                </div>
                            </div>
                                ))} */}
                            
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
                        <div className="flex flex-row pb-8 mx-5 pt-10">
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

const mapStateToProps = state => ({
  carts: state.carts
})

export default connect(mapStateToProps)(YourCart);
