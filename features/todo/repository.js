const Todo = require('./todo.model');

const getList = async () => {
    return await Todo.findAll();
}

const findTodoById = async (id) => {
    return await Todo.findOne({id: id});
}

const addTodo = async (data) => {
    return Todo.create(data)
};

const repository = {
    getList,
    addTodo,
    findTodoById,
};

module.exports = repository;
