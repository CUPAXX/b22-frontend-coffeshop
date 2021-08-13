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