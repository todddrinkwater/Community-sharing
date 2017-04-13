import React from 'react'
import NavigationMenu from './NavigationMenu.jsx'

var tempMenuState = true

const Header = () => (

  <div className='header-menu-container'>

    <div className='header-container'>
      <div className='hambuger-container' onClick={ () => openMenu() }>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <div className='title-container'>
        <h2>Community Sharing</h2>
      </div>

      <div className='login-button-container'>
        <i className="fa fa-user" aria-hidden="true"></i>
      </div>
    </div>

     { tempMenuState ? <NavigationMenu /> : "" }

  </div>
)

export default Header

function openMenu() {
  alert('hamburger clicked')
}
