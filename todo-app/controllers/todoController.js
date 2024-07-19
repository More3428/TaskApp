/* Notes
Handles the logic of each route

*/
const mongoose = require('mongoose');
const Todo = require('../models/todo');

const getTodos = async (req, res) => {
    try{
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).send('Server Errors');
    }
};

const createTodo =  async (req, res) => {
    try {
        const newTodo = new Todo({
            title: req.body.title,
        });
        const todo = await newTodo.save();
        res.json(todo); 
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

const updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if(!todo) return res.status(400).json({ msg: 'Todo not found' });

        todo.completed = req.body.completed;
        await todo.save();

        res.json(todo);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

const deleteTodo = async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ msg: 'Invalid ID format' });
      }
  
      const todo = await Todo.findById(req.params.id);
      if (!todo) {
        console.log(`Todo not found with id: ${req.params.id}`);
        return res.status(404).json({ msg: 'Todo not found' });
      }
  
      await Todo.findByIdAndDelete(req.params.id);
      console.log(`Todo with id: ${req.params.id} removed`);
  
      res.json({ msg: 'Todo removed' });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
}; 