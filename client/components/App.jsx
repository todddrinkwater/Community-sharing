import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import List from '../containers/List'
import Header from './Header.jsx'
import HomePage from './HomePage'

function App (props) {
  return (
    <div className='app-container'>
    <Header />
    <Router>
      <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/list' component={List} />
      </div>
    </Router>
    </div>
  )
}

export default App
