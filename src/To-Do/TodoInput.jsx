import React from "react";

const TodoInput = ({ input, setInput, addTodo }) => {
  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
