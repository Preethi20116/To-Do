import React, { useState, useEffect } from "react";
import "./TodoApp.css";
import Todolist from "./Todolist";
import TodoInput from "./TodoInput";

function Todo() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    return savedTodos;
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
      <Todolist todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default Todo;
