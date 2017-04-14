import React from 'react'
import { connect } from 'react-redux'
import { menuNavigation } from '../actions'


import NavigationMenu from './NavigationMenu.jsx'

let Header = (props) => (

  <div className='header-menu-container'>

    <div className='header-container'>
      <div className='hambuger-container' onClick={ () => openMenu(props) }>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <div className='title-container'>
        <p className='site-title'>Community Sharing</p>
      </div>

      <div className='login-button-container'>
        <i className="fa fa-user" aria-hidden="true"></i>
      </div>
    </div>

     { props.menuState ? <NavigationMenu /> : "" }

  </div>
)

function mapStateToProps(state){
  return {
    dispatch: state.dispatch,
    menuState: state.menuState
  }
}

export default connect(mapStateToProps)(Header)

function openMenu(props) {
  props.dispatch(menuNavigation())
}
