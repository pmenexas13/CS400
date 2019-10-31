const express = require('express');
const router = express.Router();
const request = require('request');

router.route('/')
    .get(function (req, res, next) {
        const options = {
            method: 'GET',
            url: 'http://pokeapi.co/api/v2/evolution-chain/2'
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            const result = JSON.parse(body);

            res.render('vars',
                {
                    title: 'The evolution chain of ',
                    evol1: result.chain.species.name,
                    evol2: result.chain.evolves_to[0].species.name,
                    evol3: result.chain.evolves_to[0].evolves_to[0].species.name,
                }
            )
        })
    });

module.exports = router;