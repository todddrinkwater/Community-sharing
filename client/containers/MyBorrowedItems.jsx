import React from 'react'
import { connect } from 'react-redux'

import { fetchBorrowedItems } from '../actions'

import ImBorrowingCard from '../components/ImBorrowingCard'

class MyBorrowedItems extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchBorrowedItems(this.props.loggedInUserId))
  }
  render() {
    return (
      <div className='dashboard-section'>
        MY BORROWED ITEMS
        { this.props.borrowedItemsList.map( (borrowedItem) => {
          return (
            <ImBorrowingCard  key={borrowedItem.loan_id} {...borrowedItem} dispatch={this.props.dispatch} />
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    dispatch: state.dispatch,
    borrowedItemsList: state.borrowedItemsState,
    loggedInUserId: state.loggedInUserDetails.user_id
  }
}

export default connect(mapStateToProps)(MyBorrowedItems)
