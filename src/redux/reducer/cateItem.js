const initialState = {
  data3: []
}

const cateItem = (state = initialState, action) => {
  switch (action.type) {
    case 'ITEM_GET_CATEGORY': {
      return {
        ...state,
        data3: action.payload
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default cateItem
