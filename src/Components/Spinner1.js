import React, { Component } from 'react'
import loading from './Loading.gif'
export class spinner extends Component {
  render() {
    return (
      <div className='text-center  mt-10'>
        <img src={loading} alt="" />
      </div>
    )
  }
}

export default spinner
