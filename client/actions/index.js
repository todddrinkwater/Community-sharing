import request from 'superagent'
const url = require('url')

const config = require('../../config')

var urlPath = url.format(config)
var currentMenuState = false

export const menuNavigation = () => {
  if(currentMenuState == false){
    currentMenuState = true;
  }else{
    currentMenuState = false
  }
  return {
    type: 'MENU_STATE',
    menuState: currentMenuState
  }
}

export const dashboardTab = (clickedTab) => {
  return {
    type: 'DASHBOARD_TAB',
    dashboardState: clickedTab
  }
}

export const initialListings = (listings) => {
  return {
    type: 'GET_LISTINGS',
    initialListings: listings
  }
}

export const filteredListings = (listings) => {
  return {
    type: 'FILTERED_LISTINGS',
    filteredListings: listings
  }
}

export const displaySingleItem = (item) => {
  return {
    type: 'SINGLE_ITEM',
    item
  }
}

export const loggedInUser = (loggedInUserDetails) => {
  return {
    type: 'LOGGED_IN_USER',
    loggedInUserDetails
  }
}

export const fetchUser = (submitedEmail) => {
  return (dispatch) => {
  request
    .get(urlPath + "/user/"+submitedEmail)
    .end((err, res) => {
      if (err) {
        console.error("fetchUser " + err.message)
        return
      }
      dispatch(loggedInUser(res.body[0]))
    })
  }
}

export const borrowedItems = (borrowedItemList) => {
  return {
    type: 'BORROWED_ITEMS',
    borrowedItemList
  }
}

export const fetchBorrowedItems = (loggedInUserId) => {
  return (dispatch) => {
    request
    .get(urlPath + "/borrowedItems/" + loggedInUserId)
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(borrowedItems(res.body))
    })
  }
}

export const loanedItems = (loanedItemsList) => {
  return {
    type: 'LOANED_ITEMS',
    loanedItemsList
  }
}

export const fetchLoanedItems= (loggedInUserId) => {
  return (dispatch) => {
  request
    .get(urlPath + "/loanedItems/"+loggedInUserId)
    .end((err, res) => {
      if (err) {
        console.error("fetchLoanedItems " + err.message)
        return
      }
      dispatch(loanedItems(res.body))
    })
  }
}

export const singleItemOrder = (orderItem) => {
  return {
    type: 'SINGLE_ORDER_ITEM',
    orderItem
  }
}

export const fetchSingleItem= (itemId) => {
  return (dispatch) => {
  request
    .get(urlPath + "/item/"+itemId)
    .end((err, res) => {
      if (err) {
        console.error("fetchSingleItem " + err.message)
        return
      }
      dispatch(singleItemOrder(res.body))
    })
  }
}

export const lenderDetails = (lenderDetails) => {
  return {
    type: 'LENDER_DETAILS',
    lenderDetails
  }
}

export const fetchLenderById = (userId) => {
  return (dispatch) => {
  request
    .get(urlPath + "/userById/" + userId)
    .end((err, res) => {
      if (err) {
        console.error("fetchUserById " + err.message)
        return
      }
      dispatch(lenderDetails(res.body))
    })
  }
}
