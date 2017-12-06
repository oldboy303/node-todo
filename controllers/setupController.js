var Todos = require('../models/todoModel');

module.exports = function(app) {

    app.get('/api/setupTodos', function(req, res) {

        // seed Db
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed cat',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn to code!',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, function(err, results) {
             res.send(results);
        });
    });
};