
//import Spinwheel from "./SpinWheel/Spinwheel";
//import Todo from "./To-Do/Todo";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./BBC/Home";
import Football from "./BBC/Football";
import Cricket from "./BBC/Cricket";
import { Link } from "react-router-dom";
import Header from "./BBC/Header";
import Footer from "./BBC/Footer";
import './App.css';

const App = () => {

    return (
        <div>
    
            <Router>
              <Header />
                <nav className="container">
                <h1 className="title">SPORT</h1>
                <hr/>
                    <ul className="nav-link">
                        <li><Link to="/" className="line">Home</Link></li><div class="vertical-line"></div>
                        <li><Link to="/Football" className="line">Football</Link></li><div class="vertical-line"></div>
                        <li><Link to="/Cricket" className="line">Cricket</Link></li><div class="vertical-line"></div>
                        <li><Link to="/Formula 1" className="line">Formula 1</Link></li><div class="vertical-line"></div>
                        <li><Link to="/Rugby U" className="line">Rugby U</Link></li><div class="vertical-line"></div>
                        <li><Link to="/Tennis" className="line">Tennis</Link></li><div class="vertical-line"></div>
                        <li><Link to="/Golf" className="line">Golf</Link></li><div class="vertical-line"></div>
                        <li><Link to="/Athletics" className="line">Athletics</Link></li><div class="vertical-line"></div>
                        <li><Link to="/Cycling" className="line">Cycling</Link></li><div class="vertical-line"></div>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Football' element={<Football />} />
                    <Route path='/Cricket' element={<Cricket />} />

                </Routes>
                
                <Footer />
            </Router>
        
            
        </div>
    )
};

export default App;