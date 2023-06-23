import React from 'react'

function Information() {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
      <i class='bx bx-award about__icon'></i>
        <h3 className='about__title'>Experience</h3>
        <span className='about__subtitle'>2 Years Working</span>
      </div>

      <div className='about__box'>
      <i class='bx bx-support about__icon'></i>

        <h3 className='about__title'>Support</h3>
        <span className='about__subtitle'>Online 24/7</span>
      </div>

      {/* <div className='about__box'>
      <box-icon name='briefcase-alt about__icon'></box-icon>

        <h3 className='about__title'>Completed</h3>
        <span className='about__subtitle'>48+ Projects</span>
      </div> */}

    </div>
  )
}

export default Information