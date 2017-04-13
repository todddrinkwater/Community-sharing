import React from 'react'

function Card () {
  return (
    <div className='card-wrapper'>
      <div className='card-container'>
        <img className='card-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/CC500BAT.png/220px-CC500BAT.png'></img>

        <div className='card-details-container'>
          <p className='card-heading'>Mower</p>
          <p className='card-details'>
            Lorem ipsum dolor sit amet, nibh molestie an eos, cu prima error quo, pro eros munere efficiendi in. Vis in eros pertinax voluptatibus....
          </p>
        </div>
      </div>
      <div className='card-button-container'>
        <button className='card-button'>More</button>
      </div>
    </div>
  )
}

export default Card
