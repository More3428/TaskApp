/*
    Displays individual to-do items with options to update or delete them.
*/


import React from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => updateTodo(todo._id, e.target.checked)}
      />
      <span> {todo.title} </span>
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </div>
  );
};

export default TodoItem;