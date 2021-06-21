import { combineReducers } from 'redux';
import carts from './carts'
import auth from './auth'
import item from './item'
import profile from './profile'
import category from './category'
import cateItem from './cateItem'

const reducer = combineReducers({
  carts,
  auth,
  item,
  profile,
  category,
  cateItem
})

export default reducer
