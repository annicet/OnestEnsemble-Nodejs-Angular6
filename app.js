// Chargement de la bibliothèque express
var express = require('express');
var app = express();

// Chargement de la bibliothèque body parser
var bodyParser = require('body-parser')
app.use(bodyParser.json());
require('./routes') (app, {}) ;


//Création de la route pour les évènements

/* pp.get('/events',function(req,res){

    //Mockage de la liste d'évènements
        let eventMocks = [
            {
                id: 1,
                name: 'Souper Noel: On Est Ensemble',
                Description : ' souper de noël pour les personnes du quartier',
                imageUrl:'imageUrl'
            },

            {
                id: 1,
                name: 'Souper Noel: On Est Ensemble',
                Description : ' souper de noël pour les personnes du quartier',
                imageUrl:'imageUrl'

            }
        ];
    
    //Liste d'évènements
        let  eventsList = [];
        eventsList=eventMocks;

    res.send(res.json(eventsList),res.status(200).send('OK'));

}); */

//Persistence des données

//const Connection = require('./data/utils/DBConnexion');

//const connection = new Connection().getInstance();

var apiEvents = require('./Controllers/API/EventsControllers');




/* const { Client } = require('pg')
const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'dev',
    password: 'dev',
    database: 'OnEstEnsemble'
  });

client.connect((err) => {
if (err!=null)
    console.log(err.message);
}); */


/* const query = client.query(
  'insert into public."Events" values (5,\'test2\',\'test2\',\'test2\')',(err, res) => {

    if(err==null)
        console.log('Insertion réussie');
    else
        console.log('Erreur lors de la connexion à la BD : ' + err.message);

  }); */





/* Création d'une route. Chaque route correspondra à un URL différent. 
   Ici cela correspond à http://mon_adresse/
   Si nous avions  app.get('/name', function (req, res) {
   La route serait http://mon_adresse/name 
*/
/* app.get('/', function (req, res) {
  /*
     Fonction à déclencher lorsque la route est sollicitée. 
     Le paramètre req correspond à la requête faite sur la route et res à la réponse qui lui sera faite.
     Ici on renvoie la chaîne de caractère Hello world!
  */
/*   res.send('Hello World!');
});  */

// Création de la route /hello
/* app.get('/hello', function(req, res) {
    // Récupération du paramètre "name"
    var name = req.param('name');
    // Création et envoi de la réponse
    res.send('GET: Hello ' + name);
}); */

// Création d'une route post
/* app.post('/name', function(req, res) {
    //Récupération de la propriété name dans le body
    var name = req.body.name;
    res.send('POST: hello ' + name);
}); */

// On écoute le port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});