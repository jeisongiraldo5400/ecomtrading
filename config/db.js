const { Pool  } = require('pg');


//CREDENTIALS FOR POSTGRES
const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'ecomtrading',
    password: '1081417919',
    port: '5432',
});

module.exports = pool;