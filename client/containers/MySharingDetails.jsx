import React from 'react'

import MyItems from './MyItems.jsx'
import MyBorrowedItems from './MyBorrowedItems.jsx'
import MyLoanedItems from './MyLoanedItems.jsx'

function MySharingDetails () {
  return (
    <div>
      <MyItems />
      <MyBorrowedItems />
      <MyLoanedItems />
    </div>
  )
}

export default MySharingDetails
