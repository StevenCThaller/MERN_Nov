const controller = require('../controllers/controllers');

module.exports = app => {
    // C
    app.post('/api/users', controller.createUser);
    // R
    app.get('/api/users', controller.allUsers);
    app.get('/api/users/:id', controller.oneUser);
    // U
    app.patch('/api/users/:id', controller.updateUser);
    // D
    app.delete('/api/users/:id', controller.deleteUser);
}