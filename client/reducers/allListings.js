const allListings = (state = [], action) => {
  switch (action.type) {
    case 'GET_LISTINGS':
      return action.allListings

    default:
      return state
  }
}

export default allListings
