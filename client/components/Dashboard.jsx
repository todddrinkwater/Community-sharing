import React from 'react'

import MySharingDetails from '../containers/MySharingDetails.jsx'


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
      <MySharingDetails />
    </div>
  )
}

export default Dashboard
