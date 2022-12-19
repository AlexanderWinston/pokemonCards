const { Client } = require('pg');

// where do i get the info to put in the new Client //
const client = new Client('postgres://localhost:5432/pokemonCards')

module.exports = {client}