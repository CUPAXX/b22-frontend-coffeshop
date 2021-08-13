const initialState = {
  data: [],
  allData: []
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
    default: {
      return {
        ...state
      }
    }
  }
}

export default chat
