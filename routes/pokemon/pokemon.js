const express = require('express');
const router  = express.Router();
const axios = require('axios');

const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon';

/* GET route to pokemon list */
router.get('/', (req, res, next) => {
  axios
  .get(`${pokeApiUrl}?limit=1000`)
  .then(allPokemon => {
    console.log({ pokemon: allPokemon.data.results });
    res.render('pokemon/pokemon-list', { allPokemon: allPokemon.data.results });
  })
  .catch(err => next(err));
});

router.get('/details/:pokeId', (req, res, next) => {
  axios
  .get(`${pokeApiUrl}/${req.params.pokeId + 1}`)
  .then(pokemon => {
    console.log({ pokemon });
    res.render('pokemon/pokemon-details', { pokemon: pokemon.data });
  })
  .catch(err => next(err));
});

module.exports = router;
