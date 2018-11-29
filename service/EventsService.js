var Repository = require('../data/Repositories/Repository');
var EventsDTO = require('../Models/DTOS/Events');
console.log('je suis la');
class EventsService {

    constructor(){
        this.eventRepository = new Repository("Events");
    }
     async findAllEvents() {
        
        let eventsList = [];
        
        await this.eventRepository.findAll().then(results => {
            results.map(e =>
                { 
                    console.log(e.dataValues);
                    let event = new EventsDTO(e);
                    eventsList.push(event);
                });
            console.log('voici la taille de mon eventlist' + eventsList.length);
            
        });  
    
        return eventsList;
    }
}

module.exports = EventsService