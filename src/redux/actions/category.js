import { http } from '../../helpers/http'

const { REACT_APP_BACKEND_URL: URL } = process.env

export const getCategory = () => {
  return async (dispatch) => {
    const { data } = await http().get(`${URL}/category`)
    dispatch({
      type: 'GET_CATEGORY',
      payload: data.results
    })
  }
}
