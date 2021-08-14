const initialState = {
  data: [],
  allData: [],
  sccMsg: '',
  errMsg: ''
}

const chat = (state = initialState, action) => {
  switch (action.type) {
    case 'CHAT_LIST_USER': {
      return {
        ...state,
        data: action.payload
      }
    }
    case 'CHAT_GET_ALL': {
      return {
        ...state,
        allData: action.payload
      }
    }
    case 'CHAT_SEND': {
      return {
        ...state,
        sccMsg: action.payload,
        errMsg: ''
      }
    }
    case 'CHAT_SEND_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        sccMsg: ''
      }
    }
    case 'CHAT_RESET': {
      return {
        ...state,
        sccMsg: '',
        errMsg: ''
      }
    }
    
    default: {
      return {
        ...state
      }
    }
  }
}

export default chat
