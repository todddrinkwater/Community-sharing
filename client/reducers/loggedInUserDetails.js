const defaultUser = {
  user_id: 7006,
  fname: "Bob",
  lname: "Smith",
  email: "BS@email.com",
  phone: "027 111 2222",
  address: "8 Drummond Road",
  postcode: "6023",
  suburb: "Karori",
  town_city: "Wellington",
  user_image_url: "https://yt3.ggpht.com/-uJh4oSQAwak/AAAAAAAAAAI/AAAAAAAAAAA/AMGKfKvDP3w/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
  hash: ""
}

const loggedInUserDetails = (state = defaultUser, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return action.loggedInUserDetails

    default:
      return state
  }
}

export default loggedInUserDetails
