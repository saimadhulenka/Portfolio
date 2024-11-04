import React from 'react'
import Home from './Home'
import Header from './Header'
import About from './About'
import Project from './Project'
import Certification from './Certification'
import Blog from './Blog'
import Email from './Email'
import {BrowserRouter,Route,Routes} from 'react-router-dom';


function 
hello() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/about' exact element={<About/>}></Route>
          <Route path='/project' exact element={<Project/>}></Route>
          <Route path='/certification' exact element={<Certification/>}></Route>
          <Route path='/blog' exact element={<Blog/>}></Route>
          <Route path='/mail' exact element={<Email/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default hello
