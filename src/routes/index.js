const login = require('./login');
const register = require('./register');
const product = require('./product');
const pay = require('./pay');
const user = require('./user');

function routes(app) {
  app.use('/login', login);
  app.use('/register', register);
  app.use('/product', product);
  app.use('/pay', pay);
  app.use('/user', user);
}

module.exports = routes;