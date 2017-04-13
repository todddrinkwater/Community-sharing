import React from 'react'

import List from '../containers/List'
import Header from './Header.jsx'

function App (props) {
  return (
    <div className='app-container'>
      <Header />
      <List />
    </div>
  )
}

export default App
