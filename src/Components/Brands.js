import React from 'react'
import brandimg from '../Asset/brandimg.png'
const Brands = (props) => {
  return (
    <div className='brand'>
      <div className='brandcard'>
      <div className='brand-content'>
      <img src={brandimg} alt='brandimg'  style={{width:"30%"}} className='watchimg'/>
      <div className='text-content'>
      <h3>{props.brand}</h3>
      <p>{props.description}</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Brands
