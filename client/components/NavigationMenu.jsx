import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

const NavigationMenu = () => (

  <div className='navigation-menu-container'>
    <Router>
      <ul>
        <li className='navigation-item'><Link to="/login">Register/Login</Link></li>
        <li className='navigation-item'><Link to="/dashboard">Your Dashboard</Link></li>
        <li className='navigation-item'><Link to="/list">Borrow and item</Link></li>
        <li className='navigation-item'><Link to="/lender-form">Lend and item</Link></li>
      </ul>
    </Router>
  </div>
)

export default NavigationMenu



// <li className='navigation-item'>Register/Login</li>
// <li className='navigation-item'>Your Dashboard</li>
// <li className='navigation-item'>Borrow and item</li>
// <li className='navigation-item'>Lend and item</li>
