import React from 'react'
import watch from '../Asset/home.png'
const Watchs = (props) => {
  return (
    <div className='watch'>
    <div className='watchcard'>
    <div className='img'>
    <img src={watch} alt='watch'  style={{width:"110%"}}/>
    </div>
    <div className='watch-content'>
    <h3>{props.title}</h3>
    <h4>{props.price}</h4>
    </div>
    </div>
    </div>
  )
}

export default Watchs
