import React from "react";

function Child(props){
    return(
        <>
        <div> addition = {props.a + props.b}</div>
        <div> subtraction = {props.a - props.b}</div>
        <div> multiplication = {props.a * props.b}</div>
        <div> division = {props.a / props.b}</div>
        <div> modulus = {props.a % props.b}</div>
        </>
    );
}
export default Child;