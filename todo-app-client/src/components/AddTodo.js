/*
    Provides a form to add new to-do items.
*/


import React, { useState} from "react";

const AddTodo= ({ addTodo }) => {
    const [title, setTitle] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (title) {
            addTodo(title);
            setTitle('');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Add a new todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo