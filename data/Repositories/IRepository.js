var Events = require('../../Models/model');

class Irepository
{
    constructor(){

    }
      
    findAllEvents(){
        Events.findAll().then(events =>{
            events.map(e => console.log(e.dataValues))
        });
    }
}

module.exports = Irepository


