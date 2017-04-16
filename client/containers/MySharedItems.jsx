import React from 'react'
import { connect } from 'react-redux'

import { fetchLoanedItems } from '../actions'

import SharedCard from '../components/SharedCard'

// function MySharedItems (props) {
//   return (
//     <div className='dashboard-section'>
//       MY SHARED ITEMS
//       <SharedCard />
//     </div>
//   )
// }
//


class MySharedItems extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchLoanedItems(7006))
  }

  render() {
    return (
      <div className='dashboard-section'>
        MY SHARED ITEMS
        { this.props.loanedItems.map( (loanedItem) => {
           return (
             <SharedCard key={loanedItem.loan_id} {...loanedItem} />
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
