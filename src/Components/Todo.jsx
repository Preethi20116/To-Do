import React from "react";
import { useState, useEffect } from "react";

function Todo(){
    const [Task,setTask] = useState(() => {
    const savedTask = JSON.parse(localStorage.getItem('Task'));
    return savedTask;
});

    const [Input,setInput] = useState('');

    const addTask = () => {
        console.log('{Input}');
    }
    return(
        <div>
            <h1>To-Do List</h1>
            <form onSubmit={addTask}>
            <input type="text" value={Input} placeholder="Enter the task"></input>
            <button type="submit">Add</button>
            </form>
        </div>
    );
}
export default Todo;