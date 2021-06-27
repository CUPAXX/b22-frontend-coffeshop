import React, { Component } from 'react'
import { profileUser } from '../redux/actions/profile'
import { authLogout } from '../redux/actions/auth'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton'
import {updateProfile} from '../redux/actions/profile'

class Profile extends Component {
  state = {
    picture: null,
    userName: '',
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    address: ''
  }
  
  componentDidMount () {
    const { token } = this.props.auth
    if (token !== null) {
      this.props.profileUser(token)
    } else {
      console.log('You Cannot Access Site')
    }
  }


  data = (e) => {
      e.preventDefault()
      const { token } = this.props.auth
      const {userName, email, phoneNumber, firstName, lastName, address, picture} = this.state
      this.props.updateProfile( {userName, email, phoneNumber, firstName, lastName, address, picture}, token)
      location.reload()
  }

  render () {
    const { data } = this.props.profile
    return (
      <React.Fragment>
       <div className="bgprofile flex justify-center items-center mb-40">
        <div className="flex flex-col">
    <div className="flex flex-col pb-16">
        <div className="font-bold text-4xl text-white">User Profile</div>
    </div>
    <div className="flex flex-row space-x-5 pb-24">
        <div className="flex flex-col bg-white h-80 w-64 rounded-lg">
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="flex relative">
                    <img className="w-28 h-28 rounded-full" src={data.picture} alt=""/>
                    <input accept="image/*" id="icon-button-file" type="file" onChange={e=>this.setState({picture:e.target.files[0]})} className="absolute"  style={{ display: 'none' }} /> 
                    {/* className="flex justify-center items-center h-10 w-10 bg-yellow-900 rounded-full absolute mt-20 ml-20"> */}
                    <label className="flex justify-center items-center h-10 w-10 bg-yellow-900 rounded-full ml-20 mt-20 absolute" htmlFor="icon-button-file">
                        <IconButton  style={{ color: 'white'}} aria-label="upload picture" component="span">
                            <CreateIcon className=" absolute" />
                        </IconButton>
                    </label>
                    {/* <i className="fa fa-pencil text-white" style={{ fontSize: '20px' }}></i> */}
                </div>
                <h2 className="font-bold text-xl pt-6">{data.userName}</h2>
                <h2 className="text-xs text-gray-700 pb-6">{data.email}</h2>
                <h2 className="text-sm text-gray-700">Has been ordered 15 products</h2>
            </div>
            <div className="flex flex-col h-3 bg-yellow-900 rounded-b-lg"></div>
        </div>
        <div className="flex flex-col bg-white rounded-lg" style={{ width: '800px' }}>
            <div className="flex-1 flex flex-col px-8 pt-5">
                <div className="flex flex-row">
                    <div className="flex-1 flex text-2xl text-gray-600 font-bold">Contacts</div>
                    <div className="flex justify-center items-center h-10 w-10 bg-yellow-900 rounded-full">
                        <i className="fa fa-pencil text-white" style={{ fontSize: '20px' }}></i>
                    </div>
                </div>
                <div className="flex flex-row space-x-8">
                    <div className="flex flex-col">
                        <h2 className="text-base font-medium text-gray-400">Email addres :</h2>
                        <input type="email" onChange={e=>this.setState({email:e.target.value})} className="iptprofile h-8 w-80 border-b-2 border-black" placeholder={data.email} />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-base font-medium text-gray-400">Mobile number :</h2>
                        <input type="text"  onChange={e=>this.setState({phoneNumber:e.target.value})} className="iptprofile h-8 w-80 border-b-2 border-black" placeholder={data.phoneNumber}/>
                    </div>
                </div>
                <div className="flex flex-col pt-10">
                    <h2 className="text-base font-medium text-gray-400">Delivery adress :</h2>
                    <textarea className="iptprofile h-14 w-80 border-b-2 border-black"  onChange={e=>this.setState({address:e.target.value})} cols="3" rows="1" placeholder={data.address} />
                </div>
            </div>
            <div className="flex flex-col h-3 bg-yellow-900 rounded-b-lg"></div>
        </div>
    </div>
    <div className="flex flex-row space-x-36">
        <div className="flex flex-col bg-white rounded-lg" style={{ width: '630px', height: '360px' }}>
            <div className="flex-1 flex flex-col px-8 pt-5">
                <div className="flex flex-row pb-6">
                    <div className="flex-1 flex text-2xl text-gray-600 font-bold">Details</div>
                    <div className="flex justify-center items-center h-10 w-10 bg-yellow-900 rounded-full">
                        <i className="fa fa-pencil text-white" style={{ fontSize: '20px' }}></i>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex-1 flex flex-col space-y-8">
                        <div className="flex flex-col">
                            <h2 className="text-base font-medium text-gray-400">Display name :</h2>
                            <input type="text" onChange={e=>this.setState({userName:e.target.value})} className="iptprofile h-8 w-80 border-b-2 border-black" placeholder={data.userName}/>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-base font-medium text-gray-400">Fist name :</h2>
                            <input type="text" onChange={e=>this.setState({firstName:e.target.value})} className="iptprofile h-8 w-80 border-b-2 border-black" placeholder={data.firstName}/>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-base font-medium text-gray-400">Last name :</h2>
                            <input type="text" onChange={e=>this.setState({lastName:e.target.value})} className="iptprofile h-8 w-80 border-b-2 border-black" placeholder={data.lastName}/>
                        </div>
                    </div>
                    <div className="flex flex-col w-52 h-full">
                        <div className="flex flex-col">
                            <h2 className="text-base font-medium text-gray-400">DD/MM/YY</h2>
                            <input type="date" className="iptprofile h-8 w-58 border-b-2 border-black"/>
                        </div>
                        <label className="cb flex justify-center items-center text-gray-500">
                            <input type="radio" name="gender"/>
                            <span className="checkmark"></span>
                            Male
                          </label>
                          <label className="cb flex justify-center items-center text-gray-500">
                            <input type="radio" name="gender"/>
                            <span className="checkmark"></span>
                            Female
                          </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-3 bg-yellow-900 rounded-b-lg"></div>
        </div>
        <div className="flex flex-col">
            <div className="text-white font-bold text-2xl w-72 text-center mb-8">Do you want to save the change?</div>
            <button onClick={this.data} type="submit" className="btn3 text-white font-bold h-12 w-72 rounded-xl mb-5">Save Change</button>
            <button className="btn bg-yellow-400 h-12 w-72 rounded-xl text-yellow-900 font-bold mb-8">Cancel</button>
            <button className="btn2 bg-white h-12 w-72 rounded-xl  font-bold text-yellow-900 mb-5">Edit Password <i className="fa fa-angle-right ml-24" style={{ fontSize: '20px' }}></i></button>
            <button onClick={this.props.authLogout} className="btn2 bg-white h-12 w-72 rounded-xl  font-bold text-yellow-900">Log out <i className="fa fa-angle-right ml-36" style={{ fontSize: '20px' }}></i></button>
        </div>
    </div>
</div>
</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
})

const mapDispatchToProps = { profileUser, authLogout, updateProfile }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
