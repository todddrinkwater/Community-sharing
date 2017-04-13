import React from 'react'

function Card () {
  return (
    <div className='card-container'>
      <img className='card-image' src='http://www.homedepot.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Outdoor/Power_Equipment/Lawn_Mowers/self-propelled-mowers1.jpg'></img>

      <div className='card-details-container'>
        <p className='card-heading'>Mower</p>
        <p className='card-details'>
          Lorem ipsum dolor sit amet, nibh molestie an eos, cu prima error quo, pro eros munere efficiendi in. Vis in eros pertinax voluptatibus....
        </p>
        <div className='card-button-container'>
          <button className='card-button'>More</button>
        </div>

      </div>

    </div>
  )
}

export default Card
