/**
 * The Index of Routes
 */

module.exports = function (app) {

  // The boner route
  app.use('/users', require('./routes/users'));

  // The boner route
  app.use('/alerts', require('./routes/alerts'));

  // The signup route
  app.use('/signup', require('./routes/signup'));
}
