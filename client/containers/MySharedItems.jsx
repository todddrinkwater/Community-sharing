import React from 'react'
import { connect } from 'react-redux'

import { fetchLoanedItems } from '../actions'

import SharedCard from '../components/SharedCard'

class MySharedItems extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchLoanedItems(this.props.loggedInUser.user_id))
  }

  render() {
    return (
      <div className='dashboard-section'>
        MY SHARED ITEMS
        { this.props.loanedItems.map( (loanedItem) => {
           return (
             <SharedCard key={loanedItem.loan_id} {...loanedItem} {...this.props.loggedInUser} />
            )
        })}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    dispatch: state.dispatch,
    loggedInUser: state.loggedInUserDetails,
    loanedItems: state.loanedItems
  }
}

export default connect(mapStateToProps)(MySharedItems)
