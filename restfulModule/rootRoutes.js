const catsRotes = require('./cats/cats.routes');
const authRoutes = require('./auth/auth.routes');

module.exports = (app) => {
    catsRotes(app);
    authRoutes(app);
}