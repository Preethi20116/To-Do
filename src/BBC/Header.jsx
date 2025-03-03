import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <>
        <div className="header">
          <Link to="/">
          <img src="images/bbclogo.svg" alt="BBC Logo" className="logo" />
          </Link>
          <span className="signincontainer">
                <img src="images/signinIcon.png" alt="Sign In" className="signin-icon" /> 
                <span className="signin">
                    <Link to="/signin" className="line">Sign In</Link>
                    </span>
                    </span>
                    <div class="vertical-line"></div>
                    <nav className="nav-bar">
                <ul className="nav-links">
                    <li><Link to="/" className="line">Home</Link></li>
                    <li><Link to="/news" className="line">News</Link></li>
                    <li><Link to="/sport" className="line">Sport</Link></li>
                    <li><Link to="/business" className="line">Business</Link></li>
                    <li><Link to="/innovation" className="line">Innovation</Link></li>
                    <li><Link to="/culture" className="line">Culture</Link></li>
                    <li><Link to="/travel" className="line">Travel</Link></li>
                </ul>
                </nav>
                <img src="images/dot.png" alt="icon" className="dot" />
                <div class="input-container">
                    <img src="images/searchicon.png" alt="icon" className="icon" />
                    <input type="text" placeholder="Search BBC" className="search-container" />
                    </div>
            </div>
       

</>
    );
}
export default Header;