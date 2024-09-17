import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img6 from './assets/img6.png';
import img10 from './assets/img10.jpg'
import { BsGithub } from "react-icons/bs";

function Project() {
  return (
    <div id="color">
    <div>
      <h1 style={{fontFamily:'Calisto MT',marginLeft:'1%',marginTop:'2%'}}>Minor Projects:</h1>
      <br />
      <div className="row m-1">
        
          <div className="col-3">
            <div className="card"style={{width: '98%'}}>
              <img src={img2} className="card-img-top" alt="Shoping img"/>
              <div className="card-body">
                <h4 className="card-title">1.Shoping Page</h4>
                <p className="card-text">I am  developing a website dedicated to online clothing sales by using HTML, CSS and JavaScript.The user interface with CSS to implementing the shopping</p>
                <Link className="nav-link" to="https://github.com/saimadhulenka/Webpage-Demo"><BsGithub /> Github Link</Link>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card"style={{width: '98%'}}>
              <img src={img3} className="card-img-top" alt="calculater img"/>
              <div className="card-body">
                <h4 className="card-title">2.Calculater App</h4>
                <p className="card-text" style={{fontSize:'97%'}}>I've been creating a calculator using HTML, CSS, and JavaScript.From designing the user interface with CSS to implementing the calculations in JavaScript</p>
                <Link className="nav-link" to="https://github.com/saimadhulenka/Calculator-Demo"><BsGithub /> Github Link</Link>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card" style={{width: '98%'}}>
              <img src={img4} className="card-img-top"  alt="no img"/>
              <div className="card-body">
                <h4 className="card-title">3.Feedback Form</h4>
                <p className="card-text">I developed a feedback form using HTML, CSS, and JavaScript. This form was designed to be both user-friendly and responsive, across all devices.</p>
                <Link className="nav-link" to="https://github.com/saimadhulenka/Webpage-Demo"><BsGithub /> Github Link</Link>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card" aria-hidden="true" style={{width: '94%'}}>
              <img src={img6} className="card-img-top"  alt="..."/>
              <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
                  <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-1"></span>
                  <span className="placeholder col-5"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <Link className="btn btn-primary disabled placeholder col-6" aria-disabled="true">Coming Soon...</Link>
              </div>
            </div>
          </div>

      </div>

<br />
    <h1 style={{fontFamily:'Calisto MT',marginLeft:'1%',marginTop:'1%', marginBottom:'2%'}}>Major Projects:</h1>

      <div className="row m-1">

          <div className="col-3">
            <div className="card"style={{width: '98%'}}>
              <img src={img10} className="card-img-top" alt="profile img"/>
              <div className="card-body">
                <h4 className="card-title">1.Portfolio</h4>
                <p className="card-text">I am creating a Portfolio by using Bootstrap and React. It's been an exciting journey learning.every step has been a great learning experience.                </p>
                <Link className="nav-link" to="https://github.com/saimadhulenka/Portfolio/tree/main/src"><BsGithub /> Github Link</Link>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card" aria-hidden="true" style={{width: '94%'}}>
              <img src={img6} className="card-img-top"  alt="..."/>
              <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
                  <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-1"></span>
                  <span className="placeholder col-5"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <Link className="btn btn-primary disabled placeholder col-6" aria-disabled="true">Coming Soon...</Link>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card" aria-hidden="true" style={{width: '94%'}}>
              <img src={img6} className="card-img-top"  alt="..."/>
              <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
                  <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-1"></span>
                  <span className="placeholder col-5"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <Link className="btn btn-primary disabled placeholder col-6" aria-disabled="true">Coming Soon...</Link>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card" aria-hidden="true" style={{width: '94%'}}>
              <img src={img6} className="card-img-top"  alt="..."/>
              <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
                  <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-1"></span>
                  <span className="placeholder col-5"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <Link className="btn btn-primary disabled placeholder col-6" aria-disabled="true">Coming Soon...</Link>
              </div>
            </div>
          </div>

      </div>

    </div>
    </div>
  )
}
<Outlet/>
export default Project