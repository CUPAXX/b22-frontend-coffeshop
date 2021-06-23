import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import itemds from '../bg/itemds.png'
import { connect } from 'react-redux'
import { getItem } from '../redux/actions/item'
import { getCategory } from '../redux/actions/category'
import { getItemCategory } from '../redux/actions/cateItem'

class Product extends Component {
  componentDidMount () {
    this.props.getItem()
    this.props.getCategory()
    this.props.getItemCategory(this.props.match.params.id)
  }

  loadMore = () => {
    const { nextPage } = this.props.item.pageInfo
    this.props.getItem(nextPage)
  }

  render () {
    const { data } = this.props.item
    const { data2 } = this.props.category
    const { data3 } = this.props.cateItem
    // console.log(data)
    return (
        <React.Fragment>
        <div className="flex flex-row border-t-2 border-gray-300 mb-40">
          <div className="flex flex-col w-96 items-center border-r-2">
              <h1 className="text-center font-bold text-2xl mt-8 text-yellow-900">Promo for you</h1>
              <h2 className="text-center text-xs mt-10">Coupons will be updated every weeks</h2>
              <h2 className="text-center text-xs mb-10">Check them out! </h2>
              <div className="flex flex-row items-center ml-14">
                  <div className="cont w-60 h-96 rounded-xl flex flex-col">
                      <div className="flex-1 flex flex-col justify-center items-center border-dashed border-black space-y-2 border-b">
                          <img className="w-24 h-24 rounded-full" src={itemds} alt=""/>
                          <h2 className="font-bold text-xl">Beef Spaghetti</h2>
                          <h2 className="font-bold text-xl">20% OFF</h2>
                          <h2 className="text-center text-sm">Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</h2>
                      </div>
                      <div className="flex flex-col h-28 mt-2 items-center space-y-3">
                          <h2 className="text-sm">COUPON CODE</h2>
                          <h2 className="font-bold text-2xl">FNPR15RG</h2>
                          <h2 className="text-xs">Valid untill October 10th 2020</h2>
                      </div>
                  </div>
                  <div className="cont2 w-6 h-80 rounded-r-xl"></div>
                  <div className="cont3 w-6 h-72 rounded-r-xl"></div>
              </div>
              <button className="btn3 text-white font-bold h-12 w-60 rounded-xl mt-10">Apply Coupon</button>
              <div className="text-xs mt-28 mb-20 space-y-1">
                  <h1 className="font-bold text-gray-700">Terms and Condition</h1>
                  <ul className="text-gray-600 space-y-1">
                      <li>1. You can only apply 1 coupon per day</li>
                      <li>2. It only for dine in</li>
                      <li>3. Buy 1 get 1 only for new user</li>
                      <li>4. Should make member card to apply coupon</li>
                  </ul>
              </div>
          </div>
          <div className="flex-1 flex flex-col mb-20">
              <div className="flex flex-row justify-center my-5">
                {data2.map(cate => (
                   <a key={cate.id} onClick={() => this.props.getItemCategory(cate.id)} className="cursor-pointer hover:underline capitalize hover:text-yellow-900 font-medium text-gray-400 mx-5">{cate.categoryName}</a>
                ))}

              </div>
              <div className="grid grid-cols-4 mx-40 justify-center">

                {/* {this.props.item < 1 ? data2.map(product)}
                <Link to={`/productdetail/${item.id}`} key={item.id.toString}>
                <div className="flex flex-row  mt-20 justify-center">
                    <div className="cont4 bg-white w-32 h-44 rounded-2xl">
                      <div className="flex justify-center -mt-10"><img className="h-24 w-24 rounded-full" src={item.picture} alt="item_image"/></div>
                      <h1 className="font-extrabold text-base leading-tight text-center w-18 mx-auto pt-3 px-2">{item.productName}</h1>
                      <h2 className="font-bold text-center text-yellow-900 pt-2" >IDR. {item.price.toLocaleString('en')}</h2>
                    </div>
                  </div>
              </Link> */}

                {this.props.cateItem > 0
                  ? <React.Fragment>
                  {data3.map(coba => (
              <Link to={`/productdetail/${coba.id}`} key={coba.id.toString}>
              <div className="flex flex-row  mt-20 justify-center">
                  <div className="cont4 bg-white w-32 h-44 rounded-2xl">
                    <div className="flex justify-center -mt-10"><img className="h-24 w-24 rounded-full" src={coba.picture} alt="coba_image"/></div>
                    <h1 className="font-extrabold text-base capitalize leading-tight text-center w-18 mx-auto pt-3 px-2">{coba.productName}</h1>
                    <h2 className="font-bold text-center text-yellow-900 pt-2" >IDR. {coba.price.toLocaleString('en')}</h2>
                  </div>
                </div>
            </Link>
                  ))}
                </React.Fragment>
                  : <React.Fragment>
                  {data.map(item => (
                <Link to={`/productdetail/${item.id}`} key={item.id.toString}>
                <div className="flex flex-row  mt-20 justify-center">
                    <div className="cont4 bg-white w-32 h-44 rounded-2xl">
                      <div className="flex justify-center -mt-10"><img className="h-24 w-24 rounded-full" src={item.picture} alt="item_image"/></div>
                      <h1 className="font-extrabold text-base capitalize leading-tight text-center w-18 mx-auto pt-3 px-2">{item.productName}</h1>
                      <h2 className="font-bold text-center text-yellow-900 pt-2" >IDR. {item.price.toLocaleString('en')}</h2>
                    </div>
                  </div>
              </Link>
                  ))}
                </React.Fragment>
                    }

              </div>
              <div className="text-center mt-20">
                <button className="bg-yellow-400 px-11 py-2 rounded-md" onClick={this.loadMore}>Load More</button>
              </div>

          </div>
      </div>
        </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  item: state.item,
  category: state.category,
  cateItem: state.cateItem
})

const mapDispatchToProps = { getItem, getCategory, getItemCategory }

export default connect(mapStateToProps, mapDispatchToProps)(Product)
