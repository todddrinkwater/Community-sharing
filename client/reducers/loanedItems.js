const loanedItems = (state = [{loan_id:1, test:'loanedItems test'}], action) => {
  switch (action.type) {
    case 'LOANED_ITEMS':
      return action.loanedItemsList

    default:
      return state
  }
}

export default loanedItems
