const initialState = {
  onAuth: false,
  token: null,
  errMsg: '',
  succMsg: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_TOGGLE': {
      return {
        ...state,
        onAuth: !state.onAuth
      }
    }
    case 'AUTH_LOGIN': {
      return {
        ...state,
        token: action.payload,
        errMsg: ''
      }
    }
    case 'AUTH_REGISTER': {
      return {
        ...state,
        succMsg: action.payload
      }
    }
    case 'AUTH_REGISTER_FAILED': {
      return {
        ...state,
        errMsg: action.payload
      }
    }
    case 'AUTH_LOGIN_FAILED': {
      return {
        ...state,
        errMsg: action.payload
      }
    }
    case 'AUTH_LOGOUT': {
      return {
        ...state,
        token: null,
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

export default auth
