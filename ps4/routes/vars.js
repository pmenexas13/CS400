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

            const poke1 = result.chain.species.name;

            const poke2 = result.chain.evolves_to[0].species.name;

            const poke3 = result.chain.evolves_to[0].evolves_to[0].species.name;

            res.render('vars',
                {
                    title: 'The evolution chain of ' + `${poke1}`,
                    evol1: poke1,
                    evol2: poke2,
                    evol3: poke3,
                }
            )
        })
    });

module.exports = router;