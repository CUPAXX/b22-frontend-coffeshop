import { http } from '../../helpers/http'

const { REACT_APP_BACKEND_URL: URL } = process.env

export const getItem = (url) => {
  if (!url) {
    return async (dispatch) => {
      const { data } = await http().get(`${URL}/item`)
      dispatch({
        type: 'ITEM_GET',
        payload: {
          item: data.results,
          pageInfo: data.pageInfo
        }
      })
    }
  } else {
    return async (dispatch) => {
      const { data } = await http().get(url)
      dispatch({
        type: 'ITEM_GET_NEXT',
        payload: {
          item: data.results,
          pageInfo: data.pageInfo
        }
      })
    }
  }
}

export const getDetail = (id) => {
  return async (dispatch) => {
    const { data } = await http().get(`${URL}/item/${id}`)
    dispatch({
      type: 'ITEM_GET_DETAIL',
      payload: data.results
    })
  }
}
