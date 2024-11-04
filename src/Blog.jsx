import React from 'react'
import { FaChevronUp } from "react-icons/fa6";


function Blog() {
  const top = () =>{
    window.scrollTo(0,0);
  }
  return (
    <div className="container">
      <header className="header2">
        <h2>My Journey into Full-Stack Development</h2>
      </header>
      <br />
      <main className="main-content">
        
      <div className="card">
        <div className="card-header">
        <h3>Introduction</h3>
        </div>
        <div className="card-body">
            <p style={{textAlign:'justify'}}>
              Every journey begins with a single step, and for me, that step was fueled by a curiosity about how websites function. As a child, I would often find myself mesmerized by the internet, spending hours exploring different sites, wondering how they were built and what made them work. Little did I know that this curiosity would lead me down the path of becoming a full-stack developer.
            </p>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header">
        <h3>Discovering My Passion</h3>
        </div>
        <div className="card-body">
        <p style={{textAlign:'justify'}}>
        My formal introduction to web development came during my college years while pursuing a degree in Electronic Communication Engineering. Although my field of study wasn't directly related to web development, I found myself fascinated by the world of programming. I began exploring HTML and CSS, and creating my first webpage was exhilarating! The sense of accomplishment I felt as I added styles and animations, transforming a blank canvas into something visually appealing, was unforgettable.
          <br />
          <br />
          However, I quickly realized that web development was more than just making things look good. My curiosity led me to delve into JavaScript to understand the underlying logic powering web applications. This curiosity drove me even further into front-end frameworks like React. The ability to create dynamic and interactive user interfaces was a revelation, solidifying my passion for front-end development.
          </p>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header">
        <h3>Expanding My Skills</h3>
        </div>
        <div className="card-body">
        <p style={{textAlign:'justify'}}>
            As I became more comfortable with front-end development, I knew I had to broaden my skill set to include back-end technologies. This led me to learn Node.js and Express, where I discovered how to create APIs and manage databases using MongoDB. The satisfaction of building a full-stack application, where I could see data flow from the server to the client, was immensely rewarding.
          <br />  
            Throughout this journey, I faced many challenges. There were moments of frustration when things didn’t work as expected or when I encountered bugs that seemed impossible to fix. However, each obstacle taught me the importance of patience and perseverance. I learned to embrace debugging as an essential part of the development process rather than a setback.
          </p>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header">
        <h3>Real-World Experience</h3>
        </div>
        <div className="card-body">
        <p style={{textAlign:'justify'}}>
          To solidify my skills, I sought internships and freelance opportunities. In that intenship helped me understand the importance of collaboration, version control, and working within a team. I learned how to communicate my ideas effectively and integrate feedback into my work. These experiences not only enhanced my technical skills but also helped me grow as a professional.
          </p>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header">
        <h3>Continuous Learning</h3>
        </div>
        <div className="card-body">
          <p style={{textAlign:'justify'}}>
            Today, as a full-stack developer, I am excited about the endless possibilities technology offers. I am passionate about creating solutions that enhance user experiences and solve real-world problems. My journey is far from over, and I look forward to what lies ahead in this dynamic field.
          </p>
        </div>
      </div>
        
        
      </main>
      <footer className="footer mt-3">
        <p>© 2024 My Portfolio. All rights reserved.</p>
      </footer>
      <button onClick={top} className='topbtn'><FaChevronUp  style={{fontSize:'90%'}}/></button>
    </div>
  )
}

export default Blog