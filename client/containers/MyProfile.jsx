import React from 'react'


function MyProfile () {
  return (
    <div className='profile-continer'>
      <div className='profile-image-container'>
        <img className='profile-image' src='http://www.dfhtechnologies.com/images/user.png'></img>
      </div>
      <div className='profile-details-container'>
        <p>First Name: Dan</p>
        <p>Last Name: Blake</p>
        <p>Email: dan@hotmail.com</p>
        <p>Phone Number: 0231324123</p>
        <p>Location: Wellington</p>
      </div>
    </div>
  )
}

export default MyProfile
