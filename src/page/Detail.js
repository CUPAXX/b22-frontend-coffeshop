import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { getDetail } from '../redux/actions/item'
import { addItems } from '../redux/actions/carts'
import { SectionBarCounter } from "../components/SectionBarCounter";

// import axios from 'axios'

function Detail (props) {
  const { detail } = props.item
  const [price, setPrice] = useState(0)
  const [selectedVariant, setSelectedVariants] = useState(0)
  const [variants, setVariants] = useState(null)
  const [coba, setCoba] = useState([])

  useEffect(() => {
    if (!variants && detail?.variant) {
      const data = detail?.variant?.map((variants) => {
        return {
          ...variants, amount: 0 
        }
      })
      setVariants(data)
    }

      
    }, [variants, detail])

  useEffect(() => {
    if (detail?.base_price) {
      setPrice(detail?.base_price);
    }
  }, [detail]);

  

  const getPrice = (idx) => {
    const getPrice = detail.variant[idx].price;
    setPrice(getPrice);
    setSelectedVariants(getPrice);
    
  };

  const addCoba = () => {
    if (props.addItems(coba)) {
      alert("Successfully Added This Product To Your Cart")
    }
  }

  // const lagi = (variants, selectedVariant) => {
  //   const data = {
  //     id: props.item.id,
  //     name: props.item.productName,
  //     picture: props.item.picture,
  //     variant: variants,
  //     selectedVariant: selectedVariant
  //   }
  //   setCoba(data)
  // }

  useEffect(() => {
    if(variants && detail){
      const data = {
        id: detail.id,
        name: detail.productName,
        picture: detail.picture,
        variant: detail.variant,
        amount: variants
      }
      setCoba(data)
    }
  }, [variants, detail])

  useEffect(() => {
    props.getDetail(props.match.params.id)
  }, [])

  // state = {
  //   data: [],
  //   statePrice: [],
  //   stockku: 0,
  //   stockBefore: 0
  // }

  // getData = async () => {
  //   const { data } = await axios.get(`http://localhost:8080/item/${this.props.match.params.id}`)
  //   this.setState({ data: data.results }, () => {
  //     const getPrice = this.state.data
  //     this.setState({ statePrice: getPrice[0].end_price })
  //     const getStockBf = this.state.data
  //     this.setState({ stockBefore: getStockBf[0].stock })
  //     const getStock = this.state.data
  //     this.setState({ stockku: getStock[0].stock })
  //   })
  // }

  // getIdVariants (id, prices) {
  //   const addData = id && prices
  //   this.setState({ statePrice: addData })
  // }

  // tambah = () => {
  //   const test = this.state.stockku
  //   const test2 = this.state.stockBefore
  //   if (test >= test2) {
  //     window.alert('You Already bought all our stock')
  //   } else {
  //     this.setState({ stockku: test + 1 })
  //   }
  // }

  // kurang = () => {
  //   const test = this.state.stockku
  //   if (test <= 0) {
  //     window.alert('Minimum you buy 1 product')
  //   } else {
  //     this.setState({ stockku: test - 1 })
  //   }
  // }

  // this.props.match.params.id

  return (
    
      <React.Fragment>
      <div className=" bg-gray-200 md:mb-24">
          <div className="flex flex-col md:flex-row pt-14 pb-20 items-center justify-center" >
          <div className="itemLeft flex flex-col justify-center items-center md:mr-10">
              <h2 className="md:mr-20 pb-14 text-gray-500 capitalize ">Favorite & Promo <span className="font-bold text-yellow-900 capitalize"><i className="fa fa-angle-right font-bold"></i> {detail.productName} </span></h2>

              <div className="flex flex-col items-center">

                  <img className="w-40 h-40 md:h-72 md:w-72 rounded-full" src={detail.picture} alt=""/>

              </div>

              <h2 className="font-extrabold capitalize text-4xl pt-8 pb-4">{detail.productName}</h2>
                <h2 className="font-medium text-lg pb-8"><span>IDR. {price.toLocaleString('en')}</span></h2>

              <button onClick={addCoba} className="btn3 text-white font-bold h-12 w-60 rounded-xl mb-5">Add to Cart</button>
              <button className="btn bg-yellow-400 h-12 w-60 rounded-xl text-yellow-900 font-bold mb-8">Ask a Staff</button>
          </div>
          <div className="flex flex-col items-center">
              <div className="bg-white flex flex-col mx-5 w-72 md:w-96 rounded-lg p-5 md:p-14" style={{ height: '450px' }}>
                  <div className="flex-1 flex flex-col">

                    <h2 className="text-yellow-900 pb-5">{detail.deliveryCondition}</h2>

                    <p className="text-yellow-900">{detail.description}</p>

                  </div>
                  <div className="flex flex-col md:h-20 items-center">
                      <h2 className="text-lg font-bold">Choose a size</h2>
                      <div className="flex flex-row space-x-8 pt-5">
                        {detail?.variant?.map((item, idx) => (
                          <button key={item.id} onClick={() => getPrice(idx)} className="font-bold text-base md:text-lg bg-yellow-400 md:w-12 w-10 md:h-12 h-10 rounded-full flex justify-center items-center">{item.code}</button>
                        ))}

                      </div>
                  </div>
              </div>
              <div className="flex flex-col items-center pt-10">
                  <h2 className="font-bold">Choose Delivery Methods</h2>
                  <div className="flex flex-row space-x-5 pt-6">
                      <button className="btn3 text-white font-medium h-10 w-18 rounded-lg text-xs px-5 mb-5">Dine in</button>
                      <button className="btn4 text-gray-400 font-medium h-10 w-18 rounded-lg text-xs px-5 mb-5" disabled style={{ cursor: 'not-allowed' }}>Door Delivery</button>
                      <button className="btn4 text-gray-400 font-medium h-10 w-18 rounded-lg text-xs px-5 mb-5" disabled style={{ cursor: 'not-allowed' }}>Pick up</button>
                  </div>
                  <div className="flex">
                      <span className="text-sm">Set time : <input className="border-b-2 text-xs border-gray-400 bg-transparent ml-5" type="text" placeholder="Enter the time you’ll arrived" disabled style={{ cursor: 'not-allowed', width: '250px' }}/></span>
                  </div>
              </div>
          </div>
      </div>
      <SectionBarCounter
          variants={variants || []}
          onClick={() => props.addProducts(detail)}
          title={detail?.name}
          picture={detail?.picture}
          type="counter"
          stateValue={0}
          max={detail?.quantity}
        />

        {/* <div className="z-20 relative flex flex-row justify-center">
            <div className="flex flex-row space-x-10">
                <div className="cont4 flex flex-row bg-white h-32 p-5 rounded-xl" style={{ width: '550px' }}>
                    <div className="flex flex-row items-center">

                      <img className="h-20 w-20 rounded-full" src={detail.picture} alt=""/>

                    </div>
                    <div className="flex flex-col justify-center pl-10">

                      <h2 className="font-bold text-xl capitalize">{detail.productName}</h2>

                        <h2>x1 (Large)</h2>
                        <h2>x1 (Regular)</h2>
                    </div>
                    <div className="flex flex-row items-center pl-32 space-x-8">
                          <button className="font-bold flex flex-row justify-center items-center text-2xl w-7 h-7 rounded-full bg-yellow-200 text-yellow-800">-</button>
                          <h2 className="font-bold text-xl">{detail.stock}</h2>
                          <button className="font-bold flex flex-row justify-center items-center text-2xl w-7 h-7 rounded-full bg-yellow-200 text-yellow-800">+</button>
                    </div>
                </div>
                <div className="cont4 flex flex-row">
                    <button className=" bg-yellow-400 h-32 w-48 rounded-xl text-black font-bold text-xl">CHECKOUT</button>
                </div>
            </div>
        </div> */}

      </div>
      </React.Fragment>
  );
}

const mapStateToProps = state => ({
  item: state.item
})

const mapDispatchToProps = { getDetail, addItems }

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
