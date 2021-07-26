
import { http } from '../../helpers/http'

const { REACT_APP_BACKEND_URL: URL } = process.env

export const getItem = (search, sort, nextPage) => {
  console.log(sort)
  if (!nextPage) {
      if(search === '' ) {
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
      }else {
        return async (dispatch) => {
          // const newSort = sort
          const { data } = await http().get(`${URL}/item?search=${search}&sort[${sort}]=asc`)
          dispatch({
          type: 'ITEM_GET',
            payload: {
              item: data.results,
              pageInfo: data.pageInfo
            }
          })
        }
      }

  } else {
    return async (dispatch) => {
      if(nextPage !== null){
        const { data } = await http().get(nextPage)
        dispatch({
          type: 'ITEM_GET_NEXT',
            payload: {
            item: data.results,
            pageInfo: data.pageInfo
          }
        })
      } else {
        const { data } = await http().get(`${URL}/item`)
        dispatch({
          type: 'ITEM_GET',
            payload: {
            item: data.results,
            pageInfo: data.pageInfo
          }
        })
      }
      
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
