const repo = require('./repository');

let index = 0

const randomId = () => {
  index++;

  return index.toString();
}

const todoAPI = (app) => {
    app.get('/todos', async (req, res) => {
        try {
            const data = [
                {
                    id: randomId(),
                    name: 'Learning Redux Toolkit',
                    done: false,
                },{
                    id: randomId(),
                    name: 'Presenting',
                    done: false,
                }
            ];
    
            const todoInDb = await repo.getList();
            console.log('Alan - todoInDb ', JSON.stringify(todoInDb));
    
            res.status(200).send(data);
        } catch (e) {
            console.log('the API get list of todos - catch an exception ', e)
            res.status(500).send({
                message: `exception ${e}`
            })
        }
    })

    app.post('/todos/create', async (req, res) => {
        const {data} = req.body;
        const result = await repo.addTodo(data);

        console.log('Alan - create TODO - result ', JSON.stringify(result));

        res.status(200).send({
            success: true
        });
    });
};

module.exports = todoAPI;
