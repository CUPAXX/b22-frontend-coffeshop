import React, { Component } from 'react'
import { profileUser, updateProfile } from '../redux/actions/profile'
import { authLogout } from '../redux/actions/auth'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton'

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

      this.props.profileUser(token).then(() => {
        this.setState({
          userName: this.props.profile.data.userName,
          email: this.props.profile.data.email,
          phoneNumber: this.props.profile.data.phoneNumber,
          firstName: this.props.profile.data.firstName,
          lastName: this.props.profile.data.lastName,
          address: this.props.profile.data.address
        })
      })

  }


  data = (e) => {
      e.preventDefault()
      const { token } = this.props.auth
      const {userName, email, phoneNumber, firstName, lastName, address, picture} = this.state
      const data ={
        userName,
        email,
        phoneNumber,
        firstName,
        lastName,
        address,
        picture
      }
      this.props.updateProfile( data, token).then(() => {
        
      this.props.history.push('/')
      this.props.history.replace('/profile')
      })
  }

  render () {
    const {data} = this.props.profile
    return (
      <React.Fragment>
       <div className="bgprofile md:mb-40">
        <div className="flex flex-col items-center">
    <div className="flex flex-col  items-center py-5 md:pb-16">
        <div className="font-bold text-2xl md:text-4xl text-white">User Profile</div>
    </div>
    <div className="flex flex-col items-center md:flex-row md:space-x-5 pb-12 md:pb-24">
        <div className="flex flex-col bg-white w-full mx-10 mb-10 md:mb-0 md:h-80 md:w-64 rounded-lg">
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="flex relative">
                    <img className="md:w-28 md:h-28 w-20 h-20 rounded-full" src={data.picture} alt=""/>
                    <input accept="image/*" id="icon-button-file" type="file" onChange={e=>this.setState({picture:e.target.files})} className="absolute"  style={{ display: 'none' }} />
                    <label className="flex justify-center items-center h-8 w-8 md:h-10 md:w-10 bg-yellow-900 rounded-full ml-12 mt-12 md:ml-20 md:mt-20 absolute" htmlFor="icon-button-file">
                        <IconButton  style={{ color: 'white'}} aria-label="upload picture" component="span">
                            <CreateIcon className="absolute" />
                        </IconButton>
                    </label>
                    {/* <i className="fa fa-pencil text-white" style={{ fontSize: '20px' }}></i> */}
                </div>
                <h2 className="font-bold text-xl pt-3 md:pt-6">{this.state.userName}</h2>
                <h2 className="text-xs text-gray-700 pb-3 md:pb-6">{this.state.email}</h2>
                <h2 className="text-sm text-gray-700">Has been ordered 15 products</h2>
            </div>
            <div className="flex flex-col h-3 bg-yellow-900 rounded-b-lg"></div>
        </div>
        <div className="flex flex-col bg-white rounded-lg profileItemRight md:mx-0">
            <div className="flex-1 flex flex-col px-8 pt-5">
                <div className="flex flex-row">
                    <div className="flex-1 flex text-2xl text-gray-600 font-bold">Contacts</div>
                    <div className="flex justify-center items-center h-10 w-10 bg-yellow-900 rounded-full">
                        <i className="fa fa-pencil text-white" style={{ fontSize: '20px' }}></i>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="flex flex-col">
                        <h2 className="text-base font-medium text-gray-400">Email addres :</h2>
                        <input type="email" onChange={e=>this.setState({email:e.target.value})} className="iptprofile h-8 md:w-80 border-b-2 border-black" value={this.state.email} />
                    </div>
                    <div className="flex flex-col pt-4">
                        <h2 className="text-base font-medium text-gray-400">Mobile number :</h2>
                        <input type="text"  onChange={e=>this.setState({phoneNumber:e.target.value})} className="iptprofile h-8 md:w-80 border-b-2 border-black" value={this.state.phoneNumber}/>
                    </div>
                </div>
                <div className="flex flex-col py-4 md:pt-10">
                    <h2 className="text-base font-medium text-gray-400">Delivery adress :</h2>
                    <textarea className="iptprofile h-14 md:w-80 border-b-2 border-black"  onChange={e=>this.setState({address:e.target.value})} cols="3" rows="1" value={this.state.address} />
                </div>
            </div>
            <div className="flex flex-col h-3 bg-yellow-900 rounded-b-lg"></div>
        </div>
    </div>
    <div className="flex flex-col items-center md:flex-row md:space-x-36">
        <div className="flex flex-col bg-white rounded-lg profileItemBot">
            <div className="flex-1 flex flex-col px-8 pt-5">
                <div className="flex flex-row pb-6">
                    <div className="flex-1 flex text-2xl text-gray-600 font-bold">Details</div>
                    <div className="flex justify-center items-center h-10 w-10 bg-yellow-900 rounded-full">
                        <i className="fa fa-pencil text-white" style={{ fontSize: '20px' }}></i>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1 flex flex-col md:space-y-8">
                        <div className="flex flex-col">
                            <h2 className="text-base font-medium text-gray-400">Display name :</h2>
                            <input type="text" onChange={e=>this.setState({userName:e.target.value})} className="iptprofile h-8 md:w-80 border-b-2 border-black" value={this.state.userName}/>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-base font-medium text-gray-400">Fist name :</h2>
                            <input type="text" onChange={e=>this.setState({firstName:e.target.value})} className="iptprofile h-8 md:w-80 border-b-2 border-black" value={this.state.firstName}/>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-base font-medium text-gray-400">Last name :</h2>
                            <input type="text" onChange={e=>this.setState({lastName:e.target.value})} className="iptprofile h-8 md:w-80 border-b-2 border-black" value={this.state.lastName}/>
                        </div>
                    </div>
                    <div className="flex flex-col md:w-52 h-full">
                        <div className="flex flex-col">
                            <h2 className="text-base font-medium text-gray-400">DD/MM/YY</h2>
                            <input type="date" className="iptprofile h-8 md:w-58 border-b-2 border-black"/>
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
        <div className="flex flex-col pt-12 md:pt-0">
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))
