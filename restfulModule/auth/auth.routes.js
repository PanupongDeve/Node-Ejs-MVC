const authController = require('./auth.controller');

module.exports = (app) => {
    app.post('/api/login', authController.login);
    app.post('/api/register', authController.register);
}