const eventsController = require('../Controllers/API/EventsControllers');

module.exports = function(app, db) {

    app.get('/events', (req, res) => {
        // You'll create your note here.
        eventsController.getAllEvents(req,res);
      });
};