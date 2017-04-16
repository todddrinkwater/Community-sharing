import React from 'react'
import { connect } from 'react-redux'

import { fetchBorrowedItems } from '../actions'
import ImBorrowingCard from '../components/ImBorrowingCard'

function MyBorrowing (props) {
  return (
    <div className='dashboard-section'>
      IM BORROWING
      <ImBorrowingCard />
    </div>
  )
}

function mapStateToProps(state){
console.log(state.borrowedItemsState)
  return {
    dispatch: state.dispatch,
    borrowedItemsList: state.borrowedItemsState
  }
}

export default connect(mapStateToProps)(MyBorrowing)
