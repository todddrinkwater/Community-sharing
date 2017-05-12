import React from 'react'
import { connect } from 'react-redux'

import { dashboardTab } from '../actions'

import MySharingDetails from '../containers/MySharingDetails.jsx'
import MyProfile from '../containers/MyProfile.jsx'

let Dashboard = (props) => (
  <div className='dashboard-container'>
    <div className='dashboard-menu-container'>
      <div id='sharing-button' className='dashboard-button dashboard-active-button' onClick={() => changeTab(props, 'MySharingDetails')}>
        My Sharing
      </div>
      <div id='profile-button' className='dashboard-button' onClick={() => changeTab(props, 'myProfile')} >
        My Profile
      </div>
    </div>
    { (props.dashboardState === 'MySharingDetails') ? <MySharingDetails /> : <MyProfile /> }
  </div>
)

function mapStateToProps (state) {
  return {
    dispatch: state.dispatch,
    dashboardState: state.dashboardState
  }
}

function changeTab (props, clickedTab) {
  if (props.dashboardState === 'myProfile') {
    document.getElementById('sharing-button').classList.add('dashboard-active-button')
    document.getElementById('profile-button').classList.remove('dashboard-active-button')
  } else {
    document.getElementById('sharing-button').classList.remove('dashboard-active-button')
    document.getElementById('profile-button').classList.add('dashboard-active-button')
  }
  props.dispatch(dashboardTab(clickedTab))
}

export default connect(mapStateToProps)(Dashboard)
