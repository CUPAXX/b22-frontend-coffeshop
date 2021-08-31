import { http } from '../../helpers/http'
const { REACT_APP_BACKEND_URL: URL } = process.env

export const profileUser = (token) => {
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/private/profile`)
    dispatch({
      type: 'PROFILE_GET',
      payload: data.results
    })
  }
}

// export const updateProfile = (username, email, phone, firstname, lastname, address, pic, token) => {
//   return async (dispatch) => {

//     const form = new FormData()
//     form.append('userName', username)
//     form.append('email', email)
//     form.append('phoneNumber', phone)
//     form.append('firstName', firstname)
//     form.append('lastName', lastname)
//     form.append('address', address)
//     form.append('picture', pic)

//     const {data: axios} = await http(token).put(`${URL}/private/profile`, form)
//     dispatch({
//       type: 'PROFILE_UPDATE',
//       payload: axios.results
//     })
//   }
// }

export const updateProfile = (data, token) => {
  return async (dispatch) => {
    if(data.picture !== null) {
      const form = new FormData()
    form.append('userName', data.userName)
    form.append('email', data.email)
    form.append('phoneNumber', data.phoneNumber)
    form.append('firstName', data.firstName)
    form.append('lastName', data.lastName)
    form.append('address', data.address)
    form.append('picture', data.picture)
    const {data: axios} = await http(token).patch(`${URL}/private/profile`, form)
    dispatch({
      type: 'PROFILE_UPDATE',
      payload: axios.results
    })
    }else {
      const form2 = new FormData()
    form2.append('userName', data.userName)
    form2.append('email', data.email)
    form2.append('phoneNumber', data.phoneNumber)
    form2.append('firstName', data.firstName)
    form2.append('lastName', data.lastName)
    form2.append('address', data.address)
    const {data: axios} = await http(token).patch(`${URL}/private/profile`, form2)
    dispatch({
      type: 'PROFILE_UPDATE',
      payload: axios.results
    })
    }
    
  }
}
