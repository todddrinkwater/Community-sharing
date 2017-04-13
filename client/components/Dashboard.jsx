import React from 'react'
import { connect } from 'react-redux'

import { dashboardTab } from '../actions'

import MySharingDetails from '../containers/MySharingDetails.jsx'
import MyProfile from '../containers/MyProfile.jsx'


function Dashboard (props) {
  return (
    <div className='dashboard-container'>

      <div className='dashboard-menu-container'>
        <div id='sharing-button' className='dashboard-button dashboard-active-button' onClick={ () => changeTab(props,'MySharingDetails') }>
          My Sharing
        </div>
        <div id='profile-button' className='dashboard-button' onClick={ () => changeTab(props,'myProfile')} >
          My Profile
        </div>
      </div>
      { (props.dashboardState == 'MySharingDetails') ? <MySharingDetails /> : <MyProfile /> }
    </div>
  )
}

function mapStateToProps(state){
  return {
    dispatch: state.dispatch,
    dashboardState: state.dashboardState
  }
}

export default connect(mapStateToProps)(Dashboard)

function changeTab(props, clickedTab) {
  

  props.dispatch(dashboardTab(clickedTab))
}
