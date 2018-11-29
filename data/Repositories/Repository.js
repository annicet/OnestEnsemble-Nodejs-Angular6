var Events = require('../../Models/model');

class Repository {


    constructor(tableName) {
        this.tableName = tableName;
    }

    findAll() {

        
        let results = [];
        switch(this.tableName)
        {
            case("Events"):
               return Events.findAll();
        }
        
        
    }


}

module.exports = Repository
