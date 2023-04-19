const repo = require('./repository');

let index = 0

const randomId = () => {
  index++;

  return index.toString();
}

const todoAPI = (app) => {
    app.get('/todos', async (req, res) => {

        const data = [
            {
                id: randomId(),
                name: 'Learning Redux Toolkit',
                isFinished: false,
            },{
                id: randomId(),
                name: 'Presenting',
                isFinished: false,
            }
        ];

        const todoInDb = await repo.getList();
        console.log('Alan - todoInDb ', JSON.stringify(todoInDb));

        res.status(200).send({
            data
        });
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
