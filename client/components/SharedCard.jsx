import React from 'react'

function SharedCard () {
  return (
    <div className='card-wrapper'>
      <div className='card-container'>
        <img className='card-image' src='http://www.dfhtechnologies.com/images/user.png'></img>

        <p className='shared-card-details'>
          <span className='shared-name'>You</span> are sharing your lawnmower with <span className='shared-name'>Todd</span>
        </p>

        <img className='card-image' src='http://vignette1.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222'></img>
    </div>
    <div className='card-button-container'>
      <button className='card-button'>More</button>
    </div>
  </div>
  )
}

export default SharedCard
