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
          <Route path="/" element={<Newscard pageSize={6} country="in" category="general"/>}></Route>
          <Route path="/business" element={<Newscard pageSize={6} country="in" category="business"/>}></Route>
          <Route path="/science" element={<Newscard pageSize={6} country="in" category="science"/>}></Route>
          <Route path="/sports" element={<Newscard pageSize={6} country="in" category="sports"/>}></Route>
          <Route path="/health" element={<Newscard pageSize={6} country="in" category="health"/>}></Route>
          <Route path="/techenology" element={<Newscard pageSize={6} country="in" category="techenology"/>}></Route>
          <Route path="/entertainment" element={<Newscard pageSize={6} country="in" category="entertainment"/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
