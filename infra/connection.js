const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'victoria102',
    database: 'game_of_thrones'
});

module.exports = conexao;