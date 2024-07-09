const Todo = require('../models/todo');

const getTodos = async (req, res) => {
    try{
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).send('Server Error');
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
        const todo = await Todo.findById(req.params.id);
        if(!todo) return res.status(404).json({ msg: 'Todo not found'});

        await todo.remove();
    } catch(err) {
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
}; 