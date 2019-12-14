const express = require('express');
const router = express.Router();
const request = require('request');
const db = require('../mongo/mongo');

db.connect((err,client) => {
    if (err){
        console.log(`ERR:`);
    }
    else{
        console.log(`CONNECTED`);
    }
});

router.route('/')
    .post(function (req, res, next) {

        const pokemon = req.body.pokemonName;

        console.log(pokemon)

        let evolId;
        if (pokemon === ('Charmander')){
            evolId = '2';
        }
        else if (pokemon === ('Bulbasaur')){
            evolId = '1';
        }
        else if (pokemon === ('Squirtle')){
            evolId = '3';
        }
        else if (pokemon === ('Pichu')){
            evolId = '10';
        }

        //connect to db
        let mongo = db.getDB();

        let in_database;

        mongo.collection('pokedex').findOne({name: pokemon}, (err, user) => {
            if (err) {
                // handle error
                console.log(`Error occured`);
            }
            if (user) {

                in_database = true;

                let poke_details = (mongo.collection('pokedex').findOne({name: pokemon}, {evol1:1, evol2:1, evol3:1}));

                console.log(poke_details)

                poke_details.then(function(result) {

                    res.json(
                        {
                            title: 'CS400 Problem Set 6',
                            name: pokemon,
                            evol1: result.evol1.charAt(0).toUpperCase() + result.evol1.slice(1),
                            evol2: result.evol2.charAt(0).toUpperCase() + result.evol2.slice(1),
                            evol3: result.evol3.charAt(0).toUpperCase() + result.evol3.slice(1),
                            cache: in_database,
                        }
                    )
                })
            } else {
                // there is no user
                in_database = false;

                const options = {
                    method: 'GET',
                    url: 'http://pokeapi.co/api/v2/evolution-chain/' + evolId
                };
                request(options, function (error, response, body) {
                    if (error) throw new Error(error);

                    const result = JSON.parse(body);

                    mongo.collection('pokedex').insertOne({name: pokemon,
                                                                evol1: result.chain.species.name,
                                                                evol2: result.chain.evolves_to[0].species.name,
                                                                evol3: result.chain.evolves_to[0].evolves_to[0].species.name,
                                                                }, function (err,r){
                    });

                    res.json(
                        {
                            title: 'CS400 Problem Set 6',
                            name: pokemon,
                            evol1: result.chain.species.name.charAt(0).toUpperCase() + result.chain.species.name.slice(1),
                            evol2: result.chain.evolves_to[0].species.name.charAt(0).toUpperCase() + result.chain.evolves_to[0].species.name.slice(1),
                            evol3: result.chain.evolves_to[0].evolves_to[0].species.name.charAt(0).toUpperCase() + result.chain.evolves_to[0].evolves_to[0].species.name.slice(1),
                            cache: in_database,
                        }
                    )
                })
            }
        })
    })

router.route('/')
    .get(function (req, res, next) {res.render('inputForm', {title: "CS400 Problem Set 6",})});

module.exports = router;
