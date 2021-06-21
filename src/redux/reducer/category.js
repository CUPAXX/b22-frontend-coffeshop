const initialState = {
  data2: []
}

const category = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY': {
      return {
        ...state,
        data2: action.payload
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default category
