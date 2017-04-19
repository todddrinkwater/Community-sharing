import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import { menuNavigation, menuVisable } from '../actions'

import NavbarMenu from './NavbarMenu.jsx'

let Navbar = (props) => (
  <div className='header-menu-container'>
    <div className='header-container'>
      <div className='hambuger-container' onClick={() => openMenu(props)}>
        { props.menuVisableState ? <i className='fa fa-times' aria-hidden='true' /> : <i className='fa fa-bars' aria-hidden='true' /> }
      </div>
      <Router>
        <div className='title-container'>
          <div>
            <Link className='navLink' to='/'>
              <p className='site-title'>Community Sharing</p>
            </Link>
          </div>
          <div className='login-button-container'>
            <Link className='navLink' to='/login'>
              <i className='fa fa-user' aria-hidden='true' />
            </Link>
          </div>
        </div>
      </Router>
    </div>
    { props.menuState ? <NavbarMenu /> : '' }
  </div>
)

function mapStateToProps (state) {
  return {
    dispatch: state.dispatch,
    menuState: state.menuState,
    menuVisableState: state.menuVisableState
  }
}

function openMenu (props) {
  props.dispatch(menuNavigation())
  props.dispatch(menuVisable())
}

export default connect(mapStateToProps)(Navbar)
