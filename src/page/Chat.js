import React, { Component } from 'react'
import chatImg from '../bg/chatImg.png'
import {chatList, chatAll} from '../redux/actions/chat'
import { connect } from 'react-redux'
import { profileUser} from '../redux/actions/profile'

class Chat extends Component {
  state = {
    search: '',
  }

  componentDidMount () {
    const {token} = this.props.auth
    this.props.chatList(token)
    this.props.profileUser(token)
  }

  onDetailChat = (phoneNumber) => {
    const {token} = this.props.auth
    this.props.chatAll(phoneNumber, token)
  }
  render() {
    const {data} = this.props.chat
    const {allData} = this.props.chat
    return (
      <div className="bgChat">
        <div className="flex flex-row justify-center pt-20 px-36">
          <div className="bg-yellow-900 flex flex-col  rounded-l-lg px-5 py-10 flex-initial">

          <div className=" p-6">
              <div className="bg-gray-50 flex items-center rounded-full shadow-xl">
                <input onKeyDown={(e) => this.redirect(e)} value={this.state.search} onChange={e=>this.setState({search:e.target.value})} className=" bg-gray-50 rounded-l-full w-full  p-3 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search"/>

                <select className="bg-gray-50 md:text-base text-xs" value={this.state.sort} onChange={e=>this.setState({sort:e.target.value})} id="sort">
                  <option className="md:text-base text-xs" value="productName">Name</option>
                  <option className="md:text-base text-xs" value="price">Phone</option>
                </select>

                <div className="p-2 ">
                  <button onClick={this.data} className="bg-yellow-400 text-yellow-900 rounded-full p-2 hover:bg-yellow-200 focus:outline-none w-6  h-6 flex items-center justify-center">
                  <i className="fa fa-search text-md " ></i>
                  </button>
                </div>
              </div>
          </div>

          <h2 className="font-bold text-white text-sm pb-10 text-center">Choose a staff you want to talk with</h2>
          
          {data.map(chat => {
            return chat.userName !== this.props.profile.data.userName  ?
            <div key={chat.id} onClick={() => this.onDetailChat(chat.phoneNumber)} className="flex flex-row border-b cursor-pointer border-white p-3">
              <img src={chat.picture} className="rounded-full w-16 h-16" />
              <div className="flex flex-col px-2">
                <h2 className="text-white font-bold">{chat.userName}</h2>
                <h3 className="text-white text-sm">{chat.message}</h3>
              </div>
            </div>
          :
          <div></div>
          })}
          

          {/* <div className="flex flex-row border-b border-white p-3">
            <img src={chatImg} className="rounded-full w-16 h-16" />
            <div className="flex flex-col px-2">
              <h2 className="text-white font-bold">Jason</h2>
              <h3 className="text-white text-sm">Hy There I Am Using Chat</h3>
            </div>
          </div> */}
          
          </div>
          <div className="bg-white flex flex-col rounded-r-lg flex-1 p-12">
            {this.props.chat.allData.length > 0 ? (
              <React.Fragment>
                
                <h2 className="font-bold text-2xl text-gray-600 pb-12">{allData[0].userName}</h2>
                 
                  <div className="flex flex-col flex-1">
                    {allData.map(data => {
                      return data.sender !== this.props.profile.data.phoneNumber  ?
                      <div className="flex flex-row border-b justify-start mb-8 border-yellow-900 p-3">
                      <img src={chatImg} className="rounded-full w-10 h-10" />
                      <div className="flex flex-col px-8 justify-center">
                          <h3 className="text-gray-600 text-sm">{data.message}</h3>
                      </div>
                    </div>

                    :
                    <div className="flex flex-row justify-end border-b border-yellow-900 p-3">
                      <div className="flex flex-col px-8 justify-center">
                        <h3 className="text-gray-600 text-sm text-right">{data.message}</h3>
                      </div>
                      <img src={chatImg} className="rounded-full w-10 h-10" />
                    </div>
                    })}
                    

                    
                  </div>

                  <div className="flex justify-center mt-16">
                    <input className="bg-gray-100 p-4 w-full text-sm rounded-xl" placeholder="Type a message..."/>
                  </div>
                
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h2 className="font-bold text-2xl text-gray-600 pb-12">JAHA</h2>
                <div className="flex flex-col flex-1">
                  <div className="flex flex-row border-b pr-14 mb-8 border-yellow-900 p-3">
                    <img src={chatImg} className="rounded-full w-10 h-10" />
                    <div className="flex flex-col px-8 justify-center">
                      <h3 className="text-gray-600 text-sm">Hey jason, I can’t find the promo section. Can u tell me where is it?</h3>
                    </div>
                  </div>

                  <div className="flex flex-row pl-14 border-b border-yellow-900 p-3">
                    <div className="flex flex-col px-8 justify-center">
                      <h3 className="text-gray-600 text-sm text-right">Hey, thanks for asking. It’s in product menu, you can see them on the left side.</h3>
                    </div>
                    <img src={chatImg} className="rounded-full w-10 h-10" />
                  </div>
                </div>

                <div className="flex justify-center mt-16">
                  <input className="bg-gray-100 p-4 w-full text-sm rounded-xl" placeholder="Type a message..."/>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  chat: state.chat,
  profile: state.profile,
})

const mapDispatchToProps = { profileUser, chatList, chatAll }

export default connect(mapStateToProps, mapDispatchToProps)(Chat)