import React, { Component } from 'react'
import loading from './Loading.gif'
export class spinner extends Component {
  render() {
    return (
      <div className='text-center ' style={{marginTop:'10px'}}>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default spinner
