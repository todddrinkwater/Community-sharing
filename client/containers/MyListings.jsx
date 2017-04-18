import React from 'react'
import { connect } from 'react-redux'

import MyListingsCard from '../components/MyListingsCard'

function MyListings (props) {
  return (
    <div className='dashboard-section'>
      MY LISTINGS
      { props.allItems.map((item) => {
        if (item.owner_id === props.loggedInUser.user_id) {
          return (
            <MyListingsCard key={item.item_id} {...item} />
          )
        }
      })}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    allItems: state.initialListings,
    loggedInUser: state.loggedInUserDetails
  }
}

export default connect(mapStateToProps)(MyListings)
