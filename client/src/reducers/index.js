import {combineReducers} from 'redux'
import itemReducer from './itemReducer'

// Meeting Point For All Reducers ( itemReducer , authReducer , errorReducer )

export default combineReducers({
  item : itemReducer
})
