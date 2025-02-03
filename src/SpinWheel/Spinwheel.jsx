import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Spin.css";

const Spinwheel = () => {

    const [spinning, setSpinning] = useState(false);
    const [winning, setWinning] = useState('');
    const wheelRef = useRef(null);

    const sectors = ["Jackpot", "1000", "Tryagain", "0", "500", "100", "50", "20"];

    const sectordegree = 360 / sectors.length;

    useEffect(() => {
        if (spinning) {
            const spinDuration = 5000;
            const spinDegree = Math.random() * 360 + 720;
            
            
            wheelRef.current.style.transition = 'none';
            wheelRef.current.style.transform = 'rotate(0deg)';


            setTimeout(() => {
            wheelRef.current.style.transition = `transform ${spinDuration}ms ease-out`;
            wheelRef.current.style.transform = `rotate(${spinDegree}deg)`;
        },0);

            setTimeout(() => {
                const finalAngle = spinDegree % 360;
                const prizeText = Math.floor(finalAngle / sectordegree);
                setSpinning(false);
                setWinning (`You Won ${sectors[prizeText]}!`);
                alert (`You Won ${sectors[prizeText]}!`);
            },spinDuration);
        }
    }, [spinning,sectors]);

    const spinClick = () => {
        setSpinning(true);
        setWinning('');
    };
 
    return(
        <div>
            <h1 className="heading"> Spin Wheel Game </h1>
            <div className="circle" ref = {wheelRef}>
                <div className="text partition-1">Jackpot</div>
                <div className="text partition-2">&#8377; 20</div>
                <div className="text partition-3">&#8377; 50</div>
                <div className="text partition-4">&#8377; 100</div>
                <div className="text partition-5">&#8377; 500</div>
                <div className="text partition-6">&#8377; 0</div>
                <div className="text partition-7">Try again</div>
                <div className="text partition-8">&#8377; 1000</div>
            </div>
            <div className="arrow"></div>
            <button className="spinbutton" onClick={spinClick} >Spin</button>
           
        </div>
    );
}
export default Spinwheel;