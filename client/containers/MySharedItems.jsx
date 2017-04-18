import React from 'react'
import { connect } from 'react-redux'

import { fetchLoanedItems } from '../actions'

import SharedCard from '../components/SharedCard'

class MySharedItems extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchLoanedItems(this.props.loggedInUser.user_id))
  }

  render () {
    return (
      <div className='dashboard-container'>
        <h4>My Shared Items</h4>
        <div className='dashboard-section'>
          { this.props.loanedItems.map((loanedItem) => {
            return (
              <SharedCard
                key={loanedItem.loan_id}
                {...loanedItem}
                loggedInFname={this.props.loggedInUser.fname}
                loggedInLname={this.props.loggedInUser.lname}
                loggedInEmail={this.props.loggedInUser.email}
                loggedInPhone={this.props.loggedInUser.phone}
                loggedInImage={this.props.loggedInUser.user_image_url}
                dispatch={this.props.dispatch} />
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
    loggedInUser: state.loggedInUserDetails,
    loanedItems: state.loanedItems
  }
}

export default connect(mapStateToProps)(MySharedItems)
