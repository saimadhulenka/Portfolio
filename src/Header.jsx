import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BsColumns, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <Link
          className="navbar-brand"
          to="#"
          style={{ fontFamily: "Baskerville Old Face", fontSize: "28px" }}
        >
          <BsColumns style={{ fontSize: "40px", marginLeft: "10px" }} /> Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" style={{ fontFamily: "Baskerville Old Face", fontSize: "150%" }}>
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/project">Projects</Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="https://www.linkedin.com/in/saimadhulenka"
                aria-label="LinkedIn"
              >
                |<BsLinkedin style={{ fontSize: "20px", marginLeft: "10px" }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="https://www.facebook.com/madhu.lenka.1460"
                aria-label="Facebook"
              >
                <SiFacebook style={{ fontSize: "20px", marginLeft: "10px" }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="https://x.com/SaiMadhu_"
                aria-label="Twitter"
              >
                <BsTwitter style={{ fontSize: "20px", marginLeft: "10px" }} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

<Outlet />
export default Header;