import React, { Component } from 'react';

class History extends Component {
  render () {
    return (
      <React.Fragment>
      <div className="bghis flex justify-center mb-40">
        <div className="coba flex flex-col mt-20 ">
                <h2 className="text-white text-2xl font-bold pb-2 text-center">Let’s see what you have bought!</h2>
                <h2 className="text-white text-sm pb-5 text-center">Select item to delete</h2>
            <h1 id="hideku" className="sel text-white text-sm text-right underline pb-5" >Select All</h1>
            <h1 id="openModal" style={{ display: 'none' }} className="del text-white text-sm text-right underline pb-5" >Delete</h1>
            <div className="flex flex-row space-x-3 mb-3">
                <div className="flex flex-col w-60 h-20 rounded-lg py-2 items-center bg-white">
                    <div className="flex flex-row items-center">
                        <img className="h-12 w-12 rounded-full mr-3" src="assets/hisp.png" alt=""/>
                        <div className="flex flex-col">
                            <h2 className="font-bold ">Veggie tomato mix</h2>
                            <h2 className="text-sm text-yellow-900">IDR 34.000</h2>
                            <div className="flex flex-row">
                                <h2 className="text-sm text-yellow-900 pr-16">Delivered</h2>
                                <label className="cb3 flex justify-center items-center">
                                    <input id="checkHide" onClick="myFunction()" type="checkbox" />
                                    <span className="checkmark3"></span>
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-60 h-20 rounded-lg py-2 items-center bg-white">
                    <div className="flex flex-row items-center">
                        <img className="h-12 w-12 rounded-full mr-3" src="assets/hisp.png" alt=""/>
                        <div className="flex flex-col">
                            <h2 className="font-bold ">Veggie tomato mix</h2>
                            <h2 className="text-sm text-yellow-900">IDR 34.000</h2>
                            <div className="flex flex-row">
                                <h2 className="text-sm text-yellow-900 pr-16">Delivered</h2>
                                <label className="cb3 flex justify-center items-center">
                                    <input id="checkHide2" onClick="myFunction()" type="checkbox"/>
                                    <span className="checkmark3"></span>
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-60 h-20 rounded-lg py-2 items-center bg-white">
                    <div className="flex flex-row items-center">
                        <img className="h-12 w-12 rounded-full mr-3" src="assets/hisp.png" alt=""/>
                        <div className="flex flex-col">
                            <h2 className="font-bold ">Veggie tomato mix</h2>
                            <h2 className="text-sm text-yellow-900">IDR 34.000</h2>
                            <div className="flex flex-row">
                                <h2 className="text-sm text-yellow-900 pr-16">Delivered</h2>
                                <label className="cb3 flex justify-center items-center">
                                    <input id="checkHide3" onClick="myFunction()" type="checkbox"/>
                                    <span className="checkmark3"></span>
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-x-3  mb-3">
                <div className="flex flex-col w-60 h-20 rounded-lg py-2 items-center bg-white">
                    <div className="flex flex-row items-center">
                        <img className="h-12 w-12 rounded-full mr-3" src="assets/hisp.png" alt=""/>
                        <div className="flex flex-col">
                            <h2 className="font-bold ">Veggie tomato mix</h2>
                            <h2 className="text-sm text-yellow-900">IDR 34.000</h2>
                            <div className="flex flex-row">
                                <h2 className="text-sm text-yellow-900 pr-16">Delivered</h2>
                                <label className="cb3 flex justify-center items-center">
                                    <input id="checkHide4" onClick="myFunction()" type="checkbox"/>
                                    <span className="checkmark3"></span>
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-60 h-20 rounded-lg py-2 items-center bg-white">
                    <div className="flex flex-row items-center">
                        <img className="h-12 w-12 rounded-full mr-3" src="assets/hisp.png" alt=""/>
                        <div className="flex flex-col">
                            <h2 className="font-bold ">Veggie tomato mix</h2>
                            <h2 className="text-sm text-yellow-900">IDR 34.000</h2>
                            <div className="flex flex-row">
                                <h2 className="text-sm text-yellow-900 pr-16">Delivered</h2>
                                <label className="cb3 flex justify-center items-center">
                                    <input id="checkHide5" onClick="myFunction()" type="checkbox"/>
                                    <span className="checkmark3"></span>
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-60 h-20 rounded-lg py-2 items-center bg-white">
                    <div className="flex flex-row items-center">
                        <img className="h-12 w-12 rounded-full mr-3" src="assets/hisp.png" alt=""/>
                        <div className="flex flex-col">
                            <h2 className="font-bold ">Veggie tomato mix</h2>
                            <h2 className="text-sm text-yellow-900">IDR 34.000</h2>
                            <div className="flex flex-row">
                                <h2 className="text-sm text-yellow-900 pr-16">Delivered</h2>
                                <label className="cb3 flex justify-center items-center">
                                    <input id="checkHide6" onClick="myFunction()" type="checkbox"/>
                                    <span className="checkmark3"></span>
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-x-3  mb-3">
                <div className="flex flex-col w-60 h-20 rounded-lg py-2 items-center bg-white">
                    <div className="flex flex-row items-center">
                        <img className="h-12 w-12 rounded-full mr-3" src="assets/hisp.png" alt=""/>
                        <div className="flex flex-col">
                            <h2 className="font-bold ">Veggie tomato mix</h2>
                            <h2 className="text-sm text-yellow-900">IDR 34.000</h2>
                            <div className="flex flex-row">
                                <h2 className="text-sm text-yellow-900 pr-16">Delivered</h2>
                                <label className="cb3 flex justify-center items-center">
                                    <input id="checkHide7" onClick="myFunction()" type="checkbox"/>
                                    <span className="checkmark3"></span>
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-60 h-20 rounded-lg py-2 items-center bg-white">
                    <div className="flex flex-row items-center">
                        <img className="h-12 w-12 rounded-full mr-3" src="assets/hisp.png" alt=""/>
                        <div className="flex flex-col">
                            <h2 className="font-bold ">Veggie tomato mix</h2>
                            <h2 className="text-sm text-yellow-900">IDR 34.000</h2>
                            <div className="flex flex-row">
                                <h2 className="text-sm text-yellow-900 pr-16">Delivered</h2>
                                <label className="cb3 flex justify-center items-center">
                                    <input id="checkHide8" onClick="myFunction()" type="checkbox"/>
                                    <span className="checkmark3"></span>
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-60 h-20 rounded-lg py-2 items-center bg-white">
                    <div className="flex flex-row items-center">
                        <img className="h-12 w-12 rounded-full mr-3" src="assets/hisp.png" alt=""/>
                        <div className="flex flex-col">
                            <h2 className="font-bold ">Veggie tomato mix</h2>
                            <h2 className="text-sm text-yellow-900">IDR 34.000</h2>
                            <div className="flex flex-row">
                                <h2 className="text-sm text-yellow-900 pr-16">Delivered</h2>
                                <label className="cb3 flex justify-center items-center">
                                    <input id="checkHide9" onClick="myFunction()" type="checkbox"/>
                                    <span className="checkmark3"></span>
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-x-3  mb-3">
                <div className="flex flex-col w-60 h-20 rounded-lg py-2 items-center bg-white">
                    <div className="flex flex-row items-center">
                        <img className="h-12 w-12 rounded-full mr-3" src="assets/hisp.png" alt=""/>
                        <div className="flex flex-col">
                            <h2 className="font-bold ">Veggie tomato mix</h2>
                            <h2 className="text-sm text-yellow-900">IDR 34.000</h2>
                            <div className="flex flex-row">
                                <h2 className="text-sm text-yellow-900 pr-16">Delivered</h2>
                                <label className="cb3 flex justify-center items-center">
                                    <input id="checkHide10" onClick="myFunction()" type="checkbox"/>
                                    <span className="checkmark3"></span>
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-60 h-20 rounded-lg py-2 items-center bg-white">
                    <div className="flex flex-row items-center">
                        <img className="h-12 w-12 rounded-full mr-3" src="assets/hisp.png" alt=""/>
                        <div className="flex flex-col">
                            <h2 className="font-bold ">Veggie tomato mix</h2>
                            <h2 className="text-sm text-yellow-900">IDR 34.000</h2>
                            <div className="flex flex-row">
                                <h2 className="text-sm text-yellow-900 pr-16">Delivered</h2>
                                <label className="cb3 flex justify-center items-center">
                                    <input id="checkHide11" onClick="myFunction()" type="checkbox"/>
                                    <span className="checkmark3"></span>
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-60 h-20 rounded-lg py-2 items-center bg-white">
                    <div className="flex flex-row items-center">
                        <img className="h-12 w-12 rounded-full mr-3" src="assets/hisp.png" alt=""/>
                        <div className="flex flex-col">
                            <h2 className="font-bold ">Veggie tomato mix</h2>
                            <h2 className="text-sm text-yellow-900">IDR 34.000</h2>
                            <div className="flex flex-row">
                                <h2 className="text-sm text-yellow-900 pr-16">Delivered</h2>
                                <label className="cb3 flex justify-center items-center">
                                    <input id="checkHide12" onClick="myFunction()" type="checkbox"/>
                                    <span className="checkmark3"></span>
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-x-3">
                <div className="flex flex-col w-60 h-20 rounded-lg py-2 items-center bg-white">
                    <div className="flex flex-row items-center">
                        <img className="h-12 w-12 rounded-full mr-3" src="assets/hisp.png" alt=""/>
                        <div className="flex flex-col">
                            <h2 className="font-bold ">Veggie tomato mix</h2>
                            <h2 className="text-sm text-yellow-900">IDR 34.000</h2>
                            <div className="flex flex-row">
                                <h2 className="text-sm text-yellow-900 pr-16">Delivered</h2>
                                <label className="cb3 flex justify-center items-center">
                                    <input id="checkHide13" onClick="myFunction()" type="checkbox"/>
                                    <span className="checkmark3"></span>
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-60 h-20 rounded-lg py-2 items-center bg-white">
                    <div className="flex flex-row items-center">
                        <img className="h-12 w-12 rounded-full mr-3" src="assets/hisp.png" alt=""/>
                        <div className="flex flex-col">
                            <h2 className="font-bold ">Veggie tomato mix</h2>
                            <h2 className="text-sm text-yellow-900">IDR 34.000</h2>
                            <div className="flex flex-row">
                                <h2 className="text-sm text-yellow-900 pr-16">Delivered</h2>
                                <label className="cb3 flex justify-center items-center">
                                    <input id="checkHide14" onClick="myFunction()" type="checkbox"/>
                                    <span className="checkmark3"></span>
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-60 h-20 rounded-lg py-2 items-center bg-white">
                    <div className="flex flex-row items-center">
                        <img className="h-12 w-12 rounded-full mr-3" src="assets/hisp.png" alt=""/>
                        <div className="flex flex-col">
                            <h2 className="font-bold ">Veggie tomato mix</h2>
                            <h2 className="text-sm text-yellow-900">IDR 34.000</h2>
                            <div className="flex flex-row">
                                <h2 className="text-sm text-yellow-900 pr-16">Delivered</h2>
                                <label className="cb3 flex justify-center items-center">
                                    <input id="checkHide15" onClick="myFunction()" type="checkbox"/>
                                    <span className="checkmark3"></span>
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="modalKu" className="modal">

    <div className="mIsi">
        <div className="flex flex-col justify-center items-center h-full w-full">
            <h1 className="text-center text-xl pb-7">Are you sure want to delete the selected items?</h1>
            <div className="flex flex-row justify-center items-center space-x-10">
              <button id="closeku" className="closeku text-xs bg-white font-bold border-yellow-900 border-2 rounded-lg py-3 px-8 text-yellow-900">Cancel</button>
              <button className="text-xs font-bold bg-yellow-900 rounded-lg py-3 px-8 text-white">Delete</button>
            </div>
        </div>

    </div>

  </div>
      </React.Fragment>
    );
  }
}

export default History;
