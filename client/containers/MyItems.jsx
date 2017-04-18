import React from 'react'
import { connect } from 'react-redux'

import MyItemsCard from '../components/MyItemsCard'

function MyItems (props) {
  return (
    <div className='dashboard-container'>
      <h4>My Listings</h4>
      <div className='dashboard-section'>
        { props.allItems.map((item) => {
          if (item.owner_id === props.loggedInUser.user_id) {
            return (
              <MyItemsCard key={item.item_id} {...item} />
            )
          }
        })}
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    allItems: state.initialListings,
    loggedInUser: state.loggedInUserDetails
  }
}

export default connect(mapStateToProps)(MyItems)
