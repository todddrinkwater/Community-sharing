const menuState = (state = false, action) => {
  switch (action.type) {
    case 'MENU_STATE':
      return action.menuState

    default:
      return state
  }
}

export default menuState
