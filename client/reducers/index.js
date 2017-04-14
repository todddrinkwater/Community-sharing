import { combineReducers } from 'redux'

import menuState from './menuState'
import dashboardState from './dashboardState'
import allListings from './allListings'
import singleItem from './singleItem'

export default combineReducers({
  menuState,
  dashboardState,
  allListings,
  singleItem
})
