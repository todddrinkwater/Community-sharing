const openTab = (state = 'MySharingDetails', action) => {
  switch (action.type) {
    case 'DASHBOARD_TAB':
      return action.dashboardState

    default:
      return state
  }
}

export default openTab
