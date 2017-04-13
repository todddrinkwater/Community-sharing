import React from 'react'

import List from '../containers/List'
import Header from './Header.jsx'
import HomePage from './HomePage'
import ItemListing from './ItemListing'

function App (props) {
  return (
    <div className='app-container'>
      <Header />
      <List />
      <HomePage />
      <ItemListing />
    </div>
  )
}

export default App
