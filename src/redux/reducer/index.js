import { combineReducers } from 'redux';
import carts from './carts'
import auth from './auth'
import item from './item'
import profile from './profile'
import category from './category'
import cateItem from './cateItem'
import transaction from './transaction'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistAuth = {
  key: 'auth',
  storage: storage,
}

const reducer = combineReducers({
  carts,
  auth: persistReducer(persistAuth, auth),
  item,
  profile,
  category,
  cateItem,
  transaction
})

export default reducer
