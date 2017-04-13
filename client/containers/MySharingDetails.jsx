import React from 'react'

import MyListings from './MyListings.jsx'
import ImBorrowing from './ImBorrowing.jsx'
import MySharedItems from './MySharedItems.jsx'


function MySharingDetails () {
  return (
    <div>
      <MyListings />
      <ImBorrowing />
      <MySharedItems />
    </div>
  )
}

export default MySharingDetails
