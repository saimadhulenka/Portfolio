import React from 'react'; 
import img1 from './assets/img1.jpg';
import { FaLocationDot } from "react-icons/fa6";
import { Link, Outlet } from 'react-router-dom';
import { FaChevronUp } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";


function Home() {
  // Scroll to top functionality
  const top = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <div className="container">
        {/* Profile Card */}
        <div className="card mt-3 p-3">
          <div className="row">
            <div className="col-md-4 col-12">
              <img 
                src={img1} 
                alt="Profile" 
                className="img-fluid profile" 
                style={{ width: '390px', height:'400px'}} 
              />
            </div>

            <div className="col-md-8 col-12 mt-2 text-md-start text-center p-3">
              <h4 className="card-title" style={{ fontSize: '150%',fontFamily:'Californian FB' }}>
                Hi I'm <br /> Saimadhu Lenka
                <br />
                <strong style={{fontFamily:'Californian FB'}}>Full Stack Developer</strong>
              </h4>
              <hr />
              <p style={{ textAlign: 'justify' }}>
                My portfolio showcases my skills and projects as a web developer, featuring a variety of work that highlights 
                my expertise in HTML, CSS, JavaScript, React, and user experience design. It includes detailed case studies, 
                code samples, and design concepts that demonstrate my ability to create visually appealing and functional web pages.
                My portfolio also reflects my continuous learning and adaptability in the ever-evolving field of web development.
              </p>
              <Link className="btn btn-dark" to="/about" role="button" style={{ fontSize: '120%', width: '180px' }}>
                About Me
              </Link>
            </div>      
          </div>
        </div>

        <div className='card mt-3 p-3'>

          <h3 style={{marginLeft:'1%'}}>Highlights:</h3>

            <div className="card mt-3">
              <div className="card-header"><h5>Collaboration and Teamwork:</h5></div>
              <div className="card-body">
                <p className="card-text" style={{textAlign:'justify'}}>
                  "At my previous internships, I worked closely with both frontend and backend teams, ensuring seamless integration between the two. In one instance, I took the lead in coordinating the API design, making sure the backend endpoints aligned with the frontend requirements. I’m also familiar with tools like Jira for tracking tasks and Git for version control, where I regularly participated in code reviews and managed feature branches."
                </p>
              </div>
            </div>

            <div className="card mt-3">
              <div className="card-header"><h5>Adaptability and Fit for Different Company Cultures:</h5></div>
              <div className="card-body">
                <p className="card-text" style={{textAlign:'justify'}}>
                "I believe I can adapt well to any company environment, whether it’s a fast-paced startup where I need to handle a variety of tasks, or a larger organization with more specialized roles. I’m a quick learner and I thrive in environments where continuous improvement is encouraged. In past experiences, I’ve taken feedback from both technical and non-technical stakeholders to iterate on designs and deliver better products."
                </p>
              </div>
            </div> 

            <div className="card mt-3">
              <div className="card-header"><h5>Why I’m Ready to Join a Company:</h5></div>
              <div className="card-body">
                <p className="card-text" style={{textAlign:'justify'}}>
                "I’m excited to bring my full-stack development skills to a professional setting where I can contribute to impactful projects and continue to grow. I’m confident that I can tackle both frontend and backend challenges, and I’m ready to collaborate with a team to deliver high-quality software solutions."</p>
              </div>
            </div>
 
        </div>
        

        {/* Contact Section */}
        <div className="card mt-3 p-3">
          <div className="row">
            <div className="col-md-4 col-12">
              <h6 style={{ textAlign: 'center',backgroundColor:'#dcdcdc', borderRadius: '5px', fontSize: '20px', padding: '2%' }}>
                Contact Us
              </h6>
              <ul style={{ marginTop: '3%', fontSize: '100%', listStyleType: 'none', textAlign: 'center' }}>
                <li><Link to="/mail" style={{ textDecoration: 'none' }}><GoMail style={{fontSize:'19px',color:'red'}}/> Mail</Link></li>
                <li><a href="https://www.linkedin.com/in/saimadhulenka" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><CiLinkedin style={{fontSize:'22px'}}/> LinkedIn</a></li>
                <li><a href="https://github.com/saimadhulenka" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><FiGithub style={{fontSize:'19px' ,color:'black'}}/> GitHub</a></li>
              </ul>
            </div>

            <div className="col-md-4 col-12">
              <h6 style={{ textAlign: 'center',backgroundColor:'#dcdcdc', borderRadius: '5px', fontSize: '20px', padding: '2%' }}>
                Social Media
              </h6>
              <ul style={{ marginTop: '3%', fontSize: '100%', listStyleType: 'none', textAlign: 'center' }}>
                <li><a href="https://www.facebook.com/madhu.lenka.1460" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><CiFacebook style={{fontSize:'22px',color:'darkblue'}}/> Facebook</a></li>
                <li><a href="https://x.com/SaiMadhu_" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><FaXTwitter style={{fontSize:'18px',color:'black'}}/> Twitter</a></li>
                <li><a href="https://www.instagram.com/m_a_d_h_u_10x" target="_blank" rel="noreferrer" style={{ textDecoration: 'none'}}><CiInstagram style={{fontSize:'22px',color:'#d22262'}}/> Instagram</a></li>
              </ul>
            </div>

            <div className="col-md-4 col-12">
              <h6 style={{ textAlign: 'center',backgroundColor:'#dcdcdc', borderRadius: '5px', fontSize: '20px', padding: '2%' }}>
                Address
              </h6>
              <p style={{ fontSize: '100%', textAlign: 'center',color:'black' }}>
                <FaLocationDot style={{color:'red'}}/> Kothavalasa(M),
                Vizinagaram(D),<br />
                Andhra Pradesh
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button onClick={top} className="topbtn">
        <FaChevronUp style={{ fontSize: '90%' }} />
      </button>

      <Outlet />
    </div>
  );
}

export default Home;