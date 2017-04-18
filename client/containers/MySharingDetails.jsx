import React from 'react'

import MyItems from './MyItems.jsx'
import MyBorrowedItems from './MyBorrowedItems.jsx'
import MyLendedItems from './MyLendedItems.jsx'

function MySharingDetails () {
  return (
    <div>
      <MyItems />
      <MyBorrowedItems />
      <MyLendedItems />
    </div>
  )
}

export default MySharingDetails
