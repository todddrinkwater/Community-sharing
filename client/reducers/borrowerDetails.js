const borrowerDetails = (state = ['default lender'], action) => {
  switch (action.type) {
    case 'BORROWER_DETAILS':
      return action.borrowerDetails

    default:
      return state
  }
}

export default borrowerDetails
