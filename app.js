var mysql = require('mysql'),
    fs = require('fs'),
    jwt = require('jsonwebtoken'),
    config = require('./config');

var cert = fs.readFileSync('public.pem');  // get public key

var decodeMysql = jwt.verify(config.mysql, cert,{ algorithms: ['RS256'] } );

var connection = mysql.createConnection(decodeMysql);

    connection.connect();

    connection.query('SELECT * FROM test_conection', function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
    });

connection.end();