import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleAuth, authRegister } from '../redux/actions/auth'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    phone_number: ''
  }

  onRegister = (e) => {
    e.preventDefault()
    const { email, password, phoneNumber } = this.state
    this.props.authRegister(email, password, phoneNumber).then(() => {
      setTimeout(
        () => this.props.history.push('/login'), 
        3000
      );
      
    })
  }

  componentDidMount () {
    this.props.toggleAuth()
  }

  componentWillUnmount () {
    this.props.toggleAuth()
  }

  render () {
    const { errMsg } = this.props.auth
    const { succMsg } = this.props.auth
    console.log(succMsg)
    return (
      <React.Fragment>
      <div className="mb-20">
        <div className="flex flex-row">
        <div className="bg2 flex">
            <img className="object-cover" src="assets/bg2.png" alt=""/>
        </div>
            <div className="flex-1 flex flex-col">
                <div className="flex flex-row items-center py-8">
                    <div className="flex ml-8 md:ml-20 mr-3">
                        <Link to="/" className="block ">
                            <img className="h-8" src="assets/logo.png" alt=""/>
                          </Link>
                          <Link to="/" className="flex font-bold text-lg md:text-xl pl-2 md:pl-3">Coffee Shop</Link>
                    </div>
                    <div className="flex ml-10 md:ml-52">
                      <Link to="/login"><button className="btn h-8 md:h-10  px-6 md:px-8 text-yellow-900 rounded-full font-semibold bg-yellow-400 hover:bg-yellow-300">Login</button></Link>
                    </div>

                </div>
                  <div className="flex flex-col items-center mx-10 md:mx-24 pt-20">
                      <h2 className="text-4xl font-bold text-yellow-900">Sign Up</h2>
                  </div>
                  {errMsg !== '' ? (
                    <div className="bg-red-300 text-red-900 font-bold mx-10 md:mx-24 text-center py-2 px-2 mt-12 rounded">{errMsg }</div>
                  ) : (
                    <div></div>
                  ) }
                  {succMsg !== '' ? (
                    <div className="bg-green-300 text-green-900 font-bold mx-10 md:mx-24 text-center py-2 px-2 mt-12 rounded">{succMsg }</div>
                  ): (
                    <div></div>
                  )}
                  <form onSubmit={this.onRegister} className="flex-1 flex flex-col mx-10 md:mx-24 pt-14">
                      <h1 className="font-semibold text-gray-600 mb-2">Email Adress :</h1>
                      <input onChange={e => this.setState({ email: e.target.value })} className="border-2 mb-6 border-gray-400 p-4 rounded-2xl" type="email" placeholder="Enter your email adress"/>
                      <h1 className="font-semibold text-gray-600 mb-2">Password :</h1>
                      <input onChange={e => this.setState({ password: e.target.value })} className="border-2 mb-6 border-gray-400 p-4 rounded-2xl" type="password" placeholder="Enter your password"/>
                      <h1 className="font-semibold text-gray-600 mb-2">Phone Number :</h1>
                      <input onChange={e => this.setState({ phoneNumber: e.target.value })} className="border-2 mb-6 border-gray-400 p-4 rounded-2xl" type="text" placeholder="Enter your phone number"/>

                      <button className="btn bg-yellow-400 py-4 rounded-2xl my-2 text-yellow-900 font-bold">Sign Up</button>
                      <button className="btn2 bg-white py-4 rounded-2xl my-2 font-bold"> <i className="fa fa-google pr-2" style={{ fontSize: '20px' }}></i> Sign up with Google</button>
                  </form>
            </div>
        </div>

        <div className="z-20 section1 container relative mx-auto -mt-20">
            <div className="section2 flex flex-row items-center h-full">
                <div className="flex-1 flex flex-row items-center mx-20  ">
                    <div className=" flex flex-col space-y-2">
                            <a className=" font-semibold text-3xl w-64">Get your member card now!</a>
                            <a className="text-gray-600 text-sm">Let&apos;s join with our member and enjoy the deals.</a>
                    </div>
                </div>
                <div className="flex flex-row items-center mx-20 ">
                    <div className="flex flex-col">
                        <button className="btn text-xs bg-yellow-400 rounded-lg py-3 px-12 font-semibold text-yellow-900">Create Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = { toggleAuth, authRegister }

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
