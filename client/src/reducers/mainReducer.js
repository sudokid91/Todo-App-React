import { combineReducers } from 'redux'
import todos from './todoReducer'
import visibilityFilter from './filterReducer'

export default combineReducers({
  todos,
  visibilityFilter
})