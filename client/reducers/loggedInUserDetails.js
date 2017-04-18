const defaultUser = {
  user_id: 7005,
  fname: 'Jon',
  lname: 'Bennett',
  email: 'jb@email.com',
  phone: '027 111 2222',
  address: '8 Drummond Road',
  suburb: 'Karori',
  town_city: 'Wellington',
  postcode: '6023',
  user_image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492378542/jon_diojve.jpg'
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
