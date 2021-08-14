import React, { Component } from 'react'
import chatImg from '../bg/chatImg.png'
import {chatList, chatAll, sendChat} from '../redux/actions/chat'
import { connect } from 'react-redux'
import { profileUser} from '../redux/actions/profile'
import { io } from "socket.io-client";
const { REACT_APP_BACKEND_URL: URL } = process.env

const socket = io(`${URL}`)


const messagesEndRef = React.createRef()

class Chat extends Component {
  state = {
    search: '',
    chatList: [],
    allChat: [],
    logged: {},
    chatData: ''
  }
  

  componentDidMount () {
    this.onChatList()
    this.onLogged()
    this.scrollToBottom()
    const {phoneNumber} = this.props.profile.data
    socket.on(phoneNumber, (data) => {
      console.log(socket.id, data);
      this.onChatList()
      this.onDetailChat(data.sender)
    });
  }

  componentDidUpdate () {
    this.scrollToBottom()
  }

  onChatList = () => {
    const {token} = this.props.auth
    this.props.chatList(token).then(() => {
      this.setState({
        chatList: this.props.chat.data
      })
    })
  }

  onLogged = () => {
    const {token} = this.props.auth
    this.props.profileUser(token).then(() => {
      this.setState({
        logged: this.props.profile.data
      })
    })
  }

  onDetailChat = (phoneNumber) => {
    const {token} = this.props.auth
    this.props.chatAll(phoneNumber, token).then(() => {
      this.setState({
        allChat: this.props.chat.allData
      })
    })
  }

  onSend = (e) => {
    if (e.keyCode === 13) {
      const {token} = this.props.auth
      const message = this.state.chatData
      const recipient = this.state.allChat[0].phoneNumber
      this.props.sendChat(recipient, message, token).then(() => {
        this.onDetailChat(recipient)
        this.setState({
          chatData: ''
        })
        this.onChatList()
      })
    }
  }

  scrollToBottom = () => {
   this.el && this.el.scrollIntoView({ behavior: 'smooth', block: 'nearest'});
  }
  

  render() {
    const {allData} = this.props.chat
    console.log(this.props)
    return (
      <div className="bgChat">
        <div className="flex flex-1 flex-row justify-center h-screen pt-20 px-36">
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
          
          {this.state.chatList.map(chat => {
            return chat.userName !== this.props.profile.data.userName  ?
            <div key={chat.id} onClick={() => this.onDetailChat(chat.phoneNumber)} className="flex flex-row border-b cursor-pointer pt-8 border-white p-3">
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
                 
                  <div className="flex flex-col flex-1 overflow-y-scroll  max-h-72" >
                    {this.state.allChat.map(data => {
                      return data.sender !== this.props.profile.data.phoneNumber  ?
                      <React.Fragment>
                        <div key={data.id} className="flex flex-row border-b justify-start mb-8 border-yellow-900 p-3">
                          <img src={chatImg} className="rounded-full w-10 h-10" />
                          <div className="flex flex-col px-8 justify-center">
                              <h3 className="text-gray-600 text-sm">{data.message}</h3>
                          </div>
                        </div>
                        
                      </React.Fragment>
                      
                    :
                    <React.Fragment>
                      <div className="flex flex-row justify-end border-b border-yellow-900 p-3">
                      <div className="flex flex-col px-8 justify-center">
                        <h3 className="text-gray-600 text-sm text-right">{data.message}</h3>
                      </div>
                      <img src={chatImg} className="rounded-full w-10 h-10" />
                    </div>
                    
                    </React.Fragment>
                    })}
                    <div className="text-center text-white" ref={el => { this.el = el; }}>bla</div>
                    

                    
                  </div>
                  

                  <div className="flex justify-center mt-12">
                    <input onKeyDown={(e) => this.onSend(e)} value={this.state.chatData} onChange={e=>this.setState({chatData:e.target.value})} className="bg-gray-100 p-4 w-full text-sm rounded-xl" type="text" placeholder="Type a message..."/>
                  </div>
                
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h2 className="font-bold text-2xl text-gray-600 pb-12">Room Chat</h2>
                <div className="flex flex-col flex-1 justify-center">
                  <h2 className="text-gray-600 text-center">You have no conversation, start chat other staff! </h2>
                  <h2 className="text-gray-600 text-center">Or click on chat list to see your conversation Have a good day!</h2>
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

const mapDispatchToProps = { profileUser, chatList, chatAll, sendChat }

export default connect(mapStateToProps, mapDispatchToProps)(Chat)