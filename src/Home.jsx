import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import img1 from './assets/img1.jpg';
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import img7 from './assets/img7.png';
import img9 from './assets/img9.png';



function Home() {
  return (
    <div>
      <br/>
      <div className="card m-3 mt-0">
        <div className="row">
          
          <div className="col-4">
            <div className="card-body">
              <div className="card" style={{width: '95%', float:'right'}}>
                <img src={img1} className="card-img-top" alt="profile"/>
              </div>
            </div>
          </div>
          
          <div className="col-8">
            <div className="card m-3"style={{width: '95%',float:'left'}}>
              <div className="card-body">
                <h3 className="card-title m-4"style={{fontFamily:'Footlight MT Light'}}><br/>Hello<br/>I Am Saimadhu</h3>
                <h1 className="card-title m-4"style={{fontFamily:'Cooper Black', fontSize:'300%'}}>I'M A WEB <br/>DEVELOPER</h1>
                <p className="card-text m-4"style={{fontFamily:'Times New Romen',fontSize:'120%'}}>My portfolio showcases my skills and projects as a web developer, featuring a variety of work that highlights my expertise in HTML, CSS, JavaScript, React, and user experience design. It includes detailed case studies, code samples, and design concepts that demonstrate my ability to create visually appealing and functional web pages. My portfolio also reflects my continuous learning and adaptability in the ever-evolving field of web development.</p>
                <Link className="btn btn-dark" to="/about" role="button"style={{fontSize:'110%',fontFamily:'cursive',marginLeft:'3%'}}>About Me</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className='card m-3 p-4'>
      <h3 style={{fontFamily:'Calisto MT',marginLeft:'3%'}}>Skills Required for a Web Developer</h3>
      <ul style={{marginLeft:'4%',marginTop:'1%'}}>
        <li>Technical Skills: Proficiency in HTML, CSS, JavaScript, and frameworks like React, with an understanding of backend development concepts</li>
        <li>Problem-Solving: Ability to debug code, optimize performance, and develop solutions that improve both functionality and user experience.</li>
        <li>Attention to Detail: Ensuring every line of code is efficient and that the layout is pixel-perfect across different devices and browsers.</li>
        <li>Creativity: Innovatively crafting intuitive and visually appealing user interfaces.</li>
        <li>Collaboration: Working effectively with cross-functional teams and clients to ensure the best results.</li>
        <li>Continuous Learning: Staying updated with the latest web technologies and best practices.</li>
      </ul>
<br />
      <h3 style={{fontFamily:'Calisto MT',marginLeft:'3%'}}>Tools Used by Web Developers</h3>
      <ul style={{marginLeft:'4%',marginTop:'1%'}}>
        <li>Development Software: Visual Studio Code, Sublime Text, WebStorm for writing and managing code.</li>
        <li>Front-end Development Tools: HTML, CSS, JavaScript, and frameworks like Bootstrap for basic coding tasks.</li>
        <li>Back-End Development Tools: Node.js, Express, and databases like MongoDB, MySQL for server-side development.</li>
        <li>Version Control: Git, GitHub, GitLab for tracking code changes and collaboration.</li>
        <li>Collaboration Tools: Slack, Trello, Jira, and Asana for project management and communication with teams.</li>
        </ul>
<br />
      <h3 style={{fontFamily:'Calisto MT',marginLeft:'3%'}}>Importance of Web Developer</h3>
      <h6 style={{fontFamily:'Calisto MT',marginLeft:'3%'}}>Web developers play a crucial role in bringing a brand's online presence to life. By building functional, responsive, and user-friendly websites, they enable businesses to reach their audience effectively. A well-developed website not only enhances user experience but also drives business goals, such as increasing sales, generating leads, or providing information. The technical expertise of web developers ensures that websites perform smoothly across devices, making them essential to the success of digital products and services.</h6>
    </div>

      <div className="card m-3 p-5">
        <div className="card-body">
          
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img7} className="d-block w-100" style={{height:'70vh'}} alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={img9} className="d-block w-100" style={{height:'70vh'}} alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>

        </div>
      </div>
        
      

          
    <div className='card m-3 p-3'>
      <div className="row m-1">

        <div className='col-4'>
          <div className="card">
            <div className="card-header bg-secondary"style={{color:'white'}}>
              Contact
            </div>
            <div className="card-body">
              <h6 className="card-text"style={{fontSize:'120%'}}><SiGmail /> - saimadhulenka@gmail.com</h6>
              <h6 className="card-text" style={{fontSize:'120%'}}><BsFillTelephoneFill /> - +91 1234567891</h6>
            </div>
          </div>
        </div>

        <div className='col-4'>
          <div className="card">
            <div className="card-header bg-secondary"style={{color:'white'}}>
              Address
            </div>
            <div className="card-body">
              <h6 className="card-text"style={{fontSize:'120%'}}><SlLocationPin /> - Door No:27-28,Ardhanapalem</h6>
              <h6 className="card-text" style={{fontSize:'120%'}}> - - - Kothavalasa,Vizinagaram</h6>
            </div>
          </div>
        </div>

        <div className='col-4'>
          <div className="card">
            <div className="card-header bg-secondary"style={{color:'white'}}>
              Details
            </div>
            <div className="card-body">
              <h6 className="card-text"style={{fontSize:'120%'}}>Lorem ipsum dolor consectetur,adipisicing elit. soluta nemo perferendis?</h6>
            </div>
          </div>
        </div>
        
      </div>
    </div>
      

    </div>
  )
}
<Outlet/>
export default Home