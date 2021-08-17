import { http } from '../../helpers/http'
const { REACT_APP_BACKEND_URL: URL } = process.env

export const chatList = (token) => {
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/private/chat`)
    dispatch({
      type: 'CHAT_LIST_USER',
      payload: data.results
    })
  }
}

export const chatAll = (phoneNumber, token) => {
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/private/chat/all?user=${phoneNumber}`)
    dispatch({
      type: 'CHAT_GET_ALL',
      payload: data.results
    })
  }
}

export const sendChat = (recipient, message, token) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append('recipient', recipient)
    form.append('message', message)
    try{
      const {data} = await http(token).post(`${URL}/private/chat`, form.toString())
      dispatch({
        type: 'CHAT_SEND',
        payload: data.message
      })
    } catch (err) {
      dispatch({
        type: 'CHAT_SEND_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({type: 'CHAT_RESET'});
      }, 3000);
    }
  }
}

export const searchUser = (column, search, token) => {
  return async (dispatch) => {
    try {
      const {data} = await http(token).get(`${URL}/private/chat/search?column=${column}&search=${search}`)
      dispatch({
        type: 'USER_SEARCH',
        payload: data.results
      })
    } catch (err) {
      dispatch({
        type: 'USER_SEARCH_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({type: 'CHAT_RESET'});
      }, 3000);
    }
  }
}