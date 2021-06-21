import { http } from '../../helpers/http'

const { REACT_APP_BACKEND_URL: URL } = process.env

export const getItemCategory = (id) => {
  return async (dispatch) => {
    const { data } = await http().get(`${URL}/category/${id}/item`)
    dispatch({
      type: 'ITEM_GET_CATEGORY',
      payload: data.results
    })
  }
}
