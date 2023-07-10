import React, { Component } from 'react'
import Spinner from './Spinner.gif'
export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='w-10 p-3' src={Spinner} alt="errorLoading"/>
      </div>
    )
  }
}
