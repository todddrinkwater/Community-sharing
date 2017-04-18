import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import { menuNavigation } from '../actions'

import NavbarMenu from './NavbarMenu.jsx'

let Navbar = (props) => (
  <div className='header-menu-container'>
    <div className='header-container'>
      <div className='hambuger-container' onClick={() => openMenu(props)}>
        <i className='fa fa-bars' aria-hidden='true' />
      </div>
      <Router>
        <div>
          <div className='title-container'>
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
    menuState: state.menuState
  }
}

function openMenu (props) {
  props.dispatch(menuNavigation())
}

export default connect(mapStateToProps)(Navbar)
