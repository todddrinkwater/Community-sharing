import React from 'react'

import List from '../containers/List'
import Header from './Header'
import HomePage from './HomePage'
import Dashboard from './Dashboard'

function App (props) {
  return (
    <div className='app-container'>
      <Header />
      <Dashboard />
    </div>
  )
}

export default App
