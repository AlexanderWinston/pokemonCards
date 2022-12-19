const { client } = require('./index')
const dataCopy = require ('./pokedex')


async function testDB() {
    try {
        //connect client to the db
        client.connect();

        //queries are promises, so we can await them
        const result = await client.query(`SELECT * FROM users`);

        console.log(result);
    } catch (error) {
        console.error(error);
    } finally {
        client.end();
    }
}

testDB();