import React from 'react'

import List from '../containers/List'
import Header from './Header.jsx'
import HomePage from './Homepage'

function App (props) {
  return (
    <div className='app-container'>
      <Header />
      <List />
      <HomePage />
    </div>
  )
}

export default App
