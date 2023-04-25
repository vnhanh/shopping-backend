const Todo = require('./todo.model');

const getList = async () => {
    return await Todo.find();
}

const findTodoById = async (id) => {
    return await Todo.findOne({id: id});
}

const addTodo = async (data) => {
    return Todo.create(data)
};

const deleteTodos = async (ids) =>  new Promise(async (resolve, reject) =>  {
    try {
        const deletedIds = []
    
        for (var i = 0; i < ids.length; i++) {
            const value = ids[i]
            const result = await Todo.deleteOne({ id: value })
            console.log('just delete item at index ', i)
            if (result.deletedCount === 1) {
                console.log('Alan - delete item - add id of deleted item')
                deletedIds.push(value)
            }
        }
        console.log('delete complete - deletedIds ', deletedIds)

        resolve(deletedIds)

        // convert object to array
        // const idsArray = Object.values(ids)
        // const query = Todo.find()
        // query.where('id').equals(["1"])
        // const findResult = await query.exec()
        // console.log('findResult ', findResult)
    
        // const result = await Todo.deleteMany().where('id').equals(["1", "2"]).exec();
        // console.log('result of deleteMany ', result)
    } catch (e) {
        console.log('repository.todo - deleteTodos - caught exception ', e)
        reject()
    }
})

const repository = {
    getList,
    addTodo,
    findTodoById,
    deleteTodos
};

module.exports = repository;
