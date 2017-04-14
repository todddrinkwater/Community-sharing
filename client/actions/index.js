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

// To be 
// export const getListings = () => {
//   return {
//     type: 'GET_LISTINGS'
//   }
// }
