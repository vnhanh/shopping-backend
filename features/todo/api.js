const repo = require('./repository');

let index = 0

const randomId = () => {
  index++;

  return index.toString();
}

const todoAPI = (app) => {
    app.get('/todos', async (req, res) => {
        try {  
            const todoInDb = await repo.getList();
            console.log('Alan - todoInDb ', JSON.stringify(todoInDb));
    
            res.status(200).send(todoInDb);
        } catch (e) {
            console.log('the API get list of todos - catch an exception ', e)
            res.status(500).send({
                message: `exception ${e}`
            })
        }
    })

    app.post('/todos/create', async (req, res) => {
        try {
            const {data} = req.body;
            const result = await repo.addTodo(data);
    
            console.log('Alan - create TODO - result ', JSON.stringify(result));
    
            res.status(200).send({
                success: true
            });
        } catch (e) {
            console.log('caught exception API create ToDo', e)
            res.status(500).send({
                message: 'Internal Error'
            })
        }
    });

    app.delete('/todos', async (req,res) => {
        try {
            const { ids } = req.body;
            console.log('ALan - call API delete TODO ', ids)
            repo.deleteTodos(ids)
                .then(deletedIds => {
                    res.status(200).send({
                        deletedIds
                    })
                })
                .catch(() => {
                    res.status(500).send({
                        message: 'Internal Error'
                    })
                })
        } catch (e) {
            console.log('caught exception API delete ToDo', e)
            res.status(500).send({
                message: 'Internal Error'
            })
        }
    })
};

module.exports = todoAPI;
