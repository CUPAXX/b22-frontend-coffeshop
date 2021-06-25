import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getHistory } from '../redux/actions/transaction'

class History extends Component {

  componentDidMount () {
    const { token } = this.props.auth
    if (token !== null) {
      this.props.getHistory(token)
    } else {
      console.log('You Cannot Access Site')
    }
  }
  render () {
    const {data} = this.props.transaction
    return (
      <React.Fragment>
      <div className="bghis flex justify-center mb-40">
        <div className="coba flex flex-col mt-20 ">
                <h2 className="text-white text-2xl font-bold pb-2 text-center">Let’s see what you have bought!</h2>
                <h2 className="text-white text-sm pb-5 text-center">Select item to delete</h2>
            <h1 id="hideku" className="sel text-white text-sm text-right underline pb-5" >Select All</h1>
            <h1 id="openModal" style={{ display: 'none' }} className="del text-white text-sm text-right underline pb-5" >Delete</h1>
            <div className="grid grid-cols-3">
              {data.map(item => (
                <div key={item.id} className="flex flex-col mx-3 my-3 w-60 h-20 rounded-lg py-2 items-center bg-white">
                <div className="flex flex-row items-center">
                    <img className="h-12 w-12 rounded-full mr-3" src="assets/hisp.png" alt=""/>
                    <div className="flex flex-col">
                        <h2 className="font-bold ">{item.code}</h2>
                        <h2 className="text-sm text-yellow-900">{item.total}</h2>
                        <div className="flex flex-row">
                            <h2 className="text-sm text-yellow-900 pr-16">{item.payment_method}</h2>
                            <label className="cb3 flex justify-center items-center">
                                <input id="checkHide" onClick="myFunction()" type="checkbox" />
                                <span className="checkmark3"></span>
                              </label>
                        </div>
                    </div>
                </div>
            </div>
              ))}
                
                
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

const mapStateToProps = state =>({
  transaction: state.transaction,
  auth: state.auth
  
});

const mapDispatchToProps = {
  getHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
