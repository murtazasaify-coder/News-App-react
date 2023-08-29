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
                <Route  key ="general" path="/" element={ <News pagesize={this.pagesize} country="in" category="general" />} />
            </Routes>
            <Routes>
                <Route key ="business" path="/business" element={ <News pagesize={this.pagesize} country="in" category="business" />} />
            </Routes>
            <Routes>
                <Route key ="entertainment" path="/entertainment" element={ <News pagesize={this.pagesize} country="in" category="entertainment" />}/>
             </Routes>
            <Routes>
                <Route key ="health" path="/health" element={ <News pagesize={this.pagesize} country="in" category="health" />} />
            </Routes>
            <Routes>
                <Route  key ="science" path="/science" element={ <News pagesize={this.pagesize} country="in" category="science" />} />
            </Routes>
            <Routes>
                <Route  key ="sports" path="/sports" element={ <News pagesize={this.pagesize} country="in" category="sports" />} />
            </Routes>
            <Routes>
                <Route  key ="technology" path="/technology" element={ <News pagesize={this.pagesize} country="in" category="technology" />}/>
            </Routes>
         </BrowserRouter>
      </div>
    )
  }
}



