const loanedItems = (state = ['loanedItems test'], action) => {
  switch (action.type) {
    case 'LOANED_ITEMS':
      return action.loanedItemsList

    default:
      return state
  }
}

export default loanedItems
