const defaultUser = {
  user_id: 7006,
  fname: "Pou Default",
  lname: "Kupenga",
  email: "pk@email.com",
  phone:"027 111 2222",
  address: "8 Drummond Road",
  postcode: "6023",
  suburb: "Karori",
  town_city: "Wellington",
  user_image_url: "https://avatars0.githubusercontent.com/u/20761533?v=3&s=400",
  hash: ""
}


const loggedInUserDetails = (state = defaultUser, action) => {
  switch (action.type) {
    case 'LOGGED_IN_USER':
      return action.loggedInUserDetails

    default:
      return state
  }
}

export default loggedInUserDetails
