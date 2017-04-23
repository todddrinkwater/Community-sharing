import React from 'react'
import { connect } from 'react-redux'

import { fetchBorrowedItems } from '../actions'

import BorrowedItemCard from '../components/BorrowedItemCard'

class MyBorrowedItems extends React.Component {

  componentDidMount () {
    this.props.dispatch(fetchBorrowedItems(this.props.loggedInUserId))
  }

  constructor () {
    super()
    this.state = { toggleMyItems: true }
  }

  toggleItemView () {
    this.setState({ toggleMyItems: !this.state.toggleMyItems })
  }

  render () {
    return (
      <div className='dashboard-container'>
        <h4 onClick={() => this.toggleItemView()}> My Borrowed Items <i className='fa fa-arrow-down' aria-hidden='true' /> </h4>
        { this.state.toggleMyItems ? myItems(this.props.borrowedItemsList, this.props.loggedInUserId) : '' }
      </div>
    )
  }
}

function myItems (borrowedItems, loggedInUserId) {
  return borrowedItems.map((borrowedItem) => {
    if (borrowedItem.owner_id !== loggedInUserId) {
      return (
        <BorrowedItemCard key={borrowedItem.loan_id} {...borrowedItem} />
      )
    }
  })
}

function mapStateToProps (state) {
  return {
    dispatch: state.dispatch,
    borrowedItemsList: state.borrowedItemsState,
    loggedInUserId: state.loggedInUserDetails.user_id
  }
}

export default connect(mapStateToProps)(MyBorrowedItems)
