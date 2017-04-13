import React from 'react'
import { Link } from 'react-router-dom'

function HomePage () {
  return (
    <div className="homepage">
      <h1>Testing</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default HomePage


// <div className="borrow-div">
//   <p className="borrow-p">Im here to Borrow</p>
// </div>
// <div className="lend-div">
//   <p className="lend-p">Im here to Lend</p>
// </div>
