import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";
import { SlSettings } from "react-icons/sl";
import { FaPenFancy } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { BsCalendarCheckFill } from "react-icons/bs";
import { BsFillLightningChargeFill } from "react-icons/bs";

function About() {
  return (
<div> <br/>
  <div className="row m-3">
        <div className="col-xs-1-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title"><FaGraduationCap style={{fontSize:'130%'}} /> Academic Qualification :</h3>
              <br/>
              <p className="card-text" style={{fontSize:'120%'}}>
               <h5 style={{marginBottom:'1%'}}> <b>2020-2024</b> - B.Tech in Electronic Communication, Andhra University, Vishakhapatnam. </h5>
               <h5 style={{marginBottom:'1%'}}><b>2018-2020</b> - Board Of Intermediate. Vagdevi Junior College Kothavalasa.</h5>
                <h5 style={{marginBottom:'1%'}}><b>&nbsp;&nbsp;&nbsp;&nbsp;2018</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Secondary Education Z.P. High School,Kantakapalli.</h5>
              </p>
            </div>
          </div>
        </div>

        <div className="col-xs-1-12 mt-3">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title"><FaNewspaper style={{fontSize:'110%'}}/> Paper Publications :</h3>
              <br />
              <p className="card-text" style={{fontSize:'130%'}}>Paper publication on <b>“SATELLITE LINK DEIGN”</b> 9th aug 2023. This paper 
                highlights conducted through link budget analyses, optimizing transmit 
                power, antenna gains,and receiver sensitivity for reliable 
              </p>
            </div>
          </div>
        </div>

        <div className="col-xs-1-12 mt-3">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title"><SlSettings style={{fontSize:'120%'}}/> Tecnical Informations :</h3> <br />
              <ul>
                <li>
                  <p className="card-text"><h4 className="card-title">Mainor Project :</h4>
                    <h5 style={{marginBottom:'1%'}}> <b>Title</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Bluetooth Control Car</h5>
                    <h5 style={{marginBottom:'1%'}}> <b>S/W Used</b> &nbsp;&nbsp;&nbsp;:  Done by practical methods</h5>
                    <h5 style={{marginBottom:'1%'}}> <b>Description </b> :  The project aims to design a Bluetooth control Arduino car and 
                      write a program into the Arduino microprocessor.Arduino car contains an 
                      Arduino micro- controllor with basic mobility features.
                    </h5>
                  </p>
                </li>
  <br />
                <li>
                  <p className="card-text"><h4 className="card-title">Major Project :</h4>
                    <h5 style={{marginBottom:'1%'}}> <b>Title</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Multiband Microstrip Patch Antenna.</h5>
                    <h5 style={{marginBottom:'1%'}}> <b>S/W Used</b> &nbsp;&nbsp;&nbsp;:  High-Frequency Structure Simulator.</h5>
                    <h5 style={{marginBottom:'1%'}}> <b>Description </b> :  A multiband microstrip patch antenna is a type of antenna that 
                      operates on multiple frequency bands. It’s particularly useful for modern 
                      wireless communication systems that require support for various standards 
                      like 2G, 3G, 4G, 5G, WLAN, and others 
                    </h5>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

  </div>

  <div className="card m-4 p-4">
    <div className="row m-1 "> 

      <div className="col-4">
        <div className="card"> 
          <div className="card-body">
              <h3 className="card-title"><FaPenFancy/> Skills :</h3> <br />
              <p className="card-text">
                <ul style={{fontSize:'120%'}}>
                  <li><FaHtml5 style={{fontSize:'130%'}}/> HTML</li>
                  <li><FaCss3Alt style={{fontSize:'130%'}}/> CSS</li>
                  <li><FaJsSquare style={{fontSize:'130%'}}/> JavaScript</li>
                  <li><FaReact style={{fontSize:'130%'}}/>React</li>
                  <li><FaJava style={{fontSize:'130%'}}/> JAVA</li>
                  <li><GrMysql style={{fontSize:'130%'}}/> SQL</li>
                </ul>
              </p>
          </div>
        </div>
      </div>

      <div className="col-4">
        <div className="card"> 
            <div className="card-body">
              <h3 className="card-title"><BsCalendarCheckFill /> Hobbies :</h3><br />
              <p className="card-text" style={{fontSize:'125%'}}>
                <ul>
                  <li>Interested to learn newthings</li>
                  <li>Traveling a new places </li>
                  <li>Watching animes </li>
                  <li>Playing chess and volleyball</li>
                  <li>Listening music</li>
                  <li>Designing websites</li>
                </ul>
              </p>
            </div>
          </div>
      </div>

      <div className="col-4">
          <div className="card"> 
            <div className="card-body">
              <h3 className="card-title"><BsFillLightningChargeFill /> Strengths :</h3><br />
              <p className="card-text">
                <ul style={{fontSize:'145%'}}>
                  <li>Quick adaptability </li>
                  <li>Accepting my weakness and trying to improve </li>
                  <li>Team Player </li>
                  <li>Punctuality & Leadership Qualities</li>
                </ul>
              </p>
            </div>
          </div> 
      </div>

    </div>
  </div>
</div>
  )
}

export default About