import React, { Component } from 'react'
// import axios from 'axios'

export default class Home extends Component {
  // state = {
  //   data: []
  // }

  // getData = async () => {
  //   const { data } = await axios.get(`http://localhost:8080/item/${this.props.match.params.id}`)
  //   this.setState({ data: data.results })
  // }

  // componentDidMount () {
  //   this.getData()
  // }

  render () {
    return (
      <React.Fragment>
          <div className="bg-local">
              <div className=" py-4">
                  <div className="bg-white mr-28 md:mr-36 float-right hidden md:flex rounded-full shadow-xl w-20 h-8 md:w-52 md:h-12">
                      <div className="flex items-center justify-center">
                          <button className=" p-5 focus:outline-none w-9 h-9 flex items-center justify-center">
                              <i className="fa fa-search ml-3" style={{ fontSize: '18px' }}></i>
                          </button>
                      </div>
                      <input className="rounded-r-full text-gray-700 w-28 md:w-44 leading-tight text-sm font-bold focus:outline-none" id="search" type="text" placeholder="Search"/>
                  </div>
              </div>
              <h2 className="ml-14 md:ml-36 pt-14 md:pt-20 text-3xl md:text-5xl font-bold mb-2 text-white py-4 labelHome1" >
                  Start Your Day with Coffee and Good Meals
              </h2>
              <h3 className="ml-14 md:ml-36 text-md md:text-xl font-bold tracking-wide mb-8 text-gray-200 py-4 labelHome1">
                  We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!
              </h3>
              <button className="ml-14 md:ml-36  text-base font-bold rounded-lg py-3 px-14 shadow-lg text-yellow-900  bg-yellow-400 hover:bg-yellow-300 tracking-wider">
                  Get Started
              </button>
              <div className="section1 mx-auto mt-40 md:mt-28">
                  <div className="flex flex-row justify-center items-center h-full">
                      <div className=" flex flex-row justify-center items-center w-48 h-24 md:w-96 md:h-32">
                          <div className="flex flex-row justify-center items-center pr-2 md:pr-6">
                              <a className="text-yellow-900 bg-yellow-400 rounded-full w-5 h-5 md:w-14 md:h-14 flex items-center justify-center p-4">
                                  <i className="fa fa-user" style={{ fontSize: '20px' }}></i>
                              </a>
                          </div>
                          <div className="flex flex-col">
                              <a className=" font-extrabold text-xl">90+</a>
                              <a className="text-gray-600">Staff</a>
                          </div>
                      </div>
                      <div className="flex flex-row justify-center items-center border-l-2 border-r-2 border-gray-200 w-48 h-24 md:w-96 md:h-32">
                          <div className=" flex flex-row justify-center items-center pr-2 md:pr-6">
                              <a className="text-yellow-900 bg-yellow-400 rounded-full w-5 h-5 md:w-14 md:h-14 flex items-center justify-center p-4">
                                  <i className="fa fa-map-marker" style={{ fontSize: '20px' }}></i>
                              </a>
                          </div>
                          <div className=" flex flex-col">
                              <a className=" font-extrabold text-xl ">30+</a>
                              <a className="text-gray-600">Stores</a>
                          </div>
                      </div>
                      <div className="flex flex-row justify-center items-center w-48 h-24 md:w-96 md:h-32">
                          <div className=" flex flex-row justify-center items-center pr-2 md:pr-6">
                              <a className="text-yellow-900 bg-yellow-400 rounded-full w-5 h-5 md:w-14 md:h-14 flex items-center justify-center p-4">
                                  <i className="fa fa-heart-o" style={{ fontSize: '20px' }}></i>
                              </a>
                          </div>
                          <div className="flex flex-col">
                              <a className="font-extrabold text-xl">800+</a>
                              <a className="text-gray-600">Costumers</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className=" flex justify-center items-center mx-4 md:mx-40 mt-24 md:mt-44 mb-32">
              <div className="hidden md:flex flex-col md:flex-row mr-4 md:mr-10" style={{ width: '600px' }}>
                  <img src="/assets/img1.png" alt="img"/>
              </div>
              <div className="flex flex-col md:flex-row md:ml-10 labelHome1">
                  <div className="flex flex-col">
                      <h1 className="text-3xl font-semibold leading-loose">We Provide Good Coffee</h1>
                      <h1 className="text-3xl font-semibold">and Healthy Meals</h1>
                      <h2 className="py-10 text-lg">You can explore the menu that we provide with fun and have their own taste and make your day better.</h2>
                      <ul className="container">
                          <li className="flex items-center md:h-12"><i className="fa fa-check-circle pr-4 text-green-500" style={{ fontSize: '25px' }}></i> High quality beans</li>
                          <li className="flex items-center md:h-12"><i className="fa fa-check-circle pr-4 text-green-500" style={{ fontSize: '25px' }}></i> Healthy meals, you can request the ingredients</li>
                          <li className="flex items-center md:h-12"><i className="fa fa-check-circle pr-4 text-green-500" style={{ fontSize: '25px' }}></i> Chat with our staff to get better experience for ordering</li>
                          <li className="flex items-center md:h-12"><i className="fa fa-check-circle pr-4 text-green-500" style={{ fontSize: '25px' }}></i> Free member card with a minimum purchase of IDR 200.000.</li>
                      </ul>
                  </div>
              </div>
          </div>

          <div className="bg-gray-50 px-4">
              <h1 className="text-center md:pt-20 text-3xl font-semibold">Here is People’s Favorite</h1>
              <h1 className="text-center pt-8 text-gray-600">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</h1>
              <div className="flex flex-col md:flex-row justify-center items-center mt-20 mx-36">
                  <div className="flex flex-col mb-20 items-center bg-white border-gray-200 hover:border-yellow-900 border-2 rounded-lg" style={{ width: '300px', height: '670px' }}>
                      <div className="flex-1 flex flex-col justify-center items-center">
                          <img src="assets/item1.png" className="h-24 w-24 rounded-full object-cover shadow-xl" alt=""/>
                          <h1 className="text-center font-semibold pt-14">Hazelnut Latte</h1>
                      </div>
                      <div className="flex flex-col h-64 items-center">
                          <ul className="text-sm text-gray-500">
                              <li><i className="fa fa-check text-green-500 pr-4 pb-4"></i>Hazelnut Syrup</li>
                              <li><i className="fa fa-check text-green-500 pr-4 pb-4"></i>Vanilla Whipped Cream</li>
                              <li><i className="fa fa-check text-green-500 pr-4 pb-4"></i>Ice / Hot</li>
                              <li><i className="fa fa-check text-green-500 pr-4 pb-4"></i>Sliced Banana On Top</li>
                          </ul>
                      </div>
                      <div className="flex flex-col h-20 mb-10 justify-center items-center">
                          <h1 className="font-semibold text-lg pb-3">IDR 25.000</h1>
                          <button className="text-xs bg-white border-yellow-400 border-2 rounded-full py-2 px-10 font-semibold text-yellow-900">Order Now</button>
                      </div>
                  </div>

                  <div className="flex flex-col mx-20 mb-20 items-center bg-white border-gray-200 hover:border-yellow-900 border-2 rounded-lg" style={{ width: '300px', height: '670px' }}>
                      <div className="flex-1 flex flex-col justify-center items-center">
                          <img src="assets/item2.png" className="h-24 w-24 rounded-full object-cover shadow-xl" alt="item"/>
                          <h1 className="text-center font-semibold pt-14">Pinky Promise</h1>
                      </div>
                      <div className="flex flex-col h-64 items-center">
                          <ul className="text-sm text-gray-500">
                              <li><i className="fa fa-check text-green-500 pr-4 pb-4"></i>1 Shot of Coffee</li>
                              <li><i className="fa fa-check text-green-500 pr-4 pb-4"></i>Vanilla Whipped Cream</li>
                              <li><i className="fa fa-check text-green-500 pr-4 pb-4"></i>Chocolate Biscuits</li>
                              <li><i className="fa fa-check text-green-500 pr-4 pb-4"></i>Strawberry Syrup</li>
                              <li><i className="fa fa-check text-green-500 pr-4 pb-4"></i>Sliced strawberry on Top</li>
                          </ul>
                      </div>
                      <div className="flex flex-col h-20 mb-10 justify-center items-center">
                          <h1 className="font-semibold text-lg pb-3">IDR 30.000</h1>
                          <button className="text-xs bg-white border-yellow-400 border-2 rounded-full py-2 px-10 font-semibold text-yellow-900">Order Now</button>
                      </div>
                  </div>

                  <div className="flex flex-col mb-20 items-center bg-white border-gray-200 hover:border-yellow-900 border-2 rounded-lg" style={{ width: '300px', height: '670px' }}>
                      <div className="flex-1 flex flex-col justify-center items-center">
                          <img src="assets/item3.png" className="h-24 w-24 rounded-full object-cover shadow-xl" alt=""/>
                          <h1 className="text-center font-semibold pt-14">Chicken Wings</h1>
                      </div>
                      <div className="flex flex-col h-64  items-center">
                          <ul className="text-sm text-gray-500">
                              <li><i className="fa fa-check text-green-500 pr-4 pb-4"></i>Wings</li>
                              <li><i className="fa fa-check text-green-500 pr-4 pb-4"></i>Drum Sticks</li>
                              <li><i className="fa fa-check text-green-500 pr-4 pb-4"></i>Mayonaise and Lemon</li>
                              <li><i className="fa fa-check text-green-500 pr-4 pb-4"></i>Hot Fried</li>
                              <li><i className="fa fa-check text-green-500 pr-4 pb-4"></i>Secret Recipe</li>
                              <li><i className="fa fa-check text-green-500 pr-4 pb-4"></i>Buy 1 Get 1 only for Dine in</li>
                          </ul>
                      </div>
                      <div className="flex flex-col h-20 mb-10 justify-center items-center">
                          <h1 className="font-semibold text-lg pb-3">IDR 40.000</h1>
                          <button className="text-xs bg-white border-yellow-400 border-2 rounded-full py-2 px-10 font-semibold text-yellow-900">Order Now</button>
                      </div>
                  </div>
              </div>
          </div>

          <div className="bg-gray-50 px-4">
              <h1 className="text-center mx-auto pt-20 text-3xl font-semibold labelHome1">Visit Our Store in the Spot on the Map Below</h1>
              <h1 className="text-center mx-auto pt-8 text-gray-600 mb-20 md:mb-40 labelHome1" >See our store in every city on the spot and spen your good day there. See you soon!</h1>
              <img src="assets/map.png" className="mx-auto" style={{ width: '1085px' }} alt=""/>
          </div>

          <div className="bg-gray-50 px-4">
              <h1 className="text-center mx-auto pt-20 text-3xl font-semibold w-48" style={{ width: '350px' }}>Our Partner</h1>
              <img src="assets/sponsor.png" className="mx-auto " style={{ width: '1085px' }} alt=""/>
          </div>

          <div className="bg-gray-50 px-4">
              <h1 className="text-center mx-auto pt-20 text-3xl font-semibold w-48" style={{ width: '350px' }}>Loved by Thousands of Happy Customer</h1>
              <h1 className="text-center pt-8 text-gray-600">These are the stories of our customers who have visited us with great pleasure.</h1>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center mt-20">
                  <div className="itemHome flex flex-col pt-3 px-4 md:px-6  bg-white border-gray-200 hover:border-yellow-900 border-2 rounded-lg" >
                      <div className="flex flex-row h-24 items-center">
                          <img src="assets/man1.png" className="md:h-16 h-12 md:w-16 w-12 rounded-full object-cover" alt=""/>
                          <div className="flex flex-col ml-5">
                              <h1 className="text-sm md:text-base font-semibold">Viezh Robert</h1>
                              <h1 className="text-sm md:text-base text-gray-500">Warsaw, Poland</h1>
                          </div>
                          <div className="flex flex-row ml-3 md:ml-16">
                              <span className="text-sm md:text-base font-semibold">4.5<i className="pl-1 md:pl-3 fa fa-star text-sm md:text-base text-yellow-400"></i></span>
                          </div>
                      </div>
                      <div className="flex-1 flex flex-col text-justify">
                          <ul className="text-xs md:text-sm">
                              <li>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</li>
                          </ul>
                      </div>
                  </div>

                  <div className="itemHome flex flex-col pt-3 px-4 md:px-6 mx-10 bg-white border-gray-200 hover:border-yellow-900 border-2 rounded-lg" >
                      <div className="flex flex-row h-24 items-center">
                          <img src="assets/man2.png" className="md:h-16 h-12 md:w-16 w-12 rounded-full object-cover" alt=""/>
                          <div className="flex flex-col ml-5">
                              <h1 className="text-sm md:text-base font-semibold">Yessica Christy</h1>
                              <h1 className="text-sm md:text-base text-gray-500">Shanxi, China</h1>
                          </div>
                          <div className="flex flex-row ml-3 md:ml-16">
                              <span className="text-sm md:text-base font-semibold">4.5<i className="pl-1 md:pl-3 fa fa-star text-sm md:text-base text-yellow-400"></i></span>
                          </div>
                      </div>
                      <div className="flex-1 flex flex-col text-justify">
                          <ul className="text-xs md:text-sm">
                              <li>“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte</li>
                          </ul>
                      </div>
                  </div>

                  <div className="itemHome flex flex-col pt-3 px-4 md:px-6  bg-white border-gray-200 hover:border-yellow-900 border-2 rounded-lg" >
                      <div className="flex flex-row h-24 items-center">
                          <img src="assets/man3.png" className="md:h-16 h-12 md:w-16 w-12 rounded-full object-cover" alt=""/>
                          <div className="flex flex-col ml-5">
                              <h1 className="text-sm md:text-base font-semibold">Kim Young Jou</h1>
                              <h1 className="text-sm md:text-base text-gray-500">Seoul, South Korea</h1>
                          </div>
                          <div className="flex flex-row ml-3 md:ml-16">
                              <span className="text-sm md:text-base font-semibold">4.5<i className="pl-1 md:pl-3 fa fa-star text-sm md:text-base text-yellow-400"></i></span>
                          </div>
                      </div>
                      <div className="flex-1 flex flex-col text-justify">
                          <ul className="text-xs md:text-sm">
                              <li>“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!</li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div className="flex flex-col mt-20 " style={{ marginLeft: '140px' }}>
                  <div className="flex flex-row items-center">
                      <div className="flex flex-1 flex-row items-center">
                          <div className="bg-yellow-900 rounded-full w-8 h-3 "></div>
                          <div className="bg-gray-300 rounded-full w-3 h-3 mx-2"></div>
                          <div className="bg-gray-300 rounded-full w-3 h-3 "></div>
                          <div className="bg-gray-300 rounded-full w-3 h-3 mx-2"></div>
                      </div>
                      <div className="flex" style={{ marginRight: '140px' }}>
                          <div className="bg-white hover:bg-gray-100 border-2 border-yellow-900 rounded-full flex items-center justify-center h-8 w-8 md:w-12 md:h-12"><i className="fa fa-arrow-left text-yellow-900 text-lg md:text-2xl"></i></div>
                          <div className="bg-yellow-900 hover:bg-yellow-800 flex items-center justify-center rounded-full ml-5 h-8 w-8 md:w-12 md:h-12"><i className="fa fa-arrow-right text-white text-lg md:text-2xl"></i></div>
                      </div>
                  </div>
              </div>

              <div className="z-20 section1 container relative mx-auto my-20">
                  <div className="section2 flex flex-row items-center h-full">
                      <div className="flex-1 flex flex-row items-center mx-20  ">
                          <div className=" flex flex-col space-y-2">
                              <a className=" font-semibold text-3xl w-64">Check our promo today!</a>
                              <a className="text-gray-600 text-sm">Let&apos;s see the deals and pick yours!</a>
                          </div>
                      </div>
                      <div className="flex flex-row items-center mx-20 ">
                          <div className="flex flex-col">
                              <button className="btn text-xs bg-yellow-400 hover:bg-yellow-300 rounded-lg py-3 px-12 font-semibold text-yellow-900">See Promo</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </React.Fragment>
    )
  }
}
