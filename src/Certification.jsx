import React from 'react';
import img5 from './assets/img5.png';
import img7 from './assets/img7.png';
import img8 from './assets/img8.png';
import file1 from './assets/file1.jpg';
import file2 from './assets/file2.jpg';
import { FaChevronUp } from "react-icons/fa6";
import { Outlet } from 'react-router-dom';

function Certification() {

  const top = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className='card m-1 p-3'>
      <h3>Certifications:</h3>

      <div className="row mt-3">
        <div className="col-sm-12 col-md-4 mb-3">
          <div className="card">
            <img src={img8} className="card-img-top img-fluid" alt="Java Fullstack Certificate" />
            <div className="card-body">
              <h3 className="card-title">Java Fullstack</h3>
              <p className="card-text" style={{ textAlign: 'justify' }}>
                "During my Java Fullstack internship, I gained hands-on experience working with both front-end and back-end technologies. I worked extensively with Java, Spring Boot, and SQL on the server side, and enhanced my front-end skills using JavaScript, HTML, CSS, and React. I was involved in developing and integrating scalable, secure, and efficient web applications, collaborating with cross-functional teams to optimize performance and ensure a seamless user experience. This experience deepened my understanding of full-stack development, from database management and API integration to responsive front-end design, and has prepared me to take on complex projects in the future."
              </p>
              <a href="https://thumbs.dreamstime.com/b/certificate-icon-success-collection-simple-line-element-symbol-templates-web-design-infographics-173744027.jpg" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>View Certificate</a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 mb-3">
          <div className="card">
            <img src={img7} className="card-img-top img-fluid" alt="Embedded Systems Certificate" />
            <div className="card-body">
              <h3 className="card-title">Embedded Systems</h3>
              <p className="card-text" style={{ textAlign: 'justify' }}>
                During my internship, I familiarized myself with the Arduino Uno platform, learning about its components, functionalities, and programming language. I worked on various projects, starting with basic LED blinking and gradually advancing to more complex tasks like interfacing sensors and actuators. I gained hands-on experience in coding, debugging, and testing embedded systems. Additionally, I collaborated with mentors and team members, exchanging ideas and troubleshooting challenges together. Overall, my internship provided me with a solid foundation in embedded systems development using the Arduino Uno.
              </p>
              <a href={file1} target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>View Certificate</a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 mb-3">
          <div className="card">
            <img src={img5} className="card-img-top img-fluid" alt="Telecommunication Certificate" />
            <div className="card-body">
              <h3 className="card-title">Telecommunication</h3>
              <p className="card-text" style={{ textAlign: 'justify' }}>
                During my internship at Bharat Sanchar Nigam Limited (BSNL), I was involved in various telecommunications projects. My tasks included analyzing network infrastructure, conducting performance evaluations, and troubleshooting issues in communication systems. I collaborated with engineers to optimize network performance and improve service reliability. Additionally, I participated in research and development initiatives, exploring emerging technologies in the telecommunications industry. Throughout the internship, I gained valuable insights into telecom operations, network management, and the challenges faced by service providers like BSNL.
              </p>
              <a href={file2} target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>View Certificate</a>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll to Top Button */}
      <button onClick={top} className="topbtn">
        <FaChevronUp style={{ fontSize: '90%' }} />
      </button>
    </div>
  );
}
<Outlet />
export default Certification;