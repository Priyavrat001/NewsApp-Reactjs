import React, { Component } from 'react'
import News from './components/News'
import Newscard from './components/Newscard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress:10
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <News/>
        <LoadingBar
        color='blue'
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path="/" element={<Newscard setProgress={this.setProgress} key="general" pageSize={6} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<Newscard setProgress={this.setProgress} key="business" pageSize={6} country="in" category="business"/>}></Route>
          <Route exact path="/science" element={<Newscard setProgress={this.setProgress} key="science" pageSize={6} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<Newscard setProgress={this.setProgress} key="sports" pageSize={6} country="in" category="sports"/>}></Route>
          <Route exact path="/health" element={<Newscard setProgress={this.setProgress} key="health" pageSize={6} country="in" category="health"/>}></Route>
          <Route exact path="/techenology" element={<Newscard setProgress={this.setProgress} key="techenology" pageSize={6} country="in" category="techenology"/>}></Route>
          <Route exact path="/entertainment" element={<Newscard setProgress={this.setProgress} key="entertainment" pageSize={6} country="in" category="entertainment"/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
