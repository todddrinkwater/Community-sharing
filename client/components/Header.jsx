import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import { menuNavigation } from '../actions'

import NavigationMenu from './NavigationMenu.jsx'

let Header = (props) => (
  <div className='header-menu-container'>
    <div className='header-container'>
      <div className='hambuger-container' onClick={() => openMenu(props)}>
        <i className='fa fa-bars' aria-hidden='true' />
      </div>
      <Router>
        <div>
          <Link to='/'>
            <div className='title-container'>
              <p className='site-title'>Community Sharing</p>
            </div>
          </Link>
          <Link to='/login'>
            <div className='login-button-container'>
              <i className='fa fa-user' aria-hidden='true' />
            </div>
          </Link>
        </div>
      </Router>
    </div>
    { props.menuState ? <NavigationMenu /> : '' }
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

export default connect(mapStateToProps)(Header)
