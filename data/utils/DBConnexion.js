const Sequelize = require('sequelize');


 class Connection {

    constructor(){
        this.sequelize = new Sequelize('postgres://dev:dev@localhost:5432/OnEstEnsemble');
        this.sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
            
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

    }
    
}

class Singleton {

    constructor() {
        if(!Singleton.instance)
            Singleton.instance = new Connection();
        else
            console.log('already Connected to Data Base');
    }

    getInstance() {
        return Singleton.instance;
    }
}




module.exports = Singleton
        



