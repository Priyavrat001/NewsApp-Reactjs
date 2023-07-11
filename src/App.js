import React, { Component } from 'react'
import News from './components/News'
import Newscard from './components/Newscard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <News/>
        <Routes>
          <Route exact path="/" element={<Newscard key="general" pageSize={6} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<Newscard key="business" pageSize={6} country="in" category="business"/>}></Route>
          <Route exact path="/science" element={<Newscard key="science" pageSize={6} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<Newscard key="sports" pageSize={6} country="in" category="sports"/>}></Route>
          <Route exact path="/health" element={<Newscard key="health" pageSize={6} country="in" category="health"/>}></Route>
          <Route exact path="/techenology" element={<Newscard key="techenology" pageSize={6} country="in" category="techenology"/>}></Route>
          <Route exact path="/entertainment" element={<Newscard key="entertainment" pageSize={6} country="in" category="entertainment"/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
