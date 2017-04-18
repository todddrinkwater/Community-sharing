import React from 'react'
import { connect } from 'react-redux'

import AvailableItems from '../components/AvailableItems'

function MyListings (props) {

  return (
    <div className='dashboard-section'>
      MY AVAILABLE ITEMS
      { props.allItems.map( (item) => {
        if (item.owner_id == props.loggedInUser.user_id){
          return (
            <AvailableItems key={item.item_id} {...item}/>
          )}
        })}
    </div>
  )
}

function mapStateToProps(state){
  return {
    allItems: state.initialListings,
    loggedInUser: state.loggedInUserDetails
  }
}

export default connect(mapStateToProps)(MyListings)
