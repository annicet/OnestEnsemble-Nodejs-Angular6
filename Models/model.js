const Connection = require('../data/utils/DBConnexion');
const Sequelize = require('sequelize');
const connection = new Connection().getInstance();
const sequelize = connection.sequelize;
const Events =  sequelize.define('Events', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    name: {
        type:Sequelize.STRING
    },
    Description: {
        type: Sequelize.STRING
    },
    imageUrl: {
        type: Sequelize.STRING
    }
},
{
    timestamps: false
}


);

module.exports = Events