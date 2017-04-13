import React from 'react'

import MyListings from '../containers/MyListings.jsx'
import ImBorrowing from '../containers/ImBorrowing.jsx'
import MySharedItems from '../containers/MySharedItems.jsx'


function Dashboard () {
  return (
    <div className='dashboard-container'>

      <div className='dashboard-menu-container'>
        <div className='dashboard-button dashboard-active-button'>
          My Sharing
        </div>
        <div className='dashboard-button'>
          My Profile
        </div>
      </div>

      <div>
        <MyListings />
        <ImBorrowing />
        <MySharedItems />
      </div>

    </div>
  )
}

export default Dashboard
