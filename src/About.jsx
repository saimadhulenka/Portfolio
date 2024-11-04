import React from 'react';
import { FaGraduationCap, FaNewspaper, FaHtml5, FaCss3Alt, FaJsSquare,FaChevronUp, FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SlSettings } from "react-icons/sl";
import { GrMysql } from "react-icons/gr";
import { BsCalendarCheckFill, BsFillLightningChargeFill } from "react-icons/bs";
import { IoPersonAdd } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { Outlet } from 'react-router-dom';


function About() {
  const top = () =>{
    window.scrollTo(0,0);
  }
  return (
    <div>
      <br />
      <div className="row m-2">

      <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <IoPersonAdd  style={{ fontSize: '100%' }} /> <strong>About Me:</strong>
              </h4>
              <br />
              <div className="card-text">
                <p style={{textAlign:'justify'}}>Hi, I'm Saimadhu Lenka, graduate with a degree in Electronics and Communication Engineering from Andhra University, and I am passionate about transitioning my technical skills into the field of full-stack development. My background in ECE has equipped me with a solid foundation in problem-solving and logical thinking, which I am eager to apply to software development. <br /><br />
                  Throughout my academic career, I have pursued my interest in software development by learning various programming languages and technologies. I have completed several projects that highlight my proficiency in both frontend and backend development. I am proficient in HTML, CSS, JavaScript and have hands-on experience with frameworks such as React for the frontend and Node.js for the backend. Additionally, I have a good understanding of database management with MySQL and MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 mt-3">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <FaGraduationCap style={{ fontSize: '120%' }} /> <strong>Academic Qualification:</strong>
              </h4>
              <br />
              <div className="card-text" style={{ fontSize: '110%' }}>
                <p><b>(2020-2024)</b> - B.Tech in Electronic Communication, Andhra University, Vishakhapatnam.</p>
                <p><b>(2018-2020)</b> - Board Of Intermediate, Vagdevi Junior College Kothavalasa.</p>
                <p><b>(2018)</b> - Secondary Education, Z.P. High School, Kantakapalli.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 mt-3">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <FaNewspaper style={{ fontSize: '100%' }} /> <strong>Paper Publications:</strong>
              </h4>
              <br />
              <p style={{textAlign:'justify'}}>
                Paper publication on <b>“SATELLITE LINK DESIGN”</b> (9th Aug 2023). This paper highlights conducted link budget analyses, optimizing transmit power, antenna gains, and receiver sensitivity for reliable communication.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 mt-3">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <SlSettings style={{ fontSize: '100%'}} /> <strong>Technical Information:</strong>
              </h4>
              <br />
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li>
                  <h5 className="card-title"><b>Minor Project:</b></h5>
                  <br />
                  <h6><b>Title:</b> Bluetooth Control Car</h6>
                  <h6><b>S/W Used:</b> Done by practical methods</h6>
                  <p style={{textAlign:'justify'}}><b>Description:</b> The project aims to design a Bluetooth-controlled Arduino car and write a program into the Arduino microcontroller. The car contains basic mobility features.</p>
                </li>
                <br />
                <li>
                  <h5 className="card-title"><b>Major Project:</b></h5>
                  <br />
                  <h6><b>Title:</b> Multiband Microstrip Patch Antenna</h6>
                  <h6><b>S/W Used:</b> High-Frequency Structure Simulator</h6>
                  <p style={{textAlign:'justify'}}><b>Description:</b> A multiband microstrip patch antenna operates on multiple frequency bands, useful for wireless systems like 2G, 3G, 4G, 5G, and WLAN.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

        <div className="row m-3">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                <GoGoal style={{ fontSize: '90%'}}  /> <strong>Skills:</strong>
                </h4>
                <ul style={{ fontSize: '100%',marginTop:'3%' }}>
                  <li><FaHtml5 style={{ fontSize: '130%' }} /> HTML</li>
                  <li><FaCss3Alt style={{ fontSize: '130%' }} /> CSS</li>
                  <li><FaJsSquare style={{ fontSize: '130%' }} /> JavaScript</li>
                  <li><FaReact style={{ fontSize: '130%' }} /> React</li>
                  <li><FaJava style={{ fontSize: '130%' }} /> JAVA</li>
                  <li><GrMysql style={{ fontSize: '130%' }} /> SQL</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  <BsCalendarCheckFill style={{ fontSize: '90%'}}  /> <strong>Hobbies:</strong>
                </h4>
                <ul style={{ fontSize: '110%',marginTop:'3%' }}>
                  <li>Learning new things</li>
                  <li>Traveling to new places</li>
                  <li>Watching anime</li>
                  <li>Playing chess and volleyball</li>
                  <li>Listening to music</li>
                  <li>Designing websites</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  <BsFillLightningChargeFill /> <strong>Strengths:</strong>
                </h4>
                <ul style={{ fontSize: '110%', marginTop:'3%' }}>
                  <li>Quick adaptability</li>
                  <li>Self-improvement</li>
                  <li>Team player</li>
                  <li>Punctuality and leadership qualities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button onClick={top} className='topbtn'><FaChevronUp  style={{fontSize:'90%'}}/></button>
    </div>
  );
}
<Outlet/>
export default About;