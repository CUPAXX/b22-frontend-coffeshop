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
