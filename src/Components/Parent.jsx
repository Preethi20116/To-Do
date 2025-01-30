import React from "react";
import Child from "./Child";
import { useState, useEffect } from "react";

function Parent(){
    const num1 = 4;
    const num2 = 2;
    const [count,setCount] = useState(0);
    return(
        <>
        <div> arithematic operations: </div>
        <div> num1 = 4, num2 = 2; </div>
        <div>counting numbers {count} </div>
        <button onClick ={() => setCount(count+1)}> increment</button>
        <button onClick ={() => setCount(count-1)}> decrement</button>
        <hr/>
        <div><Child a = {num1} b = {num2}></Child></div>
        </>
    );
}
export default Parent;