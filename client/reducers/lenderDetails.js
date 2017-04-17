const lenderDetails = (state = ['default lender'], action) => {
  switch (action.type) {
    case 'LENDER_DETAILS':
      return action.lenderDetails

    default:
      return state
  }
}

export default lenderDetails
