import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import { menuNavigation } from '../actions'

import NavbarMenu from './NavbarMenu.jsx'

let Navbar = (props) => (
  <div className='header-menu-container'>
    <div className='header-container'>
      <div className='hambuger-container' onClick={ () => openMenu(props) }>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <Router>
        <Link to="/">
          <div className='title-container'>
            <p className='site-title'>Community Sharing</p>
          </div>
        </Link>
      </Router>
      <div className='login-button-container'>
        <i className="fa fa-user" aria-hidden="true"></i>
      </div>
    </div>
     { props.menuState ? <NavbarMenu /> : "" }
  </div>
)

function mapStateToProps(state){
  return {
    dispatch: state.dispatch,
    menuState: state.menuState
  }
}

function openMenu(props) {
  props.dispatch(menuNavigation())
}

export default connect(mapStateToProps)(Navbar)
