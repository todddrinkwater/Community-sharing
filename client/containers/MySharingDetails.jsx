import React from 'react'

import MyListings from './MyListings.jsx'
import MyBorrowedItems from './MyBorrowedItems.jsx'
import MySharedItems from './MySharedItems.jsx'


function MySharingDetails () {
  return (
    <div>
      <MyListings />
      <MyBorrowedItems />
      <MySharedItems />
    </div>
  )
}

export default MySharingDetails
