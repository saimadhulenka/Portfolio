import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img6 from './assets/img6.png';
import img10 from './assets/img10.jpg'
import { BsGithub } from "react-icons/bs";
import { FaChevronUp } from "react-icons/fa6";


function Project() {
  const top = () =>{
    window.scrollTo(0,0);
  }
  return (
    <div id="color">
      <div>
        <div className="row m-1">
        <h1 style={{ fontFamily: 'Calisto MT', marginTop:'3%', marginBottom:'3%'}}>Minor Projects:</h1>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
            <div className="card" style={{ width: '100%' }}>
              <img src={img2} className="card-img-top img-fluid" alt="Shoping img" />
              <div className="card-body">
                <h4 className="card-title">1.Shoping Page</h4>
                <p className="card-text" style={{textAlign:'justify'}}>I am developing a website dedicated to online clothing sales using HTML, CSS, and JavaScript. The user interface with CSS implements the shopping experience.</p>
                <Link to="https://github.com/saimadhulenka/Webpage-Demo" style={{textDecoration:'none'}}>
                  <BsGithub /> Github Link
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
            <div className="card" style={{ width: '100%' }}>
              <img src={img3} className="card-img-top img-fluid" alt="calculater img" />
              <div className="card-body">
                <h4 className="card-title">2.Calculator App</h4>
                <p className="card-text" style={{ fontSize: '97%',textAlign:'justify' }}>I've been creating a calculator using HTML, CSS, and JavaScript. From designing the user interface with CSS to implementing the calculations in JavaScript.</p>
                <Link to="https://github.com/saimadhulenka/Calculator-Demo" style={{textDecoration:'none'}}>
                  <BsGithub /> Github Link
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
            <div className="card" style={{ width: '100%' }}>
              <img src={img4} className="card-img-top img-fluid" alt="no img" />
              <div className="card-body">
                <h4 className="card-title">3.Feedback Form</h4>
                <p className="card-text" style={{ fontSize: '97%',textAlign:'justify' }}>I developed a feedback form using HTML, CSS, and JavaScript. This form was designed to be both user-friendly and responsive across all devices.</p>
                <Link to="https://github.com/saimadhulenka/Webpage-Demo" style={{textDecoration:'none'}}>
                  <BsGithub /> Github Link
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
            <div className="card" aria-hidden="true" style={{ width: '100%' }}>
              <img src={img6} className="card-img-top img-fluid" alt="Coming Soon..." />
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
        

        <div className="row m-1 mt-2">
        <h1 style={{ fontFamily: 'Calisto MT',marginBottom:'3%'}}>Major Projects:</h1>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
            <div className="card" style={{ width: '100%' }}>
              <img src={img10} className="card-img-top img-fluid" alt="profile img" />
              <div className="card-body">
                <h4 className="card-title">1.Portfolio</h4>
                <p className="card-text" style={{ fontSize: '97%',textAlign:'justify' }}>I am creating a Portfolio using Bootstrap and React. Every step has been a great learning experience.</p>
                <Link to="https://github.com/saimadhulenka/MyPortfolio" style={{textDecoration:'none'}}>
                  <BsGithub /> Github Link
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
            <div className="card" aria-hidden="true" style={{ width: '100%' }}>
              <img src={img6} className="card-img-top img-fluid" alt="Coming Soon..." />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-1"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <Link className="btn btn-primary disabled placeholder col-6" aria-disabled="true">Coming Soon...</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      <button onClick={top} className='topbtn'><FaChevronUp  style={{fontSize:'90%'}}/></button>
    </div>
  )
}
<Outlet />
export default Project