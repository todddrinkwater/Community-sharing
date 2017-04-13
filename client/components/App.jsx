import React from 'react'

import List from '../containers/List'
import Header from './Header.jsx'
import HomePage from './HomePage'
import ItemListing from './ItemListing'
import Login from './Login'

function App (props) {
  return (
    <div className='app-container'>
      <Header />
      <List />
      <HomePage />
      <ItemListing />
      <Login />
    </div>
  )
}

export default App
