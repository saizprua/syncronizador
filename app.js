var mysql = require('mysql'),
    fs = require('fs'),
    jwt = require('jsonwebtoken'),
    config = require('./config'),
    oracledb = require('oracledb');

//var cert = fs.readFileSync('public.pem');  // get public key
//
//var decodeMysql = jwt.verify(config.mysql, cert,{ algorithms: ['RS256'] } );
//
//var connection = mysql.createConnection(decodeMysql);
//
//    connection.connect();
//
//    connection.query('SELECT * FROM test_conection', function(err, rows, fields) {
//        if (err) throw err;
//        console.log(rows);
//    });
//
//connection.end();

oracledb.getConnection(
    {	
        user          : "system",
        password      : "prueba2015",
        connectString : "PRUEBA"
    },
    function(err, connection)
    {
        if (err) { console.error(err.message); return; }

        console.log(connection);

        //connection.execute(
        //    "SELECT department_id, department_name FROM departments WHERE department_id = :did",
        //    [180],  // bind value for :did
        //    function(err, result)
        //    {
        //        if (err) { console.error(err.message); return; }
        //        console.log(result.rows);
        //    });
    });
