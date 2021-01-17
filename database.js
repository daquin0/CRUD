const mysql = require('mysql');
const db= mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'libreriaCliente',
    port:'3306',
});

module.exports = db;