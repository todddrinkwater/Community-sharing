import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import List from '../containers/List'
import Header from './Header.jsx'
import Home from './Home'
import ItemListing from './ItemListing'
import Dashboard from './Dashboard'
import Register from './Register'
import Login from './Login'
import Order from './Order'
import LenderForm from './LenderForm'
import OrderMyBorroedItems from './OrderMyBorroedItems'

function App (props) {
  return (
    <div className='app-container'>
      <Header />
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/list' component={List} />
          <Route path='/list-item' component={ItemListing} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/order' component={Order} />
          <Route path='/lender-form' component={LenderForm} />
          <Route path='/OrderMyBorroedItems' component={OrderMyBorroedItems} />
        </div>
      </Router>
    </div>
  )
}

export default App
