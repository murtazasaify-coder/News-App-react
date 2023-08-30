import React from 'react'
import loading from './Loading.gif'
const spinner =()=> {
    return (
      <div className='text-center ' style={{marginTop:'30px'}}>
        <img  style={{height:'100px'}} src={loading} alt="loading" />
      </div>
    )
  
}

export default spinner
