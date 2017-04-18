import React from 'react'

import MyListings from './MyListings.jsx'
import MyBorrowedItems from './MyBorrowedItems.jsx'
import MyLendedItems from './MyLendedItems.jsx'

function MySharingDetails () {
  return (
    <div>
      <MyListings />
      <MyBorrowedItems />
      <MyLendedItems />
    </div>
  )
}

export default MySharingDetails
