import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState(
      {
        progress:progress
      }
    )
  }

  pagesize=15;
  render() {
    return (
      <div>
         <BrowserRouter>
            <LoadingBar
                color='#f11946'
                height={3}
                progress={this.state.progress}
                
            />
            <Navbar/>

            <Routes>
                <Route  key ="general" path="/" element={ <News setProgress={this.setProgress} pagesize={this.pagesize} country="in" category="general" />} />
            </Routes>
            <Routes>
                <Route  key ="business" path="/business" element={ <News setProgress={this.setProgress} pagesize={this.pagesize} country="in" category="business" />} />
            </Routes>
            <Routes>
                <Route   key ="entertainment" path="/entertainment" element={ <News setProgress={this.setProgress} pagesize={this.pagesize} country="in" category="entertainment" />}/>
             </Routes>
            <Routes>
                <Route key ="health" path="/health" element={ <News setProgress={this.setProgress} pagesize={this.pagesize} country="in" category="health" />} />
            </Routes>
            <Routes>
                <Route   key ="science" path="/science" element={ <News setProgress={this.setProgress} pagesize={this.pagesize} country="in" category="science" />} />
            </Routes>
            <Routes>
                <Route   key ="sports" path="/sports" element={ <News setProgress={this.setProgress} pagesize={this.pagesize} country="in" category="sports" />} />
            </Routes>
            <Routes>
                <Route   key ="technology" path="/technology" element={ <News setProgress={this.setProgress} pagesize={this.pagesize} country="in" category="technology" />}/>
            </Routes>
         </BrowserRouter>
      </div>
    )
  }
}



