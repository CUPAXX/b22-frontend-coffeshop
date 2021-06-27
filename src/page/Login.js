import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleAuth, authLogin } from '../redux/actions/auth'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  componentDidMount () {
    this.props.toggleAuth()
    this.props.authLogin()
  }

  onLogin = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.authLogin(email, password)
    const { token } = this.props.auth
    const { errMsg } = this.props.auth
    if (token !== null) {
      alert("Login Success")
      this.props.history.push('/')
    }else if (errMsg !== '') {
      alert(`${errMsg}`)
      // setTimeout(function(){ alert(`${errMsg}`); }, 3000);
    }
    
  }

  componentDidUpdate () {
    const { email, password } = this.state
    this.props.authLogin(email, password)
  //   this.onLogin
    // this.props.authLogin()
    // const { token } = this.props.auth
    // const { errMsg } = this.props.auth
    // if (token !== null) {
    //   this.props.history.push('/')
      
    // }else if (errMsg !== '') {
    //   alert(`${errMsg}`)
    // }
  }

  componentWillUnmount () {
    this.props.toggleAuth()
  }

  render () {

    return (
      <React.Fragment>
      <div className="mb-20">
        <div className="flex flex-row">
        <div className="bg2 flex">
            <img className="object-cover" src="assets/bg2.png" alt=""/>
        </div>
            <div className="flex-1 flex flex-col">
                <div className="flex flex-row items-center py-8">
                    <div className="flex ml-20 mr-3">
                        <Link to="/" className="block ">
                            <img className="h-8" src="assets/logo.png" alt=""/>
                          </Link>
                          <Link to="/" className="flex font-bold text-xl pl-3">Coffee Shop</Link>
                    </div>
                    <div className="flex ml-52">
                      <Link to="/signup"><button className="btn h-10  px-8 text-yellow-900 rounded-full font-semibold bg-yellow-400 hover:bg-yellow-300">Sign Up</button></Link>
                    </div>

                </div>
                  <div className="flex flex-col items-center mx-24 pt-20">
                      <h2 className="text-4xl font-bold text-yellow-900">Login</h2>
                  </div>
                  <form onSubmit={this.onLogin} className="flex-1 flex flex-col mx-24 pt-5">
                      <h1 className="font-semibold text-gray-600 mb-2">Email Adress :</h1>
                      <input onChange={e => this.setState({ email: e.target.value })} className="border-2 mb-6 border-gray-400 p-4 rounded-2xl" type="email" placeholder="Enter your email adress"/>
                      <h1 className="font-semibold text-gray-600 mb-2">Password :</h1>
                      <input onChange={e => this.setState({ password: e.target.value })} className="border-2 mb-4 border-gray-400 p-4 rounded-2xl" type="password" placeholder="Enter your password"/>
                      <Link to="/forgot" className="mb-6 text-yellow-900 font-semibold underline">Forgot password?</Link>
                      <button className="btn bg-yellow-400 py-4 rounded-2xl my-2 text-yellow-900 font-bold">Login</button>
                      <button className="btn2 bg-white py-4 rounded-2xl my-2 font-bold"> <i className="fa fa-google pr-2" style={{ fontSize: '20px' }}></i> Login with Google</button>
                  </form>
            </div>
        </div>

        <div className="z-20 section1 container relative mx-auto -mt-32">
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

const mapDispatchToProps = { toggleAuth, authLogin }

export default connect(mapStateToProps, mapDispatchToProps)(Login)
