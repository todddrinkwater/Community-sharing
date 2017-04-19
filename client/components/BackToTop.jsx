import React from 'react'

let BackToTop = () => (
  <div className='BackToTop'>
    <a href='#' onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0) }}>Back To Top</a>
  </div>
)

export default BackToTop
