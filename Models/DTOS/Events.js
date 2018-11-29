var {Events} = require('../model')

class EventsDTO {

    constructor(eventModel){

        if(!arguments.length){
            this.id = '';
            this.name = '';
            this.Description = '';
            this.imageUrl = '';
        }
        else {
            this.id = eventModel.id;
            this.name = eventModel.name;
            this.Description = eventModel.Description;
            this.imageUrl = eventModel.imageUrl;
        }

    }
}

module.exports = EventsDTO