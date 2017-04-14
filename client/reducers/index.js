import { combineReducers } from 'redux'

import menuState from './menuState'
import dashboardState from './dashboardState'
import allListings from './allListings'

export default combineReducers({
  menuState,
  dashboardState,
  allListings
})
