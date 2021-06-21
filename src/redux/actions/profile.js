import { http } from '../../helpers/http'
const { REACT_APP_BACKEND_URL: URL } = process.env

export const profileUser = () => {
  return async (dispatch) => {
    const { data } = await http().get(`${URL}/private/profile`)
    dispatch({
      type: 'PROFILE_GET',
      payload: data.results
    })
  }
}
