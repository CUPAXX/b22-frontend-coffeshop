import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getHistory } from '../redux/actions/transaction'
import Modal from '../components/Modal'

class History extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

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
        <div className="coba flex flex-col mt-20 mx-10 md:mx-0 ">
                <h2 className="text-white text-2xl font-bold pb-2 text-center">Let’s see what you have bought!</h2>
                <h2 className="text-white text-sm pb-5 text-center">Select item to delete</h2>
            <h1 id="hideku" className="sel text-white text-sm text-right underline pb-5" >Select All</h1>
            <h1 id="openModal" style={{ display: 'none' }} className="del text-white text-sm text-right underline pb-5" >Delete</h1>
            <div className="grid grid-cols-1 justify-items-center md:grid-cols-3">

              {data.map(item => (
                <div key={item.id} onClick={this.showModal} className="flex flex-col mx-3 my-3 w-60 h-20 rounded-lg py-2 items-center bg-white">
                <div className="flex flex-row items-center">
                    <div className="flex flex-col">
                        <h2 className="font-bold ">{item.code}</h2>
                        <h2 className="text-sm text-yellow-900">{item.total}</h2>
                        <div className="flex flex-row">
                            <h2 className="text-sm pr-3 text-yellow-900">{item.payment_method}</h2>
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

        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className=" w-full rounded-lg my-5" >
            <div className="flex flex-1 flex-col">
              <h2 className="font-bold text-yellow-900 text-xl my-5 text-center">Detail History</h2>


              <div className="flex flex-col md:mx-10">

              <div className="flex flex-row my-2 items-center">
              <h2 className="mx-5">gambar</h2>
              <div className="flex flex-1 ml-2 flex-col">
              <h2>product name</h2>
              <h2>amount</h2>
              </div>
              <div className="mx-5">harga</div>
              </div>

              </div>


              <div className="flex flex-col md:mx-10 mt-8">
                <div className="flex flex-row">
                  <h2 className="mx-5 flex flex-1">Sub Total</h2>
                  <h2 className="mx-5">IDR</h2>
                </div>
                <div className="flex flex-row">
                  <h2 className="mx-5 flex flex-1">Tax & Fees</h2>
                  <h2 className="mx-5">IDR</h2>
                </div>
                <div className="flex flex-row">
                  <h2 className="mx-5 flex flex-1">Shipping</h2>
                  <h2 className="mx-5">IDR</h2>
                </div>
                <div className="flex flex-row">
                  <h2 className="mx-5 flex flex-1">Payment Method</h2>
                  <h2 className="mx-5">Bank</h2>
                </div>
                <div className="flex flex-row">
                  <h2 className="mx-5 flex flex-1">Address</h2>
                  <h2 className="mx-5">Perum</h2>
                </div>

                <div className="flex flex-row mt-10 mb-5">
                  <h2 className="mx-5 flex flex-1 font-bold text-2xl text-yellow-900">TOTAL</h2>
                  <h2 className="mx-5 font-bold text-2xl text-yellow-900">IDR</h2>
                </div>

              </div>

            </div>
          </div>
        </Modal>

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
