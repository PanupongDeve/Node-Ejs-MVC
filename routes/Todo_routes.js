const TodosController = require('@controllers/todos_controller');
const middleware = require('@middlewares/todoMiddleware');

module.exports = (app) => {
    app.get('/', middleware.ShowHello, TodosController.index);
    app.get('/todos', TodosController.show);
    app.get('/todos/:id',TodosController.showById);
    app.post('/todos', TodosController.create);
    app.patch('/todos/:id', TodosController.updateById);
    app.delete('/todos/:id', TodosController.deleteById);
};