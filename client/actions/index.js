let nextWordId = 0

<<<<<<< HEAD
const config = require('../../config')

var urlPath = url.format(config)
var currentMenuState = false
var menuVisableState = false

export const menuNavigation = () => {
  if (currentMenuState === false) {
    currentMenuState = true
  } else {
    currentMenuState = false
  }
  return {
    type: 'MENU_STATE',
    menuState: currentMenuState
  }
}

export const menuVisable = () => {
  if (menuVisableState === false) {
    menuVisableState = true
  } else {
    menuVisableState = false
  }
  return {
    type: 'MENU_VISABLE',
    menuVisableState: menuVisableState
  }
}

export const dashboardTab = clickedTab => {
  return {
    type: 'DASHBOARD_TAB',
    dashboardState: clickedTab
  }
}

export const initialListings = listings => {
  return {
    type: 'GET_LISTINGS',
    initialListings: listings
  }
}

export const filteredListings = listings => {
  return {
    type: 'FILTERED_LISTINGS',
    filteredListings: listings
  }
}

export const displaySingleItem = item => {
  return {
    type: 'SINGLE_ITEM',
    item
  }
}

export const loggedInUser = loggedInUserDetails => {
  return {
    type: 'LOGGED_IN_USER',
    loggedInUserDetails
  }
}

export const fetchUser = submitedEmail => {
  return dispatch => {
    request.get(urlPath + '/user/' + submitedEmail).end((err, res) => {
      if (err) {
        console.error('fetchUser ' + err.message)
        return
      }
      dispatch(loggedInUser(res.body[0]))
      dispatch(fetchLoanedItems(res.body[0].user_id))
    })
  }
}

export const borrowedItems = borrowedItemList => {
  return {
    type: 'BORROWED_ITEMS',
    borrowedItemList
  }
}

export const fetchBorrowedItems = loggedInUserId => {
  return dispatch => {
    request
      .get(urlPath + '/borrowedItems/' + loggedInUserId)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(borrowedItems(res.body))
      })
  }
}

export const loanedItems = loanedItemsList => {
  return {
    type: 'LOANED_ITEMS',
    loanedItemsList
  }
}

export const fetchLoanedItems = loggedInUserId => {
  return dispatch => {
    request.get(urlPath + '/loanedItems/' + loggedInUserId).end((err, res) => {
      if (err) {
        console.error('fetchLoanedItems ' + err.message)
        return
      }
      dispatch(loanedItems(res.body))
    })
  }
}

export const singleItemOrder = orderItem => {
  return {
    type: 'SINGLE_ORDER_ITEM',
    orderItem
  }
}

export const fetchSingleItem = itemId => {
  return dispatch => {
    request.get(urlPath + '/items/' + itemId).end((err, res) => {
      if (err) {
        console.error('fetchSingleItem ' + err.message)
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

export const updateListing = () => {
  return (dispatch) => {
    request
   .get(urlPath + /items/)
   .end((err, res) => {
     if (err) {
       console.error('upDateListing ' + err.message)
       return
     }
     dispatch(initialListings(res.body))
     dispatch(filteredListings(res.body))
   })
  }
}

export const borrowRequest = (borrowRequestDetails) => {
  return (dispatch) => {
    request
    .post(urlPath + /loanRequest/)
    .send(borrowRequestDetails)
    .end((err, res) => {
      if (err) {
        console.error('borrowRequest ' + err.message)
        return
      }
      dispatch(fetchBorrowedItems(borrowRequestDetails.borrowers_id))
    })
  }
}
