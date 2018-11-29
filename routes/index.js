const eventsRoutes = require('./events_routes');
module.exports = function(app, db) {
  eventsRoutes(app, db);
  // Other route groups could go here, in the future
};