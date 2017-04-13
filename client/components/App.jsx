import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import List from '../containers/List'
import Header from './Header.jsx'
import HomePage from './HomePage'
import ItemListing from './ItemListing'
import Dashboard from './Dashboard.jsx'

function App (props) {
  return (
    <div className='app-container'>
    <Header />
    <Router>
      <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/list' component={List} />
        <Route path='/list-item' component={ItemListing} />
      </div>
    </Router>
    </div>
  )
}

export default App
