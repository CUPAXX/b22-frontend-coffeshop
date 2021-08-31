import React, { Component } from 'react'
import chatImg from '../bg/chatImg.png'
import {chatList, chatAll, sendChat, searchUser, uploadFile, deleteChat} from '../redux/actions/chat'
import { connect } from 'react-redux'
import { profileUser} from '../redux/actions/profile'
import { io } from "socket.io-client";
import IconButton from '@material-ui/core/IconButton'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Swal from 'sweetalert2'
import ChatSearchItem from '../components/ChatSearchItem'
import ChatListItem from '../components/ChatListItem'
import ChatBubbleLeft from '../components/ChatBubbleLeft'
import ChatBubbleRight from '../components/ChatBubbleRight'

const { REACT_APP_BACKEND_URL: URL } = process.env

const socket = io(`${URL}`)


const messagesEndRef = React.createRef()

class Chat extends Component {
  state = {
    search: '',
    column: 'userName',
    chatList: [],
    allChat: null,
    logged: {},
    chatData: '',
    searchData: [],
    userSelected: null
  }
  

  componentDidMount () {
    this.onChatList()
    this.onLogged()
    this.scrollToBottom()
    const {phoneNumber} = this.props.profile.data
    socket.on(phoneNumber, (data) => {
      this.onChatList()
      this.onDetailChat(data.sender)
    });
 
  }

  componentDidUpdate () {
    this.scrollToBottom()
    const {phoneNumber} = this.props.profile.data
    socket.on(phoneNumber, (data) => {
      this.onChatList()
      this.onDetailChat(data.sender)
    });
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
      const recipient = this.state.userSelected.phoneNumber
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      if(message !== ''){
        this.props.sendChat(recipient, message, token).then(() => {
          this.onDetailChat(recipient)
          this.setState({
            chatData: ''
          })
          this.onChatList()
        })
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Message Cannot be empty'
        })
      }
    }
  }

  scrollToBottom = () => {
   this.el && this.el.scrollIntoView({ behavior: 'smooth', block: 'nearest'});
  }
  
  onSearch = (e) => {
    if(e.keyCode === 13) {
    const column = this.state.column
    const search = this.state.search
    const {token} = this.props.auth
    this.props.searchUser(column, search, token).then(() => {
        this.setState({
          searchData: this.props.chat.userData
        })
      })
    }
  }
  onSearchButton = (e) => {
    e.preventDefault()
    const column = this.state.column
    const search = this.state.search
    const {token} = this.props.auth
    this.props.searchUser(column, search, token).then(() => {
      this.setState({
        searchData: this.props.chat.userData
      })
    })
  }

  onRedirect =  (dataSearch) => {
    const {token} = this.props.auth
     this.setState({
      userSelected: dataSearch,
      allChat: [],
      search: '',
      searchData: []
    }, () => {
      const phoneNumber =  this.state.userSelected?.phoneNumber
    this.props.chatAll(phoneNumber, token)
    })
    
  }

  uploadFile = (e) => {
    const {token} = this.props.auth
    const recipient = this.state.userSelected.phoneNumber
    const max = 61440
    
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    if (e.target.files[0].size <= max) {
      this.props.uploadFile(recipient, e.target.files[0], token).then(() => {
        this.onChatList()
      })
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Max file only 60kb'
      })
    }
  }

  onDelete = (id) => {
    const {token} = this.props.auth
    const recipient = this.state.userSelected.phoneNumber
   
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.deleteChat(recipient, id, token).then(() => {
          this.onChatList()
        })
        
        Swal.fire(
          'Deleted!',
          'Your chat has been deleted.',
          'success'
        )
      }
    })
    
  }
  

  render() {
    const {allData} = this.props.chat
    return (
      <div className="bgChat">
        <div className="flex flex-1 flex-row justify-center h-screen pt-20 px-36">
          <div className="bg-yellow-900 flex flex-col max-w-96 items-center rounded-l-lg px-5 py-10 flex-initial">

          <div className=" px-6 py-5 ">
              <div className="bg-gray-50 flex items-center rounded-full shadow-xl">
                <input onKeyDown={(e) => this.onSearch(e)} value={this.state.search} onChange={e=>this.setState({search:e.target.value})} className=" bg-gray-50 rounded-l-full w-full p-5 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search"/>

                <select className="bg-gray-50 md:text-base text-xs" value={this.state.column} onChange={e=>this.setState({column:e.target.value})} id="column">
                  <option className="md:text-base text-xs" value="userName">Name</option>
                  <option className="md:text-base text-xs" value="phoneNumber">Phone</option>
                </select>

                <div className="p-2 ">
                  <button onClick={this.onSearchButton} className="bg-yellow-400 text-yellow-900 rounded-full p-2 hover:bg-yellow-200 focus:outline-none w-6  h-6 flex items-center justify-center">
                  <i className="fa fa-search text-md " ></i>
                  </button>
                </div>
              </div>
          </div>
          { this.state.search !== '' ? (
            
            <div className="bg-gray-50 flex flex-col flex-initial absolute mt-20 w-72 rounded-b-2xl overflow-y-scroll overscroll-none max-h-80">
              {this.state.searchData.map(dataSearch => {
              return (
                <ChatSearchItem
                 key={dataSearch.id}
                 click={() => this.onRedirect(dataSearch)}
                 userName={dataSearch.userName}
                 phoneNumber={dataSearch.phoneNumber}
                 picture={dataSearch.picture}
                 />
              )

              })}
          </div>
            
            
          ) : (
            <div></div>
            
          )}

          <h2 className="font-bold text-white text-sm pb-10 text-center">Choose a staff you want to talk with</h2>
          
          <div className="flex flex-col overflow-y-scroll overscroll-none -my-4 w-full">
          {this.state.chatList.map(chat => {
            return (
              <ChatListItem
                key={chat.id}
                click={() => this.onRedirect(chat)}
                userName={chat.userName}
                picture={chat.picture}
                message={chat.message !== null ? `${chat.message}` : 'Mengirim Gambar'}
              />
            )
          
          })}
          </div>
          
          </div>
          <div className="bg-white flex flex-col rounded-r-lg flex-1 p-12">
              {this.state.userSelected === null ? (
                <React.Fragment>
                
                {allData.length > 0 ? (
                  <React.Fragment>
                    <h2 className="font-bold text-2xl text-gray-600 pb-12">{allData[0].userName}</h2>
                 
                 <div className="flex flex-col flex-1 overflow-y-scroll overscroll-none max-h-72" >
                   {allData.map(data => {
                     return data.sender !== this.props.profile.data.phoneNumber  ?
                       
                      <ChatBubbleLeft
                      key={data.id}
                      click={() => this.onDelete(data.id)}
                      picture={data.picture}
                      showMessage={data.message !== null ? 'block' : 'none'}
                      showFileUpload={data.message !== null ? 'none' : 'block'}
                      message={data.message}
                      fileUpload={data.fileUpload}
                    />
                     
                   :
                      <ChatBubbleRight
                        key={data.id}
                        click={() => this.onDelete(data.id)}
                        picture={data.picture}
                        showMessage={data.message !== null ? 'block' : 'none'}
                        showFileUpload={data.message !== null ? 'none' : 'block'}
                        message={data.message}
                        fileUpload={data.fileUpload}
                      />
                   })}
                   <div className="text-center text-white" ref={el => { this.el = el; }}>bla</div>
                  

                   
                 </div>
                 

                 <div className="flex items-center bg-gray-100 rounded-xl pr-5 mt-12">
                    <input onKeyDown={(e) => this.onSend(e)} value={this.state.chatData} onChange={e=>this.setState({chatData:e.target.value})} className="bg-gray-100 p-4 w-full text-sm rounded-xl " type="text" placeholder="Type a message..."/>
                    <input accept="image/*" id="icon-button-file" type="file" onChange={this.uploadFile} className=""  style={{ display: 'none' }} />
                    <label className="flex justify-center items-center h-8 w-8 md:h-10 md:w-10 bg-gray-100 rounded-full" htmlFor="icon-button-file">
                        <IconButton  className="text-gray-600" aria-label="upload picture" component="span">
                            <CameraAltIcon className="" />
                        </IconButton>
                    </label>
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
                
              </React.Fragment>
              ) : (
                <React.Fragment>
                
                <h2 className="font-bold text-2xl text-gray-600 pb-12">{this.state.userSelected.userName}</h2>
                 
                  <div className="flex flex-col flex-1 overflow-y-scroll overscroll-none max-h-72" >
                  
                      <React.Fragment>
                        {allData.map(data => {
                      return data.sender !== this.props.profile.data.phoneNumber  ?

                        <ChatBubbleLeft
                        key={data.id}
                        click={() => this.onDelete(data.id)}
                        picture={data.picture}
                        showMessage={data.message !== null ? 'block' : 'none'}
                        showFileUpload={data.message !== null ? 'none' : 'block'}
                        message={data.message}
                        fileUpload={data.fileUpload}
                      />
                      
                    :
                      <ChatBubbleRight
                        key={data.id}
                        click={() => this.onDelete(data.id)}
                        picture={this.props.profile.data.picture}
                        showMessage={data.message !== null ? 'block' : 'none'}
                        showFileUpload={data.message !== null ? 'none' : 'block'}
                        message={data.message}
                        fileUpload={data.fileUpload}
                      />
                    })}
                      </React.Fragment>
                    
                    <div className="text-center text-white" ref={el => { this.el = el; }}>bla</div>
                    

                    
                  </div>
                  

                  <div className="flex items-center bg-gray-100 rounded-xl pr-5 mt-12">
                    <input onKeyDown={(e) => this.onSend(e)} value={this.state.chatData} onChange={e=>this.setState({chatData:e.target.value})} className="bg-gray-100 p-4 w-full text-sm rounded-xl " type="text" placeholder="Type a message..."/>

                    <input accept="image/*" id="icon-button-file" type="file" onChange={this.uploadFile} className=""  style={{ display: 'none' }} />
                    <label className="flex justify-center items-center h-8 w-8 md:h-10 md:w-10 bg-gray-100 rounded-full" htmlFor="icon-button-file">
                        <IconButton  className="text-gray-600" aria-label="upload picture" component="span">
                            <CameraAltIcon className="" />
                        </IconButton>
                    </label>
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

const mapDispatchToProps = { profileUser, chatList, chatAll, sendChat, searchUser, uploadFile , deleteChat}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)