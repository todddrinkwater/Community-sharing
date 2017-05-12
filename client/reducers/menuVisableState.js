const menuVisableState = (state = false, action) => {
  switch (action.type) {
    case 'MENU_VISABLE':
      return action.menuVisableState

    default:
      return state
  }
}

export default menuVisableState
