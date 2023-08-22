import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {

  pagesize=15;
  render() {
    return (
      <div>
         <BrowserRouter>
            <Navbar/>

            <Routes>
                <Route   path="/" element={ <News pagesize={this.pagesize} country="in" category="general" />} />
            </Routes>
            <Routes>
                <Route  path="/business" element={ <News pagesize={this.pagesize} country="in" category="Business" />} />
            </Routes>
            <Routes>
                <Route  path="/entertainment" element={ <News pagesize={this.pagesize} country="in" category="entertainment" />}/>
             </Routes>
            <Routes>
                <Route path="/health" element={ <News pagesize={this.pagesize} country="in" category="health" />} />
            </Routes>
            <Routes>
                <Route  path="/science" element={ <News pagesize={this.pagesize} country="in" category="science" />} />
            </Routes>
            <Routes>
                <Route  path="/sports" element={ <News pagesize={this.pagesize} country="in" category="sports" />} />
            </Routes>
            <Routes>
                <Route  path="/technology" element={ <News pagesize={this.pagesize} country="in" category="technology" />}/>
            </Routes>
         </BrowserRouter>
      </div>
    )
  }
}



