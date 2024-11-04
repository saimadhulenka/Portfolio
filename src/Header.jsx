import React from 'react';
import { BsColumns } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { TfiPanel } from "react-icons/tfi";
import { MdSimCardDownload } from "react-icons/md";
import { AiTwotoneInfoCircle } from "react-icons/ai";
import { PiCertificateLight } from "react-icons/pi";
import { VscFeedback } from "react-icons/vsc";
import { Link,Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
        <section className='header'>
            <span id='logo'><BsColumns style={{fontSize:'40px',marginBottom:'1%',marginLeft:'2%'}}/> PortFolio</span>
                
            <span className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <IoMenu style={{fontSize:'200%'}}/>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{backgroundColor:'#f5efe6'}}>
                    <li><Link className="dropdown-item" to="/"><IoHomeOutline style={{fontSize:'26px',marginBottom:'4%'}}/> Home</Link></li>
                    <li><Link className="dropdown-item" to="/project"><TfiPanel style={{fontSize:'23px',marginBottom:'4%'}}/> Projects</Link></li>
                    <li><Link className="dropdown-item" to="/certification"><PiCertificateLight  style={{fontSize:'28px',marginBottom:'4%'}}/> Certifications</Link></li>
                    <li><Link className="dropdown-item" to="/blog"><AiTwotoneInfoCircle style={{fontSize:'25px',marginBottom:'4%'}}/> Blog</Link></li>
                    <li><Link className="dropdown-item" to="/mail"><VscFeedback  style={{fontSize:'25px',marginBottom:'4%'}}/> Feedback</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href='SaimadhuResume.pdf' download='Resume'><MdSimCardDownload style={{fontSize:'25px',marginBottom:'4%'}}/><strong>&nbsp; Resume</strong></a></li>
                </ul>
            </span>   
        </section>
    </div>
  )
}
<Outlet/>
export default Header