const defaultOrder = {
  user_id: 9009,
  fname: "Sam",
  lname: "Jones",
  email: "SJ@email.com",
  phone: "027 111 2222"
}

const orderItemDetails = (state = [defaultOrder], action) => {
  switch (action.type) {
    case "SINGLE_ORDER_ITEM":
      return action.orderItem

    default:
      return state
  }
}

export default orderItemDetails
