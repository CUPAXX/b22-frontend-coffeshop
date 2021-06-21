import { http } from '../../helpers/http'
const { REACT_APP_BACKEND_URL: URL } = process.env

export const toggleAuth = () => {
  return {
    type: 'AUTH_TOGGLE'
  }
}

export const authLogin = (email, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append('email', email)
    form.append('password', password)
    try {
      const { data } = await http().post(`${URL}/auth/login`, form.toString())
      dispatch({
        type: 'AUTH_LOGIN',
        payload: data.results.token
      })
    } catch (err) {
      dispatch({
        type: 'AUTH_LOGIN_FAILED',
        payload: err.response.data.message
      })
    }
  }
}

export const authRegister = (email, password, phoneNumber) => {
  return async (dispatch) => {
    const from2 = new URLSearchParams()
    from2.append('email', email)
    from2.append('password', password)
    from2.append('phoneNumber', phoneNumber)
    try {
      const { data } = await http().post(`${URL}/auth/register`, from2.toString())
      dispatch({
        type: 'AUTH_REGISTER',
        payload: data.message
      })
    } catch (err) {
      dispatch({
        type: 'AUTH_REGISTER_FAILED',
        payload: err.response.data.message
      })
    }
  }
}
