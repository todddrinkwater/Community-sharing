import { combineReducers } from 'redux'

import menuState from './menuState'
import dashboardState from './dashboardState'

export default combineReducers({
  menuState,
  dashboardState
})
