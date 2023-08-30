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
import { useState } from 'react';


 function App () {

  const apiKey=process.env.REACT_APP_NEWS_API
  
  const [progress,setProgress]=useState(0)
  
  // apiKey="bc9504c778ec4da183f80ecb6b464346"
  
  const setProgress1=(Progress)=>{
    setProgress(Progress);
  }
  const pagesize=15;

    return (
      <div>
         <BrowserRouter>
            <LoadingBar
                color='#f11946'
                height={3}
                progress={progress}
                
            />
            <Navbar/>

            <Routes>
                <Route  key ="general" path="/" element={ <News apiKey={apiKey} setProgress1={setProgress1} pagesize={pagesize} country="in" category="general" />} />
            </Routes>
            <Routes>
                <Route  key ="business" path="/business" element={ <News apiKey={apiKey} setProgress1={setProgress1} pagesize={pagesize} country="in" category="business" />} />
            </Routes>
            <Routes>
                <Route   key ="entertainment" path="/entertainment" element={ <News apiKey={apiKey} setProgress1={setProgress1} pagesize={pagesize} country="in" category="entertainment" />}/>
             </Routes>
            <Routes>
                <Route key ="health" path="/health" element={ <News apiKey={apiKey} setProgress1={setProgress1} pagesize={pagesize} country="in" category="health" />} />
            </Routes>
            <Routes>
                <Route   key ="science" path="/science" element={ <News apiKey={apiKey} setProgress1={setProgress1} pagesize={pagesize} country="in" category="science" />} />
            </Routes>
            <Routes>
                <Route   key ="sports" path="/sports" element={ <News apiKey={apiKey} setProgress1={setProgress1} pagesize={pagesize} country="in" category="sports" />} />
            </Routes>
            <Routes>
                <Route   key ="technology" path="/technology" element={ <News apiKey={apiKey} setProgress1={setProgress1} pagesize={pagesize} country="in" category="technology" />}/>
            </Routes>
         </BrowserRouter>
      </div>
    )
  
}
export default App



