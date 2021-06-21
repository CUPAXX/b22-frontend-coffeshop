const initialState = {
  data: [],
  detail: {},
  pageInfo: {}
}

const item = (state = initialState, action) => {
  switch (action.type) {
    case 'ITEM_GET': {
      return {
        ...state,
        data: action.payload.item,
        pageInfo: action.payload.pageInfo
      }
    }
    case 'ITEM_GET_CATEGORY': {
      return {
        ...state,
        data: action.payload
      }
    }
    case 'ITEM_GET_NEXT': {
      return {
        ...state,
        data: [
          ...state.data,
          ...action.payload.item
        ],
        pageInfo: action.payload.pageInfo
      }
    }
    case 'ITEM_GET_DETAIL': {
      return {
        ...state,
        detail: action.payload
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default item
