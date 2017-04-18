const allListings = (state = [], action) => {
  switch (action.type) {
    case "GET_LISTINGS":
      return action.initialListings
    case 'LIST_NEW_ITEM':
        var newState = [...state]
        newState.push(action.newItemData)
        return newState

    default:
      return state
  }
}

export default allListings
