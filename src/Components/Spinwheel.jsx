import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Spin.css";
function Spinwheel() {

    const prizes = ["Jackpot","&#8377 20","&#8377 50","&#8377 100","&#8377 500","&#8377 0","Try again","&#8377 1000"];
    const [rotation, setRotation] = useState(0);
    const wheelRef = useRef(null);

    const spinwheel = () => {
        const fixedRotation = rotation + 1260; 
        setRotation(fixedRotation);
    };

    useEffect(() => {
        
        if (wheelRef.current){
            wheelRef.current.style.transform = 'rotate(${rotation}deg)';
        }

        const segmentAngle = 360 / prizes.length;
        const normalizedRotation = rotation % 360;
        const winningIndex = Math.floor(normalizedRotation / segmentAngle);
        const winningPrize = prizes[winningIndex];

        const timer = setTimeout(() => {
            alert(`You won ${winningPrize}!`);
        }, 4000);

        return () => clearTimeout(timer);
    }, [rotation]);
    

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
            <button className="spinbutton" onClick={spinwheel}>Spin</button>
          
        </div>
    );
}
export default Spinwheel;