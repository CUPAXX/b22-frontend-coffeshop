import { http } from "../../helpers/http"
const { REACT_APP_BACKEND_URL: URL } = process.env

export const getHistory = (token) => {
  
  return async(dispatch) => {
    try{
      const {data} = await http(token).get(`${URL}/private/transaction`)
            dispatch({
                type:'GET_HISTORY',
                payload: data.results
            })
        } catch(err) {
            dispatch({
                type: 'GET_HISTORY_FAILED',
                payload: err.response.data.message
            })
        }
  }
}

export const createTransaction = (data, token, payment_method) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    data.forEach((item) => {
      form.append('item_id', item.id)
      form.append('item_amount', item?.amount.filter(amt => amt.amount !== 0).map(vari => (vari.amount)))
     })
      form.append('payment_method',payment_method)
    try{
      const {data} = await http(token).post(`${URL}/private/transaction`, form.toString())
      dispatch({
        type: 'CREATE_TRANSACTION',
        payload: data.message
      })
    }catch(err){
      dispatch({
        type: 'CREATE_TRANSACTION_FAILED',
        payload: err.response.data.message
      })
    }
  }
}