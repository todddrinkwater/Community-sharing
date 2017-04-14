import request from 'superagent'

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

export const getListings = () => {
  return {
    type: 'GET_LISTINGS'
  }
}

export function fetchListings () {
  return (dispatch) => {
    request
      .get(`http://www.reddit.com/r/${subreddit}.json`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receivePosts(res.body.data.children))
      })
  }
}
