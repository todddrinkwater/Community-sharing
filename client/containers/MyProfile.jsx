import React from 'react'
import { connect } from 'react-redux'

function MyProfile (props) {
  return (
    <div className='profile-container'>
      <div className='profile-image-container'>
        <img className='profile-image' src={props.loggedInUserDetails.user_image_url} />
      </div>
      <div className='profile-details-container'>
        <p className='profile-bold-text'>{props.loggedInUserDetails.fname + ' ' + props.loggedInUserDetails.lname}</p>
        <p><span className='profile-bold-text'> Email:</span><br />
         {props.loggedInUserDetails.email}</p>
        <p><span className='profile-bold-text'> Phone Number:</span><br />
         {props.loggedInUserDetails.phone}</p>
        <p><span className='profile-bold-text'> Address:</span><br />
          {props.loggedInUserDetails.address}, <br />
          {props.loggedInUserDetails.suburb}, {props.loggedInUserDetails.town_city}, <br />
          {props.loggedInUserDetails.postcode} <br />
        </p>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    loggedInUserDetails: state.loggedInUserDetails
  }
}

export default connect(mapStateToProps)(MyProfile)
