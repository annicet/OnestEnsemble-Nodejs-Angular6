var express = require('express');
var app = express();

var EventsService = require('../../service/EventsService');

var eventService = new EventsService();


getAllEvents = async function (req, res) {
    
    return res.send(res.json(await eventService.findAllEvents() ));
}

module.exports = {getAllEvents}