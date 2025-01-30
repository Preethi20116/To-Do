import React from "react";

function Header(){
    return(
        <div className="header">
        <h1>E-commerce Website</h1>
        <nav className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
            </ul>
        </nav>
        <button className="login-button">Login</button>
        </div>
    );
}
export default Header;