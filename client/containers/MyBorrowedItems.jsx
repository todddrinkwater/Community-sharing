import React from 'react'
import { connect } from 'react-redux'

import { fetchBorrowedItems } from '../actions'

import BorrowedItemCard from '../components/BorrowedItemCard'

class MyBorrowedItems extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchBorrowedItems(this.props.loggedInUserId))
  }
  render () {
    return (
      <div className='dashboard-container'>
        <h4>My Borrowed Items</h4>
        <div className='dashboard-section'>

          { this.props.borrowedItemsList.map((borrowedItem) => {
            return (
              <BorrowedItemCard key={borrowedItem.loan_id} {...borrowedItem} dispatch={this.props.dispatch} />
            )
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    dispatch: state.dispatch,
    borrowedItemsList: state.borrowedItemsState,
    loggedInUserId: state.loggedInUserDetails.user_id
  }
}

export default connect(mapStateToProps)(MyBorrowedItems)
