const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'user',
    password: '2580',
    database: 'my_db',
});

conn.connect((err)=>{
    if(err) console.log(err);
    else console.log('Connected to the database');
});

module.exports = conn;