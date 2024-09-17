import React from 'react'
import Header from './Header';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home'
import Project from './Project';
import About from './About';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" index exact element={<Home/>}></Route>
        <Route path="/project" exact element={<Project/>}></Route>
        <Route path="/about" exact element={<About/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App