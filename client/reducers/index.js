import { combineReducers } from "redux"

<<<<<<< HEAD
import menuState from "./menuState"
import dashboardState from "./dashboardState"
import initialListings from "./allListings"
import filteredListings from "./filteredListings"
import singleItem from "./singleItem"
import loggedInUserDetails from "./loggedInUserDetails"
import loanedItems from "./loanedItems"
import orderItemDetails from "./orderItemDetails"
import borrowedItemsState from "./borrowedItemsState"
=======
import menuState from './menuState'
import dashboardState from './dashboardState'
import initialListings from './allListings'
import filteredListings from './filteredListings'
import singleItem from './singleItem'
import loggedInUserDetails from './loggedInUserDetails'
import loanedItems from './loanedItems'
import orderItemDetails from './orderItemDetails'
import borrowedItemsState from './borrowedItemsState'
import lenderDetails from './lenderDetails'
>>>>>>> 5b4e0ac0a817b7f87661b7f6e9964d238c04949b

export default combineReducers({
  menuState,
  dashboardState,
  initialListings,
  filteredListings,
  singleItem,
  loggedInUserDetails,
  loanedItems,
  orderItemDetails,
  borrowedItemsState,
  lenderDetails
})
