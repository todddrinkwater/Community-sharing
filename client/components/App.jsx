import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Navbar from './Navbar.jsx'
import Home from './Home'
import LenderForm from './LenderForm'
import List from '../containers/List'
import SingleItem from './SingleItem'
import Dashboard from './Dashboard'
import Register from './Register'
import Login from './Login'
import LendedOrderDetails from './LendedOrderDetails'
import BorrowedOrderDetails from './BorrowedOrderDetails'

function App (props) {
  return (
    <div className='app-container'>
      <Navbar />
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/lender-form' component={LenderForm} />
          <Route path='/list' component={List} />
          <Route path='/list-item' component={SingleItem} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/l-order' component={LendedOrderDetails} />
          <Route path='/b-order' component={BorrowedOrderDetails} />
        </div>
      </Router>
    </div>
  )
}

export default App
