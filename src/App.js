import React, { Component } from 'react'
import News from './components/News'
import Newsitems from './components/Newscard'
import Newscard from './components/Newscard'

export default class App extends Component {
  render() {
    return (
      <div>
        <News/>
        <Newscard />
      </div>
    )
  }
}
