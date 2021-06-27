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

    const form = new FormData()
    for( let x in data) {
      if(data[x] !== ''){
        form.append(x, data[x])
      }
      
    }
    // form.append('userName', username)
    // form.append('email', email)
    // form.append('phoneNumber', phone)
    // form.append('firstName', firstname)
    // form.append('lastName', lastname)
    // form.append('address', address)
    // form.append('picture', pic)

    const {data: axios} = await http(token).put(`${URL}/private/profile`, form)
    dispatch({
      type: 'PROFILE_UPDATE',
      payload: axios.results
    })
  }
}
